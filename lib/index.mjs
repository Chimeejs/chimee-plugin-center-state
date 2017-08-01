
/**
 * chimee-plugin-center-state v0.0.4
 * (c) 2017 yandeqiang
 * Released under ISC
 */

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

import popupFactory from 'chimee-plugin-popup';

__$styleInject("chimee-center-state{position:absolute}@keyframes a{0%{opacity:1}to{transform:scale(2);opacity:0}}chimee-center-state-correct,chimee-center-state-error,chimee-center-state-loading,chimee-center-state-tip{display:none}chimee-center-state.correct chimee-center-state-correct,chimee-center-state.error chimee-center-state-error,chimee-center-state.loading chimee-center-state-loading,chimee-center-state.tip chimee-center-state-tip{display:inline-block}chimee-center-state-correct{width:104px;height:104px}chimee-center-state-tip{position:absolute;left:26px;bottom:26px;width:52px;height:52px;border-radius:26px;background:rgba(0,0,0,.5);animation:a .5s linear 1 normal forwards}chimee-center-state.play span{background-image:url(\"data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQycHgiIGhlaWdodD0iNTFweCIgdmlld0JveD0iMCAwIDQyIDUxIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4xICgzOTAxMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZSIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMDAwMDAwLCAyNS41MDAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjEuMDAwMDAwLCAtMjUuNTAwMDAwKSAiIHBvaW50cz0iMjEgNSA0NiA0NiAtNCA0NiI+PC9wb2x5Z29uPgogICAgPC9nPgo8L3N2Zz4=\")}chimee-center-state.pause span{background-image:url(\"data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjUwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDUwIDUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4xICgzOTAxMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSI1MCI+PC9yZWN0PgogICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRkZGRkYiIHg9IjMwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iNTAiPjwvcmVjdD4KICAgIDwvZz4KPC9zdmc+\")}chimee-center-state.back span{background-image:url(\"data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjczMXB4IiBoZWlnaHQ9Ijg4NHB4IiB2aWV3Qm94PSIwIDAgNzMxIDg4NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDQuMSAoNDE0NTUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iNzcxLeWNlee6v++8jOWIt+aWsCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzY1LjUwMDAwMCwgNDQyLjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMzY1LjUwMDAwMCwgLTQ0Mi4wMDAwMDApICIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjZmZmZmZmIj4KICAgICAgICAgICAgPHBhdGggZD0iTTcwNS4xMTg1NTgsNDkyLjQxNDIwMyBDNjkwLjk4OTc2OSw0OTIuNDE0MjAzIDY3OS41MzU5MDMsNTAzLjg2ODA2OSA2NzkuNTM1OTAzLDUxNy45OTY4NTggQzY3OS41MzU5MDMsNjkxLjA2MDQ0OSA1MzguNzM3MTU3LDgzMS44NTkxOTUgMzY1LjY3MzU2Niw4MzEuODU5MTk1IEMxOTIuNjA4OTUyLDgzMS44NTkxOTUgNTEuODEyMjUyLDY5MS4wNjA0NDkgNTEuODEyMjUyLDUxNy45OTY4NTggQzUxLjgxMjI1MiwzNTUuMDM4NDE2IDE3Ni42NTI1MzgsMjIwLjcwNjk2NSAzMzUuNzE0MjMsMjA1LjU3MzI4OSBMMjIzLjYwMDgwMywzMTcuNjg2NzE2IEMyMTMuNjEwMjY1LDMyNy42NzcyNTQgMjEzLjYxMDI2NSwzNDMuODc1MTY4IDIyMy42MDA4MDMsMzUzLjg2NTcwNyBDMjI4LjU5NjU4NCwzNTguODYwNDY1IDIzNS4xNDM2OTcsMzYxLjM1ODM1NSAyNDEuNjkwODEsMzYxLjM1ODM1NSBDMjQ4LjIzNzkyMywzNjEuMzU4MzU1IDI1NC43ODUwMzYsMzU4Ljg2MDQ2NSAyNTkuNzgwODE3LDM1My44NjU3MDcgTDQxNC43MzcwMDUsMTk4LjkwOTUxOSBDNDI0LjcyNzU0MywxODguOTE4OTgxIDQyNC43Mjc1NDMsMTcyLjcyMTA2NyA0MTQuNzM3MDA1LDE2Mi43MzA1MjggTDI1OS43Nzk3OTMsNy43NzQzNDEgQzI0OS43ODgyMzEsLTIuMjE2MTk3IDIzMy41OTEzNDEsLTIuMjE2MTk3IDIyMy42MDA4MDIsNy43NzQzNDEgQzIxMy42MTAyNjQsMTcuNzY0ODc5IDIxMy42MTAyNjQsMzMuOTYyNzkzIDIyMy42MDA4MDIsNDMuOTUzMzMyIEwzMzMuOTkwOTgxLDE1NC4zNDM1MTEgQzI5NS45MDE0NzgsMTU3LjYwMjc0MSAyNTguODgyMzUzLDE2Ni43MzM3MDIgMjIzLjU4MTM1OSwxODEuNjY0NzYzIEMxODAuMTExMzEyLDIwMC4wNTE1MjkgMTQxLjA3NjI3MywyMjYuMzY3ODk0IDEwNy41NjA5NDksMjU5Ljg4MzIxOSBDNzQuMDQ1NjI1LDI5My4zOTg1NDQgNDcuNzI5MjU5LDMzMi40MzI1NTkgMjkuMzQyNDkzLDM3NS45MDM2MjkgQzEwLjMwMTgzNSw0MjAuOTIxOTM5IDAuNjQ2OTQxLDQ2OC43Mjk3ODEgMC42NDY5NDEsNTE3Ljk5NTgzNCBDMC42NDY5NDEsNTY3LjI2MzkzNCAxMC4zMDE4MzUsNjE1LjA2OTczIDI5LjM0MjQ5Myw2NjAuMDg5MDYzIEM0Ny43MjkyNTksNzAzLjU1ODA4NyA3NC4wNDU2MjQsNzQyLjU5NDE0OSAxMDcuNTYwOTQ5LDc3Ni4xMDk0NzMgQzE0MS4wNzYyNzQsODA5LjYyNDc5NyAxODAuMTEwMjg5LDgzNS45NDExNjMgMjIzLjU4MTM1OSw4NTQuMzI2OTA2IEMyNjguNTk5NjY5LDg3My4zNjg1ODggMzE2LjQwNjQ4OCw4ODMuMDIzNDgyIDM2NS42NzM1NjQsODgzLjAyMzQ4MiBDNDE0Ljk0MTY2NCw4ODMuMDIzNDgyIDQ2Mi43NDc0Niw4NzMuMzY4NTg4IDUwNy43NjY3OTMsODU0LjMyNjkwNiBDNTUxLjIzNTgxNyw4MzUuOTQxMTY0IDU5MC4yNzE4NzksODA5LjYyNDc5OCA2MjMuNzg3MjAzLDc3Ni4xMDk0NzMgQzY1Ny4zMDI1MjcsNzQyLjU5NDE0OCA2ODMuNjE4ODkzLDcwMy41NTkxMSA3MDIuMDA0NjM2LDY2MC4wODkwNjMgQzcyMS4wNDYzMTgsNjE1LjA2OTczIDczMC43MDEyMTIsNTY3LjI2MjkxMSA3MzAuNzAxMjEyLDUxNy45OTU4MzQgQzczMC43MDEyMTMsNTAzLjg2ODA2OSA3MTkuMjQ4MzcsNDkyLjQxNDIwMyA3MDUuMTE4NTU4LDQ5Mi40MTQyMDMgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgICAgIDx0ZXh0IGlkPSIxMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIyODgiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZpbGw9IiNmZmZmZmYiPgogICAgICAgICAgICA8dHNwYW4geD0iMjExIiB5PSI2MzQiPjEwPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==\")}chimee-center-state.forward span{background-image:url(\"data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjczMXB4IiBoZWlnaHQ9Ijg4NHB4IiB2aWV3Qm94PSIwIDAgNzMxIDg4NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDQuMSAoNDE0NTUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iNzcxLeWNlee6v++8jOWIt+aWsCIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjZmZmZmZmIj4KICAgICAgICAgICAgPHBhdGggZD0iTTcwNS4xMTg1NTgsNDkyLjQxNDIwMyBDNjkwLjk4OTc2OSw0OTIuNDE0MjAzIDY3OS41MzU5MDMsNTAzLjg2ODA2OSA2NzkuNTM1OTAzLDUxNy45OTY4NTggQzY3OS41MzU5MDMsNjkxLjA2MDQ0OSA1MzguNzM3MTU3LDgzMS44NTkxOTUgMzY1LjY3MzU2Niw4MzEuODU5MTk1IEMxOTIuNjA4OTUyLDgzMS44NTkxOTUgNTEuODEyMjUyLDY5MS4wNjA0NDkgNTEuODEyMjUyLDUxNy45OTY4NTggQzUxLjgxMjI1MiwzNTUuMDM4NDE2IDE3Ni42NTI1MzgsMjIwLjcwNjk2NSAzMzUuNzE0MjMsMjA1LjU3MzI4OSBMMjIzLjYwMDgwMywzMTcuNjg2NzE2IEMyMTMuNjEwMjY1LDMyNy42NzcyNTQgMjEzLjYxMDI2NSwzNDMuODc1MTY4IDIyMy42MDA4MDMsMzUzLjg2NTcwNyBDMjI4LjU5NjU4NCwzNTguODYwNDY1IDIzNS4xNDM2OTcsMzYxLjM1ODM1NSAyNDEuNjkwODEsMzYxLjM1ODM1NSBDMjQ4LjIzNzkyMywzNjEuMzU4MzU1IDI1NC43ODUwMzYsMzU4Ljg2MDQ2NSAyNTkuNzgwODE3LDM1My44NjU3MDcgTDQxNC43MzcwMDUsMTk4LjkwOTUxOSBDNDI0LjcyNzU0MywxODguOTE4OTgxIDQyNC43Mjc1NDMsMTcyLjcyMTA2NyA0MTQuNzM3MDA1LDE2Mi43MzA1MjggTDI1OS43Nzk3OTMsNy43NzQzNDEgQzI0OS43ODgyMzEsLTIuMjE2MTk3IDIzMy41OTEzNDEsLTIuMjE2MTk3IDIyMy42MDA4MDIsNy43NzQzNDEgQzIxMy42MTAyNjQsMTcuNzY0ODc5IDIxMy42MTAyNjQsMzMuOTYyNzkzIDIyMy42MDA4MDIsNDMuOTUzMzMyIEwzMzMuOTkwOTgxLDE1NC4zNDM1MTEgQzI5NS45MDE0NzgsMTU3LjYwMjc0MSAyNTguODgyMzUzLDE2Ni43MzM3MDIgMjIzLjU4MTM1OSwxODEuNjY0NzYzIEMxODAuMTExMzEyLDIwMC4wNTE1MjkgMTQxLjA3NjI3MywyMjYuMzY3ODk0IDEwNy41NjA5NDksMjU5Ljg4MzIxOSBDNzQuMDQ1NjI1LDI5My4zOTg1NDQgNDcuNzI5MjU5LDMzMi40MzI1NTkgMjkuMzQyNDkzLDM3NS45MDM2MjkgQzEwLjMwMTgzNSw0MjAuOTIxOTM5IDAuNjQ2OTQxLDQ2OC43Mjk3ODEgMC42NDY5NDEsNTE3Ljk5NTgzNCBDMC42NDY5NDEsNTY3LjI2MzkzNCAxMC4zMDE4MzUsNjE1LjA2OTczIDI5LjM0MjQ5Myw2NjAuMDg5MDYzIEM0Ny43MjkyNTksNzAzLjU1ODA4NyA3NC4wNDU2MjQsNzQyLjU5NDE0OSAxMDcuNTYwOTQ5LDc3Ni4xMDk0NzMgQzE0MS4wNzYyNzQsODA5LjYyNDc5NyAxODAuMTEwMjg5LDgzNS45NDExNjMgMjIzLjU4MTM1OSw4NTQuMzI2OTA2IEMyNjguNTk5NjY5LDg3My4zNjg1ODggMzE2LjQwNjQ4OCw4ODMuMDIzNDgyIDM2NS42NzM1NjQsODgzLjAyMzQ4MiBDNDE0Ljk0MTY2NCw4ODMuMDIzNDgyIDQ2Mi43NDc0Niw4NzMuMzY4NTg4IDUwNy43NjY3OTMsODU0LjMyNjkwNiBDNTUxLjIzNTgxNyw4MzUuOTQxMTY0IDU5MC4yNzE4NzksODA5LjYyNDc5OCA2MjMuNzg3MjAzLDc3Ni4xMDk0NzMgQzY1Ny4zMDI1MjcsNzQyLjU5NDE0OCA2ODMuNjE4ODkzLDcwMy41NTkxMSA3MDIuMDA0NjM2LDY2MC4wODkwNjMgQzcyMS4wNDYzMTgsNjE1LjA2OTczIDczMC43MDEyMTIsNTY3LjI2MjkxMSA3MzAuNzAxMjEyLDUxNy45OTU4MzQgQzczMC43MDEyMTMsNTAzLjg2ODA2OSA3MTkuMjQ4MzcsNDkyLjQxNDIwMyA3MDUuMTE4NTU4LDQ5Mi40MTQyMDMgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgICAgIDx0ZXh0IGlkPSIxMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIyODgiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZpbGw9IiNmZmZmZmYiPgogICAgICAgICAgICA8dHNwYW4geD0iMjExIiB5PSI2MzQiPjEwPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==\")}chimee-center-state.volume-high span{background-image:url(\"data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEwN3B4IiBoZWlnaHQ9IjEwMXB4IiB2aWV3Qm94PSIwIDAgMTA3IDEwMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDQuMSAoNDE0NTUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAwLjAwMDAwMCkiIHN0cm9rZT0iI0ZGRkZGRiI+CiAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNmZmZmZmYiIHBvaW50cz0iMC40MDczMTY0NDYgMzAgMjcuNjUwMDc3OSAzMCA1Ny4zNzM3MjkzIDIuODQyMTcwOTRlLTE0IDU4LjQ3NjI1MzIgMTAwIDI3LjY1MDA3NzkgNzAgMC40MDczMTY0NDYgNzAiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBkPSJNNjMuNjExNjUwNSw1LjAwOTc1MjM5IEM2OS43MDc5Mjc1LDQuNzg2MTIwNTcgNzYuNjU0OTI1MSw4LjQwODU2MTQ2IDg0LjQ1MjY0MzEsMTUuODc3MDc1IEM5Ni4xNDkyMjAxLDI3LjA3OTg0NTQgMTAwLjk3MDg3NCwzNC43OTc1MTI1IDEwMC45NzA4NzQsNTAuOTYwODU1OCBDMTAwLjk3MDg3NCw2Ny4xMjQxOTkxIDk2LjI4ODcyMjUsNzMuNzkwNzQ4MiA4NC40NTI2NDMxLDgzLjgzMDY3MjQgQzc2LjU2MTkyMzQsOTAuNTIzOTU1MiA2OS42MTQ5MjU5LDk0LjAzMjA2NDQgNjMuNjExNjUwNSw5NC4zNTUiIGlkPSLlpJbnjq8iIHN0cm9rZS13aWR0aD0iMTAiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNNjUuODUwNTY5OSwyOS40OTI5MTk1IEM2OC41MzY5NDM0LDI5LjM5MzExNjkgNzEuNTk4MTkzOCwzMS4wMDk3NDE2IDc1LjAzNDMyMSwzNC4zNDI3OTM0IEM4MC4xODg1MTE4LDM5LjM0MjM3MTIgODIuMzEzMjEyMyw0Mi43ODY2MTU0IDgyLjMxMzIxMjMsNTAgQzgyLjMxMzIxMjMsNTcuMjEzMzg0NiA4MC4yNDk5ODQ3LDYwLjE4ODUzNTQgNzUuMDM0MzIxLDY0LjY2OTE1NzYgQzcxLjU1NzIxMTksNjcuNjU2MjM5IDY4LjQ5NTk2MTUsNjkuMjIxODM5NyA2NS44NTA1Njk5LDY5LjM2NTk1OTUiIGlkPSLlhoXnjq8iIHN0cm9rZS13aWR0aD0iMTAiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+\")}chimee-center-state.volume-low span{background-image:url(\"data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9Ijg5cHgiIGhlaWdodD0iMTAxcHgiIHZpZXdCb3g9IjAgMCA4OSAxMDEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ0LjEgKDQxNDU1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMC4wMDAwMDApIiBzdHJva2U9IiNGRkZGRkYiPgogICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjZmZmZmZmIiBwb2ludHM9IjAuNDA3MzE2NDQ2IDMwIDI3LjY1MDA3NzkgMzAgNTcuMzczNzI5MyAyLjg0MjE3MDk0ZS0xNCA1OC40NzYyNTMyIDEwMCAyNy42NTAwNzc5IDcwIDAuNDA3MzE2NDQ2IDcwIj48L3BvbHlnb24+CiAgICAgICAgPHBhdGggZD0iTTY1Ljg1MDU2OTksMjkuNDkyOTE5NSBDNjguNTM2OTQzNCwyOS4zOTMxMTY5IDcxLjU5ODE5MzgsMzEuMDA5NzQxNiA3NS4wMzQzMjEsMzQuMzQyNzkzNCBDODAuMTg4NTExOCwzOS4zNDIzNzEyIDgyLjMxMzIxMjMsNDIuNzg2NjE1NCA4Mi4zMTMyMTIzLDUwIEM4Mi4zMTMyMTIzLDU3LjIxMzM4NDYgODAuMjQ5OTg0Nyw2MC4xODg1MzU0IDc1LjAzNDMyMSw2NC42NjkxNTc2IEM3MS41NTcyMTE5LDY3LjY1NjIzOSA2OC40OTU5NjE1LDY5LjIyMTgzOTcgNjUuODUwNTY5OSw2OS4zNjU5NTk1IiBpZD0i5YaF546vIiBzdHJva2Utd2lkdGg9IjEwIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==\")}chimee-center-state-tip span{display:inline-block;width:24px;height:24px;margin:14px}chimee-center-state-loading,chimee-center-state-tip span{background-origin:content-box;background-size:auto 100%;background-repeat:no-repeat;background-position:50%}chimee-center-state-loading{width:52px;height:52px;padding:26px;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTIwcHgnIGhlaWdodD0nMTIwcHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLWRlZmF1bHQiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSgwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nLTFzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSgzMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49Jy0wLjkxNjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49Jy0wLjgzMzMzMzMzMzMzMzMzMzRzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49Jy0wLjc1cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ3JyB5PSc0MCcgd2lkdGg9JzYnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMTIwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nLTAuNjY2NjY2NjY2NjY2NjY2NnMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0NycgeT0nNDAnIHdpZHRoPSc2JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49Jy0wLjU4MzMzMzMzMzMzMzMzMzRzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPSctMC41cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ3JyB5PSc0MCcgd2lkdGg9JzYnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMjEwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nLTAuNDE2NjY2NjY2NjY2NjY2N3MnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0NycgeT0nNDAnIHdpZHRoPSc2JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49Jy0wLjMzMzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDcnIHk9JzQwJyB3aWR0aD0nNicgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPSctMC4yNXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0NycgeT0nNDAnIHdpZHRoPSc2JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49Jy0wLjE2NjY2NjY2NjY2NjY2NjY2cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ3JyB5PSc0MCcgd2lkdGg9JzYnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMzMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nLTAuMDgzMzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48L3N2Zz4=\")}chimee-center-state-error{display:none;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:180px;font-size:16px;z-index:1;color:#ffcf00;text-shadow:0 0 3px red;font-weight:100}", undefined);

