@charset 'UTF-8';
.md-editor
{
    display: block;

    border: 1px solid #e0e0e0;
    border-radius: .215rem;
}
.md-editor > .md-header,
.md-editor .md-footer
{
    display: block;

    padding: 6px 4px;

    border-radius: .215rem .215rem 0 0; 
    background: #eee;
}
.md-editor > .md-header
{
    margin: 0;
}
.md-editor > .md-preview
{
    overflow: auto;

    min-height: 8px;
    padding: 10px; 

    border-top: 1px dashed transparent;
    border-bottom: 1px solid transparent;
    border-radius: 0 0 .215rem .215rem;
    background: #fff;
}
.md-editor > textarea
{
    font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-size: 1rem;

    display: block;

    width: 100%;
    margin: 0;
    padding: 10px;

    border: 0;
    border-top: 1px dashed transparent;
    border-bottom: 1px solid transparent;
    border-radius: 0 0 .215rem .215rem; 
    outline: 0;
    background: #fff;
    -webkit-box-shadow: none;
            box-shadow: none;
}
.md-editor > textarea:focus
{
    background: #fff; 
    -webkit-box-shadow: none;
            box-shadow: none;
}
.md-editor.active
{
    border-color: #e0e0e0;
    outline: 0;
}
.md-editor .md-controls
{
    float: right;

    padding: 3px;
}
.md-editor .md-controls .md-control
{
    right: 5px;

    padding: 3px 3px 3px 10px; 

    color: #e0e0e0;
}
.md-editor .md-controls .md-control:hover
{
    color: #757575;
}
.md-editor.md-fullscreen-mode
{
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    padding: 60px 30px 15px;

    border: 0 !important; 
    background: #fff !important;
}
.md-editor.md-fullscreen-mode .md-footer
{
    display: none;
}
.md-editor.md-fullscreen-mode .md-input,
.md-editor.md-fullscreen-mode .md-preview
{
    font-size: 20px !important;
    line-height: 1.6em !important;

    height: 100% !important;
    margin: 0 auto !important;
    padding: 20px !important;

    resize: none !important;

    color: #999;
    border: 0 !important; 
    background: #fff !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
}
.md-editor.md-fullscreen-mode .md-preview
{
    overflow: auto; 

    color: #333;
}
.md-editor.md-fullscreen-mode .md-input:hover,
.md-editor.md-fullscreen-mode .md-input:focus
{
    color: #333;
    background: #fff !important;
}
.md-editor.md-fullscreen-mode .md-header
{
    position: fixed;
    top: 20px; 

    width: 100%;

    text-align: center;

    background: none;
}
.md-editor.md-fullscreen-mode .btn-group
{
    float: none;
}
.md-editor.md-fullscreen-mode .btn
{
    color: #b3b3b3; 
    border: 0;
    background: none;
}
.md-editor.md-fullscreen-mode .btn:hover,
.md-editor.md-fullscreen-mode .btn:focus,
.md-editor.md-fullscreen-mode .btn.active,
.md-editor.md-fullscreen-mode .btn:active
{
    color: #333; 
    -webkit-box-shadow: none;
            box-shadow: none;
}
.md-editor.md-fullscreen-mode .md-fullscreen-controls
{
    position: absolute;
    z-index: 1002;
    top: 20px;
    right: 20px;

    display: block; 

    text-align: right;
}
.md-editor.md-fullscreen-mode .md-fullscreen-controls a
{
    clear: right;

    width: 30px;
    height: 30px;
    margin: 10px;

    text-align: center; 

    color: #b3b3b3;
}
.md-editor.md-fullscreen-mode .md-fullscreen-controls a:hover
{
    text-decoration: none; 

    color: #333;
}
.md-editor.md-fullscreen-mode .md-editor
{
    position: relative; 

    height: 100% !important;
}
.md-editor .md-fullscreen-controls
{
    display: none;
}

.md-nooverflow
{
    position: fixed;

    overflow: hidden;

    width: 100%;
}

.md-editor .btn-toolbar .btn-group
{
    position: relative;

    margin-left: 20px;

    -webkit-box-shadow: none;
            box-shadow: none;
}
.md-editor .btn-toolbar .btn-group:first-child
{
    margin-left: 0;
}
.md-editor .btn-toolbar .btn-group:first-child:after
{
    display: none;
}
.md-editor .btn-toolbar .btn-group:after
{
    position: absolute;
    top: 2px;
    left: -17px;

    width: 2px;
    height: 30px;
    margin: 0 5px;

    content: '';

    background: #e0e0e0;
}

.md-editor .btn-toolbar .btn-group .btn-default
{
    color: #9e9e9e;
    border: none;
    background-color: transparent;
    background-image: none;
    -webkit-box-shadow: none;
            box-shadow: none;
}
.md-editor .btn-toolbar .btn-group .btn-default:hover
{
    color: #424242;
    border: none;
    background-color: transparent;
    background-image: none;
    -webkit-box-shadow: none;
            box-shadow: none;
}
.md-editor .btn-toolbar .btn-group .btn-default.active,
.md-editor .btn-toolbar .btn-group .btn-default:active
{
    color: #424242;
    border: none;
    background-color: transparent;
    background-image: none;
    -webkit-box-shadow: none;
            box-shadow: none;
}

.md-footer .icon-ok
{
    font-family: 'Material-Design-Iconic-Font';
}
.md-footer .icon-ok:before
{
    content: '';
}
