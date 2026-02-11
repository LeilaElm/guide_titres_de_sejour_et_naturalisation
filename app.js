// Données des types de titres de séjour
const CARD_TYPES = [
    {
        id: 'student',
        icon: '📚',
        name: 'Carte Étudiant',
        color: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        fees: '75€'
    },
    {
        id: 'worker',
        icon: '💼',
        name: 'Carte Salarié',
        color: 'linear-gradient(135deg, #10b981, #059669)',
        fees: '225€'
    },
    {
        id: 'pluriannual',
        icon: '📅',
        name: 'Carte Pluriannuelle',
        color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        fees: '225€'
    },
    {
        id: 'privateLife',
        icon: '👨‍👩‍👧',
        name: 'Vie Privée et Familiale',
        color: 'linear-gradient(135deg, #ec4899, #db2777)',
        fees: '225€'
    },
    {
        id: 'resident',
        icon: '🏠',
        name: 'Carte de Résident (10 ans)',
        color: 'linear-gradient(135deg, #f97316, #ea580c)',
        fees: '225€'
    },
    {
        id: 'tempWorker',
        icon: '⏱️',
        name: 'Travailleur Temporaire',
        color: 'linear-gradient(135deg, #14b8a6, #0d9488)',
        fees: '225€'
    },
    {
        id: 'naturalization',
        icon: '🇫🇷',
        name: 'Naturalisation',
        color: 'linear-gradient(135deg, #ef4444, #3b82f6)',
        fees: '55€'
    }
];

// Données des changements de statut
const STATUS_CHANGES = [
    {
        id: 'studentToWorker',
        icon: '📚→💼',
        from: 'Carte Étudiant',
        to: 'Carte Salarié'
    },
    {
        id: 'workerToResident',
        icon: '💼→🏠',
        from: 'Carte Salarié',
        to: 'Carte de Résident'
    },
    {
        id: 'pluriannualToResident',
        icon: '📅→🏠',
        from: 'Carte Pluriannuelle',
        to: 'Carte de Résident'
    },
    {
        id: 'residentToNaturalization',
        icon: '🏠→🇫🇷',
        from: 'Carte de Résident',
        to: 'Naturalisation'
    }
];

// Documents communs à tous les titres
const COMMON_DOCS = [
    "Passeport en cours de validité (toutes les pages)",
    "3 photos d'identité récentes aux normes",
    "Justificatif de domicile de moins de 6 mois",
    "Titre de séjour actuel (recto-verso)",
    "Attestation de dépôt ANEF",
    "Justificatif de paiement des timbres fiscaux"
];

// Critères d'éligibilité par type
const ELIGIBILITY = {
    student: [
        "Être inscrit dans un établissement d'enseignement supérieur en France",
        "Disposer de ressources suffisantes (minimum 750€/mois)",
        "Avoir une assurance maladie valide",
        "Suivre régulièrement les cours (assiduité)",
        "Progression dans les études (passage d'année, validation de crédits)"
    ],
    worker: [
        "Avoir un contrat de travail en France (CDI ou CDD de plus de 3 mois)",
        "Obtenir une autorisation de travail délivrée par la DDETS",
        "Exercer un emploi conforme au contrat de travail",
        "Respecter la législation du travail française",
        "Cotiser à la sécurité sociale"
    ],
    pluriannual: [
        "Avoir détenu au préalable une carte de séjour temporaire ou VLS-TS",
        "Justifier d'une résidence régulière et continue en France",
        "Pour première demande : niveau A2 de français + examen civique réussi",
        "Respecter les conditions du motif de séjour (étudiant, salarié, etc.)",
        "Avoir signé et respecté le Contrat d'Intégration Républicaine (CIR)",
        "Ne pas constituer une menace pour l'ordre public"
    ],
    privateLife: [
        "Justifier d'un lien familial avec une personne française ou étrangère en situation régulière",
        "Pour conjoint de Français : mariage ou PACS valide + vie commune effective",
        "Pour parent d'enfant français : contribuer effectivement à l'entretien et l'éducation",
        "Pour regroupement familial : ressources stables et logement décent",
        "Respecter les principes de la République française",
        "Ne pas constituer une menace pour l'ordre public"
    ],
    resident: [
        "Justifier de 5 ans de résidence régulière en France (ou 3 ans selon nationalité/statut)",
        "Pour première demande : niveau B1 de français + examen civique réussi",
        "Résider habituellement en France (au moins 6 mois par an)",
        "Disposer de ressources stables et suffisantes",
        "Démontrer son intégration républicaine dans la société française",
        "Ne pas constituer une menace grave pour l'ordre public",
        "Respecter les principes de la République"
    ],
    tempWorker: [
        "Avoir un contrat de travail temporaire ou saisonnier en France",
        "Obtenir l'autorisation de travail temporaire de la DDETS",
        "L'emploi proposé doit correspondre à un besoin temporaire de l'employeur",
        "Durée du contrat : généralement entre 3 et 12 mois maximum",
        "Disposer d'un hébergement pour la durée du séjour"
    ],
    naturalization: [
        "Justifier de 5 ans de résidence régulière en France (réduit à 2 ans avec diplôme français supérieur)",
        "Avoir sa résidence principale et effective en France",
        "Niveau B2 de français certifié (DELF, TCF ou diplôme français)",
        "Réussir l'examen civique (obligatoire depuis le 1er janvier 2026)",
        "Être bien intégré dans la société française (emploi, vie associative, respect des valeurs)",
        "Avoir des ressources stables et suffisantes",
        "Ne pas avoir de condamnations pénales incompatibles avec l'acquisition de la nationalité",
        "Adhérer aux principes et valeurs essentiels de la République française"
    ]
};

