 
        // Certificate data structure with image placeholders
        // Replace these placeholder URLs with your actual certificate image URLs
        const certificateData = {
            'technology': {
                title: 'Technology & Professional Simulations',
                icon: 'fas fa-briefcase',
                certificates: [
                    {
                        name: 'Technology Job Simulation',
                        organization: 'Deloitte',
                        image:"./img/14.Deloitte_page-0001.jpg",
                        description: 'Professional technology job simulation program focusing on real-world industry challenges and solutions.'
                    }
                ]
            },
            'ai-ml': {
                title: 'Artificial Intelligence & Machine Learning',
                icon: 'fas fa-robot',
                certificates: [
                    {
                        name: 'Generative AI',
                        organization: 'LinkedIn Learning',
                        image: './img/3.CertificateOfCompletion_Generative AI The Evolution of Thoughtful Online Search 20-4-25_page-0001.jpg',
                        description: 'Comprehensive course on Generative AI technologies and applications.'
                    },
                    {
                        name: 'Introduction to Generative AI',
                        organization: 'IBM Skill Build',
                        image: './img/gen_ai_ibm.png',
                        description: 'Foundational course on Generative AI concepts and implementation.'
                    },
                    {
                        name: 'Machine Learning and Deep Learning',
                        organization: 'IBM Skill Build',
                        image: './img/ml.png',
                        description: 'Advanced machine learning and deep learning concepts and practical applications.'
                    },
                    {
                        name: 'Artificial Intelligence',
                        organization: 'IBM',
                        image: './img/ai ibm.png',
                        description: 'Comprehensive AI course covering algorithms, applications, and ethical considerations.'
                    }
                ]
            },
            'development': {
                title: 'Software Development',
                icon: 'fas fa-code',
                certificates: [
                    
                    {
                        name: 'Get Started with Android App Development',
                        organization: 'IBM',
                        image: './img/androidibm.jpg',
                        description: 'Comprehensive Android development course from basics to advanced concepts.'
                    },
                    {
                        name: 'Full Android Development Masterclass',
                        organization: 'Udemy',
                        image: './img/androidudemy.png',
                        description: 'Complete Android development masterclass covering all aspects of mobile app development.'
                    },
                    {
                        name: 'Python Complete Course',
                        organization: 'Udemy',
                        image: './img/pythonudemy.jpg',
                        description: 'Comprehensive Python programming course from beginner to advanced level.'
                    },
                    {
                        name: 'Flutter Development',
                        organization: 'Google Cloud',
                        image: './img/flutteribm.jpg',
                        description: 'Professional Flutter development course for cross-platform mobile applications.'
                    },
                     {
                        name: 'HTML/CSS',
                        organization: 'OpenWaever',
                        image: './img/html_css.png',
                        description: 'Comprehensive course on building responsive websites using HTML and CSS from scratch.'
                    }

                ]
            },
            'cloud': {
                title: 'Cloud & Data Analytics',
                icon: 'fas fa-cloud',
                certificates: [
                    {
                        name: 'Google Cloud Arcade Facilitator Program',
                        organization: 'Google Cloud',
                        image: './img/arcade.png',
                        description: 'Participant in Google Cloud Arcade Facilitator Program, gaining hands-on cloud experience.'
                    },
                    {
                        name: 'Data Visualisation: Empowering Business with Effective Insights',
                        organization: 'Tata',
                        image: 'img/tata.jpg',
                        description: 'Advanced data visualization techniques and business intelligence insights.'
                    }
                ]
            },
            'industry': {
                title: 'Industry Training & Internships',
                icon: 'fas fa-industry',
                certificates: [
                    {
                        name: 'Full Stack Developer Certificate',
                        organization: 'WhiteSton Info Tech',
                        image: './img/whiteStone.jpg',
                        description: '15-day intensive full-stack development internship certificate.'
                    },
                    {
                        name: 'Flutter Developer Certificate',
                        organization: 'Quicksend',
                        image: './img/internship certificate flutter oflline.jpg',
                        description: '15-day Flutter development internship completion certificate.'
                    },
                    {
                        name: 'AI/ML Internship Certificate',
                        organization: 'IBM (via Edunet Foundation)',
                        image: './img/aicte.jpg',
                        description: '1-month AI/ML internship completion certificate and training materials.'
                    },
                    {
                        name: 'Java Developer Certificate',
                        organization: 'ValueOfCodes',
                        image: 'img/vaultofcode.jpg',
                        description: '1-month Core Java development internship certificate.'
                    }
                ]
            }
        };

        // Function to open certificate modal
        function openCertificateModal(category) {
            const modal = document.getElementById('certificateImageModal');
            const modalTitle = document.getElementById('certificateModalTitle');
            const modalBody = document.getElementById('certificateModalBody');
            
            if (category === 'all') {
                showAllCertificates(modalTitle, modalBody);
            } else if (certificateData[category]) {
                showCategoryDetails(certificateData[category], modalTitle, modalBody);
            }
            
            const bootstrapModal = new bootstrap.Modal(modal);
            bootstrapModal.show();
        }

        // Function to show all certificates
        function showAllCertificates(modalTitle, modalBody) {
            modalTitle.innerHTML = '<i class="fas fa-medal me-2"></i>All Certificates & Achievements';
            
            let content = '<div class="certificate-grid">';
            
            Object.keys(certificateData).forEach(category => {
                const categoryData = certificateData[category];
                categoryData.certificates.forEach(cert => {
                    content += `
                        <div class="certificate-preview">
                            <img src="${cert.image}" class="certificate-thumbnail" alt="${cert.name}" 
                                 onclick="viewSingleCertificate('${cert.name}', '${cert.organization}', '${cert.image}', '${cert.description}')">
                            <h6 class="text-primary mt-2 mb-1">${cert.name}</h6>
                            <small class="text-white">${cert.organization}</small>
                            <button class="view-certificate-btn d-block mx-auto" 
                                    onclick="viewSingleCertificate('${cert.name}', '${cert.organization}', '${cert.image}', '${cert.description}')">
                                View Certificate
                            </button>
                        </div>
                    `;
                });
            });
            
            content += '</div>';
            content += `
                <div class="text-center mt-4">
                    <div class="achievement-badge">12+ Professional Certificates</div>
                    <div class="achievement-badge">4 Industry Internships</div>
                    <div class="achievement-badge">Multiple Platforms</div>
                </div>
            `;
            
            modalBody.innerHTML = content;
        }

        // Function to show category details
        function showCategoryDetails(categoryData, modalTitle, modalBody) {
            modalTitle.innerHTML = `<i class="${categoryData.icon} me-2"></i>${categoryData.title}`;
            
            let content = '<div class="certificate-list">';
            
            categoryData.certificates.forEach(cert => {
                content += `
                    <div class="certificate-item" onclick="viewSingleCertificate('${cert.name}', '${cert.organization}', '${cert.image}', '${cert.description}')">
                        <div class="row align-items-center">
                            <div class="col-md-3">
                                <img src="${cert.image}" class="certificate-thumbnail" alt="${cert.name}">
                            </div>
                            <div class="col-md-9">
                                <h6 class="text-primary mb-2">${cert.name}</h6>
                                <p class="mb-1"><strong>Organization:</strong> ${cert.organization}</p>
                                <p class="text-white mb-2">${cert.description}</p>
                                <button class="view-certificate-btn" onclick="event.stopPropagation(); viewSingleCertificate('${cert.name}', '${cert.organization}', '${cert.image}', '${cert.description}')">
                                    View Certificate
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            content += '</div>';
            modalBody.innerHTML = content;
        }

        // Function to view single certificate
        function viewSingleCertificate(name, organization, imageUrl, description) {
            const modal = document.getElementById('singleCertificateModal');
            const title = document.getElementById('singleCertificateTitle');
            const image = document.getElementById('singleCertificateImage');
            const desc = document.getElementById('singleCertificateDescription');
            
            title.textContent = name + ' - ' + organization;
            image.src = imageUrl;
            image.alt = name;
            desc.textContent = description;
            
            // Close the main certificate modal first
            const mainModal = bootstrap.Modal.getInstance(document.getElementById('certificateImageModal'));
            if (mainModal) {
                mainModal.hide();
            }
            
            // Show the single certificate modal
            const singleModal = new bootstrap.Modal(modal);
            singleModal.show();
        }

        // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.backdropFilter = 'blur(15px)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        });

        // Add active class to navigation links
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 200;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                    link.style.color = 'var(--primary-color)';
                } else {
                    link.style.color = 'var(--light-text)';
                }
            });
        });

        // Timeline animation trigger
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.animationDelay = `${index * 0.2}s`;
                item.classList.add('fade-in-up');
            }, 100);
        });

        // Floating elements animation
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `-${index + 1}s`;
        });

        // Add hover effects to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Typing effect for hero title (optional enhancement)
        const heroTitle = document.querySelector('.hero-title');
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let index = 0;
        function typeWriter() {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after page load
        window.addEventListener('load', () => {
            setTimeout(typeWriter, 1000);
        });

        // Certificate filtering functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        const certificateCards = document.querySelectorAll('.certificate-filter');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                certificateCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.5s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Console message for developers
        console.log(`
        🚀 Welcome to Naman's Portfolio!
        
        👨‍💻 Developer: Bhalani Naman Sureshbhai
        🏆 Achievement: Rank #1 in First Semester
        📊 CGPA: 8.5
        📱 Specialization: App Development (Flutter & Android)
        
        Looking for internship opportunities!
        Contact: namanbhalani05@gmail.com
        
        📜 Certificate Images: Replace placeholder URLs with actual certificate images in the certificateData object.
        `);

        // Instructions for adding actual certificate images
        console.log(`
        🔧 TO ADD YOUR CERTIFICATE IMAGES:
        
        1. Upload your certificate images to a hosting service (like GitHub, Cloudinary, or any image hosting)
        2. Replace the placeholder URLs in the certificateData object with your actual image URLs
        3. Update the image URLs in the format: 'https://your-domain.com/path-to-certificate.jpg'
        
        Example:
        image: 'https://github.com/yourusername/certificates/blob/main/deloitte-certificate.jpg?raw=true'
        
        The current placeholder images will be replaced with your actual certificates!
        `);
     function downloadResume() {
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = 'resume.pdf';
            link.download = 'resume.pdf';
            
            // Trigger the download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