var clss = 'correct tip play pause back forward volume-high volume-low';
var chimeeCenterState = popupFactory({
  name: 'chimeeCenterState',
  tagName: 'chimee-center-state',
  html: '\n    <chimee-center-state-correct>\n      <chimee-center-state-loading></chimee-center-state-loading>\n      <chimee-center-state-tip>\n        <span></span>\n      </chimee-center-state-tip>\n    </chimee-center-state-correct>\n    <chimee-center-state-error>\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5</chimee-center-state-error>\n  ',
  offset: '50%',
  hide: false,
  create: function create() {},

  penetrate: true,
  operable: false,
  destroy: function destroy() {
    this.clearTimeout();
  },

  events: {
    pause: function pause() {
      this.showTip('pause');
      this.showLoading(false);
    },
    play: function play() {
      this.showTip('play');
    },
    canplay: function canplay() {
      this.playing();
    },
    playing: function playing() {
      this.playing();
    },
    waiting: function waiting() {
      this.waiting();
    },

    // 卡顿(FLV|HLS加载异常待内部特供事件)
    // stalled () {
    //   this.showLoading();
    // },
    timeupdate: function timeupdate() {
      this.clearTimeout();
    },
    keydown: function keydown(e) {

      // controlbar 存在，才会有键盘事件，因此如果 controlbar 组件没有加载时，return
      var hasControlbar = this.$videoConfig.plugin.some(function (item) {
        var name = item.name || item;
        return name === 'chimeeControl';
      });
      if (!hasControlbar) return;

      e.stopPropagation();
      switch (e.keyCode) {
        case 37:
          {
            e.preventDefault();
            !this.live && this.showTip('back');
            break;
          }
        case 39:
          {
            e.preventDefault();
            !this.live && this.showTip('forward');
            break;
          }
        case 38:
          {
            e.preventDefault();
            this.showTip('volume-high');
            break;
          }
        case 40:
          {
            e.preventDefault();
            this.showTip('volume-low');
            break;
          }
      }
    }
  },
  methods: {
    playing: function playing() {
      this.clearTimeout();
      this.showLoading(false);
      this.showError(false);
    },
    waiting: function waiting() {
      var _this = this;

      this.clearTimeout();
      // 加载超过20秒则超时显示异常
      this._timeout = setTimeout(function () {
        return _this.showError();
      }, 3e4);
      !this.paused && this.showLoading();
    },
    clearTimeout: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      if (this._timeout) {
        clearTimeout(this._timeout);
        this._timeout = null;
      }
    }),
    showTip: function showTip(cls) {
      var _this2 = this;

      this.$domWrap.removeClass(clss).addClass('correct tip ' + cls);
      // this.tip = cls;
      setTimeout(function () {
        _this2.$domWrap.removeClass('tip ' + cls);
        // this.tip = undefined;
      }, 500);
    },
    showLoading: function showLoading(status) {
      if (status === false) {
        this.$domWrap.removeClass('loading');
      } else {
        this.$domWrap.addClass('correct loading');
      }
    },
    showError: function showError(status) {
      if (status === false) {
        this.$domWrap.removeClass('error');
      } else {
        this.$domWrap[0].className = '';
        this.$domWrap.addClass('error');
      }
    }
  }
});

export default chimeeCenterState;