// Documents spécifiques par type
const SPECIFIC_DOCS = {
    student: [
        "Certificat de scolarité ou attestation d'inscription pour l'année en cours",
        "Justificatif de ressources suffisantes (750€/mois minimum)",
        "Attestation bancaire ou engagement de prise en charge",
        "Attestation d'assurance maladie",
        "Pour le renouvellement : relevés de notes de l'année écoulée"
    ],
    worker: [
        "Contrat de travail (CDI, CDD de plus de 3 mois)",
        "3 derniers bulletins de salaire",
        "Attestation d'emploi de l'employeur",
        "Autorisation de travail ou CERFA complété par l'employeur",
        "Dernier avis d'imposition",
        "Si chômage : attestation France Travail"
    ],
    pluriannual: [
        "Documents du titre correspondant à votre situation (étudiant, salarié, etc.)",
        "Attestation de réussite à l'examen civique (première demande uniquement)",
        "Justificatif de niveau A2 de français (DELF, TCF) - première demande",
        "Attestation OFII de suivi du CIR (Contrat d'Intégration Républicaine)",
        "Engagement à respecter les principes de la République",
        "Justificatifs de présence continue en France"
    ],
    privateLife: [
        "Selon votre situation (conjoint de Français, parent d'enfant français, etc.)",
        "Pour conjoint de Français : certificat de mariage, CNI du conjoint",
        "Justificatifs de vie commune (factures communes, bail, etc.)",
        "Pour parent d'enfant français : acte de naissance de l'enfant, CNI de l'enfant",
        "Justificatifs de contribution à l'éducation de l'enfant",
        "Attestation sur l'honneur de communauté de vie"
    ],
    resident: [
        "Justificatifs de 3 ans de séjour régulier (cartes de séjour, récépissés)",
        "Attestation de réussite à l'examen civique mention 'carte de résident'",
        "Justificatif de niveau B1 de français (DELF, TCF) - première demande",
        "Attestation OFII complète du CIR",
        "Dernier avis d'imposition",
        "Justificatifs d'intégration (emploi stable, formation, bénévolat)",
        "Déclaration sur l'honneur de non-polygamie (si applicable)"
    ],
    tempWorker: [
        "Contrat de travail temporaire ou saisonnier",
        "Attestation de l'employeur précisant la durée",
        "CERFA d'autorisation de travail temporaire",
        "Avis favorable de la DDETS (Direction départementale de l'emploi)",
        "Justificatif d'hébergement pendant la durée du contrat"
    ],
    naturalization: [
        "Attestation de réussite à l'examen civique (obligatoire depuis le 1er janvier 2026)",
        "Justificatif de niveau B2 de français (DELF, TCF, diplôme français)",
        "Justificatifs de 5 ans de résidence régulière en France (cartes de séjour)",
        "Acte de naissance avec apostille ou légalisation",
        "Certificat de nationalité ou passeport des parents",
        "Extrait de casier judiciaire du pays d'origine (moins de 3 mois)",
        "Bulletin n°3 du casier judiciaire français",
        "Justificatifs de domicile des 5 dernières années",
        "Avis d'imposition des 3 dernières années",
        "Justificatifs d'intégration : emploi, formation, bénévolat, vie associative",
        "Photos d'identité récentes aux normes",
        "Déclaration sur l'honneur de non-condamnation",
        "Timbre fiscal de 55€"
    ]
};

