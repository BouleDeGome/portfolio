// Minecraft Plans Data
const minecraftPlans = {
    java: {
        i7: [
            {
                name: 'Maximum Starter',
                processor: 'Intel Core i7',
                price: '2.49',
                cpu: '1 vCore',
                ram: '4 GB RAM',
                storage: '30 GB SSD',
                features: ['Panel Pterodactyl', 'Backups hebdomadaires', 'DDoS Protection', 'Support Bukkit/Spigot', 'MySQL', 'FTP Access']
            },
            {
                name: 'Maximum Medium',
                processor: 'Intel Core i7',
                price: '4.49',
                cpu: '2 vCores',
                ram: '6 GB RAM',
                storage: '45 GB SSD',
                features: ['Panel Pterodactyl', 'Backups quotidiens', 'DDoS Protection', 'Support Paper/Spigot', 'MySQL', 'FTP Access', 'Plugins illimités'],
                popular: true
            },
            {
                name: 'Maximum High',
                processor: 'Intel Core i7',
                price: '5.99',
                cpu: '4 vCores',
                ram: '8 GB RAM',
                storage: '60 GB SSD',
                features: ['Panel Pterodactyl', 'Backups automatiques', 'DDoS Protection avancée', 'Support mods complet', 'MySQL', 'FTP & SSH', 'Support disponible', 'Ressources dédiées']
            }
        ],
        xeon: [
            {
                name: 'Starter',
                processor: 'Intel Xeon E5',
                price: '1.49',
                cpu: '1 vCore',
                ram: '4 GB RAM',
                storage: '30 GB SSD',
                features: ['Panel Pterodactyl', 'Backups hebdomadaires', 'DDoS Protection', 'Support Bukkit/Spigot', 'MySQL', 'FTP Access']
            },
            {
                name: 'Medium',
                processor: 'Intel Xeon E5',
                price: '3.49',
                cpu: '2 vCores',
                ram: '6 GB RAM',
                storage: '45 GB SSD',
                features: ['Panel Pterodactyl', 'Backups quotidiens', 'DDoS Protection', 'Support Paper/Spigot', 'MySQL', 'FTP Access', 'Plugins illimités'],
                popular: true
            },
            {
                name: 'High',
                processor: 'Intel Xeon E5',
                price: '4.99',
                cpu: '4 vCores',
                ram: '8 GB RAM',
                storage: '60 GB SSD',
                features: ['Panel Pterodactyl', 'Backups automatiques', 'DDoS Protection avancée', 'Support mods complet', 'MySQL', 'FTP & SSH', 'Support prioritaire', 'CPU dédié']
            }
        ]
    },
    bedrock: {
        i7: [
            {
                name: 'Maximum Starter',
                processor: 'Intel Core i7',
                price: '2.49',
                cpu: '1 vCore',
                ram: '2 GB RAM',
                storage: '15 GB SSD',
                features: ['Panel de contrôle', 'Backups hebdomadaires', 'DDoS Protection', 'Add-ons support', 'Cross-platform']
            },
            {
                name: 'Maximum Medium',
                processor: 'Intel Core i7',
                price: '4.49',
                cpu: '2 vCores',
                ram: '4 GB RAM',
                storage: '20 GB SSD',
                features: ['Panel de contrôle', 'Backups quotidiens', 'DDoS Protection', 'Add-ons illimités', 'World management', 'Support Xbox/PS', 'Mobile support'],
                popular: true
            },
            {
                name: 'Maximum High',
                processor: 'Intel Core i7',
                price: '5.99',
                cpu: '4 vCores',
                ram: '6 GB RAM',
                storage: '25 GB SSD',
                features: ['Panel de contrôle', 'Backups automatiques', 'DDoS Protection avancée', 'Add-ons illimités', 'World management', 'Support multi-plateforme', 'Support prioritaire']
            }
        ],
        xeon: [
            {
                name: 'Starter',
                processor: 'Intel Xeon E5',
                price: '1.49',
                cpu: '1 vCore',
                ram: '2 GB RAM',
                storage: '15 GB SSD',
                features: ['Panel de contrôle', 'Backups hebdomadaires', 'DDoS Protection', 'Add-ons support', 'Cross-platform']
            },
            {
                name: 'Medium',
                processor: 'Intel Xeon E5',
                price: '3.49',
                cpu: '2 vCores',
                ram: '4 GB RAM',
                storage: '20 GB SSD',
                features: ['Panel de contrôle', 'Backups quotidiens', 'DDoS Protection', 'Add-ons illimités', 'World management', 'Support Xbox/PS', 'Mobile support'],
                popular: true
            },
            {
                name: 'High',
                processor: 'Intel Xeon E5',
                price: '4.99',
                cpu: '4 vCores',
                ram: '6 GB RAM',
                storage: '25 GB SSD',
                features: ['Panel de contrôle', 'Backups automatiques', 'DDoS Protection avancée', 'Add-ons illimités', 'World management', 'Support multi-plateforme', 'Support prioritaire']
            }
        ]
    }
};

// Current selection
let currentEdition = 'java';
let currentProcessor = 'xeon';

