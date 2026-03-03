const projectsData = {
    "r3st0": {
        title: "Infrastructure R3st0.fr",
        category: "SISR",
        description: "Mise en place d'une infrastructure réseau complète avec Active Directory, serveur DHCP, DNS et Partage de fichiers synchronisé avec l'AD.",
        tags: ["Windows Server", "Active Directory", "DHCP/DNS", "SMB Windows", "Linux", "TFTP"],
        docLink: "https://github.com/BouleDeGome/R3st0.fr",
        docType: "Documentation",
        schemas: ["./img/Schéma/R3st0.fr/Schéma - R3st0.fr.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Infrastructure R3st0.fr.pdf" },
            { name: "📄 Sujet", url: "./fch/sujet/Sujet - R3st0.fr.pdf" },
            { name: "🖼️ Schéma", url: "./img/Schéma/R3st0.fr/Schéma - R3st0.fr.webp" },
            { name: "🖼️ Schéma Cisco", url: "./img/Schéma/R3st0.fr/Schéma cisco - R3st0.fr.png" }
        ]
    },
    "bidart": {
        title: "Infrastructure Mairie de Bidart",
        category: "SISR",
        description: "Migration d'un windows server 2012 avec Active Directory/DNS et partage de fichier vers un windows server 2019.",
        tags: ["Windows Server", "Active Directory"],
        docLink: "#",
        docType: "Documentation",
        schemas: ["./img/Schéma/Mairie de Bidart/Schéma - Mairie de Bidart.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Infrastructure Mairie de Bidart.pdf" },
            { name: "📄 Sujet", url: "./fch/sujets/Sujet - Mairie de Bidart.pdf" },
            { name: "🖼️ Schéma", url: "./img/Schéma/Mairie de Bidart/Schéma - Mairie de Bidart.webp" },
            { name: "🖼️ Schéma Cisco", url: "./img/Schéma/Mairie de Bidart/Schéma cisco - Mairie de Bidart.png" }
        ]
    },
    "portfolio": {
        title: "Site web portfolio",
        category: "SLAM",
        description: "Création d'un site portfolio responsive pour présenter mes compétences et projets réalisés durant ma formation.",
        tags: ["HTML", "CSS", "JavaScript"],
        docLink: "https://github.com/BouleDeGome/portfolio",
        docType: "Code",
        schemas: ["./img/Schéma/Portfolio/Schéma - Portfolio.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Site web portfolio.pdf" },
            { name: "📄 Sujet", url: "./fch/sujet/Sujet - Portfolio.pdf" },
            { name: "🖼️ Schéma", url: "./img/Schéma/Portfolio/Schéma - Portfolio.webp" },
            { name: "🖼️ Schéma Cisco", url: "./img/Schéma/Portfolio/Schéma cisco - Portfolio.png" }
        ]
    },
    "boxtobed": {
        title: "Infrastructure BoxToBed",
        category: "SISR",
        description: "Mise en place d'une infrastructure réseau complète avec Active Directory, serveur DHCP, DNS et Partage de fichiers synchronisé avec l'AD.",
        tags: ["Windows Server", "Active Directory", "DHCP/DNS", "Linux", "TFTP", "CLI / Configuration WEB"],
        docLink: "https://github.com/BouleDeGome/BoxToBed/",
        docType: "Documentation",
        schemas: ["./img/schéma/BoxToBed/Schéma - BoxToBed.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Infrastructure BoxToBed.pdf" },
            { name: "📄 Sujet", url: "./fch/sujets/Sujet - BoxToBed.docx" },
            { name: "🖼️ Schéma", url: "./img/Schéma/BoxToBed/Schéma - BoxToBed.webp" },
            { name: "🖼️ Schéma Cisco", url: "./img/Schéma/BoxToBed/Schéma cisco - BoxToBed.png" }
        ]
    },
    "techunivers": {
        title: "Infrastructure TechUnivers",
        category: "SISR",
        description: "Mise en place d'une infrastructure réseau complète avec Active Directory, Pare-feu StormShield, server Apache2 et HAProxy avec haute disponibilité pour les deux services.",
        tags: ["Windows Server", "Active Directory", "Linux", "Apache2", "HAProxy", "StormShield"],
        docLink: "https://github.com/BouleDeGome/TechUniverse",
        docType: "Documentation",
        schemas: ["./img/Schéma/TechUnivers/Schéma - TechUnivers.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Infrastructure TechUnivers.pdf" },
            { name: "📄 Sujet", url: "./fch/sujet/Sujet - TechUnivers.pdf" },
            { name: "🖼️ Schéma", url: "./img/Schéma/TechUnivers/Schéma - TechUnivers.webp" },
            { name: "🖼️ Schéma Cisco", url: "./img/Schéma/TechUnivers/Schéma cisco - TechUnivers.png" }
        ]
    },
    "nexforma": {
        title: "Infrastructure Nexforma",
        category: "SISR",
        description: "Projet professionnel anonymisé réalisé en entreprise.",
        tags: ["PfSense", "Vlan", "Proxmox", "OpenVPN", "Zyxel / Nebula"],
        docLink: "https://github.com/BouleDeGome/Nexforma",
        docType: "Documentation",
        schemas: ["./img/Schéma/Nexforma/Schéma - Nexforma.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Infrastructure Nexforma.pdf" },
            { name: "📄 Sujet", url: "./fch/sujet/Sujet - Nexforma.pdf" },
            { name: "🖼️ Schéma", url: "./img/Schéma/Nexforma/Schéma - Nexforma.webp" },
            { name: "🖼️ Schéma Cisco", url: "./img/Schéma/Nexforma/Schéma cisco - Nexforma.png" }
        ]
    },
    "ch": {
        title: "Stage Centre Hospitalier",
        category: "SISR",
        description: "Stage professionnel réalisé en centre hospitalier.",
        tags: ["GLPI", "Windows Server", "vCenter", "Microsoft Exchange", "PowerShell"],
        docLink: "https://github.com/BouleDeGome/",
        docType: "Rapport de stage",
        schemas: ["./img/Schéma/Centre Hospitalier/Schéma - Centre Hospitalier.webp"],
        demoLink: null,
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Stage Centre Hospitalier.pdf" },
            { name: "📄 Sujet", url: "./fch/sujet/Sujet - Centre Hospitalier.pdf" },
            { name: "�️ Schéma", url: "./img/Schéma/Centre Hospitalier/Schéma - Centre Hospitalier.webp" },
            { name: "🖼️ Schéma Cisco", url: "./img/Schéma/Centre Hospitalier/Schéma cisco - Centre Hospitalier.png" }
        ]
    },
    "calypsis": {
        title: "Infrastructure Calypsis",
        category: "SISR",
        description: "Projet personnel. (HomeLab)",
        tags: ["Proxmox", "Plex", "WindowsServer", "Centreon"],
        docLink: "https://github.com/BouleDeGome/Calypsis",
        docType: "Documentation",
        schemas: ["./img/Schéma/Calypsis/Schéma - Calypsis.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Infrastructure Calypsis.pdf" },
            { name: "📄 Sujet", url: "./fch/sujet/Sujet - Calypsis.pdf" },
            { name: "🖼️ Schéma", url: "./img/Schéma/Calypsis/Schéma - Calypsis.webp" },
            { name: "🖼️ Schéma Cisco", url: "./img/Schéma/Calypsis/Schéma cisco - Calypsis.png" }
        ]
    }
};

window.projectsData = projectsData;
