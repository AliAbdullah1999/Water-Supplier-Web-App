function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    for (const key in attributes) {
        if (key === 'class') {
            element.className = attributes[key];
        } else {
            element.setAttribute(key, attributes[key]);
        }
    }
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    return element;
}

const servicesSection = createElement('section', { id: 'services-section' }, [
    createElement('div', { class: 'services-container' }, [
        createElement('div', { class: 'card' }, [
            createElement('div', { class: 'card-header' }),
            createElement('div', { class: 'card-body' }, [
                createElement('p', {}, ["Being the best Water Tanker Supplier in the entire Riyadh covering areas of North Riyadh, Al-Rimal Al-Munisyah, Al-Qurtubah, Al-Yarmouk, Gharnata and Al-Qadsiyah. We are committed to providing our customers with the highest quality of fresh water available. Our 24/7 services make it easy for you to find Water Supply Tanker near you, at any time of the day or night."]),
                createElement('p', {}, ["At Riyadh Water Supply in Riyadh, we understand the importance of having access to clean and fresh water. That's why we take strict quality control measures to ensure that our water meets the highest standards of cleanliness and purity. Our pure water is sourced from the best sources and is tested regularly to guarantee its quality."])
            ])
        ]),
        createElement('div', { class: 'card arabic' }, [
            createElement('div', { class: 'card-header' }),
            createElement('div', { class: 'card-body' }, [
                createElement('p', {}, ["أن نكون أفضل مزود لصهاريج المياه في منطقة الرياض بأكملها والتي تغطي مناطق شمال الرياض والرمال والمونسية وقرطبة واليرموك وغرناطة والقادسية. نحن ملتزمون بتزويد عملائنا بأعلى مستويات الجودة من المياه العذبة المتاحة. خدماتنا المتوفرة على مدار الساعة طوال أيام الأسبوع تجعل من السهل عليك العثور على ناقلة إمداد المياه بالقرب منك، في أي وقت ليلاً أو نهارًا."]),
                createElement('p', {}, ["في شركة وايت ووتر موردي في الرياض، ندرك أهمية الوصول إلى المياه النظيفة والعذبة. ولهذا السبب نتخذ إجراءات صارمة لمراقبة الجودة للتأكد من أن مياهنا تلبي أعلى معايير النظافة والنقاء. يتم الحصول على مياهنا النقية من أفضل المصادر ويتم اختبارها بانتظام لضمان جودتها."])
            ])
        ])
    ])
]);

const servicesMainSection = createElement('section', { id: 'services' }, [
    createElement('h1', { class: 'section-header' }, ["Our Services"]),
    createElement('div', { class: 'services-container' }, [
        ...[
            {
                headerIcon: 'fas fa-home',
                headerText: 'Residential Services',
                items: [
                    ['fas fa-water', 'Emergency Water Supply'],
                    ['fas fa-swimmer', 'Swimming Pool Filling'],
                    ['fas fa-tint', 'Tank Filling'],
                    ['fas fa-seedling', 'Garden and Lawn Irrigation'],
                    ['fas fa-glass-water', 'Drinking Water Supply']
                ]
            },
            {
                headerIcon: 'fas fa-briefcase',
                headerText: 'Commercial Services',
                items: [
                    ['fas fa-building', 'Construction Site Water Supply'],
                    ['fas fa-calendar-alt', 'Event Water Supply'],
                    ['fas fa-hotel', 'Hotel and Restaurant Supply'],
                    ['fas fa-car', 'Water for Car Wash Stations'],
                    ['fas fa-snowflake', 'Cooling Tower and HVAC Support']
                ]
            },
            {
                headerIcon: 'fas fa-industry',
                headerText: 'Industrial Services',
                items: [
                    ['fas fa-cogs', 'Industrial Operations'],
                    ['fas fa-cloud', 'Dust Suppression'],
                    ['fas fa-fire-extinguisher', 'Firefighting Support'],
                    ['fas fa-tractor', 'Agricultural Irrigation'],
                    ['fas fa-road', 'Road Cleaning']
                ]
            },
            {
                headerIcon: 'fas fa-star',
                headerText: 'Specialized Services',
                items: [
                    ['fas fa-hand-holding-water', 'Potable Water Delivery'],
                    ['fas fa-clock', '24/7 Emergency Water Service'],
                    ['fas fa-calendar', 'Seasonal Services'],
                    ['fas fa-truck', 'Bulk Water Supply'],
                    ['fas fa-vial', 'Water Quality Testing']
                ]
            },
            {
                headerIcon: 'fas fa-leaf',
                headerText: 'Environmental Services',
                items: [
                    ['fas fa-recycle', 'Recycled Water Delivery'],
                    ['fas fa-cloud-rain', 'Rainwater Harvesting Tanks Filling']
                ]
            }
        ].map(service => 
            createElement('div', { class: 'card' }, [
                createElement('div', { class: 'card-header' }, [
                    createElement('i', { class: service.headerIcon }),
                    createElement('h2', {}, [service.headerText])
                ]),
                createElement('div', { class: 'card-body' }, [
                    createElement('ul', {}, service.items.map(item => 
                        createElement('li', {}, [
                            createElement('i', { class: item[0] }),
                            ` ${item[1]}`
                        ])
                    ))
                ])
            ])
        )
    ])
]);

const body = document.body;
body.appendChild(servicesSection);
body.appendChild(servicesMainSection);