// Critères de changement de statut
const STATUS_CHANGE_CRITERIA = {
    studentToWorker: [
        "Diplôme minimum Licence (Bac+3) ou équivalent",
        "Contrat de travail CDI ou CDD minimum 12 mois",
        "Salaire minimum 1.5x SMIC brut annuel (environ 30 000€/an)",
        "Emploi en lien avec la formation"
    ],
    workerToResident: [
        "5 ans de séjour régulier en France",
        "Emploi stable et ressources suffisantes",
        "Intégration républicaine démontrée",
        "Niveau B1 de français (première demande)",
        "Réussite à l'examen civique"
    ],
    pluriannualToResident: [
        "3 ans minimum avec carte pluriannuelle",
        "Résidence habituelle en France (6 mois/an minimum)",
        "Niveau B1 de français (première demande)",
        "Réussite à l'examen civique mention 'carte de résident'",
        "Intégration républicaine"
    ],
    residentToNaturalization: [
        "5 ans de résidence régulière en France (ou 2 ans si diplôme français supérieur)",
        "Résidence principale et effective en France",
        "Niveau B2 de français certifié (DELF, TCF ou diplôme français)",
        "Réussite à l'examen civique (obligatoire depuis le 1er janvier 2026)",
        "Intégration dans la société française (emploi, vie associative, valeurs)",
        "Absence de condamnations pénales",
        "Ressources stables et suffisantes"
    ]
};

// Documents pour changement de statut
const STATUS_CHANGE_DOCS = {
    studentToWorker: [
        "Tous les documents 'Salarié'",
        "Diplôme obtenu en France",
        "Relevés de notes",
        "CERFA de changement de statut",
        "Avis favorable de la DDETS"
    ],
    workerToResident: [
        "Tous les documents 'Carte de Résident'",
        "5 dernières cartes de séjour ou récépissés",
        "Justificatifs d'emploi sur 5 ans",
        "Avis d'imposition sur 3 ans"
    ],
    pluriannualToResident: [
        "Tous les documents 'Carte de Résident'",
        "Cartes pluriannuelles précédentes",
        "Justificatifs de présence continue",
        "Attestation OFII complète"
    ],
    residentToNaturalization: [
        "Tous les documents 'Naturalisation'",
        "Cartes de résident ou titres de séjour des 5 dernières années",
        "Attestation de réussite à l'examen civique",
        "Certificat de niveau B2 de français",
        "Justificatifs d'intégration complète",
        "Casiers judiciaires français et étranger"
    ]
};

// État de l'application
let currentView = 'main';

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initNoticeToggle();
    renderCards();
    renderStatusChanges();
});

// Toggle notice 2026
function initNoticeToggle() {
    const notice = document.getElementById('notice2026');
    const content = document.getElementById('notice-content');
    const arrow = document.getElementById('notice-arrow');
    
    notice.addEventListener('click', () => {
        const isActive = content.classList.toggle('active');
        arrow.textContent = isActive ? '▲' : '▼';
    });
}

// Rendu des cartes
function renderCards() {
    const grid = document.getElementById('cards-grid');
    grid.innerHTML = '';
    
    CARD_TYPES.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card';
        cardEl.style.animationDelay = `${index * 0.1}s`;
        cardEl.innerHTML = `
            <div class="card-icon" style="background: ${card.color}">${card.icon}</div>
            <div class="card-title">${card.name}</div>
            <div class="card-footer">
                <span>Frais: ${card.fees}</span>
                <span>→</span>
            </div>
        `;
        cardEl.addEventListener('click', () => showDetail(card.id, card));
        grid.appendChild(cardEl);
    });
}

