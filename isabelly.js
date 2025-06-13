function expandItem(element) {
            // Remove a classe 'expanded' de qualquer item que já a tenha
            const currentExpanded = document.querySelector('.gallery-item.expanded');
            if (currentExpanded && currentExpanded !== element) {
                currentExpanded.classList.remove('expanded');
            }
            // Adiciona/Remove a classe 'expanded' no item clicado
            element.classList.toggle('expanded');
        }

        // Fecha o item expandido ao clicar fora dele
        document.addEventListener('click', function(event) {
            const currentExpanded = document.querySelector('.gallery-item.expanded');
            if (currentExpanded && !currentExpanded.contains(event.target) && !event.target.classList.contains('gallery-item')) {
                currentExpanded.classList.remove('expanded');
            }
        })