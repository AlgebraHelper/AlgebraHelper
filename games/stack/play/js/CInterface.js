function CInterface(iPlayerTeam, iOpponentTeam) {
    var _pStartPosAudio;
    var _pStartPosExit;
    var _pStartPosRestart;
    var _pStartPosFullscreen;

    var _oButExit;
    var _oButRestart;
    var _oButStart;
    var _oHitArea;
    var _oHelpPanel;
    var _oAudioToggle;
    var _oLosePanel;
    var _oWinPanel;
    var _oScoreBoard;
    var _oController;
    var _oPerfectText;
    var _oPause;
    var _oLevelBoard;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;

    this._init = function () {

        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - (oSprite.height / 2) - 15, y: (oSprite.height / 2) + 15};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        var oSprite = s_oSpriteLibrary.getSprite('but_restart_small');
        _pStartPosRestart = {x: _pStartPosExit.x - oSprite.height - 15, y: _pStartPosExit.y};
        _oButRestart = new CGfxButton(_pStartPosRestart.x, _pStartPosRestart.y, oSprite, s_oStage);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onRestart, this);

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: _pStartPosRestart.x - oSprite.height - 15, y: _pStartPosExit.y};
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        } else {
            _pStartPosAudio = _pStartPosRestart;
        }

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (ENABLE_FULLSCREEN === false) {
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && inIframe()=== false ) {
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen")
            _pStartPosFullscreen = {x: _pStartPosAudio.x - oSprite.width / 2 - 15, y: _pStartPosExit.y};
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreen, this);
        }

        _oScoreBoard = new CScoreBoard(s_oStage);

        _oPerfectText = new CTextPerfect(s_oStage);

        this.createButStart();

        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    };

    this.createButStart = function () {
        _oHitArea = new createjs.Shape();
        _oHitArea.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oHitArea.on("click", function () {});
        s_oStage.addChild(_oHitArea);
        var oSpriteButStart = s_oSpriteLibrary.getSprite("but_start");
        _oButStart = new CGfxButton(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF, oSpriteButStart, s_oStage);
        _oButStart.addEventListener(ON_MOUSE_UP, this._onMouseUpStart, this);
        _oButStart.pulseAnimation();
    };

    this.refreshButtonPos = function (iNewX, iNewY) {
        _oButExit.setPosition(_pStartPosExit.x - iNewX, iNewY + _pStartPosExit.y);
        _oButRestart.setPosition(_pStartPosRestart.x - iNewX, iNewY + _pStartPosRestart.y);
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX, iNewY + _pStartPosAudio.y);
        }

        var oPosScore = _oScoreBoard.getStartPosScore();
        _oScoreBoard.setPosScore(oPosScore.x + iNewX, oPosScore.y + iNewY);

        if (_fRequestFullScreen && inIframe()=== false ) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x - iNewX, _pStartPosFullscreen.y + iNewY);
        }

        _oPerfectText.updatePoints(iNewX, iNewY);
    };

    this._onMouseUpStart = function () {
        _oHitArea.removeAllEventListeners();
        s_oStage.removeChild(_oHitArea);
        s_oGame._onStart();
        _oButStart.unload();
        _oButStart = null;
    };

    this.unload = function () {
        _oButExit.unload();
        _oButExit = null;


        _oButRestart.unload();
        _oButRestart = null;

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
		
		if (_fRequestFullScreen && inIframe()=== false ) {
            _oButFullscreen.unload();
        }
		
        s_oInterface = null;
    };

    this.createHelpPanel = function () {
        _oHelpPanel = new CHelpPanel(0, 0, s_oSpriteLibrary.getSprite('msg_box'));
    };

    this.createLosePanel = function (iGoalPlayer, iOpponentPlayer) {
        _oLosePanel = new CLosePanel(s_oSpriteLibrary.getSprite("bg_congratulations"));
        _oLosePanel.show(iGoalPlayer, iOpponentPlayer, _iPlayerTeam, _iOpponentTeam);
    };

    this.createWinPanel = function (iScore) {
        _oWinPanel = new CWinPanel(s_oSpriteLibrary.getSprite("msg_box"));
        _oWinPanel.show(iScore);
    };

    this.unloadHelpPanel = function () {
        if (_oHelpPanel) {
            _oHelpPanel.unload();
            _oHelpPanel = null;
        }
    };

    this.createPauseInterface = function () {
        _oPause = new CPause();
    };

    this.refreshScoreText = function (iScore) {
        _oScoreBoard.refreshTextScore(iScore);
    };

    this.refreshBestScore = function (iScore, bAnim) {
        _oScoreBoard.refreshTextBestScore(iScore, bAnim);
    };

    this.animPerfectText = function () {
        _oPerfectText.animText();
    };

    this.refreshLevelText = function (iLevel) {
        _oLevelBoard.refreshTextLevel(iLevel);
    };

    this.unloadPause = function () {
        _oPause.unload();
        _oPause = null;
    };

    this.subEffect = function (iScore) {
        _oScoreBoard.effectSubtractScore(iScore);
    };

    this._onFullscreen = function () {
        if (s_bFullscreen) {
            _fCancelFullScreen.call(window.document);
            s_bFullscreen = false;
        } else {
            _fRequestFullScreen.call(window.document.documentElement);
            s_bFullscreen = true;
        }

        sizeHandler();
    };


    this._onAudioToggle = function () {
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this._onExit = function () {
        var _oAreYouSure = new CAreYouSurePanel(s_oStage);
        _oAreYouSure.show();
    };

    this.blockCommand = function (bVal) {
        if (s_bMobile)
            _oController.block(bVal);
    };

    this._onRestart = function () {
        s_oGame.restartGame();
    };


    s_oInterface = this;

    this._init(iPlayerTeam, iOpponentTeam);

    return this;
}

var s_oInterface = null;