// Rendu des changements de statut
function renderStatusChanges() {
    const grid = document.getElementById('status-grid');
    grid.innerHTML = '';
    
    STATUS_CHANGES.forEach((change, index) => {
        const card = document.createElement('div');
        card.className = 'status-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="status-icon">${change.icon}</div>
            <div class="status-label">Changement depuis</div>
            <div class="status-name">${change.from}</div>
            <div class="status-label">vers</div>
            <div class="status-name">${change.to}</div>
        `;
        card.addEventListener('click', () => showStatusChangeDetail(change.id, change));
        grid.appendChild(card);
    });
}

// Afficher le détail d'un titre
function showDetail(type, data) {
    currentView = 'detail';
    document.getElementById('main-view').classList.add('hidden');
    renderDetailView(type, data);
}

// Afficher le détail d'un changement de statut
function showStatusChangeDetail(id, data) {
    currentView = 'detail';
    document.getElementById('main-view').classList.add('hidden');
    renderStatusChangeDetailView(id, data);
}

// Retour au menu principal
function backToMain() {
    currentView = 'main';
    document.getElementById('main-view').classList.remove('hidden');
    const detailView = document.getElementById('detail-view');
    detailView.classList.remove('active');
    setTimeout(() => {
        detailView.innerHTML = '';
    }, 300);
}

// Rendu de la vue détaillée
function renderDetailView(type, data) {
    const detailView = document.getElementById('detail-view');
    
    detailView.innerHTML = `
        <button class="back-btn" onclick="backToMain()">← Retour au menu</button>
        <div class="detail-card">
            <div class="detail-header">
                <div class="detail-icon" style="background: ${data.color}">${data.icon}</div>
                <div class="detail-info">
                    <div class="detail-title">${data.name}</div>
                    <div class="detail-subtitle">Documents requis</div>
                    <button class="download-btn" onclick="downloadList('${type}')">📥 Télécharger la liste</button>
                </div>
            </div>
            
            <div class="info-notice">
                <span>💡</span>
                <span>Téléchargez cette liste pour l'avoir toujours avec vous</span>
            </div>
            
            <div class="info-boxes">
                <div class="info-box timeline">
                    <div class="info-box-icon">⏰</div>
                    <div class="info-box-label">Délais</div>
                    <div class="info-box-value">Déposez votre demande entre 4 mois et 2 mois avant expiration</div>
                </div>
                <div class="info-box online">
                    <div class="info-box-icon">💻</div>
                    <div class="info-box-label">Démarche en ligne via ANEF</div>
                    <div class="info-box-value">administration-etrangers-en-france.interieur.gouv.fr</div>
                </div>
                <div class="info-box fees">
                    <div class="info-box-icon">💰</div>
                    <div class="info-box-label">Frais</div>
                    <div class="info-box-value">${data.fees}</div>
                </div>
            </div>
            
            ${renderEligibilitySection(type)}
            ${renderCommonDocsSection()}
            ${renderSpecificDocsSection(type)}
        </div>
    `;
    
    detailView.classList.add('active');
}

// Rendu de la vue détaillée pour changement de statut
function renderStatusChangeDetailView(id, data) {
    const detailView = document.getElementById('detail-view');
    
    detailView.innerHTML = `
        <button class="back-btn" onclick="backToMain()">← Retour au menu</button>
        <div class="detail-card">
            <div class="detail-header">
                <div style="text-align: center; flex: 1;">
                    <div style="font-size: 5rem; margin-bottom: 1.5rem;">${data.icon}</div>
                    <div class="detail-title">Changement de statut</div>
                    <div class="detail-subtitle" style="font-size: 1.5rem; margin-top: 1rem;">${data.from} → ${data.to}</div>
                    <button class="download-btn" onclick="downloadStatusChange('${id}')">📥 Télécharger la liste</button>
                </div>
            </div>
            
            ${renderStatusChangeCriteria(id)}
            ${renderStatusChangeDocuments(id)}
        </div>
    `;
    
    detailView.classList.add('active');
}

// Section critères d'éligibilité
function renderEligibilitySection(type) {
    const eligibility = ELIGIBILITY[type];
    
    return `
        <div class="doc-section">
            <h3 class="section-title eligibility">⚠️ Critères d'Éligibilité</h3>
            <div class="doc-list">
                ${eligibility.map(item => `
                    <div class="doc-item eligibility">
                        <div class="doc-icon">✅</div>
                        <div class="doc-text">${item}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Section documents communs
function renderCommonDocsSection() {
    return `
        <div class="doc-section">
            <h3 class="section-title common">📄 Documents Communs (tous les titres)</h3>
            <div class="doc-list">
                ${COMMON_DOCS.map(doc => `
                    <div class="doc-item">
                        <div class="doc-icon">✅</div>
                        <div class="doc-text">${doc}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Section documents spécifiques
function renderSpecificDocsSection(type) {
    const docs = SPECIFIC_DOCS[type];
    
    return `
        <div class="doc-section">
            <h3 class="section-title specific">📋 Documents Spécifiques</h3>
            <div class="doc-list">
                ${docs.map(doc => `
                    <div class="doc-item specific">
                        <div class="doc-icon">✅</div>
                        <div class="doc-text">${doc}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Section critères changement de statut
function renderStatusChangeCriteria(id) {
    const criteria = STATUS_CHANGE_CRITERIA[id];
    
    return `
        <div class="doc-section">
            <h3 class="section-title criteria">⚡ Critères</h3>
            <div class="doc-list">
                ${criteria.map(item => `
                    <div class="doc-item criteria">
                        <div class="doc-icon">✅</div>
                        <div class="doc-text">${item}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Section documents changement de statut
function renderStatusChangeDocuments(id) {
    const docs = STATUS_CHANGE_DOCS[id];
    
    return `
        <div class="doc-section">
            <h3 class="section-title specific">📋 Documents nécessaires</h3>
            <div class="doc-list">
                ${docs.map(doc => `
                    <div class="doc-item specific">
                        <div class="doc-icon">✅</div>
                        <div class="doc-text">${doc}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Téléchargement de la liste pour un titre
function downloadList(type) {
    const card = CARD_TYPES.find(c => c.id === type);
    const title = card.name;
    
    let content = `GUIDE DES TITRES DE SÉJOUR EN FRANCE\n\n`;
    content += `${title}\n${'='.repeat(title.length)}\n\n`;
    content += `DÉLAIS: Déposez votre demande entre 4 mois et 2 mois avant expiration\n`;
    content += `FRAIS: ${card.fees}\n\n`;
    
    content += `CRITÈRES D'ÉLIGIBILITÉ:\n${'-'.repeat(23)}\n`;
    ELIGIBILITY[type].forEach((item, i) => {
        content += `${i + 1}. ${item}\n`;
    });
    
    content += `\nDOCUMENTS COMMUNS:\n${'-'.repeat(18)}\n`;
    COMMON_DOCS.forEach((doc, i) => {
        content += `${i + 1}. ${doc}\n`;
    });
    
    content += `\nDOCUMENTS SPÉCIFIQUES:\n${'-'.repeat(22)}\n`;
    SPECIFIC_DOCS[type].forEach((doc, i) => {
        content += `${i + 1}. ${doc}\n`;
    });
    
    content += `\n\nDÉMARCHE EN LIGNE VIA ANEF\n`;
    content += `administration-etrangers-en-france.interieur.gouv.fr\n`;
    content += `\nGuide créé pour faciliter vos démarches administratives`;
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_')}_documents.txt`;
    link.click();
    URL.revokeObjectURL(url);
}

// Téléchargement de la liste pour un changement de statut
function downloadStatusChange(id) {
    const change = STATUS_CHANGES.find(c => c.id === id);
    const title = `Changement ${change.from} vers ${change.to}`;
    
    let content = `GUIDE DES TITRES DE SÉJOUR EN FRANCE\n\n`;
    content += `${title}\n${'='.repeat(title.length)}\n\n`;
    
    content += `CRITÈRES:\n${'-'.repeat(9)}\n`;
    STATUS_CHANGE_CRITERIA[id].forEach((item, i) => {
        content += `${i + 1}. ${item}\n`;
    });
    
    content += `\nDOCUMENTS NÉCESSAIRES:\n${'-'.repeat(22)}\n`;
    STATUS_CHANGE_DOCS[id].forEach((doc, i) => {
        content += `${i + 1}. ${doc}\n`;
    });
    
    content += `\n\nDÉMARCHE EN LIGNE VIA ANEF\n`;
    content += `administration-etrangers-en-france.interieur.gouv.fr\n`;
    content += `\nGuide créé pour faciliter vos démarches administratives`;
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
}
