const panels = document.querySelectorAll('.panel');
const panels2 = document.querySelectorAll('.panel2');

//***********************************************
// funco para abri e fechar somente tem um painelainel 1
//**********************************************/

/*
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}
*/
//***********************************************
// fim funco para abri e fechar somente tem um painelainel 1
//**********************************************/

/* click painel 1 */
function painel1_click(npar) {
  removeActiveClasses1();
  panels[npar].classList.add('active');
  // alert('cliclu aqui   ' + npar);
}

/* click painel 2 */
function removeActiveClasses1() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}
