// Smart Click-Based Chatbot Upgrade for EKA EB5
// This script upgrades the existing chatbot to a smart, click-based conversation system

(function() {
    'use strict';

    // Conversation states and flows
    const conversationStates = {
        INITIAL: 'initial',
        INVESTMENT: 'investment',
        TIMELINE: 'timeline',
        ELIGIBILITY: 'eligibility',
        PROJECTS: 'projects',
        CONSULTATION: 'consultation',
        TEA_INFO: 'tea_info',
        RETURN_CAPITAL: 'return_capital',
        SOURCE_FUNDS: 'source_funds',
        SPEED_UP: 'speed_up',
        WAITING_PERIOD: 'waiting_period',
        CHECK_ELIGIBILITY: 'check_eligibility',
        FAMILY_MEMBERS: 'family_members',
        CURRENT_PROJECTS: 'current_projects',
        DUE_DILIGENCE: 'due_diligence'
    };

    let currentState = conversationStates.INITIAL;

    // Conversation flows with responses and options
    const conversationFlows = {
        [conversationStates.INITIAL]: {
            message: "Hello! I'm your AI assistant for EB-5 visa queries. How can I help you today?",
            options: [
                { icon: '💰', text: 'Investment Requirements', state: conversationStates.INVESTMENT },
                { icon: '⏱️', text: 'Processing Timeline', state: conversationStates.TIMELINE },
                { icon: '✅', text: 'Eligibility Criteria', state: conversationStates.ELIGIBILITY },
                { icon: '🏢', text: 'Project Selection', state: conversationStates.PROJECTS },
                { icon: '📞', text: 'Book Consultation', state: conversationStates.CONSULTATION }
            ]
        },
        [conversationStates.INVESTMENT]: {
            message: "The EB-5 program requires a minimum investment of $800,000 for projects in Targeted Employment Areas (TEA) or $1,050,000 for standard projects. This investment must create at least 10 full-time jobs for US workers.",
            options: [
                { icon: '🎯', text: 'What is a TEA?', state: conversationStates.TEA_INFO },
                { icon: '💵', text: 'Can I get my capital back?', state: conversationStates.RETURN_CAPITAL },
                { icon: '📄', text: 'Source of funds requirements', state: conversationStates.SOURCE_FUNDS },
                { icon: '🏠', text: 'View current projects', state: conversationStates.CURRENT_PROJECTS },
                { icon: '🔙', text: 'Back to main menu', state: conversationStates.INITIAL }
            ]
        },
        [conversationStates.TIMELINE]: {
            message: "The EB-5 process typically takes 4-6 years from initial investment to permanent green card. This includes I-526E petition (12-18 months), conditional green card (6-12 months), and I-829 removal of conditions (18-24 months). Processing times vary based on USCIS workload and country-specific visa availability.",
            options: [
                { icon: '⚡', text: 'Can I speed up the process?', state: conversationStates.SPEED_UP },
                { icon: '⏳', text: 'What happens during waiting period?', state: conversationStates.WAITING_PERIOD },
                { icon: '📅', text: 'Schedule consultation', state: conversationStates.CONSULTATION },
                { icon: '🔙', text: 'Back to main menu', state: conversationStates.INITIAL }
            ]
        },
        [conversationStates.ELIGIBILITY]: {
            message: "To qualify for EB-5, you need: 1) Lawful source of investment funds with proper documentation, 2) Minimum investment amount ($800K or $1.05M), 3) Investment in a USCIS-approved project that creates 10 jobs. There are no age, education, language, or business experience requirements!",
            options: [
                { icon: '🔍', text: 'Check my eligibility', state: conversationStates.CHECK_ELIGIBILITY },
                { icon: '👨‍👩‍👧‍👦', text: 'Can family members apply?', state: conversationStates.FAMILY_MEMBERS },
                { icon: '📞', text: 'Talk to an expert', state: conversationStates.CONSULTATION },
                { icon: '🔙', text: 'Back to main menu', state: conversationStates.INITIAL }
            ]
        },
        [conversationStates.PROJECTS]: {
            message: "We carefully vet all EB-5 projects for safety, job creation potential, and USCIS compliance. Our current portfolio includes real estate developments, infrastructure projects, and hospitality ventures across multiple TEA regions with strong economic fundamentals.",
            options: [
                { icon: '📋', text: 'View current projects', state: conversationStates.CURRENT_PROJECTS },
                { icon: '🔬', text: 'How do you vet projects?', state: conversationStates.DUE_DILIGENCE },
                { icon: '📅', text: 'Schedule project review', state: conversationStates.CONSULTATION },
                { icon: '🔙', text: 'Back to main menu', state: conversationStates.INITIAL }
            ]
        },
        [conversationStates.CONSULTATION]: {
            message: "Great! Let's schedule your free consultation with our EB-5 experts. Choose your preferred method:",
            options: [
                { icon: '📅', text: 'Book on Calendly', action: 'calendly' },
                { icon: '📱', text: 'WhatsApp Us', action: 'whatsapp' },
                { icon: '📧', text: 'Email Us', action: 'email' },
                { icon: '🔙', text: 'Back to main menu', state: conversationStates.INITIAL }
            ]
        },
        [conversationStates.TEA_INFO]: {
            message: "A Targeted Employment Area (TEA) is a region with high unemployment (150% of national average) or rural area. TEA projects require only $800,000 investment vs $1,050,000 for non-TEA projects. Most of our projects are in TEA regions to maximize your savings!",
            options: [
                { icon: '🏢', text: 'View TEA projects', state: conversationStates.CURRENT_PROJECTS },
                { icon: '💰', text: 'Back to investment info', state: conversationStates.INVESTMENT },
                { icon: '🔙', text: 'Main menu', state: conversationStates.INITIAL }
            ]
        },
        [conversationStates.RETURN_CAPITAL]: {
            message: "Yes! Your capital is typically returned after 5-7 years once the project meets its job creation requirements and you receive your permanent green card. The exact timeline depends on the specific project structure and performance. We only work with projects that have clear capital return mechanisms.",
            options: [
                { icon: '📊', text: 'View project performance', state: conversationStates.CURRENT_PROJECTS },
                { icon: '📞', text: 'Discuss with expert', state: conversationStates.CONSULTATION },
                { icon: '🔙', text: 'Back to investment info', state: conversationStates.INVESTMENT }
            ]
        },
        [conversationStates.SOURCE_FUNDS]: {
            message: "You must prove your investment funds came from lawful sources. Acceptable sources include: business income, salary/savings, property sales, inheritance, gifts, loans (secured by your assets). We help you prepare comprehensive documentation including tax returns, bank statements, business records, and legal documents.",
            options: [
                { icon: '📄', text: 'Document checklist', action: 'email' },
                { icon: '🤝', text: 'Get documentation help', state: conversationStates.CONSULTATION },
                { icon: '🔙', text: 'Back to investment info', state: conversationStates.INVESTMENT }
            ]
        },
        [conversationStates.SPEED_UP]: {
            message: "While you can't skip USCIS processing times, you can: 1) Submit a complete, well-documented application (we help with this!), 2) Choose projects with strong job creation track records, 3) Respond quickly to any USCIS requests. Premium processing is not available for EB-5, but proper preparation significantly reduces delays and RFEs.",
            options: [
                { icon: '📋', text: 'Application preparation help', state: conversationStates.CONSULTATION },
                { icon: '⏱️', text: 'Back to timeline info', state: conversationStates.TIMELINE },
                { icon: '🔙', text: 'Main menu', state: conversationStates.INITIAL }
            ]
        },
        [conversationStates.WAITING_PERIOD]: {
            message: "During the waiting period, you can: 1) Apply for work authorization (EAD) and travel document (Advance Parole) after filing I-526E, 2) Live and work in the US once you receive conditional green card, 3) Your children can attend US schools, 4) Travel freely with proper documentation. We guide you through each stage!",
            options: [
                { icon: '💼', text: 'Work authorization details', state: conversationStates.CONSULTATION },
                { icon: '⏱️', text: 'Back to timeline info', state: conversationStates.TIMELINE },
                { icon: '🔙', text: 'Main menu', state: conversationStates.INITIAL }
            ]
        },
        [conversationStates.CHECK_ELIGIBILITY]: {
            message: "Let's check your eligibility! You're likely eligible if you: 1) Have $800K-$1.05M in lawfully obtained funds, 2) Can document the source of these funds, 3) Are willing to invest in a USCIS-approved project. No age, education, language, or business experience required! Schedule a free assessment to confirm.",
            options: [
                { icon: '📅', text: 'Free eligibility assessment', state: conversationStates.CONSULTATION },
                { icon: '✅', text: 'Back to eligibility info', state: conversationStates.ELIGIBILITY },
                { icon: '🔙', text: 'Main menu', state: conversationStates.INITIAL }
            ]
        },
        [conversationStates.FAMILY_MEMBERS]: {
            message: "Yes! Your spouse and unmarried children under 21 can be included in your EB-5 application at no additional investment cost. They'll receive conditional green cards with you and can live, study, and work in the US. This is one of the biggest advantages of EB-5 - your entire family gets US permanent residency!",
            options: [
                { icon: '👨‍👩‍👧‍👦', text: 'Family application process', state: conversationStates.CONSULTATION },
                { icon: '✅', text: 'Back to eligibility info', state: conversationStates.ELIGIBILITY },
                { icon: '🔙', text: 'Main menu', state: conversationStates.INITIAL }
            ]
        },
        [conversationStates.CURRENT_PROJECTS]: {
            message: "Our current portfolio includes: 1) Luxury hotel development in Florida TEA ($800K, 15 jobs/investor), 2) Mixed-use real estate in Texas TEA ($800K, 12 jobs/investor), 3) Infrastructure project in California TEA ($800K, 18 jobs/investor). All projects have strong financial backing, experienced developers, and clear job creation plans. Detailed project reports available upon request.",
            options: [
                { icon: '📊', text: 'Request project reports', action: 'email' },
                { icon: '📅', text: 'Schedule project review', state: conversationStates.CONSULTATION },
                { icon: '🔙', text: 'Back to projects info', state: conversationStates.PROJECTS }
            ]
        },
        [conversationStates.DUE_DILIGENCE]: {
            message: "Our rigorous due diligence process includes: 1) Financial analysis of developer and project, 2) Job creation methodology review, 3) Legal compliance verification, 4) Market feasibility study, 5) Third-party economist reports, 6) Site visits and inspections. We only present projects that meet our strict safety and success criteria. Your investment security is our top priority!",
            options: [
                { icon: '📋', text: 'View due diligence checklist', action: 'email' },
                { icon: '🏢', text: 'View vetted projects', state: conversationStates.CURRENT_PROJECTS },
                { icon: '🔙', text: 'Back to projects info', state: conversationStates.PROJECTS }
            ]
        }
    };

    // Add typing indicator
    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'chatbot-message bot typing-indicator';
        indicator.innerHTML = `
            <div class="message-bubble">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.appendChild(indicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return indicator;
    }

    // Add message with animation
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${isUser ? 'user' : 'bot'}`;
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(10px)';
        messageDiv.innerHTML = `<div class="message-bubble">${message}</div>`;
        
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.appendChild(messageDiv);
        
        // Animate in
        setTimeout(() => {
            messageDiv.style.transition = 'all 0.3s ease';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        }, 10);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Add option buttons
    function addOptions(options) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'chatbot-options';
        optionsDiv.style.opacity = '0';
        optionsDiv.style.transform = 'translateY(10px)';
        
        options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'chatbot-option-btn';
            button.innerHTML = `${option.icon} ${option.text}`;
            button.onclick = () => handleOptionClick(option);
            
            // Stagger animation
            button.style.opacity = '0';
            button.style.transform = 'translateY(10px)';
            setTimeout(() => {
                button.style.transition = 'all 0.3s ease';
                button.style.opacity = '1';
                button.style.transform = 'translateY(0)';
            }, 50 * index);
            
            optionsDiv.appendChild(button);
        });
        
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.appendChild(optionsDiv);
        
        // Animate container
        setTimeout(() => {
            optionsDiv.style.transition = 'all 0.3s ease';
            optionsDiv.style.opacity = '1';
            optionsDiv.style.transform = 'translateY(0)';
        }, 10);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle option click
    function handleOptionClick(option) {
        // Add user's choice as message
        addMessage(option.text, true);
        
        // Remove all option buttons
        document.querySelectorAll('.chatbot-options').forEach(el => el.remove());
        
        // Handle action or state change
        if (option.action) {
            handleAction(option.action);
        } else if (option.state) {
            setTimeout(() => {
                changeState(option.state);
            }, 500);
        }
    }

    // Handle special actions
    function handleAction(action) {
        const typingIndicator = showTypingIndicator();
        
        setTimeout(() => {
            typingIndicator.remove();
            
            switch(action) {
                case 'calendly':
                    addMessage("Opening Calendly to schedule your consultation...");
                    setTimeout(() => {
                        window.open('https://calendly.com', '_blank');
                        addMessage("Calendly opened in a new tab. If it didn't open, please check your popup blocker.");
                        setTimeout(() => changeState(conversationStates.INITIAL), 2000);
                    }, 1000);
                    break;
                    
                case 'whatsapp':
                    addMessage("Opening WhatsApp...");
                    setTimeout(() => {
                        window.open('https://wa.me/917979007970?text=Hi, I would like to know more about EB-5 visa services', '_blank');
                        addMessage("WhatsApp opened! If it didn't open, you can reach us at +91-7979007970");
                        setTimeout(() => changeState(conversationStates.INITIAL), 2000);
                    }, 1000);
                    break;
                    
                case 'email':
                    addMessage("You can email us at info@ekaeb5visa.com. We typically respond within 24 hours!");
                    setTimeout(() => changeState(conversationStates.INITIAL), 2000);
                    break;
            }
        }, 1000);
    }

    // Change conversation state
    function changeState(newState) {
        currentState = newState;
        const flow = conversationFlows[newState];
        
        if (flow) {
            const typingIndicator = showTypingIndicator();
            
            setTimeout(() => {
                typingIndicator.remove();
                addMessage(flow.message);
                
                setTimeout(() => {
                    if (flow.options) {
                        addOptions(flow.options);
                    }
                }, 500);
            }, 1000);
        }
    }

    // Handle text input (fallback)
    function handleTextInput(text) {
        const lowerText = text.toLowerCase();
        
        // Keyword detection
        if (lowerText.includes('cost') || lowerText.includes('price') || lowerText.includes('investment') || lowerText.includes('money')) {
            changeState(conversationStates.INVESTMENT);
        } else if (lowerText.includes('time') || lowerText.includes('long') || lowerText.includes('duration')) {
            changeState(conversationStates.TIMELINE);
        } else if (lowerText.includes('eligible') || lowerText.includes('qualify') || lowerText.includes('requirements')) {
            changeState(conversationStates.ELIGIBILITY);
        } else if (lowerText.includes('project') || lowerText.includes('investment options')) {
            changeState(conversationStates.PROJECTS);
        } else if (lowerText.includes('contact') || lowerText.includes('call') || lowerText.includes('consultation')) {
            changeState(conversationStates.CONSULTATION);
        } else {
            // Default response
            const typingIndicator = showTypingIndicator();
            setTimeout(() => {
                typingIndicator.remove();
                addMessage("I can help you with information about EB-5 investment requirements, processing timeline, eligibility criteria, project selection, and scheduling consultations. What would you like to know?");
                setTimeout(() => {
                    addOptions(conversationFlows[conversationStates.INITIAL].options);
                }, 500);
            }, 1000);
        }
    }

    // Initialize upgraded chatbot
    function initUpgradedChatbot() {
        // Add CSS for new features
        const style = document.createElement('style');
        style.textContent = `
            /* Typing indicator */
            .typing-indicator .message-bubble {
                padding: 1rem 1.5rem !important;
            }
            
            .typing-dots {
                display: flex;
                gap: 0.4rem;
                align-items: center;
            }
            
            .typing-dots span {
                width: 8px;
                height: 8px;
                background: var(--accent-teal);
                border-radius: 50%;
                animation: typing 1.4s infinite;
            }
            
            .typing-dots span:nth-child(2) {
                animation-delay: 0.2s;
            }
            
            .typing-dots span:nth-child(3) {
                animation-delay: 0.4s;
            }
            
            @keyframes typing {
                0%, 60%, 100% {
                    transform: translateY(0);
                    opacity: 0.7;
                }
                30% {
                    transform: translateY(-10px);
                    opacity: 1;
                }
            }
            
            /* Option buttons */
            .chatbot-options {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                margin: 1rem 0;
                padding: 0 0.5rem;
            }
            
            .chatbot-option-btn {
                background: white;
                border: 2px solid var(--accent-teal);
                color: var(--accent-teal);
                padding: 0.875rem 1.25rem;
                border-radius: 12px;
                font-weight: 600;
                font-size: 0.95rem;
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: left;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            }
            
            .chatbot-option-btn:hover {
                background: var(--accent-teal);
                color: white;
                transform: translateX(5px);
                box-shadow: 0 4px 12px rgba(90, 138, 135, 0.3);
            }
            
            .chatbot-option-btn:active {
                transform: translateX(3px) scale(0.98);
            }
            
            /* Pulsing chat button */
            .floating-chat {
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0%, 100% {
                    box-shadow: 0 0 0 0 rgba(90, 138, 135, 0.7);
                }
                50% {
                    box-shadow: 0 0 0 15px rgba(90, 138, 135, 0);
                }
            }
            
            /* Hide text input initially */
            .chatbot-input-area {
                display: none !important;
            }
            
            /* Smooth message animations */
            .chatbot-message {
                transition: all 0.3s ease;
            }
        `;
        document.head.appendChild(style);

        // Clear existing messages and start fresh
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML = '';
        
        // Start with initial state
        changeState(conversationStates.INITIAL);

        // Keep text input as fallback (but hidden by default)
        const chatInput = document.getElementById('chatInput');
        const chatSend = document.getElementById('chatSend');
        
        if (chatInput && chatSend) {
            const sendMessage = () => {
                const message = chatInput.value.trim();
                if (message) {
                    addMessage(message, true);
                    chatInput.value = '';
                    document.querySelectorAll('.chatbot-options').forEach(el => el.remove());
                    setTimeout(() => handleTextInput(message), 500);
                }
            };
            
            chatSend.onclick = sendMessage;
            chatInput.onkeypress = (e) => {
                if (e.key === 'Enter') sendMessage();
            };
        }
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initUpgradedChatbot);
    } else {
        initUpgradedChatbot();
    }
})();
