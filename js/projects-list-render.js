document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('projects-grid');
    if (!grid || !window.projectsData || !window.projectsCategories) return;

    // Clear existing content
    grid.innerHTML = '';
    // On retire les classes de grille du conteneur parent car on va créer des sous-grilles
    grid.className = 'space-y-16 block'; // Utilisation de block + space-y pour un empilement propre des catégories

    window.projectsCategories.forEach(category => {
        if (!category.projects || category.projects.length === 0) return;

        // Création de la section de catégorie
        const section = document.createElement('div');
        section.className = 'category-section reveal';
        
        // Titre de la catégorie
        const title = document.createElement('h3');
        title.className = 'text-2xl font-bold mb-8 text-cyan-400 font-mono flex items-center gap-3';
        title.innerHTML = `<span class="h-px w-8 bg-cyan-900/50"></span>${category.title}`;
        section.appendChild(title);

        // Grille pour cette catégorie
        const subGrid = document.createElement('div');
        subGrid.className = 'grid md:grid-cols-2 lg:grid-cols-3 gap-8';
        
        category.projects.forEach(id => {
            const project = window.projectsData[id];
            if (!project) return;

            const card = document.createElement('div');
            card.className = 'bg-slate-900 rounded-lg border border-cyan-900/30 overflow-hidden hover:border-cyan-700/50 transition-all group tilt-card stagger-item';
            
            const categoryBadge = `<span class="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded border border-cyan-500/30 text-sm font-mono">${project.category}</span>`;

            const tagsHtml = project.tags.map(tag => 
                `<span class="px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700 text-sm font-mono">${tag}</span>`
            ).join('');

            let docIcon = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`;
            if (id === 'portfolio') {
                docIcon = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>`;
            }

            card.innerHTML = `
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                        ${categoryBadge}
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">${project.title}</h3>
                    <p class="text-slate-400 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${tagsHtml}
                    </div>
                    <div class="flex gap-4 font-mono text-sm">
                        <a href="javascript:void(0)" onclick="openProjectModal('${id}')"
                            class="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                            ${docIcon}
                            <span>${id === 'portfolio' ? 'Code' : 'Documentation'}</span>
                        </a>
                        <a href="${project.demoLink || '#'}" class="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                </path>
                            </svg>
                            <span>demo</span>
                        </a>
                    </div>
                </div>
            `;
            subGrid.appendChild(card);
        });

        section.appendChild(subGrid);
        grid.appendChild(section);

        // Observer pour l'animation reveal
        if (window.revealObserver) {
            window.revealObserver.observe(section);
        }
    });
});
