// FiveM Plans Data - Copie exacte du site React
const fivemPlans = [
    {
        name: 'FiveM Débutant',
        price: '6.99',
        players: '~16 joueurs',
        ram: '6 GB RAM',
        cpu: 'Intel Xeon E5 - 2 vCores',
        storage: '40 GB SSD',
        features: [
            'OneSync activé',
            'MySQL inclus',
            'txAdmin',
            'DDoS Protection',
            'Scripts ESX/QBCore',
            'Accès FTP',
            'Support 24/7'
        ]
    },
    {
        name: 'FiveM RP Communautaire',
        price: '10.99',
        players: '~32 joueurs',
        ram: '10 GB RAM',
        cpu: 'Intel Xeon E5 - 4 vCores',
        storage: '60 GB SSD',
        features: [
            'OneSync Infinity',
            'MySQL inclus',
            'txAdmin inclus',
            'DDoS Protection',
            'Scripts premium',
            'Accès FTP/SSH',
            'Support disponible',
            'Monitoring',
            'Backups quotidiens'
        ],
        popular: true
    },
    {
        name: 'FiveM RP Avancé',
        price: '15.99',
        players: '~64 joueurs',
        ram: '16 GB RAM',
        cpu: 'Intel Xeon E5 - 6 vCores',
        storage: '100 GB SSD',
        features: [
            'OneSync Infinity',
            'MySQL optimisé',
            'txAdmin complet',
            'DDoS Protection avancée',
            'Scripts illimités',
            'Accès SSH complet',
            'Support prioritaire',
            'Ressources optimisées',
            'Backups en temps réel',
            'API complète'
        ]
    }
];

function renderPlans() {
    const container = document.getElementById('plans-container');
    
    let html = '<div class="grid grid-cols-1 md:grid-cols-3 gap-8">';
    
    fivemPlans.forEach((plan, index) => {
        const popularClass = plan.popular 
            ? 'bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-2xl ring-4 ring-orange-400'
            : 'bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700';
        
        html += `
            <div class="relative p-8 rounded-2xl ${popularClass} plan-card animate-fade-in" style="animation-delay: ${index * 0.1}s;">
                ${plan.popular ? `
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold popular-badge">
                        🔥 Recommandé
                    </div>
                ` : ''}
                
                <h3 class="text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}">
                    ${plan.name}
                </h3>
                
                <div class="mb-6">
                    <span class="text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}">
                        ${plan.price}€
                    </span>
                    <span class="${plan.popular ? 'text-orange-100' : 'text-gray-600 dark:text-gray-400'}">
                        /mois
                    </span>
                </div>
                
                <div class="space-y-3 mb-6 pb-6 border-b ${plan.popular ? 'border-orange-400' : 'border-gray-200 dark:border-gray-700'}">
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-orange-200' : 'text-orange-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-orange-100' : 'text-gray-700 dark:text-gray-300'}">${plan.players}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-orange-200' : 'text-orange-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-orange-100' : 'text-gray-700 dark:text-gray-300'}">${plan.ram}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-orange-200' : 'text-orange-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-orange-100' : 'text-gray-700 dark:text-gray-300'}">${plan.cpu}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-orange-200' : 'text-orange-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-orange-100' : 'text-gray-700 dark:text-gray-300'}">${plan.storage}</span>
                    </div>
                </div>
                
                <ul class="space-y-3 mb-8">
                    ${plan.features.map(feature => `
                        <li class="flex items-start space-x-2">
                            <svg class="w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-orange-200' : 'text-green-500'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-sm ${plan.popular ? 'text-orange-100' : 'text-gray-600 dark:text-gray-400'}">${feature}</span>
                        </li>
                    `).join('')}
                </ul>
                
                <a href="../order.html?service=fivem&plan=${encodeURIComponent(plan.name)}&price=${plan.price}">
                    <button class="w-full py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                        plan.popular
                            ? 'bg-white text-orange-600 hover:bg-gray-100'
                            : 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:opacity-90'
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

document.addEventListener('DOMContentLoaded', () => {
    renderPlans();
});
