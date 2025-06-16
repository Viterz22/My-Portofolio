tailwind.config = {
        darkMode : 'class',
        theme : {
            extend: {
                spacing: {
                    13: '3.25rem',
                }
                fontFamily: {
                    inter: ['inter'],
                }
                colors: {
                    wpu: '#bada55',
                    kopi: '#coffee',
                }
            }
        }
    };

document.getElementById("toggle").onclick.checked = function(){
    html.classList.add ('dark') : html.classList.remove('dark');

};