// Switch Edition
function switchEdition(edition) {
    currentEdition = edition;
    
    // Update buttons
    const javaBtn = document.getElementById('btn-java');
    const bedrockBtn = document.getElementById('btn-bedrock');
    
    if (edition === 'java') {
        javaBtn.className = 'edition-btn px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-xl transition-all hover:scale-105';
        bedrockBtn.className = 'edition-btn px-8 py-4 rounded-xl font-semibold text-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 transition-all hover:scale-105';
    } else {
        javaBtn.className = 'edition-btn px-8 py-4 rounded-xl font-semibold text-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 transition-all hover:scale-105';
        bedrockBtn.className = 'edition-btn px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl transition-all hover:scale-105';
    }
    
    renderPlans();
}

// Switch Processor
function switchProcessor(processor) {
    currentProcessor = processor;
    
    // Update buttons
    const i7Btn = document.getElementById('btn-i7');
    const xeonBtn = document.getElementById('btn-xeon');
    
    const editionColor = currentEdition === 'java' 
        ? 'from-orange-600 to-red-600' 
        : 'from-blue-600 to-cyan-600';
    
    if (processor === 'i7') {
        i7Btn.className = `processor-btn px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r ${editionColor} text-white shadow-xl transition-all hover:scale-105`;
        xeonBtn.className = 'processor-btn px-8 py-4 rounded-xl font-semibold text-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 transition-all hover:scale-105';
    } else {
        i7Btn.className = 'processor-btn px-8 py-4 rounded-xl font-semibold text-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 transition-all hover:scale-105';
        xeonBtn.className = 'processor-btn px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-xl transition-all hover:scale-105';
    }
    
    renderPlans();
}

// Render Plans
function renderPlans() {
    const plans = minecraftPlans[currentEdition][currentProcessor];
    const container = document.getElementById('plans-container');
    
    const editionColor = currentEdition === 'java'
        ? { from: 'from-orange-600', to: 'to-red-600', light: 'orange' }
        : { from: 'from-blue-600', to: 'to-cyan-600', light: 'blue' };
    
    const editionName = currentEdition === 'java' ? 'Java' : 'Bedrock';
    const processorName = currentProcessor === 'i7' ? 'Intel Core i7' : 'Intel Xeon E5';
    
    let html = `
        <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                Offres Minecraft ${editionName} - ${processorName}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mt-2">
                ${currentProcessor === 'i7' 
                    ? 'Processeurs Intel Core i7 pour des performances maximales' 
                    : 'Processeurs Intel Xeon E5 pour un excellent rapport qualité/prix'}
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    `;
    
    plans.forEach((plan, index) => {
        const popularClass = plan.popular 
            ? `bg-gradient-to-br ${editionColor.from} ${editionColor.to} text-white shadow-2xl ring-4 ring-${editionColor.light}-400`
            : 'bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700';
        
        html += `
            <div class="relative p-8 rounded-2xl ${popularClass} plan-card animate-fade-in" style="animation-delay: ${index * 0.1}s;">
                ${plan.popular ? `
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold popular-badge">
                        ⭐ Recommandé
                    </div>
                ` : ''}
                
                <h3 class="text-2xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}">
                    ${plan.name}
                </h3>
                <p class="text-xs mb-4 ${plan.popular ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}">
                    ${plan.processor}
                </p>
                
                <div class="mb-6">
                    <span class="text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}">
                        ${plan.price}€
                    </span>
                    <span class="${plan.popular ? `text-${editionColor.light}-100` : 'text-gray-600 dark:text-gray-400'}">
                        /mois
                    </span>
                </div>
                
                <div class="space-y-3 mb-6 pb-6 border-b ${plan.popular ? `border-${editionColor.light}-400` : 'border-gray-200 dark:border-gray-700'}">
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? `text-${editionColor.light}-200` : `text-${editionColor.light}-600`}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                        <span class="${plan.popular ? `text-${editionColor.light}-100` : 'text-gray-700 dark:text-gray-300'}">${plan.cpu}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? `text-${editionColor.light}-200` : `text-${editionColor.light}-600`}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span class="${plan.popular ? `text-${editionColor.light}-100` : 'text-gray-700 dark:text-gray-300'}">${plan.ram}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? `text-${editionColor.light}-200` : `text-${editionColor.light}-600`}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                        </svg>
                        <span class="${plan.popular ? `text-${editionColor.light}-100` : 'text-gray-700 dark:text-gray-300'}">${plan.storage}</span>
                    </div>
                </div>
                
                <ul class="space-y-3 mb-8">
                    ${plan.features.map(feature => `
                        <li class="flex items-start space-x-2">
                            <svg class="w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? `text-${editionColor.light}-200` : 'text-green-500'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-sm ${plan.popular ? `text-${editionColor.light}-100` : 'text-gray-600 dark:text-gray-400'}">${feature}</span>
                        </li>
                    `).join('')}
                </ul>
                
                <a href="../order.html?service=minecraft-${currentEdition}&plan=${encodeURIComponent(plan.name)}&price=${plan.price}&processor=${encodeURIComponent(plan.processor)}">
                    <button class="w-full py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                        plan.popular
                            ? `bg-white text-${editionColor.light}-600 hover:bg-gray-100`
                            : `bg-gradient-to-r ${editionColor.from} ${editionColor.to} text-white hover:opacity-90`
                    }">
                        Commander
                    </button>
                </a>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderPlans();
});
