const foregroundColor = '#f8f8f2'
const backgroundColor = '#283632'
const black = '#2C464E'
const red = '#F56241'
const green = '#50FAA8'
const yellow = '#FFE587'
const blue = '#2D92BD'
const magenta = '#DB8FFF'
const cyan = '#00EBDD'
const gray = '#86997E'
const brightBlack = '#4F6268'
const brightWhite = '#FFF8E5'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: black,
    cursorColor: brightBlack,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      gray,
      brightBlack,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      brightWhite
    },
    css: `
			${config.css || ''}
			.tabs_list .tab_tab.tab_active .tab_text  {
				background: ${backgroundColor};
            }
            .tab_active {
                border-bottom : 2px solid #50FAA8
            }
			.tab_active:before {
				border-color: #2C464E;
			}
		`
  })
}