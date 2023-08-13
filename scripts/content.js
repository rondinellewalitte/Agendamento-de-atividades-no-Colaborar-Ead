function formatarData(dataOriginal) {
  const dataSemPrefixoEspacos = dataOriginal.replace("Período: ", "").replace(/\s/g, '');
  const partesData = dataSemPrefixoEspacos.split("-");
  const dataInicioParts = partesData[0].split("/");
  const dataFimParts = partesData[1].split("/");
  const dataFormatadaInicio = `${dataInicioParts[2].padStart(4, '20')}${dataInicioParts[1]}${dataInicioParts[0]}`;
  const dataFormatadaFim = `${dataFimParts[2].padStart(4, '20')}${dataFimParts[1]}${dataFimParts[0]}`;
  return `${dataFormatadaInicio}/${dataFormatadaFim}`;
}


function encodeSpecialCharacters(inputString) {
  const encodedString = inputString
    .replace(/\//g, '%2F')
    .replace(/\?/g, '%3F')
    .replace(/&/g, '%26')
    .replace(/=/g, '%3D');

  return encodedString;
}

function isDashboardPage() {
  return window.location.href.startsWith('https://www.colaboraread.com.br/aluno/timeline/');
}

function start(){
  if (isDashboardPage()) {
    const atividadesElements = document.querySelectorAll('li[class*="atividades"]');
  
  
    atividadesElements.forEach(element => {
      const classNameText = element.querySelector('.timeline-title span span:first-child').textContent.trim();
      const classNameDetailText = element.querySelector('.timeline-heading small').textContent.trim();
      if (classNameDetailText.includes('-')) {
        const textHifen = classNameDetailText.split('-')[1].trim();
        const textFormat= textHifen.replace('-', ' ');
        const classPeriodText = element.querySelector('.timeline-heading small:first-child').textContent.trim();
        const classLinkVideo = element.querySelector('.row.form-group div a');
        
        if (classLinkVideo !== null) {
          const classLinkVideoHref = classLinkVideo.getAttribute('href');
          if (classLinkVideoHref !== null) {
            const url = "www.colaboraread.com.br"+encodeSpecialCharacters(classLinkVideoHref);
            const timelineTitleElement = element.querySelector('.timeline-title');
            const firstSpan = timelineTitleElement.querySelector('span:first-child');
        
            const newScheduleSpan = document.createElement('span');
            newScheduleSpan.innerHTML = `
              <a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=${classNameText+" - "+textFormat}&dates=${formatarData(classPeriodText)}&details=%3Ch2%3ELink+para+aula%3C%2Fh2%3E%3Cp%3EAcessar+a+aula+abaixo%20%3Ca+href%3D%22https%3A%2F%2F${url}%22%3Eaqui%3C%2Fa%3E%3C%2Fp%3E
              " class="btn btn-default float-right btn-atvd-msg-tutor js-bootstrap-tooltip" target="_blank" title="" data-original-title="Criar um evento do Google Agenda">
                <i class="fa fa-calendar" aria-hidden="true"></i> <span>Agendar</span>
              </a>
            `;
            firstSpan.appendChild(newScheduleSpan);
          } else {
            console.log('Video href attribute not found.');
          }
        } else {
          console.log('Video link element not found.');
        }
      }else{
        const classPeriodText = element.querySelector('.timeline-heading small:first-child').textContent.trim();
        const classLinkVideo = element.querySelector('.row.form-group div a');
        
        if (classLinkVideo !== null) {
          const classLinkVideoHref = classLinkVideo.getAttribute('href');
          if (classLinkVideoHref !== null) {
            const url = "www.colaboraread.com.br"+encodeSpecialCharacters(classLinkVideoHref);
            const timelineTitleElement = element.querySelector('.timeline-title');
            const firstSpan = timelineTitleElement.querySelector('span:first-child');
        
            const newScheduleSpan = document.createElement('span');
            newScheduleSpan.innerHTML = `
              <a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=${classNameText+" - "+classNameDetailText}&dates=${formatarData(classPeriodText)}&details=%3Ch2%3ELink+para+aula%3C%2Fh2%3E%3Cp%3EAcessar+a+aula+abaixo%20%3Ca+href%3D%22https%3A%2F%2F${url}%22%3Eaqui%3C%2Fa%3E%3C%2Fp%3E
              " class="btn btn-default float-right btn-atvd-msg-tutor js-bootstrap-tooltip" target="_blank" title="" data-original-title="Criar um evento do Google Agenda">
                <i class="fa fa-calendar" aria-hidden="true"></i> <span>Agendar</span>
              </a>
            `;
            firstSpan.appendChild(newScheduleSpan);
          } else {
            const timelineTitleElement = element.querySelector('.timeline-title');
            const firstSpan = timelineTitleElement.querySelector('span:first-child');
        
            const newScheduleSpan = document.createElement('span');
            newScheduleSpan.innerHTML = `
              <a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=${classNameText+" - "+classNameDetailText}&dates=${formatarData(classPeriodText)}" class="btn btn-default float-right btn-atvd-msg-tutor js-bootstrap-tooltip" target="_blank" title="" data-original-title="Criar um evento do Google Agenda">
                <i class="fa fa-calendar" aria-hidden="true"></i> <span>Agendar</span>
              </a>
            `;
            firstSpan.appendChild(newScheduleSpan);
          }
        } else {
          const timelineTitleElement = element.querySelector('.timeline-title');
          const firstSpan = timelineTitleElement.querySelector('span:first-child');
      
          const newScheduleSpan = document.createElement('span');
          newScheduleSpan.innerHTML = `
            <a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=${classNameText+" - "+classNameDetailText}&dates=${formatarData(classPeriodText)}" class="btn btn-default float-right btn-atvd-msg-tutor js-bootstrap-tooltip" target="_blank" title="" data-original-title="Criar um evento do Google Agenda">
              <i class="fa fa-calendar" aria-hidden="true"></i> <span>Agendar</span>
            </a>
          `;
          firstSpan.appendChild(newScheduleSpan);
        }
      }

    });
  }
}

start();


