let animals = [
    {
    name: "Lion",
    title: "KING OF THE SAVANNA: THE LION",
    khmer: "សត្វតោ",
    category: "Mammals",
    image: "images/lion.jpg",

    quote: `
        The only cat species that regularly lives in stable
        family groups, built for power, strategy, and a roar
        that can shake the savanna.
    `,

    scientificName: "Panthera leo",

    habitat: `
        Grasslands, savannas, and open woodlands of Sub-Saharan
        Africa, with a small population in India's Gir Forest.
    `,

    status: "Vulnerable 🟠",

    lifespan: `
        10–14 years in the wild (up to 20 years in captivity)
    `,

    topSpeed: "Up to 80 km/h (50 mph) in short bursts",

    description: `
        Lions are the second-largest big cats in the world,
        surpassed only by tigers. Known for their powerful build,
        deep chests, and broad heads, they have muscular limbs
        built for tackling large prey.

        Male lions are easily recognized by their impressive
        manes. A mane can help protect the neck during fights
        between males, while its size and appearance can also
        provide information about a male's health and condition.

        Female lions, called lionesses, are generally smaller
        and sleeker than males. They do not usually have manes
        and are important hunters within the pride. Lionesses
        often work together, using teamwork and coordination
        when hunting.
    `,

    funFacts: [
        {
            title: "Thunderous Roar",
            text: `
                A lion's roar is extremely powerful and can be
                heard from several kilometers away. Lions use
                roaring to communicate, advertise their presence,
                and help members of their pride locate one another.
            `
        },

        {
            title: "The Sisterhood Rules",
            text: `
                A pride's core is usually made up of related
                females, such as mothers, daughters, sisters,
                and aunts. Female relationships are an important
                part of pride life.
            `
        },

        {
            title: "Teamwork Hunters",
            text: `
                Lionesses often cooperate when hunting. Different
                lions may approach prey from different directions,
                allowing the group to work together rather than
                relying on one hunter alone.
            `
        },

        {
            title: "Professional Sleepers",
            text: `
                Lions spend much of the day resting or sleeping
                to conserve energy. They are often more active
                during cooler periods, including nighttime,
                dawn, and dusk.
            `
        },

        {
            title: "Night Vision Boost",
            text: `
                Lions have adaptations that help them see in
                low-light conditions. A reflective layer behind
                the retina helps make better use of available
                light, which is useful for animals that are active
                at night.
            `
        }
    ],

    khmerTitle: "ស្តេចនៃវាលស្មៅ៖ សត្វតោ",

    khmerQuote: `
        សត្វឆ្មាព្រៃដែលរស់នៅជាក្រុមគ្រួសារដែលមានស្ថិរភាព
        និងល្បីដោយសារកម្លាំង ការសហការគ្នា និងសំឡេងគ្រហឹម
        ដ៏ខ្លាំងរបស់វា។
    `,

    khmerDescription: `
        សត្វតោគឺជាសត្វឆ្មាព្រៃដែលមានទំហំធំជាងគេលំដាប់ទីពីរ
        បន្ទាប់ពីសត្វខ្លា។ ពួកវាមានរាងកាយរឹងមាំ ទ្រូងធំ
        និងក្បាលទូលាយ។ ជើងដែលមានសាច់ដុំរបស់ពួកវាជួយឱ្យ
        ពួកវាអាចប្រមាញ់ និងទប់ទល់ជាមួយសត្វដែលមានទំហំធំ។

        តោឈ្មោលពេញវ័យត្រូវបានស្គាល់យ៉ាងងាយតាមរយៈរោម
        ជុំវិញក្បាល និងក។ រោមនេះអាចជួយការពារកនៅពេល
        តោឈ្មោលប្រយុទ្ធគ្នា ហើយទំហំ និងរូបរាងរបស់រោមក៏អាច
        ផ្តល់ព័ត៌មានអំពីសុខភាព និងស្ថានភាពរបស់តោឈ្មោលផងដែរ។

        តោញីជាទូទៅមានទំហំតូចជាង និងមានរាងស្រឡូនជាងតោឈ្មោល។
        ពួកវាជាអ្នកប្រមាញ់ដ៏សំខាន់នៅក្នុងក្រុម ហើយជាញឹកញាប់
        ធ្វើការរួមគ្នាដោយប្រើការសហការគ្នា និងយុទ្ធសាស្ត្រ
        នៅពេលប្រមាញ់។
    `,

    khmerFunFacts: [
        {
            title: "សំឡេងគ្រហឹមដ៏ខ្លាំង",
            text: `
                សំឡេងគ្រហឹមរបស់សត្វតោមានកម្លាំងខ្លាំងណាស់
                ហើយអាចឮពីចម្ងាយជាច្រើនគីឡូម៉ែត្រ។ សត្វតោប្រើ
                សំឡេងនេះដើម្បីទាក់ទងគ្នា បង្ហាញវត្តមាន និងជួយ
                សមាជិកក្នុងក្រុមស្វែងរកគ្នា។
            `
        },

        {
            title: "ក្រុមតោញី",
            text: `
                ស្នូលនៃក្រុមតោជាញឹកញាប់មានតោញីដែលជាសាច់ញាតិ
                ដូចជា ម្តាយ កូនស្រី បងប្អូនស្រី និងមីង។ ទំនាក់ទំនង
                រវាងតោញីមានសារៈសំខាន់ចំពោះជីវិតក្នុងក្រុម។
            `
        },

        {
            title: "ការប្រមាញ់ជាក្រុម",
            text: `
                តោញីជាញឹកញាប់សហការគ្នានៅពេលប្រមាញ់។
                តោនីមួយៗអាចចូលទៅជិតសត្វចំណីពីទិសដៅផ្សេងៗ
                ដែលធ្វើឱ្យក្រុមអាចប្រមាញ់បានមានប្រសិទ្ធភាពជាង
                ការប្រមាញ់តែម្នាក់ឯង។
            `
        },

        {
            title: "អ្នកចូលចិត្តគេង",
            text: `
                សត្វតោចំណាយពេលជាច្រើនក្នុងមួយថ្ងៃសម្រាក
                ឬគេង ដើម្បីរក្សាថាមពល។ ពួកវាមានសកម្មភាពច្រើន
                នៅពេលអាកាសធាតុត្រជាក់ ដូចជាពេលយប់ ពេលព្រឹក
                ព្រលឹម និងពេលល្ងាច។
            `
        },

        {
            title: "ការមើលឃើញនៅពេលយប់",
            text: `
                សត្វតោមានលក្ខណៈពិសេសដែលជួយឱ្យពួកវាមើលឃើញ
                ក្នុងពន្លឺតិច។ ស្រទាប់ឆ្លុះពន្លឺនៅខាងក្រោយរីទីណា
                ជួយឱ្យពួកវាប្រើប្រាស់ពន្លឺដែលមានបានកាន់តែប្រសើរ។
            `
        }
    ]
},

    {
    name: "Tiger",
    title: "THE SILENT SHADOW: THE TIGER",
    khmer: "ខ្លា",
    category: "Mammals",
    image: "images/tiger.jpg",

    quote: `
        The world's largest wild cat, an apex predator built
        for camouflage, immense power, and remarkable stealth.
    `,

    scientificName: "Panthera tigris",

    habitat: `
        Tropical rainforests, mangrove swamps, grasslands,
        and snowy forests across parts of Asia.
    `,

    status: "Endangered 🔴",

    lifespan: `
        10–15 years in the wild (up to 20 years in captivity)
    `,

    topSpeed: "Up to 65 km/h (40 mph) in short bursts",

    description: `
        Tigers are the largest of all wild cats. They are
        instantly recognizable by their reddish-orange coats,
        white undersides, and distinctive dark vertical stripes.

        Their bodies are built for power. Tigers have strong
        shoulders, muscular forelimbs, large paws, and retractable
        claws that help them grip and bring down heavy prey.

        Unlike lions, tigers generally live alone. Each tiger
        uses a large territory and spends much of its time
        moving quietly through forests, grasslands, wetlands,
        and other habitats.

        Tigers are apex predators. Rather than chasing prey over
        long distances, they often rely on camouflage, patience,
        dense vegetation, and surprise. Their striped coats help
        break up their outline, making them difficult to see among
        shadows, grass, and vegetation.
    `,

    funFacts: [
        {
            title: "Striped Skin, Not Just Fur",
            text: `
                A tiger's stripe pattern is not only found in its
                fur. The skin underneath is also patterned, meaning
                the stripes remain visible even if the fur is removed.
            `
        },

        {
            title: "Fingerprint-Unique Patterns",
            text: `
                Every tiger has its own distinctive stripe pattern.
                Researchers can use these patterns to help identify
                individual tigers in the wild.
            `
        },

        {
            title: "Master Swimmers",
            text: `
                Unlike many domestic cats, tigers are excellent
                swimmers and often enter water to cool themselves,
                play, or cross rivers. Some tigers can swim several
                kilometers when necessary.
            `
        },

        {
            title: "The Mysterious White Spots",
            text: `
                Tigers have distinctive white spots on the backs
                of their ears. These markings may help tigers
                communicate visually, especially between mothers
                and cubs.
            `
        },

        {
            title: "Powerful Vocalizations",
            text: `
                Tigers use several different sounds to communicate,
                including roars, growls, chuffs, and other calls.
                Some of their vocalizations contain very low
                frequencies that can travel through dense habitats.
            `
        }
    ],

    khmerTitle: "ស្រមោលស្ងាត់៖ សត្វខ្លា",

    khmerQuote: `
        សត្វឆ្មាព្រៃដ៏ធំបំផុតមួយក្នុងពិភពលោក ដែលមានរាងកាយ
        ដ៏ខ្លាំងមាំ និងមានសមត្ថភាពលាក់ខ្លួនយ៉ាងអស្ចារ្យ។
    `,

    khmerDescription: `
        សត្វខ្លាគឺជាសត្វឆ្មាព្រៃដែលមានទំហំធំបំផុតក្នុងពិភពលោក។
        ពួកវាអាចសម្គាល់បានយ៉ាងងាយតាមរយៈរោមពណ៌ទឹកក្រូចក្រហម
        ផ្នែកខាងក្រោមពណ៌ស និងឆ្នូតពណ៌ខ្មៅបញ្ឈរដែលមានលក្ខណៈពិសេស។

        រាងកាយរបស់សត្វខ្លាត្រូវបានបង្កើតឡើងសម្រាប់កម្លាំង។
        ពួកវាមានស្មារឹងមាំ ជើងមុខមានសាច់ដុំខ្លាំង បាតជើងធំ
        និងក្រញ៉ាំដែលអាចដកចូលបាន ដែលជួយឱ្យពួកវាចាប់សត្វចំណី
        និងទប់សត្វដែលមានទំហំធំ។

        មិនដូចសត្វតោទេ សត្វខ្លាជាទូទៅរស់នៅតែម្នាក់ឯង។
        សត្វខ្លានីមួយៗប្រើប្រាស់តំបន់រស់នៅដ៏ធំមួយ ហើយចំណាយ
        ពេលជាច្រើនដើរយ៉ាងស្ងាត់តាមព្រៃ វាលស្មៅ តំបន់សើម
        និងទីជម្រកផ្សេងៗ។

        សត្វខ្លាគឺជាអ្នកប្រមាញ់កំពូលនៅក្នុងប្រព័ន្ធអេកូឡូស៊ី។
        ជំនួសឱ្យការដេញចាប់សត្វចំណីក្នុងចម្ងាយឆ្ងាយ ពួកវា
        ជាញឹកញាប់ប្រើការលាក់ខ្លួន ការអត់ធ្មត់ រុក្ខជាតិដ៏ក្រាស់
        និងការវាយប្រហារដោយភ្ញាក់ផ្អើល។ ឆ្នូតរបស់វាជួយបំបែក
        រូបរាងរាងកាយនៅក្នុងស្រមោល ស្មៅ និងរុក្ខជាតិ។
    `,

    khmerFunFacts: [
        {
            title: "ឆ្នូតនៅលើស្បែក",
            text: `
                លំនាំឆ្នូតរបស់សត្វខ្លាមិនមានតែនៅលើរោមប៉ុណ្ណោះទេ។
                ស្បែកនៅខាងក្រោមក៏មានលំនាំផងដែរ ដូច្នេះឆ្នូតនៅតែ
                អាចមើលឃើញ ប្រសិនបើរោមត្រូវបានដកចេញ។
            `
        },

        {
            title: "ឆ្នូតមានលក្ខណៈពិសេស",
            text: `
                សត្វខ្លានីមួយៗមានលំនាំឆ្នូតខុសគ្នា។ អ្នកស្រាវជ្រាវ
                អាចប្រើលំនាំទាំងនេះដើម្បីជួយសម្គាល់សត្វខ្លា
                នីមួយៗនៅក្នុងធម្មជាតិ។
            `
        },

        {
            title: "អ្នកហែលទឹកដ៏ពូកែ",
            text: `
                សត្វខ្លាគឺជាអ្នកហែលទឹកដ៏ល្អ ហើយពួកវាអាចចូលទៅក្នុងទឹក
                ដើម្បីបន្ថយកម្ដៅ លេង ឬឆ្លងកាត់ទន្លេ។ សត្វខ្លាខ្លះ
                អាចហែលបានចម្ងាយជាច្រើនគីឡូម៉ែត្រ នៅពេលចាំបាច់។
            `
        },

        {
            title: "ចំណុចពណ៌សដ៏គួរឱ្យចាប់អារម្មណ៍",
            text: `
                សត្វខ្លាមានចំណុចពណ៌សនៅផ្នែកខាងក្រោយត្រចៀក។
                សញ្ញាទាំងនេះអាចជួយក្នុងការទាក់ទងតាមរយៈការមើលឃើញ
                ជាពិសេសរវាងមេ និងកូន។
            `
        },

        {
            title: "សំឡេងដ៏មានកម្លាំង",
            text: `
                សត្វខ្លាប្រើសំឡេងជាច្រើនប្រភេទដើម្បីទាក់ទងគ្នា
                រួមមានសំឡេងគ្រហឹម សំឡេងគ្រហក និងសំឡេងផ្សេងៗ។
                សំឡេងខ្លះមានប្រេកង់ទាបខ្លាំង ហើយអាចធ្វើដំណើរ
                បានឆ្ងាយនៅក្នុងទីជម្រកដែលមានរុក្ខជាតិក្រាស់។
            `
        }
    ]
},

{
    name: "Elephant",
    title: "THE GENTLE GIANT: THE ELEPHANT",
    khmer: "ដំរី",
    category: "Mammals",
    image: "images/elephant.jpg",

    quote: `
        Earth's largest land mammal, famous for its intelligence,
        complex communication, powerful body, and remarkably strong
        social bonds.
    `,

    scientificName: `
        Loxodonta africana (African Savanna),
        Loxodonta cyclotis (African Forest),
        Elephas maximus (Asian)
    `,

    habitat: `
        Savannas, forests, deserts, and marshes across
        Sub-Saharan Africa and South and Southeast Asia.
    `,

    status: "Endangered 🔴 to Vulnerable 🟠",

    lifespan: `
        About 60–70 years in the wild
    `,

    topSpeed: "Up to 40 km/h (25 mph) when charging",

    description: `
        Elephants are the largest living land animals. Adult males
        can weigh several thousand kilograms and have enormous,
        powerful bodies. They have thick gray skin, large ears,
        and long tusks that are actually modified upper incisor teeth.

        One of the elephant's most remarkable features is its trunk.
        The trunk is a combination of the nose and upper lip and
        contains tens of thousands of muscle units. It can be used
        for breathing, smelling, drinking, touching, grabbing food,
        moving objects, and communicating with other elephants.

        Elephants are highly social animals. Female elephants and
        their young usually live in family groups led by an older
        female called a matriarch. The matriarch's experience can
        help the group find food and water and respond to danger.

        Elephant families can develop strong and lasting social
        relationships. They communicate using sounds, body movements,
        touch, and low-frequency calls that can travel long distances.
    `,

    funFacts: [
        {
            title: "The Incredible Trunk",
            text: `
                An elephant's trunk contains tens of thousands of
                muscle units and has no bones. It is strong enough
                to move heavy objects, yet sensitive enough to perform
                delicate tasks such as picking up small pieces of food.
            `
        },

        {
            title: "Hearing Through the Ground",
            text: `
                Elephants can communicate using very low-frequency
                sounds. Vibrations can also travel through the ground,
                and elephants are able to detect certain signals
                through sensitive structures in their feet and body.
            `
        },

        {
            title: "Built-in Sunscreen",
            text: `
                Elephants regularly cover themselves with dust or
                mud. This helps protect their skin from sunlight,
                heat, and irritating insects. Mud can act like a
                natural protective coating as it dries.
            `
        },

        {
            title: "A Matriarch's Memory",
            text: `
                Older female elephants can play an important role
                in remembering routes, water sources, and places
                where food can be found. During difficult conditions,
                this experience can be extremely valuable to the herd.
            `
        },

        {
            title: "Left-Tusked or Right-Tusked",
            text: `
                Elephants can develop a preference for using one
                tusk more than the other. The preferred tusk may
                become more worn over time from digging, stripping
                bark, and moving objects.
            `
        }
    ],

    khmerTitle: "យក្សដ៏ទន់ភ្លន់៖ សត្វដំរី",

    khmerQuote: `
        សត្វថនិកសត្វដែលរស់នៅលើគោកមានទំហំធំបំផុតក្នុងពិភពលោក
        ដែលល្បីដោយសារភាពឆ្លាតវៃ ការទាក់ទងគ្នាដ៏ស្មុគស្មាញ
        កម្លាំងដ៏ខ្លាំង និងទំនាក់ទំនងសង្គមដ៏រឹងមាំ។
    `,

    khmerDescription: `
        សត្វដំរីគឺជាសត្វដែលរស់នៅលើគោកមានទំហំធំបំផុតក្នុងពិភពលោក។
        ដំរីឈ្មោលពេញវ័យអាចមានទម្ងន់រាប់ពាន់គីឡូក្រាម ហើយមាន
        រាងកាយធំ និងរឹងមាំ។ ពួកវាមានស្បែកពណ៌ប្រផេះក្រាស់
        ត្រចៀកធំ និងភ្លុកវែងដែលជាធ្មេញមុខផ្នែកខាងលើ
        ដែលបានវិវត្តទៅជារូបរាងពិសេស។

        លក្ខណៈពិសេសមួយដែលគួរឱ្យចាប់អារម្មណ៍បំផុតរបស់សត្វដំរី
        គឺប្រមោយ។ ប្រមោយគឺជាផ្នែកដែលកើតចេញពីច្រមុះ និងបបូរមាត់
        ខាងលើ ហើយមានសាច់ដុំជាច្រើនម៉ឺនផ្នែក។ វាអាចប្រើសម្រាប់
        ដកដង្ហើម ហិតក្លិន ផឹកទឹក ប៉ះ ស្ទាប ចាប់អាហារ
        ផ្លាស់ទីវត្ថុ និងទាក់ទងជាមួយដំរីផ្សេងទៀត។

        សត្វដំរីគឺជាសត្វដែលចូលចិត្តរស់នៅជាសង្គម។ ដំរីញី
        និងកូនដំរីជាទូទៅរស់នៅជាក្រុមគ្រួសារ ដែលដឹកនាំដោយ
        ដំរីញីចាស់មួយក្បាលដែលហៅថា matriarch។ បទពិសោធន៍
        របស់ដំរីញីចាស់អាចជួយក្រុមក្នុងការស្វែងរកអាហារ ទឹក
        និងការឆ្លើយតបទៅនឹងគ្រោះថ្នាក់។

        ក្រុមគ្រួសារដំរីអាចបង្កើតទំនាក់ទំនងសង្គមដ៏រឹងមាំ
        និងយូរអង្វែង។ ពួកវាទាក់ទងគ្នាតាមរយៈសំឡេង ចលនារាងកាយ
        ការប៉ះ និងសំឡេងប្រេកង់ទាបដែលអាចធ្វើដំណើរបានឆ្ងាយ។
    `,

    khmerFunFacts: [
        {
            title: "ប្រមោយដ៏អស្ចារ្យ",
            text: `
                ប្រមោយរបស់សត្វដំរីមានសាច់ដុំជាច្រើនម៉ឺនផ្នែក
                ហើយគ្មានឆ្អឹងនៅខាងក្នុងទេ។ វាមានកម្លាំងគ្រប់គ្រាន់
                ដើម្បីផ្លាស់ទីវត្ថុធ្ងន់ៗ ប៉ុន្តែក៏អាចធ្វើកិច្ចការដ៏
                ទន់ភ្លន់ ដូចជាចាប់អាហារដុំតូចៗបានផងដែរ។
            `
        },

        {
            title: "ការស្តាប់រំញ័រពីដី",
            text: `
                សត្វដំរីអាចទាក់ទងគ្នាតាមរយៈសំឡេងប្រេកង់ទាបខ្លាំង។
                រំញ័រមួយចំនួនក៏អាចធ្វើដំណើរតាមដី ហើយដំរីអាច
                ទទួលស្គាល់សញ្ញាមួយចំនួនតាមរយៈផ្នែកដែលមាន
                ភាពរសើបនៅជើង និងរាងកាយរបស់ពួកវា។
            `
        },

        {
            title: "ឡេការពារកម្តៅពីធម្មជាតិ",
            text: `
                សត្វដំរីជាញឹកញាប់បោះធូលី ឬលាបភក់លើរាងកាយ។
                វាជួយការពារស្បែកពីពន្លឺព្រះអាទិត្យ កម្ដៅ
                និងសត្វល្អិតដែលអាចរំខាន។ នៅពេលភក់ស្ងួត
                វាអាចបង្កើតជាស្រទាប់ការពារធម្មជាតិ។
            `
        },

        {
            title: "ការចងចាំរបស់ដំរីញីចាស់",
            text: `
                ដំរីញីដែលមានអាយុច្រើនអាចមានតួនាទីសំខាន់ក្នុង
                ការចងចាំផ្លូវ ប្រភពទឹក និងទីកន្លែងដែលមានអាហារ។
                នៅពេលមានស្ថានភាពលំបាក បទពិសោធន៍របស់វា
                អាចមានតម្លៃយ៉ាងខ្លាំងសម្រាប់ក្រុម។
            `
        },

        {
            title: "ចូលចិត្តប្រើភ្លុកមួយជាងមួយ",
            text: `
                សត្វដំរីអាចមានទំនោរប្រើភ្លុកមួយច្រើនជាងភ្លុកម្ខាងទៀត។
                ភ្លុកដែលត្រូវបានប្រើជាញឹកញាប់អាចមានស្នាមពាក់
                និងសឹកច្រើនជាង ដោយសារការជីក កកិតសំបកឈើ
                និងផ្លាស់ទីវត្ថុផ្សេងៗ។
            `
        }
    ]
},

{
    name: "Giraffe",
    title: "THE HIGH-ALTITUDE HERBIVORE: THE GIRAFFE",
    khmer: "សត្វកវែង",
    category: "Mammals",
    image: "images/giraffe.jpg",

    quote: `
        The tallest living land animal on Earth, built with
        remarkable adaptations for reaching high vegetation,
        managing blood flow, and seeing across the savanna.
    `,

    scientificName: "Giraffa camelopardalis",

    habitat: `
        Savannas, scrublands, and open woodlands of
        Sub-Saharan Africa.
    `,

    status: "Vulnerable 🟠",

    lifespan: `
        About 20–25 years in the wild
    `,

    topSpeed: "Up to 60 km/h (37 mph) over short distances",

    description: `
        Giraffes are instantly recognizable because of their
        extraordinary height. They can reach around 5 meters
        or more in height, making them the tallest living land
        animals on Earth.

        Their bodies are specially adapted for browsing high
        vegetation. They have extremely long legs, a long neck,
        and a patterned coat made up of irregular dark patches
        separated by lighter areas.

        Both male and female giraffes have skin-covered horns
        called ossicones. Males generally become larger and may
        use their necks and heads during contests with other males.

        Giraffes are herbivores and spend much of their time
        feeding on leaves, shoots, and other vegetation. Their
        height allows them to reach food that many other
        herbivores cannot easily access, especially leaves from
        trees such as acacias.
    `,

    funFacts: [
        {
            title: "Seven Neck Vertebrae",
            text: `
                A giraffe can have a neck around 2 meters long,
                yet it has only seven cervical vertebrae, exactly
                the same number found in humans. The difference is
                that each giraffe neck vertebra is extremely large
                and elongated.
            `
        },

        {
            title: "The Incredible Tongue",
            text: `
                A giraffe's tongue can grow to around 45–50
                centimeters long. It is strong and flexible enough
                to grasp leaves and pull them from branches,
                even when surrounded by sharp thorns.
            `
        },

        {
            title: "The Super-Strong Heart",
            text: `
                A giraffe's heart is large and powerful because
                it must pump blood up its long neck to reach the
                brain. Its cardiovascular system has specialized
                adaptations that help control blood pressure and
                blood flow when the giraffe moves its head.
            `
        },

        {
            title: "Power Nap Specialists",
            text: `
                Giraffes sleep for relatively short periods compared
                with many other mammals. They may sleep in several
                short periods throughout the day and night, helping
                them remain alert to possible predators.
            `
        },

        {
            title: "A Powerful Kick",
            text: `
                A giraffe may look peaceful, but its long legs can
                deliver extremely powerful kicks. A threatened
                giraffe can use its legs as a powerful defense
                against predators such as lions.
            `
        }
    ],

    khmerTitle: "សត្វស៊ីស្មៅដែលមានកម្ពស់ខ្ពស់៖ សត្វកវែង",

    khmerQuote: `
        សត្វដែលរស់នៅលើគោកមានកម្ពស់ខ្ពស់បំផុតក្នុងពិភពលោក
        ដែលមានលក្ខណៈពិសេសជាច្រើនសម្រាប់ស៊ីស្លឹកឈើខ្ពស់ៗ
        គ្រប់គ្រងចរន្តឈាម និងមើលឃើញបានឆ្ងាយនៅលើវាលស្មៅ។
    `,

    khmerDescription: `
        សត្វកវែងអាចសម្គាល់បានយ៉ាងងាយស្រួលដោយសារកម្ពស់
        ដ៏អស្ចារ្យរបស់វា។ ពួកវាអាចមានកម្ពស់ប្រហែល ៥ ម៉ែត្រ
        ឬច្រើនជាងនេះ ដែលធ្វើឱ្យវាក្លាយជាសត្វដែលរស់នៅលើគោក
        មានកម្ពស់ខ្ពស់បំផុតក្នុងពិភពលោក។

        រាងកាយរបស់សត្វកវែងត្រូវបានសម្របខ្លួនយ៉ាងពិសេស
        សម្រាប់ស៊ីរុក្ខជាតិដែលនៅកម្ពស់ខ្ពស់។ ពួកវាមានជើងវែង
        ក វែង និងរោមដែលមានលំនាំជាចំណុចពណ៌ងងឹត
        ដែលបំបែកដោយផ្នែកពណ៌ស្រាលជាង។

        សត្វកវែងឈ្មោល និងញីសុទ្ធតែមានស្នែងតូចៗដែលគ្របដណ្តប់
        ដោយស្បែក ហៅថា ossicones។ សត្វកវែងឈ្មោលជាទូទៅ
        មានទំហំធំជាង ហើយអាចប្រើក និងក្បាលក្នុងការប្រកួត
        ជាមួយសត្វឈ្មោលដទៃទៀត។

        សត្វកវែងជាសត្វស៊ីរុក្ខជាតិ ហើយចំណាយពេលជាច្រើន
        ស៊ីស្លឹក ពន្លក និងរុក្ខជាតិផ្សេងៗ។ កម្ពស់របស់វាអនុញ្ញាត
        ឱ្យវាឈានដល់អាហារដែលសត្វស៊ីរុក្ខជាតិជាច្រើនផ្សេងទៀត
        មិនអាចស៊ីបានងាយ ជាពិសេសស្លឹកពីដើមឈើដូចជា acacia។
    `,

    khmerFunFacts: [
        {
            title: "កវាមានឆ្អឹងក ៧",
            text: `
                ទោះបីករបស់សត្វកវែងអាចមានប្រវែងប្រហែល ២ ម៉ែត្រ
                ក៏ដោយ វាមានឆ្អឹងកចំនួនតែ ៧ ដុំប៉ុណ្ណោះ ដែលដូចគ្នា
                នឹងមនុស្ស។ ភាពខុសគ្នាគឺឆ្អឹងករបស់សត្វកវែងមាន
                ទំហំធំ និងវែងជាងធម្មតា។
            `
        },

        {
            title: "អណ្ដាតដ៏អស្ចារ្យ",
            text: `
                អណ្ដាតរបស់សត្វកវែងអាចមានប្រវែងប្រហែល ៤៥–៥០
                សង់ទីម៉ែត្រ។ វាមានភាពរឹងមាំ និងអាចបត់បែនបាន
                ដែលអាចជួយឱ្យវាចាប់ស្លឹក និងទាញស្លឹកចេញពីមែកឈើ
                ទោះបីមានបន្លាមុតនៅជុំវិញក៏ដោយ។
            `
        },

        {
            title: "បេះដូងដ៏រឹងមាំ",
            text: `
                បេះដូងរបស់សត្វកវែងមានទំហំធំ និងមានកម្លាំងខ្លាំង
                ព្រោះវាត្រូវបូមឈាមឡើងតាមកដ៏វែងទៅកាន់ខួរក្បាល។
                ប្រព័ន្ធសរសៃឈាមរបស់វាមានការសម្របខ្លួនពិសេស
                ដើម្បីជួយគ្រប់គ្រងសម្ពាធឈាម និងលំហូរឈាម
                នៅពេលវាផ្លាស់ទីក្បាល។
            `
        },

        {
            title: "អ្នកគេងរយៈពេលខ្លី",
            text: `
                សត្វកវែងគេងក្នុងរយៈពេលខ្លីជាងសត្វថនិកសត្វ
                ជាច្រើនប្រភេទ។ ពួកវាអាចគេងជាច្រើនដងក្នុង
                រយៈពេលខ្លីៗទាំងពេលថ្ងៃ និងពេលយប់ ដែលជួយឱ្យ
                ពួកវានៅតែមានការប្រុងប្រយ័ត្នចំពោះសត្វប្រមាញ់។
            `
        },

        {
            title: "ការទាត់ដ៏មានកម្លាំង",
            text: `
                ទោះបីសត្វកវែងមើលទៅស្ងប់ស្ងាត់ក៏ដោយ ជើងវែងរបស់វា
                អាចទាត់បានយ៉ាងខ្លាំង។ នៅពេលមានការគំរាមកំហែង
                សត្វកវែងអាចប្រើជើងរបស់វាជាអាវុធការពារដ៏មាន
                ប្រសិទ្ធភាពប្រឆាំងនឹងសត្វប្រមាញ់ ដូចជាសត្វតោ។
            `
        }
    ]
},

{
    name: "Bear",
    title: "THE FOREST TITAN: THE BEAR",
    khmer: "សត្វខ្លាឃ្មុំ",
    category: "Mammals",
    image: "images/bear.jpg",

    quote: `
        An exceptionally adaptable force of nature, combining
        massive strength, high intelligence, and specialized
        survival traits across extreme environments.
    `,

    scientificName: `
        Ursidae (8 living species, including Grizzly,
        Polar Bear, and Giant Panda)
    `,

    habitat: `
        Forests, mountains, tundra, grasslands, and sea ice
        across the Americas, Europe, and Asia.
    `,

    status: `
        Varies by species: Grizzly/Black Bear: Least Concern 🟢 |
        Polar Bear/Giant Panda/Sloth Bear: Vulnerable 🟠
    `,

    lifespan: `
        About 20–30 years in the wild
    `,

    topSpeed: "Up to 56 km/h (35 mph) in short sprints",

    description: `
        Bears are large mammals characterized by stocky bodies,
        powerful limbs, non-retractable claws, and thick fur coats.
        Although they belong to the order Carnivora, most bear
        species are opportunistic omnivores.

        Depending on the species and environment, bears may eat
        roots, nuts, berries, insects, fish, and meat. Their keen
        senses help them locate food across large areas.

        Bears possess powerful shoulder muscles. In species such
        as the Grizzly Bear, these muscles can form a noticeable
        hump over the shoulders. This strength helps bears dig,
        move heavy objects, search for food, and travel through
        difficult environments.

        Different bear species have developed remarkable adaptations
        for their environments. Polar Bears are highly adapted to
        life around Arctic sea ice, while Giant Pandas have specialized
        adaptations for feeding on bamboo. This variety makes bears
        one of the most adaptable groups of large land mammals.
    `,

    funFacts: [
        {
            title: "Supercharged Sense of Smell",
            text: `
                Bears have an exceptionally powerful sense of smell.
                Their noses help them locate food from long distances,
                making smell one of their most important tools for
                surviving and finding resources.
            `
        },

        {
            title: "The Hibernation Super-Body",
            text: `
                Some bears can spend months in winter dormancy
                without eating or drinking. During this period,
                their bodies undergo remarkable changes that allow
                them to conserve energy and maintain important
                body functions.
            `
        },

        {
            title: "The Panda's Sixth Digit",
            text: `
                Giant Pandas have a specialized wrist bone that
                functions like a thumb. This pseudo-thumb helps
                them grip and manipulate bamboo stalks while feeding.
            `
        },

        {
            title: "Deceptively Fast",
            text: `
                Bears may look bulky and slow, but they can move
                surprisingly quickly. Some species can reach speeds
                of around 56 km/h in short bursts, making them much
                faster than their appearance might suggest.
            `
        },

        {
            title: "Smart Problem Solvers",
            text: `
                Bears are highly intelligent animals capable of
                learning from their surroundings and solving problems.
                Their intelligence helps them find food, navigate
                difficult environments, and adapt to changing conditions.
            `
        }
    ],

    khmerTitle: "យក្សនៃព្រៃ៖ សត្វខ្លាឃ្មុំ",

    khmerQuote: `
        សត្វដែលអាចសម្របខ្លួនបានយ៉ាងអស្ចារ្យ ដោយរួមបញ្ចូល
        កម្លាំងដ៏ខ្លាំងក្លា ភាពឆ្លាតវៃខ្ពស់ និងលក្ខណៈពិសេស
        សម្រាប់ការរស់រានមានជីវិតនៅក្នុងបរិស្ថានជាច្រើន។
    `,

    khmerDescription: `
        សត្វខ្លាឃ្មុំគឺជាសត្វថនិកសត្វដែលមានរាងកាយធំ
        រាងកាយមូលក្រាស់ ជើងមានកម្លាំង ក្រញ៉ាំដែលមិនអាច
        ដកចូលបាន និងរោមក្រាស់។ ទោះបីពួកវាស្ថិតនៅក្នុង
        លំដាប់ Carnivora ដែលមានន័យថាជាក្រុមសត្វស៊ីសាច់
        ក៏ដោយ សត្វខ្លាឃ្មុំភាគច្រើនជាសត្វស៊ីអាហារចម្រុះ
        ដែលអាចស៊ីអាហារប្រភេទផ្សេងៗបាន។

        អាស្រ័យលើប្រភេទ និងបរិស្ថាន សត្វខ្លាឃ្មុំអាចស៊ី
        ឫស គ្រាប់ធញ្ញជាតិ ផ្លែឈើព្រៃ សត្វល្អិត ត្រី និងសាច់។
        អារម្មណ៍ហិតក្លិនដ៏ខ្លាំងរបស់ពួកវាជួយឱ្យពួកវាស្វែងរក
        អាហារនៅក្នុងតំបន់ធំៗ។

        សត្វខ្លាឃ្មុំមានសាច់ដុំស្មាដ៏ខ្លាំង។ នៅក្នុងប្រភេទមួយចំនួន
        ដូចជាខ្លាឃ្មុំ Grizzly សាច់ដុំទាំងនេះអាចបង្កើតជាផ្នែក
        ប៉ោងនៅលើស្មា។ កម្លាំងនេះជួយឱ្យពួកវាជីកដី ផ្លាស់ទីវត្ថុ
        ធ្ងន់ៗ ស្វែងរកអាហារ និងធ្វើដំណើរឆ្លងកាត់បរិស្ថាន
        ដែលមានការលំបាក។

        សត្វខ្លាឃ្មុំប្រភេទផ្សេងៗបានវិវត្តលក្ខណៈពិសេស
        សម្រាប់បរិស្ថានរបស់ពួកវា។ ខ្លាឃ្មុំប៉ូលត្រូវបានសម្របខ្លួន
        យ៉ាងល្អសម្រាប់រស់នៅជុំវិញទឹកកកសមុទ្រអាក់ទិក ខណៈដែល
        ខ្លាឃ្មុំផេនដាយក្សមានលក្ខណៈពិសេសសម្រាប់ស៊ីឫស្សី។
        ភាពខុសគ្នាទាំងនេះធ្វើឱ្យសត្វខ្លាឃ្មុំក្លាយជាក្រុមសត្វ
        ថនិកសត្វធំៗដែលអាចសម្របខ្លួនបានយ៉ាងអស្ចារ្យ។
    `,

    khmerFunFacts: [
        {
            title: "សមត្ថភាពហិតក្លិនដ៏អស្ចារ្យ",
            text: `
                សត្វខ្លាឃ្មុំមានសមត្ថភាពហិតក្លិនខ្លាំងណាស់។
                ច្រមុះរបស់ពួកវាជួយឱ្យពួកវាស្វែងរកអាហារ
                ពីចម្ងាយ ហើយការហិតក្លិនគឺជាឧបករណ៍សំខាន់
                មួយសម្រាប់ការរស់រានមានជីវិត។
            `
        },

        {
            title: "រាងកាយសម្រាប់ការសម្រាករដូវរងា",
            text: `
                សត្វខ្លាឃ្មុំមួយចំនួនអាចចំណាយពេលជាច្រើនខែ
                ក្នុងស្ថានភាពសម្រាកនៅរដូវរងា ដោយមិនចាំបាច់
                ស៊ីអាហារ ឬផឹកទឹក។ ក្នុងអំឡុងពេលនេះ រាងកាយរបស់
                ពួកវាមានការផ្លាស់ប្តូរពិសេស ដើម្បីរក្សាថាមពល
                និងបន្តមុខងារសំខាន់ៗរបស់រាងកាយ។
            `
        },

        {
            title: "ម្រាមដៃទីប្រាំមួយរបស់ផេនដា",
            text: `
                ខ្លាឃ្មុំផេនដាយក្សមានឆ្អឹងនៅតំបន់កដៃដែលមាន
                លក្ខណៈពិសេស និងអាចដើរតួនាទីដូចម្រាមដៃមេ។
                វាជួយឱ្យផេនដាចាប់ និងកាន់ដើមឫស្សីនៅពេលស៊ីអាហារ។
            `
        },

        {
            title: "លឿនជាងរូបរាងរបស់វា",
            text: `
                សត្វខ្លាឃ្មុំអាចមើលទៅធ្ងន់ និងដើរយឺត ប៉ុន្តែ
                ពួកវាអាចផ្លាស់ទីបានយ៉ាងលឿន។ ប្រភេទខ្លះអាច
                រត់បានប្រហែល ៥៦ គីឡូម៉ែត្រក្នុងមួយម៉ោង
                ក្នុងចម្ងាយខ្លី។
            `
        },

        {
            title: "អ្នកដោះស្រាយបញ្ហាដ៏ឆ្លាតវៃ",
            text: `
                សត្វខ្លាឃ្មុំគឺជាសត្វដែលមានភាពឆ្លាតវៃខ្ពស់។
                ពួកវាអាចរៀនពីបរិស្ថាន និងដោះស្រាយបញ្ហាផ្សេងៗ
                ដើម្បីស្វែងរកអាហារ ធ្វើដំណើរ និងសម្របខ្លួន
                ទៅនឹងការផ្លាស់ប្តូរនៃបរិស្ថាន។
            `
        }
    ]
},

{
    name: "Wolf",
    title: "THE TACTICAL PREDATOR: THE WOLF",
    khmer: "សត្វចចក",
    category: "Mammals",
    image: "images/wolf.jpg",

    quote: `
        The ultimate team strategist, a resilient and highly
        social predator built for endurance, cooperation,
        and complex family relationships.
    `,

    scientificName: "Canis lupus (Gray Wolf)",

    habitat: `
        Forests, tundra, mountains, grasslands, and deserts
        across North America, Europe, and Asia.
    `,

    status: `
        Least Concern 🟢 globally, although some regional
        populations are endangered or threatened.
    `,

    lifespan: `
        About 6–8 years in the wild (up to 15 years in captivity)
    `,

    topSpeed: "About 50–60 km/h (30–37 mph) in short sprints",

    description: `
        Wolves are the largest wild members of the dog family,
        Canidae. Their bodies are built more for endurance than
        explosive bursts of speed. They have long legs, broad
        paws, deep chests, and dense double-layered coats that
        help them survive in cold and demanding environments.

        Wolves are highly social animals that usually live in
        family groups called packs. A pack commonly includes
        a breeding pair and their offspring from different years.
        Family members cooperate to raise young, defend their
        territory, and find food.

        Communication is an essential part of wolf society.
        Wolves use howls, whines, growls, body movements, facial
        expressions, and scent marking to communicate with one
        another. These signals help pack members coordinate,
        maintain social relationships, and warn other wolves
        away from their territory.

        Wolves are capable endurance hunters. Rather than relying
        only on speed, they can travel long distances while
        searching for prey. Their cooperation allows members of
        a pack to work together when pursuing and handling prey
        that may be much larger than an individual wolf.
    `,

    funFacts: [
        {
            title: "Master Endurance Runners",
            text: `
                Wolves are built for endurance. They can travel
                long distances while searching for food and may
                maintain a steady trotting pace for extended
                periods. Their powerful legs and efficient bodies
                allow them to cover large territories.
            `
        },

        {
            title: "Dynamic Howling",
            text: `
                A wolf's howl is an important long-distance
                communication tool. Wolves may howl to bring
                family members together, locate separated pack
                members, or communicate with neighboring packs.
                Individual wolves can also have noticeably
                different voices.
            `
        },

        {
            title: "Powerful Jaws",
            text: `
                Wolves have strong jaws and large canine teeth
                adapted for gripping and tearing food. Their
                powerful bite helps them handle tough prey and
                process parts of carcasses that are difficult
                for many other animals to consume.
            `
        },

        {
            title: "Those Changing Eyes",
            text: `
                Wolf puppies are commonly born with blue or
                blue-gray eyes. As they mature, their eye color
                usually changes toward shades such as yellow,
                gold, amber, or brown.
            `
        },

        {
            title: "Packs Are Families",
            text: `
                The popular idea of an aggressive "alpha wolf"
                fighting to dominate a pack does not accurately
                describe most wild wolf families. Wild packs are
                commonly family groups, with parents leading and
                cooperating with their offspring.
            `
        }
    ],

    khmerTitle: "សត្វប្រមាញ់ដែលមានយុទ្ធសាស្ត្រ៖ សត្វចចក",

    khmerQuote: `
        អ្នករៀបចំយុទ្ធសាស្ត្រជាក្រុមដ៏អស្ចារ្យ ដែលជាសត្វប្រមាញ់
        មានភាពរឹងមាំ ស្រឡាញ់ការរស់នៅជាសង្គម និងមានសមត្ថភាព
        អស្ចារ្យក្នុងការធ្វើដំណើរចម្ងាយឆ្ងាយជាមួយក្រុមគ្រួសារ។
    `,

    khmerDescription: `
        សត្វចចកគឺជាសមាជិកព្រៃដែលមានទំហំធំបំផុតក្នុងគ្រួសារ
        សត្វឆ្កែ Canidae។ រាងកាយរបស់ពួកវាត្រូវបានបង្កើតឡើង
        សម្រាប់ការធ្វើដំណើររយៈពេលយូរ ជាងការរត់លឿនក្នុង
        ចម្ងាយខ្លី។ ពួកវាមានជើងវែង បាតជើងធំ ទ្រូងជ្រៅ
        និងរោមពីរស្រទាប់ក្រាស់ ដែលជួយឱ្យពួកវារស់រានមានជីវិត
        នៅក្នុងបរិស្ថានត្រជាក់ និងលំបាក។

        សត្វចចកជាសត្វដែលចូលចិត្តរស់នៅជាសង្គម ហើយជាទូទៅ
        រស់នៅជាក្រុមគ្រួសារដែលហៅថា pack។ ក្រុមមួយជាញឹកញាប់
        មានឪពុក និងម្តាយដែលបង្កើតកូន និងកូនៗរបស់ពួកវា
        ដែលមានអាយុខុសៗគ្នា។ សមាជិកក្នុងក្រុមសហការគ្នា
        ដើម្បីចិញ្ចឹមកូន ការពារតំបន់ និងស្វែងរកអាហារ។

        ការទាក់ទងគ្នាគឺជាផ្នែកសំខាន់នៃជីវិតរបស់សត្វចចក។
        ពួកវាប្រើសំឡេងយំ សំឡេងទន់ សំឡេងគ្រហក ចលនារាងកាយ
        ទឹកមុខ និងការសម្គាល់តាមក្លិន ដើម្បីទាក់ទងគ្នា។
        សញ្ញាទាំងនេះជួយឱ្យសមាជិកក្នុងក្រុមសហការគ្នា
        រក្សាទំនាក់ទំនងសង្គម និងព្រមានសត្វចចកផ្សេងទៀត
        ឱ្យនៅឆ្ងាយពីតំបន់របស់ពួកវា។

        សត្វចចកគឺជាអ្នកប្រមាញ់ដែលមានសមត្ថភាពធ្វើដំណើរ
        បានចម្ងាយឆ្ងាយ។ ជំនួសឱ្យការពឹងផ្អែកតែលើល្បឿន
        ពួកវាអាចធ្វើដំណើរចម្ងាយឆ្ងាយនៅពេលស្វែងរកអាហារ។
        ការសហការគ្នារបស់សមាជិកក្នុងក្រុមអាចជួយឱ្យពួកវា
        ប្រមាញ់សត្វដែលមានទំហំធំជាងសត្វចចកម្នាក់ៗ។
    `,

    khmerFunFacts: [
        {
            title: "អ្នករត់ចម្ងាយឆ្ងាយ",
            text: `
                សត្វចចកមានរាងកាយសម្រាប់ការធ្វើដំណើរចម្ងាយឆ្ងាយ។
                ពួកវាអាចធ្វើដំណើរបានចម្ងាយជាច្រើននៅពេលស្វែងរក
                អាហារ ហើយអាចរក្សាល្បឿនរត់យឺតជាបន្តបន្ទាប់
                ក្នុងរយៈពេលយូរ។
            `
        },

        {
            title: "សំឡេងយំសម្រាប់ទាក់ទងគ្នា",
            text: `
                សំឡេងយំរបស់សត្វចចកគឺជាមធ្យោបាយសំខាន់
                សម្រាប់ការទាក់ទងពីចម្ងាយ។ ពួកវាអាចប្រើសំឡេងយំ
                ដើម្បីប្រមូលសមាជិកគ្រួសារ ស្វែងរកសមាជិកដែល
                បែកចេញពីក្រុម ឬទាក់ទងជាមួយក្រុមផ្សេងៗ។
            `
        },

        {
            title: "ថ្គាមដ៏ខ្លាំង",
            text: `
                សត្វចចកមានថ្គាមរឹងមាំ និងធ្មេញចង្កូមធំ
                ដែលសម្របខ្លួនសម្រាប់ចាប់ និងហែកអាហារ។
                កម្លាំងខាំរបស់វាជួយឱ្យវាអាចដោះស្រាយជាមួយ
                សត្វចំណី និងផ្នែករឹងៗនៃសាកសព។
            `
        },

        {
            title: "ភ្នែកដែលផ្លាស់ប្តូរពណ៌",
            text: `
                កូនសត្វចចកជាច្រើនកើតមកមានភ្នែកពណ៌ខៀវ
                ឬខៀវប្រផេះ។ នៅពេលវាធំឡើង ពណ៌ភ្នែកជាទូទៅ
                ផ្លាស់ប្តូរទៅជាពណ៌លឿង មាស លឿងត្នោត
                ឬត្នោត។
            `
        },

        {
            title: "ក្រុមគឺជាគ្រួសារ",
            text: `
                គំនិតដែលថាសត្វចចកឈ្មោលមួយត្រូវប្រយុទ្ធ
                ដើម្បីក្លាយជា "alpha" និងគ្រប់គ្រងក្រុម
                មិនមែនជារូបភាពត្រឹមត្រូវសម្រាប់ក្រុមសត្វចចក
                ព្រៃភាគច្រើនទេ។ ក្រុមព្រៃជាទូទៅគឺជាក្រុមគ្រួសារ
                ដែលមានឪពុក ម្តាយ និងកូនៗសហការគ្នា។
            `
        }
    ]
},

{
    name: "Owl",
    title: "THE SILENT GUARDIAN: THE OWL",
    khmer: "សត្វទីទុយ",
    category: "Birds",
    image: "images/owl.jpg",

    quote: `
        A master of nocturnal stealth, equipped with remarkable
        night vision, specialized hearing, and feathers adapted
        for nearly silent flight.
    `,

    scientificName: `
        Strigiformes (over 200 living species divided into
        True Owls and Barn Owls)
    `,

    habitat: `
        Forests, deserts, tundra, grasslands, and suburban areas
        across every continent except Antarctica.
    `,

    status: `
        Varies by species. Many species are Least Concern 🟢,
        while some species are threatened or Endangered 🔴.
    `,

    lifespan: `
        About 10–15 years in the wild, with some species living
        much longer in captivity.
    `,

    topSpeed: `
        Varies greatly by species; owls are better known for
        stealth and maneuverability than high-speed flight.
    `,

    description: `
        Owls are specialized birds of prey, or raptors, that are
        especially well adapted for hunting in low-light conditions.
        Their large forward-facing eyes provide excellent depth
        perception, while their facial discs help collect and direct
        sound toward their ears.

        Owls have sharp hooked beaks and powerful talons that allow
        them to capture and hold prey. Their feathers are also
        specially adapted for quiet flight. The edges of many
        flight feathers have tiny structures that help reduce
        turbulence and noise as air moves across the wings.

        Many owl species are most active at night, although some
        hunt during the day. Their combination of excellent hearing,
        sensitive vision, camouflage, and silent flight makes them
        highly effective predators.

        Owls can hunt a wide variety of animals depending on their
        species and habitat. Their prey may include insects, small
        mammals, birds, reptiles, amphibians, and fish.
    `,

    funFacts: [
        {
            title: "Fixed Eyes, Flexible Head",
            text: `
                An owl's eyes are shaped more like elongated tubes
                than ordinary spherical eyeballs. They are held
                firmly in place by bony structures, so owls cannot
                move their eyes around like humans do. Instead,
                they turn their heads to change their field of view.
            `
        },

        {
            title: "The 270-Degree Turn",
            text: `
                Owls can rotate their heads by as much as about
                270 degrees. Their necks contain 14 vertebrae,
                compared with seven in humans. Specialized blood
                vessels help maintain blood flow to the brain
                during these extreme head movements.
            `
        },

        {
            title: "Nearly Silent Flight",
            text: `
                Many owls have specially shaped flight feathers.
                The leading edges can have comb-like structures
                that break up airflow and reduce turbulence.
                Their soft feathers also absorb sound, allowing
                them to approach prey with remarkably little noise.
            `
        },

        {
            title: "Ears That Don't Match",
            text: `
                In many owl species, the ear openings are positioned
                asymmetrically, with one higher than the other.
                This difference helps the owl compare sounds arriving
                from different directions and locate prey in darkness,
                even when the prey is hidden beneath vegetation.
            `
        },

        {
            title: "The Mystery of Owl Pellets",
            text: `
                Owls cannot fully digest materials such as bones,
                fur, feathers, and some other tough parts of their
                prey. These materials are compressed into a pellet
                inside the digestive system and later regurgitated.
                Scientists can study these pellets to discover what
                an owl has been eating.
            `
        }
    ],

    khmerTitle: "អ្នកការពារដ៏ស្ងាត់ស្ងៀម៖ សត្វទីទុយ",

    khmerQuote: `
        ជាអ្នកប្រមាញ់នៅពេលយប់ដ៏អស្ចារ្យ ដែលមានសមត្ថភាព
        មើលឃើញក្នុងពន្លឺតិច ស្តាប់សំឡេងបានល្អ និងមានរោម
        ដែលជួយឱ្យហោះហើរបានស្ងាត់ស្ទើរតែមិនឮសំឡេង។
    `,

    khmerDescription: `
        សត្វទីទុយគឺជាសត្វស្លាបប្រមាញ់ ឬ raptors ដែលមាន
        លក្ខណៈពិសេសសម្រាប់ការប្រមាញ់នៅក្នុងពន្លឺតិច។
        ភ្នែកធំដែលបែរមកខាងមុខជួយឱ្យវាមើលឃើញជម្រៅ
        បានល្អ ខណៈដែលផ្នែករោមជុំវិញមុខជួយប្រមូល និង
        ដឹកនាំសំឡេងទៅកាន់ត្រចៀក។

        សត្វទីទុយមានចំពុះកោងមុត និងក្រញ៉ាំជើងដ៏ខ្លាំង
        ដែលអាចជួយឱ្យវាចាប់ និងកាន់សត្វចំណី។ រោមរបស់វា
        ក៏មានលក្ខណៈពិសេសសម្រាប់ការហោះហើរដោយស្ងាត់។
        គែមនៃរោមហោះហើរមួយចំនួនមានរចនាសម្ព័ន្ធតូចៗ
        ដែលជួយកាត់បន្ថយចលនាខ្យល់ និងសំឡេង។

        សត្វទីទុយជាច្រើនប្រភេទមានសកម្មភាពច្រើននៅពេលយប់
        ប៉ុន្តែប្រភេទខ្លះក៏ប្រមាញ់នៅពេលថ្ងៃផងដែរ។ ការរួមបញ្ចូល
        គ្នារវាងការស្តាប់ដ៏ល្អ ការមើលឃើញល្អ ការលាក់ខ្លួន
        និងការហោះហើរដោយស្ងាត់ ធ្វើឱ្យពួកវាក្លាយជាអ្នកប្រមាញ់
        ដ៏មានប្រសិទ្ធភាព។

        អាស្រ័យលើប្រភេទ និងទីជម្រក សត្វទីទុយអាចប្រមាញ់
        សត្វជាច្រើនប្រភេទ រួមមានសត្វល្អិត ថនិកសត្វតូចៗ
        សត្វស្លាប សត្វល្មូន សត្វអំភីប៊ី និងត្រី។
    `,

    khmerFunFacts: [
        {
            title: "ភ្នែកមិនអាចផ្លាស់ទីបាន",
            text: `
                ភ្នែករបស់សត្វទីទុយមានរាងដូចបំពង់វែងជាង
                ភ្នែកមូលធម្មតា។ វាត្រូវបានទ្រទ្រង់ដោយរចនាសម្ព័ន្ធ
                ឆ្អឹង ដូច្នេះសត្វទីទុយមិនអាចផ្លាស់ទីភ្នែកបាន
                ដូចមនុស្សទេ។ វាត្រូវបង្វិលក្បាលដើម្បីផ្លាស់ប្តូរ
                ទិសដៅនៃការមើល។
            `
        },

        {
            title: "ការបង្វិលក្បាល ២៧០ ដឺក្រេ",
            text: `
                សត្វទីទុយអាចបង្វិលក្បាលបានរហូតដល់ប្រហែល
                ២៧០ ដឺក្រេ។ ករបស់វាមានឆ្អឹងកចំនួន ១៤ ដុំ
                ខណៈមនុស្សមានតែ ៧ ដុំ។ សរសៃឈាមដែលមាន
                លក្ខណៈពិសេសជួយរក្សាលំហូរឈាមទៅកាន់ខួរក្បាល
                នៅពេលវាបង្វិលក្បាលយ៉ាងខ្លាំង។
            `
        },

        {
            title: "ការហោះហើរស្ទើរតែគ្មានសំឡេង",
            text: `
                សត្វទីទុយជាច្រើនប្រភេទមានរោមហោះហើរដែលមាន
                រូបរាងពិសេស។ គែមខាងមុខអាចមានរចនាសម្ព័ន្ធ
                ដូចធ្មេញតូចៗ ដែលជួយបំបែកលំហូរខ្យល់ និង
                កាត់បន្ថយសំឡេង។ រោមទន់របស់វាក៏ជួយស្រូបសំឡេង
                ដែលធ្វើឱ្យវាអាចចូលទៅជិតសត្វចំណីបានយ៉ាងស្ងាត់។
            `
        },

        {
            title: "ត្រចៀកមិនស្មើគ្នា",
            text: `
                សត្វទីទុយជាច្រើនប្រភេទមានរន្ធត្រចៀកដែល
                ស្ថិតនៅទីតាំងមិនស្មើគ្នា ដោយត្រចៀកមួយនៅខ្ពស់
                ជាងមួយទៀត។ ភាពខុសគ្នានេះជួយឱ្យវាប្រៀបធៀប
                សំឡេងដែលមកពីទិសដៅផ្សេងៗ និងកំណត់ទីតាំង
                របស់សត្វចំណីនៅក្នុងភាពងងឹត។
            `
        },

        {
            title: "គ្រាប់អាហាររបស់សត្វទីទុយ",
            text: `
                សត្វទីទុយមិនអាចរំលាយសារធាតុមួយចំនួនដូចជា
                ឆ្អឹង រោម និងផ្នែករឹងៗរបស់សត្វចំណីបានទាំងស្រុងទេ។
                សារធាតុទាំងនេះត្រូវបានប្រមូលផ្តុំជាគ្រាប់មួយ
                នៅក្នុងប្រព័ន្ធរំលាយអាហារ ហើយត្រូវបានបញ្ចេញ
                តាមមាត់នៅពេលក្រោយ។ អ្នកវិទ្យាសាស្ត្រអាចសិក្សា
                គ្រាប់ទាំងនេះដើម្បីដឹងថាសត្វទីទុយបានស៊ីអ្វី។
            `
        }
    ]
},

{
    name: "Parrot",
    title: "THE RAINBOW INTELLECT: THE PARROT",
    khmer: "សត្វសេក",
    category: "Birds",
    image: "images/parrot.jpg",

    quote: `
        A vibrant master of mimicry, combining remarkable
        intelligence, problem-solving ability, social behavior,
        and extraordinary vocal skills.
    `,

    scientificName: `
        Psittaciformes (over 390 species, including Macaws,
        Cockatoos, and Parakeets)
    `,

    habitat: `
        Tropical rainforests, woodlands, and savannas across
        South America, Central America, Africa, Australia, and Asia.
    `,

    status: `
        Varies by species. Many common species are Least Concern 🟢,
        while several large macaws and cockatoos are threatened or
        Endangered 🔴.
    `,

    lifespan: `
        Around 20–30 years for many smaller species, while some
        larger parrots can live for several decades.
    `,

    topSpeed: "Up to about 56 km/h (35 mph) in some species",

    description: `
        Parrots are famous for their brilliant colors, curved
        hooked beaks, and impressive intelligence. They are found
        in many warm regions of the world and occupy habitats
        ranging from tropical rainforests to open woodlands.

        One of their most distinctive features is their zygodactyl
        feet. Each foot has four toes, with two pointing forward
        and two pointing backward. This arrangement gives parrots
        excellent gripping ability and helps them climb branches
        and manipulate food.

        Parrots are highly social birds. Many species live in
        groups and use a wide range of calls and body movements
        to communicate. Some species form strong pair bonds that
        can last for many years.

        Their intelligence is particularly impressive. Certain
        parrots can learn to imitate human speech and other sounds.
        Research has shown that some individuals can also learn
        associations between sounds, objects, colors, and actions,
        demonstrating sophisticated learning abilities.
    `,

    funFacts: [
        {
            title: "More Than Just Mimicry",
            text: `
                Some parrots can learn to associate sounds or words
                with objects, actions, or concepts. African Grey
                Parrots in particular have demonstrated impressive
                learning and problem-solving abilities in scientific
                studies.
            `
        },

        {
            title: "The Third Hand Beak",
            text: `
                A parrot's strong, curved beak is useful for much
                more than cracking seeds and nuts. Parrots can use
                their beaks to grip branches and help support
                themselves while climbing.
            `
        },

        {
            title: "Clay Lick Gatherings",
            text: `
                Some parrots, especially macaws in parts of the
                Amazon, gather at exposed clay deposits called
                clay licks. Scientists believe the clay may provide
                important minerals and may also help bind certain
                plant compounds in their diet.
            `
        },

        {
            title: "Left- or Right-Footed",
            text: `
                Individual parrots can show a preference for using
                one foot when handling food or objects. This is
                sometimes compared with handedness in humans.
            `
        },

        {
            title: "Parrot-Specific Pigments",
            text: `
                Many parrots produce special pigments called
                psittacofulvins. These pigments contribute to some
                of the brilliant yellow, red, and orange colors
                found in parrot feathers and are unusual among
                birds.
            `
        }
    ],

    khmerTitle: "បញ្ញាឥន្ទធនូ៖ សត្វសេក",

    khmerQuote: `
        សត្វស្លាបដែលមានពណ៌ស្រស់ស្អាត និងមានសមត្ថភាព
        រៀនសូត្រ ដោះស្រាយបញ្ហា ទាក់ទងជាសង្គម និងធ្វើត្រាប់
        តាមសំឡេងបានយ៉ាងអស្ចារ្យ។
    `,

    khmerDescription: `
        សត្វសេកល្បីដោយសាររោមដែលមានពណ៌ស្រស់ស្អាត ចំពុះកោង
        និងភាពឆ្លាតវៃដ៏គួរឱ្យចាប់អារម្មណ៍។ ពួកវារស់នៅក្នុង
        តំបន់ក្តៅជាច្រើននៃពិភពលោក ហើយអាចរកឃើញនៅក្នុងទីជម្រក
        ចាប់ពីព្រៃត្រូពិចរហូតដល់ព្រៃឈើបើកចំហ។

        លក្ខណៈពិសេសមួយរបស់សត្វសេកគឺជើងដែលមានម្រាមជើង
        zygodactyl។ ជើងនីមួយៗមានម្រាមជើងបួន ដោយពីរបែរទៅ
        ខាងមុខ និងពីរបែរទៅខាងក្រោយ។ រចនាសម្ព័ន្ធនេះផ្តល់
        សមត្ថភាពកាន់បានល្អ និងជួយឱ្យសត្វសេកឡើងដើមឈើ
        និងកាន់អាហារបានងាយ។

        សត្វសេកជាសត្វស្លាបដែលមានជីវិតសង្គមខ្លាំង។ ប្រភេទជាច្រើន
        រស់នៅជាក្រុម ហើយប្រើសំឡេង និងចលនារាងកាយជាច្រើនប្រភេទ
        ដើម្បីទាក់ទងគ្នា។ ប្រភេទខ្លះបង្កើតទំនាក់ទំនងជាគូដ៏រឹងមាំ
        ដែលអាចបន្តបានជាច្រើនឆ្នាំ។

        ភាពឆ្លាតវៃរបស់សត្វសេកគឺគួរឱ្យចាប់អារម្មណ៍ជាពិសេស។
        ប្រភេទខ្លះអាចរៀនធ្វើត្រាប់តាមសំឡេងមនុស្ស និងសំឡេង
        ផ្សេងៗ។ ការសិក្សាមួយចំនួនក៏បានបង្ហាញថា សត្វសេកខ្លះ
        អាចរៀនភ្ជាប់សំឡេងជាមួយវត្ថុ ពណ៌ សកម្មភាព និងគំនិត
        មួយចំនួន ដែលបង្ហាញពីសមត្ថភាពរៀនដ៏ស្មុគស្មាញ។
    `,

    khmerFunFacts: [
        {
            title: "មិនមែនគ្រាន់តែធ្វើត្រាប់តាមសំឡេងទេ",
            text: `
                សត្វសេកខ្លះអាចរៀនភ្ជាប់សំឡេង ឬពាក្យជាមួយវត្ថុ
                សកម្មភាព ឬគំនិត។ សត្វសេកប្រផេះអាហ្វ្រិកជាពិសេស
                បានបង្ហាញសមត្ថភាពរៀន និងដោះស្រាយបញ្ហាដ៏គួរឱ្យ
                ចាប់អារម្មណ៍នៅក្នុងការសិក្សាវិទ្យាសាស្ត្រ។
            `
        },

        {
            title: "ចំពុះដូចជាដៃទីបី",
            text: `
                ចំពុះដ៏រឹងមាំ និងកោងរបស់សត្វសេកមិនត្រឹមតែ
                ប្រើសម្រាប់បំបែកគ្រាប់ធញ្ញជាតិ និងគ្រាប់ផ្លែឈើទេ។
                វាក៏អាចប្រើសម្រាប់កាន់មែកឈើ និងជួយទ្រទ្រង់
                រាងកាយនៅពេលឡើងដើមឈើ។
            `
        },

        {
            title: "ការប្រមូលផ្តុំនៅកន្លែងដីឥដ្ឋ",
            text: `
                សត្វសេកមួយចំនួន ជាពិសេស macaws នៅតំបន់មួយចំនួន
                នៃព្រៃអាម៉ាហ្សូន អាចប្រមូលផ្តុំគ្នានៅកន្លែងដែលមាន
                ដីឥដ្ឋ។ អ្នកវិទ្យាសាស្ត្រជឿថា ដីឥដ្ឋអាចផ្តល់
                សារធាតុរ៉ែសំខាន់ៗ និងអាចជួយភ្ជាប់សារធាតុមួយចំនួន
                ពីរុក្ខជាតិដែលពួកវាស៊ី។
            `
        },

        {
            title: "ចូលចិត្តប្រើជើងមួយជាងមួយ",
            text: `
                សត្វសេកនីមួយៗអាចបង្ហាញចំណូលចិត្តក្នុងការប្រើ
                ជើងមួយជាងជើងម្ខាងទៀត នៅពេលកាន់អាហារ ឬវត្ថុ។
                លក្ខណៈនេះអាចប្រៀបធៀបបាននឹងការប្រើដៃឆ្វេង
                ឬស្តាំរបស់មនុស្ស។
            `
        },

        {
            title: "សារធាតុពណ៌ពិសេសរបស់សត្វសេក",
            text: `
                សត្វសេកជាច្រើនផលិតសារធាតុពណ៌ពិសេសដែលហៅថា
                psittacofulvins។ សារធាតុទាំងនេះជួយបង្កើតពណ៌
                លឿង ក្រហម និងទឹកក្រូចដ៏ស្រស់ស្អាតនៅលើរោម
                ហើយមានលក្ខណៈពិសេសក្នុងចំណោមសត្វស្លាប។
            `
        }
    ]
},

{
    name: "Eagle",
    title: "THE HIGH-SKY MONARCH: THE EAGLE",
    khmer: "សត្វឥន្ទ្រី",
    category: "Birds",
    image: "images/eagle.jpg",

    quote: `
        A powerful aerial predator equipped with extraordinary
        eyesight, broad wings for soaring, and specialized talons
        built for capturing prey.
    `,

    scientificName: `
        Accipitridae (a large family including Bald Eagles,
        Golden Eagles, and Harpy Eagles)
    `,

    habitat: `
        Mountains, forests, coastal cliffs, grasslands, and
        river valleys across many parts of the world.
    `,

    status: `
        Varies greatly by species. Some eagle species are
        Least Concern 🟢, while others are threatened or
        Critically Endangered 🔴.
    `,

    lifespan: `
        About 20–30 years in the wild for many species,
        with some individuals living longer.
    `,

    topSpeed: `
        Some large eagles can reach very high speeds during
        steep dives, although exact speeds vary by species
        and measurement method.
    `,

    description: `
        Eagles are powerful birds of prey belonging mainly to
        the family Accipitridae. They are found in many different
        environments, from high mountain ranges and forests to
        coastal regions and river valleys.

        One of an eagle's greatest advantages is its extraordinary
        eyesight. Their eyes are large relative to their heads,
        and their highly developed vision allows them to detect
        potential prey from considerable distances while flying
        high above the ground.

        Eagles also have large wings that allow many species to
        soar efficiently. Instead of constantly flapping, they
        can use rising columns of warm air called thermals to
        gain altitude and travel long distances while conserving
        energy.

        Their feet are specialized for hunting. Strong legs and
        sharp curved talons allow eagles to seize and hold prey.
        Different species hunt different animals, including fish,
        birds, reptiles, and mammals, depending on their habitat
        and body size.
    `,

    funFacts: [
        {
            title: "The Movie Scream",
            text: `
                The dramatic eagle screech commonly heard in
                movies and television is often not the actual
                call of a Bald Eagle. Film and television
                productions have frequently used the call of a
                Red-tailed Hawk because it sounds more powerful
                and dramatic.
            `
        },

        {
            title: "Two Foveae",
            text: `
                Eagles have two areas of especially sharp vision,
                called foveae, in each eye. These specialized
                regions help them see detail from different
                viewing directions and are part of what gives
                eagles such remarkable visual abilities.
            `
        },

        {
            title: "Talons in the Sky",
            text: `
                During courtship, some eagle species perform
                spectacular aerial displays. Certain pairs may
                lock their talons together while diving through
                the air before releasing each other and flying
                away.
            `
        },

        {
            title: "Masters of the Dive",
            text: `
                Eagles can reach impressive speeds during steep
                dives. Their streamlined bodies, powerful wings,
                and ability to control their feathers allow them
                to rapidly descend toward prey.
            `
        },

        {
            title: "Soaring Without Flapping",
            text: `
                Eagles can use thermal currents to gain altitude
                with very little wing flapping. By circling inside
                rising warm air, they can climb high into the sky
                while saving energy.
            `
        }
    ],

    khmerTitle: "ស្តេចនៃមេឃខ្ពស់៖ សត្វឥន្ទ្រី",

    khmerQuote: `
        ជាសត្វស្លាបប្រមាញ់ដ៏មានអំណាច ដែលមានភ្នែកមើលឃើញ
        បានឆ្ងាយ ស្លាបធំសម្រាប់ហោះលើអាកាស និងក្រញ៉ាំមុត
        សម្រាប់ចាប់សត្វចំណី។
    `,

    khmerDescription: `
        សត្វឥន្ទ្រីគឺជាសត្វស្លាបប្រមាញ់ដ៏មានកម្លាំង ដែលភាគច្រើន
        ស្ថិតនៅក្នុងគ្រួសារ Accipitridae។ ពួកវាអាចរស់នៅក្នុង
        បរិស្ថានជាច្រើន ចាប់ពីភ្នំខ្ពស់ និងព្រៃ រហូតដល់តំបន់
        ឆ្នេរសមុទ្រ និងជ្រលងទន្លេ។

        អត្ថប្រយោជន៍ដ៏សំខាន់មួយរបស់សត្វឥន្ទ្រីគឺការមើលឃើញ
        ដ៏អស្ចារ្យ។ ភ្នែករបស់ពួកវាមានទំហំធំបើប្រៀបធៀបនឹង
        ក្បាល ហើយការមើលឃើញដែលមានការអភិវឌ្ឍខ្លាំងអាចជួយ
        ឱ្យពួកវាសម្គាល់សត្វចំណីពីចម្ងាយ នៅពេលហោះនៅលើមេឃ។

        សត្វឥន្ទ្រីក៏មានស្លាបធំដែលអាចជួយឱ្យពួកវាហោះលើអាកាស
        បានយ៉ាងមានប្រសិទ្ធភាព។ ជំនួសឱ្យការបក់ស្លាបជានិច្ច
        ពួកវាអាចប្រើចរន្តខ្យល់ក្តៅដែលហៅថា thermals
        ដើម្បីឡើងកម្ពស់ និងធ្វើដំណើរបានចម្ងាយឆ្ងាយ
        ខណៈពេលសន្សំថាមពល។

        ជើងរបស់សត្វឥន្ទ្រីត្រូវបានសម្របខ្លួនយ៉ាងពិសេស
        សម្រាប់ការប្រមាញ់។ ជើងដែលមានកម្លាំង និងក្រញ៉ាំកោងមុត
        អាចជួយឱ្យវាចាប់ និងកាន់សត្វចំណី។ ប្រភេទឥន្ទ្រី
        ផ្សេងៗប្រមាញ់សត្វផ្សេងៗគ្នា រួមមានត្រី សត្វស្លាប
        សត្វល្មូន និងថនិកសត្វ អាស្រ័យលើទីជម្រក និងទំហំរបស់វា។
    `,

    khmerFunFacts: [
        {
            title: "សំឡេងនៅក្នុងភាពយន្ត",
            text: `
                សំឡេងស្រែកដ៏ខ្លាំងដែលយើងតែងឮពីសត្វឥន្ទ្រី
                នៅក្នុងភាពយន្ត និងទូរទស្សន៍ ជាញឹកញាប់មិនមែន
                ជាសំឡេងពិតរបស់ Bald Eagle ទេ។ អ្នកផលិតភាពយន្ត
                ជាច្រើនប្រើសំឡេងរបស់ Red-tailed Hawk ព្រោះវាមាន
                សំឡេងខ្លាំង និងស្តាប់ទៅគួរឱ្យចាប់អារម្មណ៍ជាង។
            `
        },

        {
            title: "ភ្នែកដែលមានតំបន់មើលឃើញច្បាស់ពីរ",
            text: `
                សត្វឥន្ទ្រីមានតំបន់មួយចំនួននៅក្នុងភ្នែកដែលមាន
                សមត្ថភាពមើលឃើញលម្អិតខ្ពស់ ហៅថា foveae។
                តំបន់ទាំងនេះជួយឱ្យវាមើលឃើញព័ត៌មានលម្អិត
                ពីទិសដៅផ្សេងៗ និងជួយបង្កើនសមត្ថភាពមើលឃើញ
                ដ៏អស្ចារ្យរបស់វា។
            `
        },

        {
            title: "ការហោះហើរជាគូក្នុងមេឃ",
            text: `
                ក្នុងរដូវបង្កើតគូ សត្វឥន្ទ្រីប្រភេទខ្លះអាចធ្វើ
                សកម្មភាពហោះហើរដ៏គួរឱ្យចាប់អារម្មណ៍។ គូខ្លះ
                អាចចាប់ក្រញ៉ាំគ្នានៅកណ្តាលអាកាស ហើយធ្លាក់ចុះ
                មុនពេលដោះចេញ និងហោះទៅដោយសុវត្ថិភាព។
            `
        },

        {
            title: "អ្នកជំនាញក្នុងការមុជចុះ",
            text: `
                សត្វឥន្ទ្រីអាចឈានដល់ល្បឿនដ៏គួរឱ្យចាប់អារម្មណ៍
                នៅពេលមុជចុះយ៉ាងចោត។ រាងកាយដែលសម្របសម្រាប់
                ការហោះហើរ ស្លាបដ៏មានកម្លាំង និងសមត្ថភាពគ្រប់គ្រង
                រោមស្លាប ជួយឱ្យវាអាចចុះទៅរកសត្វចំណីបានយ៉ាងលឿន។
            `
        },

        {
            title: "ហោះដោយមិនបាច់បក់ស្លាបច្រើន",
            text: `
                សត្វឥន្ទ្រីអាចប្រើចរន្តខ្យល់ក្តៅដើម្បីឡើងកម្ពស់
                ដោយមិនចាំបាច់បក់ស្លាបច្រើន។ ដោយហោះជារង្វង់
                នៅក្នុងចរន្តខ្យល់ដែលកំពុងឡើង វាអាចឡើងទៅកម្ពស់
                ខ្ពស់ និងសន្សំថាមពលបាន។
            `
        }
    ]
},

{
    name: "Peacock",
    title: "THE LIVING CANVAS: THE PEACOCK",
    khmer: "សត្វក្ងោក",
    category: "Birds",
    image: "images/peacock.jpg",

    quote: `
        Nature's most flamboyant showman, famous for iridescent
        feathers, spectacular courtship displays, and surprisingly
        loud alarm calls.
    `,

    scientificName: `
        Pavo cristatus (Indian Peafowl)
        and Pavo muticus (Green Peafowl)
    `,

    habitat: `
        Forests, brushlands, agricultural fields, and open
        woodlands of South and Southeast Asia.
    `,

    status: `
        Indian Peafowl: Least Concern 🟢 |
        Green Peafowl: Endangered 🔴
    `,

    lifespan: `
        About 15–20 years in the wild
    `,

    topSpeed: `
        About 16 km/h (10 mph) while running; peafowl are
        capable of short, powerful flights when necessary.
    `,

    description: `
        The birds commonly called peacocks are actually part of
        a group called peafowl. Males are peacocks, while females
        are peahens. They belong to the pheasant family and spend
        much of their time walking and feeding on the ground.

        Male peacocks are famous for their spectacular plumage.
        Their brilliant blue and green colors come partly from
        structural coloration, where microscopic structures in
        the feathers interact with light to create shimmering
        colors.

        The enormous fan displayed by a male is called a train.
        The train is made from elongated upper-tail coverts rather
        than the short true tail feathers underneath. During
        courtship, a male spreads the train into a huge fan covered
        with colorful eyespots called ocelli.

        Female peafowl are generally less brightly colored than
        males. Their brown and gray plumage provides camouflage,
        which is especially useful while nesting and caring for
        their young on the ground.
    `,

    funFacts: [
        {
            title: "Optical Illusions, Not Simple Pigment",
            text: `
                Much of the brilliant blue and green appearance
                of peacock feathers comes from structural coloration.
                Tiny structures inside the feathers interact with
                incoming light and produce the shimmering colors
                we see.
            `
        },

        {
            title: "The Shaking Train",
            text: `
                During a courtship display, a male peacock rapidly
                shakes his train. The movement produces vibrations
                and sounds that are part of the complicated display
                used to attract and communicate with peahens.
            `
        },

        {
            title: "That Isn't the Real Tail",
            text: `
                The enormous fan is not actually the peacock's
                true tail. The colorful eyespotted feathers are
                elongated upper-tail coverts. The shorter true
                tail feathers underneath help support and control
                the display.
            `
        },

        {
            title: "Yes, They Can Fly",
            text: `
                Peacocks spend much of their time on the ground,
                but they are capable of flight. They can use
                powerful wingbeats to escape danger or reach
                elevated roosting places, where they may spend
                the night away from many ground predators.
            `
        },

        {
            title: "More Than Seeds and Plants",
            text: `
                Peafowl are omnivores. Along with plant material,
                they can eat insects and other small animals.
                They may also attack or eat small reptiles when
                the opportunity arises, although hunting snakes
                is not their only or defining food strategy.
            `
        }
    ],

    khmerTitle: "ផ្ទាំងគំនូររស់៖ សត្វក្ងោក",

    khmerQuote: `
        ជាសត្វស្លាបដែលមានភាពលេចធ្លោបំផុតក្នុងធម្មជាតិ
        ដែលល្បីដោយសាររោមចម្រុះពណ៌ដ៏ភ្លឺចែងចាំង
        ការបង្ហាញសម្រស់ដ៏អស្ចារ្យ និងសំឡេងព្រមានដ៏ខ្លាំង។
    `,

    khmerDescription: `
        សត្វដែលមនុស្សជាទូទៅហៅថា peacock តាមពិតជាផ្នែកមួយ
        នៃក្រុមសត្វដែលហៅថា peafowl។ សត្វឈ្មោលហៅថា peacock
        ខណៈសត្វញីហៅថា peahen។ ពួកវាស្ថិតនៅក្នុងគ្រួសារសត្វ
        pheasant ហើយចំណាយពេលជាច្រើនដើរ និងស្វែងរកអាហារនៅលើដី។

        សត្វក្ងោកឈ្មោលល្បីដោយសាររោមដ៏ស្រស់ស្អាតរបស់វា។
        ពណ៌ខៀវ និងបៃតងដ៏ភ្លឺចែងចាំងមួយផ្នែកកើតឡើងពី
        លក្ខណៈដែលហៅថា structural coloration។ រចនាសម្ព័ន្ធ
        តូចៗនៅក្នុងរោមធ្វើអន្តរកម្មជាមួយពន្លឺ ហើយបង្កើត
        ពណ៌ដែលមើលទៅដូចជាចែងចាំង។

        ផ្នែករោមដ៏ធំដែលសត្វក្ងោកឈ្មោលបង្ហាញហៅថា train។
        វាមិនមែនជាកន្ទុយពិតរបស់វាទេ ប៉ុន្តែជារោមខាងលើ
        នៃកន្ទុយដែលវែងជាងធម្មតា។ នៅពេលបង្ហាញសម្រស់
        សត្វក្ងោកឈ្មោលបើក train ជារង្វង់ធំ ដែលមានចំណុច
        ដូចភ្នែកជាច្រើន ហៅថា ocelli។

        សត្វក្ងោកញីជាទូទៅមានពណ៌មិនសូវភ្លឺដូចសត្វឈ្មោលទេ។
        រោមពណ៌ត្នោត និងប្រផេះរបស់វាជួយឱ្យលាក់ខ្លួនបានល្អ
        ជាពិសេសនៅពេលវាធ្វើសំបុក និងថែរក្សាកូននៅលើដី។
    `,

    khmerFunFacts: [
        {
            title: "ពណ៌ដែលកើតពីពន្លឺ",
            text: `
                ពណ៌ខៀវ និងបៃតងដ៏ស្រស់ស្អាតនៅលើរោមសត្វក្ងោក
                មួយផ្នែកកើតឡើងពី structural coloration។
                រចនាសម្ព័ន្ធតូចៗនៅក្នុងរោមធ្វើអន្តរកម្មជាមួយ
                ពន្លឺ និងបង្កើតពណ៌ដែលចែងចាំង។
            `
        },

        {
            title: "ការរញ្ជួយរោម",
            text: `
                នៅពេលបង្ហាញសម្រស់ សត្វក្ងោកឈ្មោលអាចរញ្ជួយ
                train របស់វាយ៉ាងលឿន។ ចលនានេះបង្កើតរំញ័រ
                និងសំឡេងដែលជាផ្នែកមួយនៃការបង្ហាញសម្រាប់
                ទាក់ទាញ និងទាក់ទងជាមួយសត្វក្ងោកញី។
            `
        },

        {
            title: "វាមិនមែនជាកន្ទុយពិតទេ",
            text: `
                ផ្ទាំងរោមដ៏ធំដែលយើងឃើញមិនមែនជាកន្ទុយពិត
                របស់សត្វក្ងោកទេ។ រោមដែលមានចំណុចដូចភ្នែក
                គឺជារោមខាងលើនៃកន្ទុយដែលវែង។ រោមកន្ទុយពិត
                ដែលខ្លីជាងនៅខាងក្រោមជួយទ្រទ្រង់ និងគ្រប់គ្រង
                ផ្ទាំងរោមនៅពេលវាបើកបង្ហាញ។
            `
        },

        {
            title: "បាទ ពួកវាអាចហោះបាន",
            text: `
                សត្វក្ងោកចំណាយពេលភាគច្រើននៅលើដី ប៉ុន្តែ
                ពួកវាអាចហោះបាន។ ពួកវាអាចប្រើស្លាបដែលមាន
                កម្លាំងដើម្បីគេចពីគ្រោះថ្នាក់ ឬឡើងទៅកាន់
                កន្លែងខ្ពស់សម្រាប់សម្រាកនៅពេលយប់។
            `
        },

        {
            title: "មិនមែនស៊ីតែគ្រាប់ពូជទេ",
            text: `
                សត្វក្ងោកជាសត្វស៊ីអាហារចម្រុះ។ ក្រៅពីរុក្ខជាតិ
                ពួកវាអាចស៊ីសត្វល្អិត និងសត្វតូចៗផ្សេងទៀត។
                ពេលមានឱកាស ពួកវាក៏អាចវាយប្រហារ ឬស៊ីសត្វល្មូន
                តូចៗផងដែរ ប៉ុន្តែការប្រមាញ់ពស់មិនមែនជា
                អាហារសំខាន់តែមួយរបស់ពួកវាទេ។
            `
        }
    ]
},

{
    name: "Flamingo",
    title: "THE PINK ICON: THE FLAMINGO",
    khmer: "សត្វ flamingo",
    category: "Birds",
    image: "images/flamingo.jpg",

    quote: `
        A vibrant wading bird famous for upside-down filter
        feeding, remarkable one-legged balancing, and brilliant
        pink coloring influenced by its diet.
    `,

    scientificName: `
        Phoenicopteridae (6 living species, including Greater,
        American, and Lesser Flamingos)
    `,

    habitat: `
        Shallow salt lakes, lagoons, estuaries, and mudflats
        across the Americas, Africa, Southern Europe, and Asia.
    `,

    status: `
        Varies by species. Some are Least Concern 🟢,
        while others are Near Threatened 🟡 or Vulnerable 🟠.
    `,

    lifespan: `
        About 20–30 years in the wild, with some individuals
        living considerably longer in captivity.
    `,

    topSpeed: `
        About 50–60 km/h (31–37 mph) during flight.
    `,

    description: `
        Flamingos are famous for their long legs, extremely long
        curved necks, and beautiful pink-to-red feathers. They
        are specially adapted to life in shallow wetlands, including
        salty and alkaline environments where many other animals
        would struggle to survive.

        Flamingos are highly social birds and often gather in
        enormous colonies. Large groups of flamingos are sometimes
        called flamboyances. Living in large groups can help them
        find feeding areas, protect themselves from predators,
        and coordinate breeding activities.

        Their unusual beaks are specially adapted for filter
        feeding. Flamingos place their bills into shallow water
        and mud, then use their tongue and specialized structures
        inside the bill to filter out tiny organisms and particles
        such as algae and small crustaceans.

        Flamingos get their famous pink and reddish coloring from
        pigments called carotenoids found in their food. Their
        diet can include algae, tiny crustaceans, and other small
        aquatic organisms. A flamingo's color can therefore be
        influenced by what it eats.
    `,

    funFacts: [
        {
            title: "You Are What You Eat",
            text: `
                Flamingo chicks are born with grayish or pale
                feathers rather than the brilliant pink color
                adults are famous for. Carotenoid pigments in
                their food are absorbed by the body and contribute
                to the pink and reddish colors of their feathers.
            `
        },

        {
            title: "Upside-Down Filter Feeding",
            text: `
                Flamingos often turn their heads upside down
                while feeding. Their specialized bills contain
                structures called lamellae that help filter tiny
                food particles from water and mud. Their muscular
                tongues help move water through the bill.
            `
        },

        {
            title: "The One-Legged Stand",
            text: `
                Flamingos are famous for standing on one leg.
                Their leg structure allows them to maintain this
                position very efficiently, reducing the amount
                of energy required to remain upright and potentially
                helping reduce heat loss through their legs.
            `
        },

        {
            title: "Crop Milk",
            text: `
                Flamingo parents produce a nutrient-rich secretion
                called crop milk to feed their chicks. Both males
                and females can produce it. It contains fats,
                proteins, and other nutrients that help young
                flamingos grow.
            `
        },

        {
            title: "Those 'Backward Knees'",
            text: `
                The joint that appears to bend backward halfway
                down a flamingo's leg is actually its ankle.
                The true knee is positioned much higher and is
                mostly hidden beneath the bird's body feathers.
            `
        }
    ],

    khmerTitle: "និមិត្តសញ្ញាពណ៌ផ្កាឈូក៖ សត្វ Flamingo",

    khmerQuote: `
        ជាសត្វស្លាបរស់នៅតំបន់ទឹកដែលមានពណ៌ស្រស់ស្អាត
        ល្បីដោយសារការស៊ីអាហារដោយបែរក្បាលចុះក្រោម
        ការឈរជើងម្ខាង និងពណ៌ផ្កាឈូកដែលទទួលឥទ្ធិពលពីអាហារ។
    `,

    khmerDescription: `
        សត្វ Flamingo ល្បីដោយសារជើងវែង កវែងដែលមានរាងកោង
        និងរោមពណ៌ផ្កាឈូកទៅក្រហមដ៏ស្រស់ស្អាត។ ពួកវាត្រូវបាន
        សម្របខ្លួនយ៉ាងពិសេសសម្រាប់រស់នៅក្នុងតំបន់ទឹករាក់
        រួមទាំងតំបន់ដែលមានទឹកប្រៃ និងមានជាតិអាល់កាឡាំង
        ដែលសត្វជាច្រើនប្រភេទផ្សេងទៀតពិបាករស់នៅ។

        សត្វ Flamingo ជាសត្វស្លាបដែលចូលចិត្តរស់នៅជាសង្គម
        ហើយជាញឹកញាប់ប្រមូលផ្តុំគ្នាជាអាណានិគមធំៗ។
        ក្រុម Flamingo ដែលមានចំនួនច្រើនអាចត្រូវបានហៅថា
        flamboyance។ ការរស់នៅជាក្រុមធំអាចជួយឱ្យពួកវា
        ស្វែងរកកន្លែងមានអាហារ ការពារខ្លួនពីសត្វប្រមាញ់
        និងសម្របសម្រួលសកម្មភាពបន្តពូជ។

        ចំពុះដ៏ចម្លែករបស់វាត្រូវបានសម្របខ្លួនសម្រាប់
        ការចម្រោះអាហារ។ សត្វ Flamingo ដាក់ចំពុះចូលក្នុង
        ទឹករាក់ និងភក់ បន្ទាប់មកប្រើអណ្ដាត និងរចនាសម្ព័ន្ធ
        ពិសេសនៅក្នុងចំពុះ ដើម្បីចម្រោះសារធាតុតូចៗ
        ដូចជា សារាយ និងសត្វសំបកតូចៗចេញពីទឹក។

        សត្វ Flamingo ទទួលបានពណ៌ផ្កាឈូក និងក្រហមដ៏ល្បី
        ពីសារធាតុពណ៌ដែលហៅថា carotenoids ដែលមាននៅក្នុង
        អាហាររបស់វា។ អាហាររបស់ពួកវាអាចរួមមានសារាយ
        សត្វសំបកតូចៗ និងសារពាង្គកាយតូចៗផ្សេងទៀតនៅក្នុងទឹក។
        ដូច្នេះពណ៌របស់ Flamingo អាចទទួលឥទ្ធិពលពីអាហារ
        ដែលវាស៊ី។
    `,

    khmerFunFacts: [
        {
            title: "អាហារបង្កើតពណ៌",
            text: `
                កូន Flamingo កើតមកជាមួយរោមពណ៌ប្រផេះ
                ឬពណ៌ស្រាល មិនមែនពណ៌ផ្កាឈូកភ្លឺដូចសត្វពេញវ័យទេ។
                សារធាតុ carotenoids ពីអាហារត្រូវបានរាងកាយ
                ស្រូបយក ហើយជួយបង្កើតពណ៌ផ្កាឈូក និងក្រហម
                នៅលើរោមរបស់វា។
            `
        },

        {
            title: "ការស៊ីអាហារដោយបែរក្បាលចុះក្រោម",
            text: `
                សត្វ Flamingo ជាញឹកញាប់បែរក្បាលចុះក្រោម
                នៅពេលស៊ីអាហារ។ ចំពុះរបស់វាមានរចនាសម្ព័ន្ធ
                ពិសេសដែលហៅថា lamellae ដែលជួយចម្រោះ
                ភាគល្អិតអាហារតូចៗចេញពីទឹក និងភក់។
                អណ្ដាតដែលមានសាច់ដុំរឹងមាំជួយផ្លាស់ទីទឹក
                តាមចំពុះ។
            `
        },

        {
            title: "ការឈរជើងម្ខាង",
            text: `
                សត្វ Flamingo ល្បីដោយសារការឈរជើងម្ខាង។
                រចនាសម្ព័ន្ធជើងរបស់វាអនុញ្ញាតឱ្យរក្សាទីតាំងនេះ
                បានយ៉ាងមានប្រសិទ្ធភាព ដោយកាត់បន្ថយថាមពលដែល
                ត្រូវការសម្រាប់ឈរ ហើយអាចជួយកាត់បន្ថយ
                ការបាត់បង់កម្ដៅតាមរយៈជើងផងដែរ។
            `
        },

        {
            title: "អាហារពិសេសសម្រាប់កូន",
            text: `
                ឪពុកម្តាយ Flamingo ផលិតសារធាតុចិញ្ចឹមមួយ
                ដែលហៅថា crop milk ដើម្បីចិញ្ចឹមកូនរបស់វា។
                ទាំង Flamingo ឈ្មោល និងញីអាចផលិតសារធាតុនេះ
                ដែលមានខ្លាញ់ ប្រូតេអ៊ីន និងសារធាតុចិញ្ចឹមផ្សេងៗ
                សម្រាប់ជួយឱ្យកូនលូតលាស់។
            `
        },

        {
            title: "ជង្គង់ដែលមើលទៅបត់ទៅក្រោយ",
            text: `
                សន្លាក់ដែលមើលទៅដូចជាបត់ទៅក្រោយនៅពាក់កណ្តាល
                ជើងរបស់ Flamingo តាមពិតទៅគឺជាកជើងរបស់វា។
                ជង្គង់ពិតប្រាកដស្ថិតនៅខ្ពស់ជាងនេះ និងត្រូវបាន
                រោមនៅលើរាងកាយគ្របដណ្តប់ស្ទើរតែមើលមិនឃើញ។
            `
        }
    ]
},

{
    name: "Chameleon",
    title: "THE COLOR MASTER: THE CHAMELEON",
    khmer: "សត្វចាម",
    category: "Reptiles",
    image: "images/chameleon.jpg",

    quote: `
        A bizarrely specialized reptile equipped with independently
        moving eyes, an incredibly fast projectile tongue, and
        remarkable skin that can change color.
    `,

    scientificName: `
        Chamaeleonidae (over 200 species, including Panther,
        Veiled, and Jackson's Chameleons)
    `,

    habitat: `
        Rainforests, deserts, savannas, and mountain slopes across
        Africa, Madagascar, Southern Europe, and Asia.
    `,

    status: `
        Varies by species. Some common species are Least Concern 🟢,
        while many wild species are Vulnerable 🟠 or Endangered 🔴.
    `,

    lifespan: `
        About 2–5 years for many smaller species and
        5–10+ years for some larger species.
    `,

    topSpeed: `
        Tongue projection can occur extremely rapidly,
        with some chameleons reaching remarkable acceleration.
    `,

    description: `
        Chameleons are highly specialized lizards, with many
        species adapted for life in trees and shrubs. Their bodies
        are often laterally compressed, helping them move through
        narrow branches and foliage.

        Many chameleons have prehensile tails that can wrap around
        branches and help stabilize their bodies. Their feet are
        also highly specialized, with groups of toes arranged
        into opposing bundles that help them grip narrow branches.

        Chameleons are famous for their unusual eyes. Each eye
        can move independently, allowing a chameleon to observe
        different directions without moving its entire head.
        When hunting, both eyes can also work together to provide
        accurate depth perception.

        Their most spectacular hunting tool is their tongue.
        A chameleon's tongue can extend to a remarkable length
        relative to its body and can be projected extremely
        quickly toward prey. This allows the chameleon to capture
        insects without needing to move close to them.

        Chameleons can also change the color and pattern of their
        skin. Color changes can be influenced by communication,
        mood, temperature, and environmental conditions. Specialized
        cells in their skin help control how light is reflected,
        producing different colors and patterns.
    `,

    funFacts: [
        {
            title: "Color Change Is More Than Camouflage",
            text: `
                Chameleons do not change color only to disappear
                into their surroundings. Color changes can also
                communicate mood, social status, aggression,
                courtship, and changes in body temperature.
                Specialized structures in the skin help reflect
                different wavelengths of light.
            `
        },

        {
            title: "360-Degree Vision",
            text: `
                A chameleon's eyes can move independently of one
                another. This allows it to monitor two different
                directions at the same time without turning its
                head. When it focuses both eyes on prey, it gains
                better depth perception for an accurate strike.
            `
        },

        {
            title: "The Ballistic Tongue",
            text: `
                A chameleon's tongue can extend to around twice
                the length of its body in some species. Specialized
                elastic tissues help store energy before the tongue
                launches toward prey at incredible speed.
            `
        },

        {
            title: "Elastic Energy Beats Slow Reactions",
            text: `
                The explosive launch of a chameleon's tongue relies
                heavily on stored elastic energy. This allows the
                tongue to accelerate extremely quickly without
                requiring the entire movement to be powered directly
                by muscle contraction at the moment of launch.
            `
        },

        {
            title: "Tiny Enough for a Fingertip",
            text: `
                Some of the world's smallest chameleons belong to
                the Brookesia group from Madagascar. Brookesia nana
                is extraordinarily tiny, with adults measuring only
                a few centimeters long.
            `
        }
    ],

    khmerTitle: "ចៅហ្វាយនៃពណ៌៖ សត្វចាម",

    khmerQuote: `
        ជាសត្វល្មូនដែលមានលក្ខណៈពិសេសខ្លាំង មានភ្នែកដែលអាច
        ផ្លាស់ទីដោយឯករាជ្យ អណ្ដាតដែលបាញ់ចេញបានលឿនបំផុត
        និងស្បែកដែលអាចផ្លាស់ប្តូរពណ៌បានយ៉ាងអស្ចារ្យ។
    `,

    khmerDescription: `
        សត្វចាមគឺជាសត្វជីងចក់ដែលមានលក្ខណៈពិសេសយ៉ាងខ្លាំង
        ហើយប្រភេទជាច្រើនត្រូវបានសម្របខ្លួនសម្រាប់រស់នៅ
        លើដើមឈើ និងគុម្ពោត។ រាងកាយរបស់ពួកវាជាច្រើន
        មានរាងសំប៉ែតពីចំហៀង ដែលជួយឱ្យវាផ្លាស់ទីនៅតាម
        មែកឈើតូចៗ និងក្នុងចំណោមស្លឹកបានងាយ។

        សត្វចាមជាច្រើនមានកន្ទុយដែលអាចរុំជុំវិញមែកឈើ
        ដើម្បីជួយរក្សាលំនឹង។ ជើងរបស់វាក៏មានលក្ខណៈពិសេស
        ដោយម្រាមជើងត្រូវបានរៀបចំជាក្រុមប្រឆាំងគ្នា
        ដែលជួយឱ្យវាកាន់មែកឈើតូចៗបានយ៉ាងរឹងមាំ។

        សត្វចាមល្បីដោយសារភ្នែកដ៏ចម្លែករបស់វា។ ភ្នែកនីមួយៗ
        អាចផ្លាស់ទីដោយឯករាជ្យពីគ្នា ដែលអនុញ្ញាតឱ្យវាមើល
        ទៅទិសពីរផ្សេងគ្នាក្នុងពេលតែមួយ ដោយមិនចាំបាច់
        ផ្លាស់ទីក្បាលទាំងមូល។ នៅពេលប្រមាញ់ ភ្នែកទាំងពីរ
        អាចផ្តោតលើសត្វចំណី ដើម្បីជួយវាយតម្លៃចម្ងាយបានត្រឹមត្រូវ។

        ឧបករណ៍ប្រមាញ់ដ៏អស្ចារ្យបំផុតរបស់វាគឺអណ្ដាត។
        អណ្ដាតរបស់សត្វចាមអាចលាតចេញបានវែងខ្លាំង
        បើប្រៀបធៀបនឹងរាងកាយ ហើយអាចបាញ់ទៅរកសត្វចំណី
        បានយ៉ាងលឿន។ វាអនុញ្ញាតឱ្យសត្វចាមចាប់សត្វល្អិត
        ដោយមិនចាំបាច់ចូលទៅជិតសត្វចំណី។

        សត្វចាមក៏អាចផ្លាស់ប្តូរពណ៌ និងលំនាំលើស្បែករបស់វា។
        ការផ្លាស់ប្តូរពណ៌អាចទាក់ទងនឹងការទាក់ទងគ្នា អារម្មណ៍
        ស្ថានភាពសង្គម ការបន្តពូជ សីតុណ្ហភាព និងបរិស្ថាន។
        កោសិកា និងរចនាសម្ព័ន្ធពិសេសនៅក្នុងស្បែកជួយគ្រប់គ្រង
        របៀបដែលពន្លឺត្រូវបានឆ្លុះ ដើម្បីបង្កើតពណ៌ និងលំនាំផ្សេងៗ។
    `,

    khmerFunFacts: [
        {
            title: "ការផ្លាស់ប្តូរពណ៌មិនមែនសម្រាប់លាក់ខ្លួនតែប៉ុណ្ណោះ",
            text: `
                សត្វចាមមិនផ្លាស់ប្តូរពណ៌ដើម្បីលាក់ខ្លួនពី
                បរិស្ថានតែប៉ុណ្ណោះទេ។ ការផ្លាស់ប្តូរពណ៌ក៏អាច
                ប្រើសម្រាប់បង្ហាញអារម្មណ៍ ស្ថានភាពសង្គម
                ការឈ្លានពាន ការទាក់ទាញគូ និងការគ្រប់គ្រង
                សីតុណ្ហភាពរាងកាយ។
            `
        },

        {
            title: "ការមើលឃើញជុំវិញខ្លួន",
            text: `
                ភ្នែករបស់សត្វចាមអាចផ្លាស់ទីដោយឯករាជ្យពីគ្នា។
                វាអាចតាមដានទិសពីរផ្សេងគ្នាក្នុងពេលតែមួយ
                ដោយមិនចាំបាច់បង្វិលក្បាល។ នៅពេលផ្តោតភ្នែក
                ទាំងពីរលើសត្វចំណី វាអាចវាយតម្លៃចម្ងាយបានល្អ
                សម្រាប់ការវាយប្រហារ។
            `
        },

        {
            title: "អណ្ដាតដែលបាញ់ដូចគ្រាប់កាំភ្លើង",
            text: `
                អណ្ដាតរបស់សត្វចាមប្រភេទខ្លះអាចលាតចេញបាន
                ប្រហែលពីរដងនៃប្រវែងរាងកាយ។ ជាលិកាដែលអាច
                រក្សាទុកថាមពលបត់បែនជួយឱ្យអណ្ដាតបាញ់ចេញ
                ទៅរកសត្វចំណីបានយ៉ាងលឿន។
            `
        },

        {
            title: "ថាមពលបត់បែនសម្រាប់ការវាយប្រហារ",
            text: `
                ការបាញ់អណ្ដាតដ៏លឿនរបស់សត្វចាមពឹងផ្អែកយ៉ាងខ្លាំង
                លើថាមពលដែលត្រូវបានរក្សាទុកក្នុងជាលិកាបត់បែន។
                វាអនុញ្ញាតឱ្យអណ្ដាតបង្កើនល្បឿនយ៉ាងខ្លាំង
                ដោយមិនចាំបាច់ពឹងផ្អែកលើការកន្ត្រាក់សាច់ដុំ
                ដោយផ្ទាល់ទាំងស្រុងនៅពេលបាញ់។
            `
        },

        {
            title: "តូចដល់ថ្នាក់អាចនៅលើចុងម្រាមដៃ",
            text: `
                សត្វចាមដែលតូចបំផុតមួយចំនួនក្នុងពិភពលោក
                ស្ថិតនៅក្នុងក្រុម Brookesia ពីប្រទេសម៉ាដាហ្គាស្ការ។
                Brookesia nana មានទំហំតូចខ្លាំង ដោយសត្វពេញវ័យ
                មានប្រវែងត្រឹមតែប៉ុន្មានសង់ទីម៉ែត្រប៉ុណ្ណោះ។
            `
        }
    ]
},

{
    name: "Crocodile",
    title: "THE ANCIENT APEX: THE CROCODILE",
    khmer: "សត្វក្រពើ",
    category: "Reptiles",
    image: "images/crocodile.jpg",

    quote: `
        An ancient lineage of powerful aquatic predators,
        equipped with armored skin, extraordinary bite force,
        and highly effective ambush-hunting abilities.
    `,

    scientificName: `
        Crocodylidae (14 living species, including Saltwater,
        Nile, and American Crocodiles)
    `,

    habitat: `
        Rivers, lakes, swamps, estuaries, and coastal waters
        across tropical regions of Africa, Asia, the Americas,
        and Australia.
    `,

    status: `
        Varies by species. Some species are Least Concern 🟢,
        while others, including the Philippine and Siamese
        Crocodiles, are Critically Endangered 🔴.
    `,

    lifespan: `
        About 70–100 years in some species, although lifespan
        varies considerably between species and individuals.
    `,

    topSpeed: `
        Up to about 30–35 km/h (18–22 mph) in short bursts
        while swimming.
    `,

    description: `
        Crocodiles are large semi-aquatic reptiles with powerful
        bodies, muscular tails, and tough armored skin. Their skin
        contains bony structures called osteoderms, which provide
        additional protection while allowing them to remain flexible
        enough to move through water.

        Their eyes, nostrils, and ears are positioned high on their
        heads. This unusual arrangement allows a crocodile to remain
        mostly submerged while keeping its senses above the surface.
        From this position, it can quietly watch for prey approaching
        the water's edge.

        Crocodiles are ambush predators. They can remain extremely
        still for long periods before suddenly accelerating toward
        their prey. Their powerful jaws are designed for gripping
        and crushing rather than chewing, so they often swallow
        smaller prey whole or tear larger prey into pieces.

        Crocodiles are ectothermic animals, meaning they rely on
        environmental heat to regulate their body temperature.
        They may bask in the sun to warm themselves and change
        their behavior or position to prevent overheating.
    `,

    funFacts: [
        {
            title: "One of the Strongest Bites",
            text: `
                Large crocodiles can produce enormous bite forces.
                Saltwater Crocodiles have been measured with some
                of the strongest bites recorded among living animals.
                Their powerful jaws allow them to grip and crush
                prey with incredible force.
            `
        },

        {
            title: "The Famous Death Roll",
            text: `
                Crocodiles cannot chew food like humans do. When
                they capture large prey, they may use a powerful
                spinning maneuver called a death roll. By rapidly
                rotating their bodies, they can tear pieces from
                prey that are too large to swallow whole.
            `
        },

        {
            title: "Basking and Gaping",
            text: `
                Crocodiles often bask in the sun to warm their
                bodies. They may also sit with their mouths open,
                a behavior called gaping, which can help release
                excess heat through the mouth and head while they
                regulate their body temperature.
            `
        },

        {
            title: "Sensors on the Snout",
            text: `
                Small sensory structures around a crocodile's
                snout can detect pressure changes and vibrations
                in the surrounding water. These sensors help
                crocodiles detect movement and locate potential
                prey, even when visibility is poor.
            `
        },

        {
            title: "Ancient Crocodilian Lineage",
            text: `
                Crocodilians have an extremely ancient evolutionary
                history. Their ancestors lived alongside dinosaurs,
                and crocodilian relatives survived the mass extinction
                that occurred about 66 million years ago.
            `
        }
    ],

    khmerTitle: "អ្នកប្រមាញ់បុរាណ៖ សត្វក្រពើ",

    khmerQuote: `
        ជាក្រុមសត្វប្រមាញ់ក្នុងទឹកដែលមានប្រវត្តិវិវត្តន៍ដ៏យូរ
        មានស្បែកការពារដ៏រឹងមាំ កម្លាំងខាំដ៏អស្ចារ្យ និង
        សមត្ថភាពប្រមាញ់ដោយការលាក់ខ្លួនបានយ៉ាងមានប្រសិទ្ធភាព។
    `,

    khmerDescription: `
        សត្វក្រពើគឺជាសត្វល្មូនធំៗដែលរស់នៅទាំងក្នុងទឹក
        និងលើគោក។ ពួកវាមានរាងកាយដ៏រឹងមាំ កន្ទុយមានសាច់ដុំ
        និងស្បែករឹងដែលមានរចនាសម្ព័ន្ធឆ្អឹងតូចៗហៅថា
        osteoderms។ រចនាសម្ព័ន្ធទាំងនេះជួយការពាររាងកាយ
        ខណៈពេលដែលនៅតែអនុញ្ញាតឱ្យពួកវាផ្លាស់ទីក្នុងទឹកបាន។

        ភ្នែក រន្ធច្រមុះ និងត្រចៀករបស់សត្វក្រពើស្ថិតនៅផ្នែក
        ខាងលើនៃក្បាល។ រចនាសម្ព័ន្ធនេះអនុញ្ញាតឱ្យវាលាក់ខ្លួន
        ស្ទើរតែទាំងស្រុងនៅក្រោមទឹក ខណៈពេលដែលរក្សាអង្គ
        យល់ដឹងសំខាន់ៗនៅពីលើផ្ទៃទឹក។ ពីទីតាំងនេះ វាអាច
        មើលសង្កេតសត្វចំណីដែលចូលមកជិតមាត់ទឹក។

        សត្វក្រពើគឺជាអ្នកប្រមាញ់ដោយការវាយប្រហារភ្លាមៗ។
        ពួកវាអាចនៅស្ងៀមរយៈពេលយូរ មុនពេលបង្កើនល្បឿន
        វាយប្រហារសត្វចំណី។ ថ្គាមរបស់វាត្រូវបានបង្កើតឡើង
        សម្រាប់ចាប់ និងកិនសត្វជាជាងទំពារដូចមនុស្ស។
        ដូច្នេះវាអាចលេបសត្វតូចៗទាំងមូល ឬហែកសត្វធំៗ
        ជាបំណែក។

        សត្វក្រពើជាសត្វ ectothermic ដែលមានន័យថាវាពឹងផ្អែក
        លើកម្តៅពីបរិស្ថានដើម្បីគ្រប់គ្រងសីតុណ្ហភាពរាងកាយ។
        ពួកវាអាចហាលថ្ងៃដើម្បីកម្ដៅរាងកាយ ហើយផ្លាស់ប្តូរ
        ទីតាំង ឬសកម្មភាពដើម្បីជៀសវាងកម្ដៅខ្លាំងពេក។
    `,

    khmerFunFacts: [
        {
            title: "កម្លាំងខាំដ៏អស្ចារ្យ",
            text: `
                សត្វក្រពើធំៗអាចបង្កើតកម្លាំងខាំដ៏ខ្លាំងក្លា។
                សត្វក្រពើទឹកប្រៃមានការវាស់វែងឃើញថាមាន
                កម្លាំងខាំខ្លាំងបំផុតមួយក្នុងចំណោមសត្វដែលរស់នៅ
                សព្វថ្ងៃ។ ថ្គាមដ៏ខ្លាំងរបស់វាជួយឱ្យវាចាប់
                និងកិនសត្វចំណីបានយ៉ាងមានប្រសិទ្ធភាព។
            `
        },

        {
            title: "ការវិលខ្លួនដ៏ល្បី",
            text: `
                សត្វក្រពើមិនអាចទំពារអាហារដូចមនុស្សបានទេ។
                នៅពេលវាចាប់សត្វធំៗ វាអាចប្រើចលនាវិលខ្លួន
                ដ៏មានកម្លាំងដែលហៅថា death roll។ ដោយវិល
                រាងកាយយ៉ាងលឿន វាអាចហែកបំណែកចេញពីសត្វ
                ដែលធំពេកមិនអាចលេបទាំងមូលបាន។
            `
        },

        {
            title: "ការហាលថ្ងៃ និងបើកមាត់",
            text: `
                សត្វក្រពើជាញឹកញាប់ហាលថ្ងៃដើម្បីកម្ដៅរាងកាយ។
                ពួកវាក៏អាចអង្គុយដោយបើកមាត់ ដែលហៅថា gaping។
                ឥរិយាបថនេះអាចជួយបញ្ចេញកម្ដៅតាមមាត់ និងក្បាល
                នៅពេលវាគ្រប់គ្រងសីតុណ្ហភាពរាងកាយ។
            `
        },

        {
            title: "ឧបករណ៍ចាប់រំញ័រនៅលើច្រមុះ",
            text: `
                រចនាសម្ព័ន្ធទទួលអារម្មណ៍តូចៗនៅជុំវិញច្រមុះ
                របស់សត្វក្រពើអាចរកឃើញការផ្លាស់ប្តូរសម្ពាធ
                និងរំញ័រនៅក្នុងទឹក។ វាជួយឱ្យសត្វក្រពើរកឃើញ
                ចលនា និងកំណត់ទីតាំងសត្វចំណី ទោះបីមើលឃើញ
                មិនច្បាស់ក៏ដោយ។
            `
        },

        {
            title: "ប្រវត្តិវិវត្តន៍ដ៏បុរាណ",
            text: `
                សត្វក្នុងក្រុម crocodilians មានប្រវត្តិវិវត្តន៍
                ដ៏យូរអង្វែង។ បុព្វបុរសរបស់ពួកវាបានរស់នៅ
                ជាមួយដាយណូស័រ ហើយសាច់ញាតិរបស់សត្វក្រពើ
                បានរស់រានមានជីវិតពីការផុតពូជដ៏ធំប្រហែល
                ៦៦ លានឆ្នាំមុន។
            `
        }
    ]
},

{
    name: "Turtle",
    title: "THE ARMORED VOYAGER: THE TURTLE",
    khmer: "សត្វអណ្តើក",
    category: "Reptiles",
    image: "images/turtle.jpg",

    quote: `
        An ancient master of endurance, protected by a specialized
        shell and equipped with remarkable adaptations for life
        on land and in water.
    `,

    scientificName: `
        Testudines (over 350 living species of turtles,
        tortoises, and terrapins)
    `,

    habitat: `
        Oceans, rivers, lakes, ponds, deserts, and tropical forests
        on every continent except Antarctica.
    `,

    status: `
        Varies by species. Some common freshwater species are
        Least Concern 🟢, while many sea turtle species are
        Threatened or Endangered 🔴.
    `,

    lifespan: `
        About 30–50 years for many species, while some giant
        tortoises can live for more than 100 years.
    `,

    topSpeed: `
        Some Leatherback Sea Turtles can reach around
        35 km/h (22 mph) during short bursts of swimming.
    `,

    description: `
        Turtles are reptiles recognized by their specialized
        protective shells. Unlike armor that sits on top of the
        body, a turtle's shell is a permanent part of its skeleton
        and is connected to the ribs and spine.

        The upper part of the shell is called the carapace,
        while the lower part is called the plastron. Different
        turtle species have evolved different shell shapes
        depending on how they live.

        Aquatic turtles often have streamlined shells and webbed
        feet or powerful flippers that help them move through
        water. Land-dwelling tortoises usually have heavier,
        more dome-shaped shells and sturdy legs.

        Turtles do not have teeth. Instead, they have hard,
        sharp-edged beaks made from keratin. Depending on the
        species, these beaks can be adapted for eating plants,
        insects, fish, jellyfish, or other foods.

        Turtles have survived for an extremely long time as a
        group, and their body design has remained remarkably
        successful across many different environments.
    `,

    funFacts: [
        {
            title: "The Shell Is Part of the Skeleton",
            text: `
                A turtle cannot simply crawl out of its shell.
                The shell is connected directly to the animal's
                skeleton, including its ribs and spine. The outer
                surface is covered by scutes made from keratin,
                the same protein found in human fingernails.
            `
        },

        {
            title: "Earth's Magnetic GPS",
            text: `
                Sea turtles can travel enormous distances across
                the ocean and use Earth's magnetic field as one
                of the tools that helps them navigate. Some females
                return to the general coastal region where they
                were born when it is time to reproduce.
            `
        },

        {
            title: "Breathing Through the Rear",
            text: `
                Some freshwater turtles can absorb oxygen from
                water through highly vascularized tissues around
                the cloaca. This unusual adaptation, called cloacal
                respiration, can help certain species remain
                underwater for long periods when conditions allow.
            `
        },

        {
            title: "Temperature Can Determine Sex",
            text: `
                In many turtles, including most sea turtles,
                the temperature of the nest during incubation
                influences the sex of developing hatchlings.
                Warmer temperatures generally produce more females,
                while cooler temperatures generally produce more
                males.
            `
        },

        {
            title: "Masters of Holding Their Breath",
            text: `
                Sea turtles breathe air with lungs, but they can
                remain underwater for long periods by slowing their
                metabolism and heart rate. The exact time they can
                stay submerged depends on the species, activity,
                temperature, and whether they are resting or diving.
            `
        }
    ],

    khmerTitle: "អ្នកធ្វើដំណើរដែលមានគ្រឿងសឹក៖ សត្វអណ្តើក",

    khmerQuote: `
        ជាសត្វបុរាណដែលមានសមត្ថភាពរស់រានមានជីវិត និងអត់ធ្មត់
        បានយ៉ាងអស្ចារ្យ ដោយមានសំបកការពារដ៏ពិសេស និងលក្ខណៈ
        សម្របខ្លួនសម្រាប់រស់នៅទាំងលើគោក និងក្នុងទឹក។
    `,

    khmerDescription: `
        សត្វអណ្តើកគឺជាសត្វល្មូនដែលគេស្គាល់យ៉ាងងាយស្រួល
        ដោយសារសំបកការពារដ៏ពិសេសរបស់វា។ សំបកនេះមិនមែនជា
        គ្រឿងសឹកដែលដាក់នៅលើរាងកាយនោះទេ ប៉ុន្តែវាជាផ្នែក
        មួយនៃគ្រោងឆ្អឹង ហើយភ្ជាប់ជាមួយឆ្អឹងជំនី និងឆ្អឹងខ្នង។

        ផ្នែកខាងលើនៃសំបកហៅថា carapace ខណៈផ្នែកខាងក្រោម
        ហៅថា plastron។ សត្វអណ្តើកប្រភេទផ្សេងៗមានរាងសំបក
        ខុសៗគ្នា អាស្រ័យលើរបៀបរស់នៅរបស់ពួកវា។

        សត្វអណ្តើកដែលរស់នៅក្នុងទឹកជាច្រើនមានសំបករាងរលូន
        និងជើងមានស្បែកភ្ជាប់រវាងម្រាម ឬព្រុយដ៏មានកម្លាំង
        ដែលជួយឱ្យវាផ្លាស់ទីក្នុងទឹក។ សត្វអណ្តើកគោកជាទូទៅ
        មានសំបកធ្ងន់ និងរាងមូល ហើយមានជើងរឹងមាំ។

        សត្វអណ្តើកមិនមានធ្មេញទេ។ ជំនួសមកវិញ វាមានចំពុះ
        រឹង និងមុតដែលធ្វើពី keratin។ អាស្រ័យលើប្រភេទ
        ចំពុះនេះអាចសម្របខ្លួនសម្រាប់ស៊ីរុក្ខជាតិ សត្វល្អិត
        ត្រី ចាហួយសមុទ្រ ឬអាហារផ្សេងៗ។

        ក្រុមសត្វអណ្តើកមានប្រវត្តិរស់រានមានជីវិតយូរអង្វែង
        ហើយរចនាសម្ព័ន្ធរាងកាយរបស់វាបានបង្ហាញថាមានប្រសិទ្ធភាព
        យ៉ាងខ្លាំងក្នុងបរិស្ថានជាច្រើនប្រភេទ។
    `,

    khmerFunFacts: [
        {
            title: "សំបកគឺជាផ្នែកនៃគ្រោងឆ្អឹង",
            text: `
                សត្វអណ្តើកមិនអាចចេញពីសំបករបស់ខ្លួនបានទេ។
                សំបកភ្ជាប់ដោយផ្ទាល់ទៅនឹងគ្រោងឆ្អឹង រួមទាំង
                ឆ្អឹងជំនី និងឆ្អឹងខ្នង។ ផ្ទៃខាងក្រៅមានស្រទាប់
                scutes ដែលធ្វើពី keratin ដែលជាប្រូតេអ៊ីនដូចគ្នា
                ដែលមាននៅក្នុងក្រចកដៃមនុស្ស។
            `
        },

        {
            title: "GPS ពីដែនម៉ាញេទិចរបស់ផែនដី",
            text: `
                សត្វអណ្តើកសមុទ្រអាចធ្វើដំណើរចម្ងាយដ៏ឆ្ងាយ
                ឆ្លងកាត់មហាសមុទ្រ ហើយអាចប្រើដែនម៉ាញេទិច
                របស់ផែនដីជាឧបករណ៍មួយសម្រាប់ជួយរកទិសដៅ។
                សត្វញីមួយចំនួនអាចត្រឡប់ទៅតំបន់ឆ្នេរដែលវា
                កើត ដើម្បីបន្តពូជ។
            `
        },

        {
            title: "ដកដង្ហើមតាមផ្នែកខាងក្រោយ",
            text: `
                សត្វអណ្តើកទឹកសាបមួយចំនួនអាចស្រូបយកអុកស៊ីសែន
                ពីទឹកតាមរយៈជាលិកាដែលមានសរសៃឈាមច្រើននៅជុំវិញ
                cloaca។ លក្ខណៈពិសេសនេះហៅថា cloacal respiration
                ហើយអាចជួយឱ្យប្រភេទខ្លះនៅក្រោមទឹកបានយូរ។
            `
        },

        {
            title: "សីតុណ្ហភាពអាចកំណត់ភេទ",
            text: `
                នៅក្នុងសត្វអណ្តើកជាច្រើន រួមទាំងអណ្តើកសមុទ្រ
                ភាគច្រើន សីតុណ្ហភាពនៃសំបុកនៅពេលពងកំពុងញាស់
                អាចមានឥទ្ធិពលលើភេទរបស់កូនអណ្តើក។ សីតុណ្ហភាព
                ក្តៅជាទូទៅបង្កើតកូនញីច្រើនជាង ខណៈសីតុណ្ហភាព
                ត្រជាក់ជាទូទៅបង្កើតកូនឈ្មោលច្រើនជាង។
            `
        },

        {
            title: "អ្នកជំនាញក្នុងការកាន់ដង្ហើម",
            text: `
                សត្វអណ្តើកសមុទ្រដកដង្ហើមដោយប្រើសួត ប៉ុន្តែវា
                អាចនៅក្រោមទឹកបានយូរ ដោយបន្ថយដំណើរការរាងកាយ
                និងចង្វាក់បេះដូង។ រយៈពេលដែលវាអាចនៅក្រោមទឹក
                អាស្រ័យលើប្រភេទ សកម្មភាព សីតុណ្ហភាព និងថាតើ
                វាកំពុងសម្រាក ឬកំពុងមុជទឹក។
            `
        }
    ]
},

{
    name: "Snake",
    title: "THE SILENT HUNTER: THE SNAKE",
    khmer: "សត្វពស់",
    category: "Reptiles",
    image: "images/snake.jpg",

    quote: `
        A legless evolutionary marvel equipped with chemical
        tracking, specialized senses, flexible skulls, and
        highly effective ambush-hunting abilities.
    `,

    scientificName: `
        Serpentes (over 3,900 living species)
    `,

    habitat: `
        Rainforests, deserts, grasslands, oceans, lakes,
        wetlands, and underground burrows on every continent
        except Antarctica.
    `,

    status: `
        Varies greatly by species. Some common species are
        Least Concern 🟢, while habitat-restricted and island
        species may be Vulnerable 🟠 or Critically Endangered 🔴.
    `,

    lifespan: `
        About 10–25 years for many species, while some large
        pythons and boas can live for several decades.
    `,

    topSpeed: `
        Some fast-moving snakes, such as the Black Mamba,
        can reach around 20 km/h (12 mph) over short distances.
    `,

    description: `
        Snakes are legless reptiles belonging to the group
        Serpentes. Their bodies are covered with scales and
        have evolved into long, flexible forms that allow them
        to move through environments ranging from underground
        burrows and dense forests to deserts and open water.

        Snakes evolved from lizard-like ancestors, and over
        millions of years their bodies became highly specialized
        for life without external limbs. Their lack of legs
        allows many species to move efficiently through narrow
        spaces and complicated terrain.

        Snakes do not have external ears or movable eyelids.
        Instead, they rely on vibrations, chemical information,
        vision, and other specialized senses to understand their
        surroundings.

        Most snakes are predators. Depending on the species,
        they capture prey by constriction, venom, or simply
        grabbing and swallowing smaller animals. Their flexible
        skull structure allows them to consume prey that is
        much larger than would seem possible from the size of
        their head.
    `,

    funFacts: [
        {
            title: "Smelling With Their Tongues",
            text: `
                A snake's forked tongue helps collect chemical
                particles from the air and ground. When the tongue
                returns to the mouth, these chemicals are delivered
                to the vomeronasal organ, also called Jacobson's
                organ. The forked shape helps snakes compare
                chemical information from different directions.
            `
        },

        {
            title: "Built-In Thermal Sensors",
            text: `
                Pit vipers, many pythons, and some boas have
                specialized pit organs that can detect infrared
                radiation from warm objects. These sensors help
                certain snakes locate warm-blooded prey, especially
                in darkness.
            `
        },

        {
            title: "The Flexible Snake Skull",
            text: `
                Snakes do not actually dislocate their jaws to
                swallow prey. Instead, several bones in their
                skulls are connected by flexible joints and
                ligaments. Their lower jaw is also divided into
                two sides that can move somewhat independently,
                allowing the mouth to stretch around large prey.
            `
        },

        {
            title: "A Very Long Body",
            text: `
                A snake's long, narrow body requires its internal
                organs to be arranged differently from those of
                many other animals. In most snakes, the left lung
                is greatly reduced or absent, while the right lung
                is much larger and functional.
            `
        },

        {
            title: "They Sleep With Their Eyes Open",
            text: `
                Snakes cannot blink because they do not have
                movable eyelids. Instead, each eye is covered by
                a transparent protective scale called a spectacle
                or brille. This shield protects the eye while
                allowing the snake to see.
            `
        }
    ],

    khmerTitle: "អ្នកប្រមាញ់ស្ងាត់ស្ងៀម៖ សត្វពស់",

    khmerQuote: `
        ជាសត្វល្មូនដែលគ្មានជើងដ៏អស្ចារ្យ ដែលមានសមត្ថភាព
        រកឃើញសារធាតុគីមី អារម្មណ៍ពិសេស រចនាសម្ព័ន្ធ
        លលាដ៍ក្បាលដែលអាចបត់បែន និងវិធីប្រមាញ់ដ៏មានប្រសិទ្ធភាព។
    `,

    khmerDescription: `
        សត្វពស់គឺជាសត្វល្មូនដែលគ្មានជើង និងស្ថិតនៅក្នុងក្រុម
        Serpentes។ រាងកាយរបស់ពួកវាគ្របដណ្តប់ដោយស្រកា
        ហើយបានវិវត្តទៅជារាងវែង និងអាចបត់បែនបាន ដែលអនុញ្ញាត
        ឱ្យវារស់នៅក្នុងបរិស្ថានជាច្រើន ចាប់ពីរន្ធក្រោមដី
        និងព្រៃក្រាស់ រហូតដល់វាលខ្សាច់ និងតំបន់ទឹក។

        សត្វពស់មានដើមកំណើតពីបុព្វបុរសដែលមានលក្ខណៈដូច
        សត្វជីងចក់។ ក្នុងរយៈពេលរាប់លានឆ្នាំ រាងកាយរបស់វា
        បានវិវត្តឱ្យសមស្របនឹងការរស់នៅដោយគ្មានជើងខាងក្រៅ។
        ការគ្មានជើងអនុញ្ញាតឱ្យប្រភេទជាច្រើនផ្លាស់ទីតាម
        កន្លែងតូចចង្អៀត និងតំបន់ដែលមានឧបសគ្គបានយ៉ាងមានប្រសិទ្ធភាព។

        សត្វពស់មិនមានត្រចៀកខាងក្រៅ ឬត្របកភ្នែកដែលអាច
        បិទបើកបានទេ។ ជំនួសមកវិញ ពួកវាពឹងផ្អែកលើរំញ័រ
        ព័ត៌មានគីមី ការមើលឃើញ និងអារម្មណ៍ពិសេសផ្សេងៗ
        ដើម្បីយល់ពីបរិស្ថានជុំវិញខ្លួន។

        សត្វពស់ភាគច្រើនជាសត្វប្រមាញ់។ អាស្រ័យលើប្រភេទ
        ពួកវាអាចចាប់សត្វចំណីដោយរឹតបន្តឹង ប្រើពិស
        ឬចាប់ហើយលេបសត្វតូចៗ។ រចនាសម្ព័ន្ធលលាដ៍ក្បាល
        ដែលអាចបត់បែនបាន អនុញ្ញាតឱ្យពួកវាស៊ីសត្វចំណី
        ដែលមានទំហំធំជាងអ្វីដែលយើងរំពឹងពីទំហំក្បាលរបស់វា។
    `,

    khmerFunFacts: [
        {
            title: "ស្គាល់ក្លិនតាមរយៈអណ្ដាត",
            text: `
                អណ្ដាតដែលមានរាងបែកជាពីររបស់សត្វពស់ជួយ
                ប្រមូលភាគល្អិតគីមីពីខ្យល់ និងដី។ នៅពេលអណ្ដាត
                ត្រឡប់ចូលក្នុងមាត់ សារធាតុគីមីទាំងនេះត្រូវបាន
                បញ្ជូនទៅកាន់សរីរាង្គ vomeronasal ដែលហៅថា
                Jacobson's organ។ រាងបែកជាពីររបស់អណ្ដាត
                ជួយឱ្យវាប្រៀបធៀបព័ត៌មានគីមីពីទិសដៅផ្សេងៗ។
            `
        },

        {
            title: "ឧបករណ៍ចាប់កម្តៅនៅក្នុងខ្លួន",
            text: `
                ពស់វែកប្រភេទខ្លះ ពស់ថ្លាន់ជាច្រើន និងពស់ boa
                មួយចំនួនមានសរីរាង្គពិសេសដែលអាចរកឃើញ
                កាំរស្មីអ៊ីនហ្វ្រារ៉េដពីវត្ថុក្តៅ។ ឧបករណ៍នេះ
                ជួយឱ្យពស់មួយចំនួនរកទីតាំងសត្វចំណីដែលមាន
                ឈាមក្តៅ ជាពិសេសនៅក្នុងភាពងងឹត។
            `
        },

        {
            title: "លលាដ៍ក្បាលដែលអាចបត់បែនបាន",
            text: `
                សត្វពស់មិនបានដោះ ឬបំបាក់ថ្គាមរបស់វាដើម្បី
                លេបសត្វចំណីទេ។ ផ្ទុយទៅវិញ ឆ្អឹងជាច្រើននៅក្នុង
                លលាដ៍ក្បាលត្រូវបានភ្ជាប់ដោយសន្លាក់ និងសរសៃ
                ដែលអាចបត់បែនបាន។ ថ្គាមក្រោមក៏បែងចែកជា
                ពីរផ្នែកដែលអាចផ្លាស់ទីដោយឡែកពីគ្នាបានខ្លះៗ
                ដែលអនុញ្ញាតឱ្យមាត់ពង្រីកជុំវិញសត្វចំណីធំៗ។
            `
        },

        {
            title: "រាងកាយវែងពិសេស",
            text: `
                រាងកាយវែង និងតូចរបស់សត្វពស់ធ្វើឱ្យសរីរាង្គ
                ខាងក្នុងត្រូវបានរៀបចំខុសពីសត្វជាច្រើនប្រភេទ។
                ក្នុងសត្វពស់ភាគច្រើន សួតខាងឆ្វេងត្រូវបាន
                កាត់បន្ថយយ៉ាងខ្លាំង ឬបាត់ទៅ ខណៈសួតខាងស្តាំ
                មានទំហំធំ និងដំណើរការបានល្អ។
            `
        },

        {
            title: "ដេកដោយបើកភ្នែក",
            text: `
                សត្វពស់មិនអាចព្រិចភ្នែកបានទេ ព្រោះវាមិនមាន
                ត្របកភ្នែកដែលអាចបិទបើកបាន។ ជំនួសមកវិញ
                ភ្នែកនីមួយៗត្រូវបានគ្របដោយស្រទាប់ថ្លា
                ដែលហៅថា spectacle ឬ brille។ ស្រទាប់នេះ
                ការពារភ្នែក ខណៈពេលដែលនៅតែអនុញ្ញាតឱ្យ
                សត្វពស់មើលឃើញ។
            `
        }
    ]
},

{
    name: "Komodo Dragon",
    title: "THE DRAGON OF FLORES: THE KOMODO DRAGON",
    khmer: "សត្វនាគកូម៉ូដូ",
    category: "Reptiles",
    image: "images/komodo-dragon.jpg",

    quote: `
        The world's largest living lizard, equipped with venom,
        powerful jaws, sharp teeth, and an extraordinary ability
        to track prey using chemical signals.
    `,

    scientificName: `
        Varanus komodoensis
    `,

    habitat: `
        Tropical savannas, dry forests, and coastal areas on
        a small number of Indonesian islands, including Komodo,
        Rinca, and parts of Flores.
    `,

    status: `
        Endangered 🔴
    `,

    lifespan: `
        Around 30 years in the wild, with some individuals
        potentially living longer.
    `,

    topSpeed: `
        Up to about 20 km/h (12 mph) in short bursts.
    `,

    description: `
        The Komodo dragon is the largest living lizard in the
        world. Adult individuals can reach around 3 meters
        (10 feet) in total length and can weigh well over
        70 kilograms, with exceptionally large individuals
        exceeding 100 kilograms.

        Their bodies are built for power. They have muscular
        legs, strong claws, a long muscular tail, and tough skin
        containing small bony structures called osteoderms.
        Their skulls contain sharp, serrated teeth designed to
        tear flesh rather than chew it.

        Komodo dragons are apex predators in their island
        environments. They can hunt animals ranging from small
        mammals and birds to large prey such as deer and wild
        pigs. They may also scavenge animals that have already
        died.

        Their hunting strategy combines stealth, patience,
        powerful bites, and chemical tracking. After biting
        prey, a Komodo dragon can use its venom and powerful
        jaws to cause serious injury and help weaken the animal.
    `,

    funFacts: [
        {
            title: "Yes, They Really Have Venom",
            text: `
                Komodo dragons possess venom glands in their lower
                jaws. Their venom contains compounds that can
                interfere with blood clotting and contribute to
                lowered blood pressure. Their bite is therefore
                more complicated than the old idea that they rely
                mainly on bacteria in their mouths.
            `
        },

        {
            title: "Virgin Birth Is Possible",
            text: `
                Female Komodo dragons can sometimes reproduce
                without a male through a process called
                parthenogenesis. The resulting offspring are
                genetically related to the mother and are male,
                because of the species' unusual sex-determination
                system.
            `
        },

        {
            title: "The Tongue Is a Chemical Detector",
            text: `
                Komodo dragons constantly flick their long,
                forked tongues through the air. Chemical particles
                collected by the tongue are transferred to the
                vomeronasal, or Jacobson's, organ. This allows
                them to detect and follow chemical traces from
                potential food.
            `
        },

        {
            title: "Young Dragons Live in Trees",
            text: `
                Young Komodo dragons spend much more time in trees
                than adults. Staying above the ground helps protect
                them from predators, including larger Komodo dragons
                that may eat younger individuals.
            `
        },

        {
            title: "Massive Meals",
            text: `
                Komodo dragons can consume very large meals when
                food is available. Their flexible stomachs and
                expandable bodies allow them to swallow substantial
                amounts of meat at once. After a major meal, they
                may go for an extended period before needing to eat
                again.
            `
        }
    ],

    khmerTitle: "នាគនៃកោះ Flores៖ សត្វនាគកូម៉ូដូ",

    khmerQuote: `
        ជាសត្វជីងចក់ដែលមានទំហំធំបំផុតក្នុងពិភពលោក
        មានពិស ថ្គាមដ៏មានកម្លាំង ធ្មេញមុត និងសមត្ថភាព
        ពិសេសក្នុងការតាមដានសត្វចំណីតាមសារធាតុគីមី។
    `,

    khmerDescription: `
        សត្វនាគកូម៉ូដូគឺជាសត្វជីងចក់ដែលមានទំហំធំបំផុត
        ក្នុងពិភពលោក។ សត្វពេញវ័យអាចមានប្រវែងប្រហែល
        ៣ ម៉ែត្រ ហើយអាចមានទម្ងន់លើសពី ៧០ គីឡូក្រាម
        ដោយសត្វដែលធំខ្លាំងអាចមានទម្ងន់លើសពី ១០០ គីឡូក្រាម។

        រាងកាយរបស់វាត្រូវបានបង្កើតឡើងសម្រាប់កម្លាំង។
        វាមានជើងដែលមានសាច់ដុំរឹងមាំ ក្រញ៉ាំមុត កន្ទុយ
        ដែលមានសាច់ដុំខ្លាំង និងស្បែករឹងដែលមានរចនាសម្ព័ន្ធ
        ឆ្អឹងតូចៗហៅថា osteoderms។ លលាដ៍ក្បាលរបស់វា
        មានធ្មេញមុតដែលមានគែមដូចរណារ ដែលសមស្របសម្រាប់
        ហែកសាច់ជាជាងទំពារ។

        សត្វនាគកូម៉ូដូគឺជាអ្នកប្រមាញ់កំពូលនៅក្នុងបរិស្ថាន
        កោះរបស់វា។ វាអាចប្រមាញ់សត្វចាប់ពីថនិកសត្វតូចៗ
        និងសត្វស្លាប រហូតដល់សត្វធំៗដូចជា សត្វក្តាន់
        និងជ្រូកព្រៃ។ វាក៏អាចស៊ីសាកសពសត្វដែលបានងាប់ផងដែរ។

        វិធីប្រមាញ់របស់វារួមបញ្ចូលការលាក់ខ្លួន ការអត់ធ្មត់
        ការខាំដ៏មានកម្លាំង និងការតាមដានតាមសារធាតុគីមី។
        បន្ទាប់ពីខាំសត្វចំណី ពិសរបស់វា និងកម្លាំងថ្គាម
        អាចបង្ករបួសធ្ងន់ និងជួយធ្វើឱ្យសត្វចំណីខ្សោយ។
    `,

    khmerFunFacts: [
        {
            title: "ពិតមែន វាមានពិស",
            text: `
                សត្វនាគកូម៉ូដូមានក្រពេញពិសនៅក្នុងថ្គាមក្រោម។
                ពិសរបស់វាមានសារធាតុដែលអាចរំខានដល់ការកកឈាម
                និងអាចធ្វើឱ្យសម្ពាធឈាមធ្លាក់ចុះ។ ដូច្នេះ
                ការខាំរបស់វាមានភាពស្មុគស្មាញជាងការយល់ឃើញ
                ចាស់ដែលថាវាពឹងផ្អែកជាចម្បងលើបាក់តេរីក្នុងមាត់។
            `
        },

        {
            title: "អាចបង្កើតកូនដោយគ្មានឈ្មោល",
            text: `
                សត្វនាគកូម៉ូដូញីអាចបន្តពូជដោយគ្មានសត្វឈ្មោល
                តាមដំណើរការដែលហៅថា parthenogenesis។
                កូនដែលកើតតាមវិធីនេះមានហ្សែនដែលទាក់ទងយ៉ាងជិត
                ជាមួយម្តាយ ហើយជាកូនឈ្មោល ដោយសារប្រព័ន្ធ
                កំណត់ភេទពិសេសរបស់ប្រភេទនេះ។
            `
        },

        {
            title: "អណ្ដាតគឺជាឧបករណ៍រកសារធាតុគីមី",
            text: `
                សត្វនាគកូម៉ូដូជាញឹកញាប់បញ្ចេញអណ្ដាតវែង
                ដែលបែកជាពីរចេញចូលក្នុងខ្យល់។ ភាគល្អិតគីមី
                ដែលអណ្ដាតប្រមូលបាន ត្រូវបានបញ្ជូនទៅកាន់
                សរីរាង្គ vomeronasal ឬ Jacobson's organ។
                វាជួយឱ្យវារកឃើញ និងតាមដានក្លិនរបស់សត្វចំណី។
            `
        },

        {
            title: "កូនកូម៉ូដូរស់នៅលើដើមឈើ",
            text: `
                កូនសត្វនាគកូម៉ូដូចំណាយពេលច្រើនជាងសត្វពេញវ័យ
                នៅលើដើមឈើ។ ការរស់នៅខ្ពស់ពីដីជួយការពារពួកវា
                ពីសត្វប្រមាញ់ រួមទាំងសត្វនាគកូម៉ូដូធំៗ
                ដែលអាចស៊ីកូនកូម៉ូដូបាន។
            `
        },

        {
            title: "អាហារមួយពេលអាចមានទំហំធំ",
            text: `
                សត្វនាគកូម៉ូដូអាចស៊ីអាហារមានបរិមាណច្រើន
                នៅពេលមានអាហារ។ ក្រពះដែលអាចពង្រីកបាន និង
                រាងកាយដែលអាចបត់បែនបាន អនុញ្ញាតឱ្យវាលេប
                សាច់បានច្រើនក្នុងពេលតែមួយ។ បន្ទាប់ពីស៊ី
                អាហារច្រើន វាអាចមិនចាំបាច់ស៊ីម្តងទៀត
                អស់រយៈពេលមួយរយៈ។
            `
        }
    ]
},

{
    name: "Frog",
    title: "THE AMPHIBIAN ACROBAT: THE FROG",
    khmer: "សត្វកង្កែប",
    category: "Amphibians",
    image: "images/frog.jpg",

    quote: `
        An evolutionary transformer capable of aquatic metamorphosis,
        skin-based water absorption, powerful jumping, and remarkable
        survival adaptations.
    `,

    scientificName: `
        Anura (over 7,500 living species, including tree frogs,
        poison dart frogs, and toads)
    `,

    habitat: `
        Rainforests, ponds, rivers, swamps, forests, grasslands,
        and other freshwater environments across most continents.
    `,

    status: `
        Varies by species. Many species are Least Concern 🟢,
        while a large proportion of amphibians are threatened
        by habitat loss, disease, pollution, and climate change.
    `,

    lifespan: `
        About 4–15 years for many species, with some larger
        frogs and toads capable of living longer.
    `,

    topSpeed: `
        Some frogs can leap distances of more than 20 times
        their own body length.
    `,

    description: `
        Frogs are tailless amphibians belonging to the order
        Anura. They are recognized by their powerful hind legs,
        protruding eyes, compact bodies, and usually moist skin.

        Most frogs begin life as aquatic tadpoles. Tadpoles
        typically have tails and gills and spend their early
        lives in water. During metamorphosis, they gradually
        develop legs and lungs while their bodies change into
        the familiar form of an adult frog.

        A frog's skin is extremely important. It can absorb
        water and exchange gases with the environment, allowing
        frogs to obtain oxygen through their skin under suitable
        conditions. Because their skin is sensitive to changes
        in water quality and the environment, frogs can be useful
        indicators of ecosystem health.

        Frogs are also famous for their jumping ability. Their
        powerful hind legs store and release energy rapidly,
        allowing some species to launch themselves impressive
        distances compared with their small body size.
    `,

    funFacts: [
        {
            title: "They Absorb Water Through Their Skin",
            text: `
                Frogs can absorb water directly through their skin,
                especially through a highly permeable area on the
                underside of the body called the pelvic patch.
                This is one reason frogs need to remain in moist
                environments and why their skin is so important
                to their survival.
            `
        },

        {
            title: "Their Eyes Help Them Swallow",
            text: `
                A frog's eyes are connected to muscles that allow
                them to move downward when the frog swallows.
                This movement helps push food toward the throat.
                So yes, the frog's eyeballs are literally involved
                in getting dinner down. Biology has questionable
                design aesthetics.
            `
        },

        {
            title: "The Frozen Frog",
            text: `
                North American Wood Frogs can survive extreme
                winter conditions by allowing much of their bodies
                to freeze. Their hearts can stop and breathing can
                cease while natural substances such as glucose help
                protect their cells from freezing damage. When
                temperatures rise, they can gradually thaw and
                resume normal activity.
            `
        },

        {
            title: "Poison Dart Frog Defense",
            text: `
                Some poison dart frogs produce extremely powerful
                toxins through their skin. In the wild, their
                chemical defenses are associated with compounds
                obtained through their diet. Captive individuals
                raised on different diets may have little or none
                of the same toxicity.
            `
        },

        {
            title: "Nature's Built-In Speaker",
            text: `
                Male frogs use vocal sacs to amplify their mating
                calls. The inflated sac acts somewhat like a
                resonating chamber, helping their calls travel
                farther and attract females or communicate with
                other frogs.
            `
        }
    ],

    khmerTitle: "អ្នកកាយសម្ព័ន្ធនៃពពួកសត្វទឹក៖ សត្វកង្កែប",

    khmerQuote: `
        ជាសត្វដែលអាចផ្លាស់ប្តូររាងកាយតាមដំណាក់កាលជីវិត
        មានសមត្ថភាពស្រូបទឹកតាមស្បែក លោតបានឆ្ងាយ
        និងមានវិធីសម្របខ្លួនដ៏អស្ចារ្យសម្រាប់ការរស់រានមានជីវិត។
    `,

    khmerDescription: `
        សត្វកង្កែបគឺជាសត្វអំភីប៊ីដែលគ្មានកន្ទុយ និងស្ថិតនៅ
        ក្នុងលំដាប់ Anura។ ពួកវាត្រូវបានស្គាល់ដោយសារជើង
        ខាងក្រោយដ៏មានកម្លាំង ភ្នែកដែលលេចចេញ រាងកាយតូច
        និងស្បែកដែលជាទូទៅមានសំណើម។

        កង្កែបភាគច្រើនចាប់ផ្តើមជីវិតជាកូនកង្កែបនៅក្នុងទឹក។
        កូនកង្កែបជាទូទៅមានកន្ទុយ និងដកដង្ហើមដោយប្រើ
        ក្រពេញដង្ហើមនៅក្នុងទឹក។ នៅពេលកើតមានការប្រែប្រួល
        រាងកាយ វាចាប់ផ្តើមបង្កើតជើង និងសួត ខណៈរាងកាយ
        ផ្លាស់ប្តូរទៅជារូបរាងកង្កែបពេញវ័យ។

        ស្បែកមានសារៈសំខាន់ខ្លាំងចំពោះសត្វកង្កែប។ វាអាច
        ស្រូបទឹក និងផ្លាស់ប្តូរឧស្ម័នជាមួយបរិស្ថាន ដែលអាច
        អនុញ្ញាតឱ្យកង្កែបទទួលអុកស៊ីសែនតាមស្បែកក្រោម
        លក្ខខណ្ឌសមស្រប។ ដោយសារស្បែករបស់វាងាយរងឥទ្ធិពល
        ពីការផ្លាស់ប្តូរគុណភាពទឹក និងបរិស្ថាន កង្កែបអាច
        ជាសញ្ញាមួយដែលបង្ហាញពីសុខភាពប្រព័ន្ធអេកូឡូស៊ី។

        សត្វកង្កែបក៏ល្បីដោយសារសមត្ថភាពលោត។ ជើងខាងក្រោយ
        ដែលមានកម្លាំងអាចរក្សាទុក និងបញ្ចេញថាមពលយ៉ាងលឿន
        ដែលអនុញ្ញាតឱ្យប្រភេទខ្លះលោតបានចម្ងាយឆ្ងាយ
        បើប្រៀបធៀបនឹងទំហំរាងកាយតូចរបស់វា។
    `,

    khmerFunFacts: [
        {
            title: "ស្រូបទឹកតាមស្បែក",
            text: `
                សត្វកង្កែបអាចស្រូបទឹកដោយផ្ទាល់តាមស្បែក
                ជាពិសេសតាមតំបន់ដែលមានសមត្ថភាពស្រូបទឹកខ្ពស់
                នៅផ្នែកខាងក្រោមនៃរាងកាយ ដែលហៅថា pelvic patch។
                នេះជាមូលហេតុមួយដែលសត្វកង្កែបត្រូវការបរិស្ថាន
                ដែលមានសំណើម ហើយស្បែកមានសារៈសំខាន់ខ្លាំង
                ចំពោះការរស់រានមានជីវិតរបស់វា។
            `
        },

        {
            title: "ភ្នែកជួយឱ្យវាលេបអាហារ",
            text: `
                ភ្នែករបស់សត្វកង្កែបមានទំនាក់ទំនងជាមួយសាច់ដុំ
                ដែលអនុញ្ញាតឱ្យវាផ្លាស់ទីចុះក្រោមនៅពេលលេបអាហារ។
                ចលនានេះជួយរុញអាហារទៅកាន់បំពង់ក។
                ដូច្នេះ ភ្នែករបស់វាក៏ចូលរួមជួយក្នុងការលេបអាហារ។
            `
        },

        {
            title: "កង្កែបដែលអាចរស់នៅពេលកក",
            text: `
                Wood Frog នៅអាមេរិកខាងជើងអាចរស់រានមានជីវិត
                នៅក្នុងរដូវរងាដ៏ត្រជាក់ ដោយអនុញ្ញាតឱ្យផ្នែកធំ
                នៃរាងកាយរបស់វាកក។ បេះដូងអាចឈប់លោត និង
                ការដកដង្ហើមអាចឈប់ ខណៈសារធាតុធម្មជាតិដូចជា
                glucose ជួយការពារកោសិកាពីការខូចខាតដោយការកក។
                នៅពេលសីតុណ្ហភាពកើនឡើង វាអាចរលាយទឹកកក
                និងត្រឡប់មកមានសកម្មភាពធម្មតាវិញ។
            `
        },

        {
            title: "ការការពារដោយសារធាតុពុល",
            text: `
                សត្វកង្កែបពុលប្រភេទខ្លះអាចផលិតសារធាតុពុល
                ដែលមានកម្លាំងខ្លាំងតាមស្បែក។ នៅក្នុងធម្មជាតិ
                សារធាតុការពារទាំងនេះមានទំនាក់ទំនងជាមួយសារធាតុ
                ដែលពួកវាទទួលបានតាមរយៈអាហារ។ សត្វដែលចិញ្ចឹម
                ក្នុងការឃុំឃាំង និងទទួលអាហារខុសពីធម្មជាតិ
                អាចមិនមានជាតិពុលដូចគ្នានោះទេ។
            `
        },

        {
            title: "ឧបករណ៍បំពងសំឡេងធម្មជាតិ",
            text: `
                កង្កែបឈ្មោលប្រើថង់សំឡេងដើម្បីពង្រីកសំឡេង
                ហៅរកគូ។ ថង់ដែលប៉ោងឡើងអាចដើរតួដូចជា
                បន្ទប់បញ្ចេញសំឡេង ជួយឱ្យសំឡេងរបស់វាឮ
                បានឆ្ងាយជាងមុន និងជួយទាក់ទាញកង្កែបញី
                ឬទាក់ទងជាមួយកង្កែបផ្សេងទៀត។
            `
        }
    ]
},

{
    name: "Axolotl",
    title: "THE PETER PAN SALAMANDER: THE AXOLOTL",
    khmer: "សត្វ Axolotl",
    category: "Amphibians",
    image: "images/axolotl.jpg",

    quote: `
        A remarkable aquatic salamander famous for retaining
        juvenile features into adulthood and for its extraordinary
        ability to regenerate body tissues.
    `,

    scientificName: `
        Ambystoma mexicanum
    `,

    habitat: `
        Freshwater canals and lake habitats of Xochimilco
        near Mexico City, Mexico.
    `,

    status: `
        Critically Endangered 🔴 in the wild.
    `,

    lifespan: `
        About 10–15 years in captivity.
    `,

    topSpeed: `
        Not known for speed. Axolotls are slow-moving aquatic
        salamanders that rely more on stealth and sudden
        movements when feeding.
    `,

    description: `
        The axolotl is a remarkable salamander native to the
        freshwater environment around Xochimilco in Mexico.
        Despite sometimes being called the "Mexican Walking Fish,"
        it is not a fish at all. It is an amphibian.

        Axolotls are famous for a biological feature called
        neoteny. Unlike most salamanders, they normally do not
        complete metamorphosis into a land-dwelling adult form.
        Instead, they retain juvenile characteristics throughout
        their lives while becoming sexually mature.

        Their most recognizable features are their broad heads,
        small eyes, wide mouths, and feathery external gills.
        These gills extend from both sides of the head and help
        them absorb oxygen directly from the surrounding water.

        Axolotls are also studied by scientists because of their
        extraordinary regenerative abilities. They can regenerate
        limbs and repair several types of damaged tissues, making
        them an important subject in biological and medical
        research.

        In the wild, axolotls face serious threats from habitat
        loss, pollution, invasive species, and changes to their
        freshwater environment.
    `,

    funFacts: [
        {
            title: "The Regeneration Champion",
            text: `
                Axolotls can regenerate lost limbs and repair
                several damaged tissues. Researchers have also
                observed remarkable regeneration involving the
                spinal cord, heart, and parts of the nervous system.
                Their healing process can produce very little
                scarring compared with humans.
            `
        },

        {
            title: "Forever Young",
            text: `
                Axolotls display neoteny, meaning they retain
                juvenile features even after becoming sexually
                mature. Their external gills and aquatic lifestyle
                remain throughout normal adulthood instead of
                disappearing during metamorphosis.
            `
        },

        {
            title: "Those Feathery Branches Are Gills",
            text: `
                The feathery structures on an axolotl's head are
                external gills. Tiny blood vessels inside these
                structures increase the surface area available
                for exchanging oxygen with the surrounding water.
            `
        },

        {
            title: "The Vacuum Cleaner Mouth",
            text: `
                Axolotls are suction feeders. When they rapidly
                open their mouths, water rushes inward and carries
                small prey along with it. They can swallow food
                such as worms, insects, crustaceans, and small
                aquatic animals.
            `
        },

        {
            title: "A Name From Ancient Mexico",
            text: `
                The word "axolotl" comes from Nahuatl, the language
                associated with the Aztec civilization. The name
                is connected with Xolotl, a deity in Aztec mythology.
                The creature has therefore been connected with
                Mexican culture and mythology for centuries.
            `
        }
    ],

    khmerTitle: "សាឡាម៉ង់ឌ័រដែលមិនធំឡើង៖ សត្វ Axolotl",

    khmerQuote: `
        ជាសត្វសាឡាម៉ង់ឌ័រក្នុងទឹកដ៏ពិសេស ដែលរក្សាលក្ខណៈ
        របស់វ័យក្មេងរហូតដល់ពេញវ័យ និងមានសមត្ថភាព
        ស្តារផ្នែករាងកាយដែលខូចខាតបានយ៉ាងអស្ចារ្យ។
    `,

    khmerDescription: `
        សត្វ Axolotl គឺជាសត្វសាឡាម៉ង់ឌ័រដ៏ពិសេសមួយ
        ដែលមានដើមកំណើតនៅតំបន់ទឹកសាបជុំវិញ Xochimilco
        ក្នុងប្រទេសម៉ិកស៊ិក។ ទោះបីជាមនុស្សខ្លះហៅវាថា
        "Mexican Walking Fish" ក៏ដោយ វាមិនមែនជាត្រីទេ។
        វាគឺជាសត្វអំភីប៊ី។

        Axolotl ល្បីដោយសារលក្ខណៈជីវសាស្ត្រមួយដែលហៅថា
        neoteny។ មិនដូចសាឡាម៉ង់ឌ័រភាគច្រើនទេ វាជាទូទៅ
        មិនបញ្ចប់ដំណើរការប្រែប្រួលរាងកាយទៅជាសត្វពេញវ័យ
        ដែលរស់នៅលើគោកទេ។ ផ្ទុយទៅវិញ វារក្សាលក្ខណៈ
        របស់វ័យក្មេង ខណៈដែលអាចបន្តពូជបាននៅពេលពេញវ័យ។

        លក្ខណៈដែលគេស្គាល់ច្បាស់បំផុតរបស់វាគឺក្បាលធំ
        ភ្នែកតូច មាត់ធំទូលាយ និងក្រពេញដង្ហើមខាងក្រៅ
        ដែលមានរាងដូចរោម។ ក្រពេញទាំងនេះលាតចេញពី
        ផ្នែកទាំងពីរនៃក្បាល ហើយជួយឱ្យវាស្រូបយកអុកស៊ីសែន
        ដោយផ្ទាល់ពីទឹកជុំវិញខ្លួន។

        Axolotl ក៏ត្រូវបានអ្នកវិទ្យាសាស្ត្រសិក្សាយ៉ាងច្រើន
        ដោយសារសមត្ថភាពស្តារផ្នែករាងកាយដ៏អស្ចារ្យ។
        វាអាចបង្កើតជើងដែលបាត់ឡើងវិញ និងជួសជុលជាលិកា
        ដែលខូចខាតជាច្រើនប្រភេទ។ ដូច្នេះវាមានសារៈសំខាន់
        សម្រាប់ការសិក្សាផ្នែកជីវវិទ្យា និងវេជ្ជសាស្ត្រ។

        នៅក្នុងធម្មជាតិ សត្វ Axolotl កំពុងប្រឈមនឹងការគំរាមកំហែង
        យ៉ាងធ្ងន់ធ្ងរ ដោយសារការបាត់បង់ទីជម្រក ការបំពុល
        ប្រភេទសត្វដែលមិនមែនជាប្រភេទដើម និងការផ្លាស់ប្តូរ
        បរិស្ថានទឹកសាបរបស់វា។
    `,

    khmerFunFacts: [
        {
            title: "ជើងដែលអាចដុះឡើងវិញ",
            text: `
                សត្វ Axolotl អាចបង្កើតជើងដែលបាត់ឡើងវិញ
                និងជួសជុលជាលិកាដែលខូចខាតមួយចំនួន។
                អ្នកស្រាវជ្រាវក៏បានសង្កេតឃើញសមត្ថភាពស្តារ
                ផ្នែកខ្លះនៃខួរឆ្អឹងខ្នង បេះដូង និងប្រព័ន្ធ
                ប្រសាទរបស់វាផងដែរ។
            `
        },

        {
            title: "នៅតែដូចកូនសត្វពេញមួយជីវិត",
            text: `
                Axolotl មានលក្ខណៈ neoteny ដែលមានន័យថា
                វារក្សាលក្ខណៈរបស់វ័យក្មេង ទោះបីជាវាអាច
                បន្តពូជបាននៅពេលពេញវ័យក៏ដោយ។ ក្រពេញដង្ហើម
                ខាងក្រៅ និងការរស់នៅក្នុងទឹកនៅតែមានក្នុង
                ដំណាក់កាលពេញវ័យធម្មតា។
            `
        },

        {
            title: "រោមនៅលើក្បាលគឺជាក្រពេញដង្ហើម",
            text: `
                រចនាសម្ព័ន្ធដែលមានរាងដូចរោមនៅលើក្បាល
                របស់ Axolotl គឺជាក្រពេញដង្ហើមខាងក្រៅ។
                សរសៃឈាមតូចៗនៅក្នុងរចនាសម្ព័ន្ធទាំងនេះ
                បង្កើនផ្ទៃសម្រាប់ការផ្លាស់ប្តូរអុកស៊ីសែន
                ជាមួយទឹកជុំវិញខ្លួន។
            `
        },

        {
            title: "មាត់ដូចម៉ាស៊ីនបូមធូលី",
            text: `
                Axolotl ស៊ីអាហារដោយប្រើកម្លាំងស្រូប។
                នៅពេលវាបើកមាត់យ៉ាងលឿន ទឹកហូរចូលក្នុងមាត់
                ហើយនាំសត្វចំណីតូចៗចូលតាម។ វាអាចស៊ី
                ដង្កូវ សត្វល្អិត សត្វសំបកតូចៗ និងសត្វទឹកតូចៗ
                ផ្សេងទៀត។
            `
        },

        {
            title: "ឈ្មោះមកពីម៉ិកស៊ិកបុរាណ",
            text: `
                ពាក្យ "axolotl" មានប្រភពមកពីភាសា Nahuatl
                ដែលជាភាសាដែលមានទំនាក់ទំនងជាមួយអរិយធម៌
                Aztec។ ឈ្មោះនេះមានទំនាក់ទំនងជាមួយ Xolotl
                ដែលជាអាទិទេពមួយក្នុងទេវកថា Aztec។
                ដូច្នេះសត្វនេះមានទំនាក់ទំនងជាមួយវប្បធម៌
                និងទេវកថារបស់ម៉ិកស៊ិកអស់រយៈពេលជាច្រើនសតវត្សរ៍។
            `
        }
    ]
},

{
    name: "Great White Shark",
    title: "THE OCEAN HUNTER: THE GREAT WHITE SHARK",
    khmer: "ត្រីឆ្លាមស Great White",
    category: "Aquatic",
    image: "images/great-white-shark.jpg",

    quote: `
        A powerful ocean predator equipped with electroreception,
        specialized temperature regulation, replaceable teeth,
        and an extraordinary sense of its underwater surroundings.
    `,

    scientificName: `
        Carcharodon carcharias
    `,

    habitat: `
        Coastal and offshore waters, especially in temperate
        regions of oceans around the world.
    `,

    status: `
        Vulnerable 🟠
    `,

    lifespan: `
        Around 30–70 years in the wild.
    `,

    topSpeed: `
        Capable of very fast bursts during hunting,
        although exact maximum speeds are difficult to measure
        reliably in the wild.
    `,

    description: `
        Great White Sharks are among the largest predatory fish
        in the world. Females generally grow larger than males,
        with exceptionally large individuals reaching around
        6 meters (20 feet) in length.

        Their bodies have a streamlined, torpedo-like shape that
        allows them to move efficiently through the water. Their
        dark gray upper bodies and pale undersides create a
        camouflage pattern called countershading. From above,
        their darker backs blend with deeper water, while from
        below, their lighter bellies can blend with the bright
        surface.

        Unlike mammals and other animals with bones, sharks have
        skeletons made primarily of cartilage. Cartilage is lighter
        and more flexible than bone, helping sharks remain agile
        swimmers.

        Great White Sharks are apex predators that hunt a variety
        of marine animals. Their diet can include fish, rays,
        squid, seabirds, seals, and other marine mammals. They
        use a combination of smell, vision, vibration detection,
        and electroreception to locate potential prey.
    `,

    funFacts: [
        {
            title: "A Sixth Sense for Electricity",
            text: `
                Great White Sharks have tiny sensory organs around
                their snouts called the Ampullae of Lorenzini.
                These organs can detect extremely weak electrical
                fields produced by the muscles and nervous systems
                of nearby animals. This ability can help sharks
                locate prey even when visibility is poor.
            `
        },

        {
            title: "A Conveyor Belt of Teeth",
            text: `
                Great White Sharks constantly replace their teeth.
                Several rows of developing teeth sit behind the
                teeth currently being used. When a tooth is lost,
                another can move forward to replace it. Over a
                lifetime, a shark may go through thousands of teeth.
            `
        },

        {
            title: "Warmer Than the Water",
            text: `
                Great White Sharks are regionally endothermic.
                Specialized blood-vessel networks help them retain
                heat generated by their muscles and keep important
                parts of their bodies warmer than the surrounding
                water. This gives them advantages when hunting in
                relatively cold seas.
            `
        },

        {
            title: "The Famous Breach",
            text: `
                Great White Sharks can launch themselves completely
                out of the water when attacking fast-moving prey,
                particularly seals. This dramatic hunting behavior
                is known as breaching and can produce spectacular
                leaps above the surface.
            `
        },

        {
            title: "The Eye Protection Trick",
            text: `
                Great White Sharks do not have eyelids like humans.
                During some close encounters with prey, they can
                rotate their eyes backward into protective tissue.
                This helps shield the delicate eyes from potential
                injury during a powerful attack.
            `
        }
    ],

    khmerTitle: "អ្នកប្រមាញ់មហាសមុទ្រ៖ ត្រីឆ្លាមស Great White",

    khmerQuote: `
        ជាសត្វប្រមាញ់ដ៏មានកម្លាំងនៅក្នុងមហាសមុទ្រ ដែលមាន
        សមត្ថភាពរកឃើញអគ្គិសនី ការគ្រប់គ្រងសីតុណ្ហភាពពិសេស
        ធ្មេញដែលអាចជំនួសបាន និងអារម្មណ៍ដ៏អស្ចារ្យសម្រាប់
        ស្វែងរកសត្វចំណីនៅក្នុងទឹក។
    `,

    khmerDescription: `
        ត្រីឆ្លាមស Great White គឺជាត្រីប្រមាញ់ដ៏ធំមួយ
        ក្នុងចំណោមត្រីប្រមាញ់ធំបំផុតនៅក្នុងពិភពលោក។
        ត្រីញីជាទូទៅធំជាងត្រីឈ្មោល ហើយសត្វដែលធំខ្លាំង
        អាចមានប្រវែងប្រហែល ៦ ម៉ែត្រ។

        រាងកាយរបស់វាមានរាងវែងដូចតួអក្សរ torpedo ដែល
        ជួយឱ្យវាផ្លាស់ទីក្នុងទឹកបានយ៉ាងមានប្រសិទ្ធភាព។
        ផ្នែកខាងលើមានពណ៌ប្រផេះងងឹត ខណៈផ្នែកខាងក្រោម
        មានពណ៌សស្រាល។ ការបែងចែកពណ៌នេះហៅថា
        countershading ហើយជួយលាក់ខ្លួននៅក្នុងទឹក។

        មិនដូចសត្វដែលមានគ្រោងឆ្អឹងធ្វើពីឆ្អឹងទេ
        គ្រោងរាងកាយរបស់ត្រីឆ្លាមភាគច្រើនធ្វើពីឆ្អឹងខ្ចី
        ដែលស្រាល និងអាចបត់បែនបាន។ វាជួយឱ្យត្រីឆ្លាម
        អាចផ្លាស់ទីបានរហ័ស និងបត់បែនក្នុងទឹក។

        ត្រីឆ្លាមស Great White គឺជាអ្នកប្រមាញ់កំពូល
        ដែលស៊ីសត្វសមុទ្រជាច្រើនប្រភេទ។ អាហាររបស់វា
        អាចរួមមានត្រី ត្រីបាតសមុទ្រ មឹក សត្វស្លាបសមុទ្រ
        សត្វផ្សាភ្ជាប់ និងថនិកសត្វសមុទ្រផ្សេងៗ។
        វាប្រើក្លិន ការមើលឃើញ ការរកឃើញរំញ័រ និង
        អារម្មណ៍អគ្គិសនី ដើម្បីរកទីតាំងសត្វចំណី។
    `,

    khmerFunFacts: [
        {
            title: "អារម្មណ៍ទីប្រាំមួយសម្រាប់អគ្គិសនី",
            text: `
                ត្រីឆ្លាមស Great White មានសរីរាង្គទទួលអារម្មណ៍
                តូចៗនៅជុំវិញច្រមុះ ដែលហៅថា Ampullae of Lorenzini។
                សរីរាង្គទាំងនេះអាចរកឃើញវាលអគ្គិសនីខ្សោយខ្លាំង
                ដែលបង្កើតដោយសាច់ដុំ និងប្រព័ន្ធប្រសាទរបស់សត្វ
                នៅក្បែរនោះ។ សមត្ថភាពនេះអាចជួយឱ្យវារកសត្វចំណី
                ទោះបីមើលឃើញមិនច្បាស់ក៏ដោយ។
            `
        },

        {
            title: "ធ្មេញដូចខ្សែសង្វាក់ប្តូរ",
            text: `
                ត្រីឆ្លាមស Great White ប្តូរធ្មេញរបស់វាជាបន្តបន្ទាប់។
                មានជួរធ្មេញថ្មីៗជាច្រើននៅខាងក្រោយធ្មេញដែលកំពុង
                ប្រើប្រាស់។ នៅពេលធ្មេញមួយបាត់ ធ្មេញមួយទៀត
                អាចផ្លាស់ទីមកជំនួស។ ក្នុងមួយជីវិត វាអាចបាត់បង់
                និងបង្កើតធ្មេញថ្មីរាប់ពាន់។
            `
        },

        {
            title: "ក្តៅជាងទឹកជុំវិញ",
            text: `
                ត្រីឆ្លាមស Great White មានសមត្ថភាពរក្សាកម្តៅ
                នៅផ្នែកខ្លះនៃរាងកាយ។ បណ្តាញសរសៃឈាមពិសេស
                ជួយរក្សាកម្តៅដែលបង្កើតពីសាច់ដុំ និងធ្វើឱ្យ
                ផ្នែកសំខាន់ៗនៃរាងកាយក្តៅជាងទឹកជុំវិញ។
                វាផ្តល់អត្ថប្រយោជន៍នៅពេលប្រមាញ់ក្នុងសមុទ្រត្រជាក់។
            `
        },

        {
            title: "ការលោតចេញពីទឹក",
            text: `
                ត្រីឆ្លាមស Great White អាចលោតចេញពីទឹក
                ទាំងស្រុងនៅពេលវាវាយប្រហារសត្វចំណីដែលផ្លាស់ទី
                លឿន ជាពិសេសសត្វផ្សាភ្ជាប់។ ឥរិយាបថប្រមាញ់
                ដ៏គួរឱ្យចាប់អារម្មណ៍នេះហៅថា breaching។
            `
        },

        {
            title: "វិធីការពារភ្នែក",
            text: `
                ត្រីឆ្លាមស Great White មិនមានត្របកភ្នែក
                ដូចមនុស្សទេ។ នៅពេលចូលទៅជិតសត្វចំណី
                វាអាចបង្វិលភ្នែកថយក្រោយចូលទៅក្នុងជាលិកា
                ការពារ។ វាជួយការពារភ្នែកពីការរងរបួស
                នៅពេលវាវាយប្រហារយ៉ាងខ្លាំង។
            `
        }
    ]
},

{
    name: "Dolphin",
    title: "THE HIGH-INTELLIGENCE OCEAN VOYAGER: THE DOLPHIN",
    khmer: "សត្វផ្សោត",
    category: "Aquatic",
    image: "images/dolphin.jpg",

    quote: `
        A highly social marine mammal equipped with sophisticated
        echolocation, complex communication, remarkable intelligence,
        and powerful swimming abilities.
    `,

    scientificName: `
        Delphinidae (over 40 living species, including Bottlenose,
        Spinner, and Orca)
    `,

    habitat: `
        Oceans, seas, coastal estuaries, and some freshwater
        river systems around the world.
    `,

    status: `
        Varies by species. Some species are Least Concern 🟢,
        while others, including the Māui Dolphin and Amazon
        River Dolphin, face serious conservation threats.
    `,

    lifespan: `
        Varies greatly by species. Some dolphins can live
        for several decades.
    `,

    topSpeed: `
        Up to around 30–54 km/h (18–33 mph) in short bursts,
        depending on the species.
    `,

    description: `
        Dolphins are highly intelligent marine mammals belonging
        to the cetacean group. Their bodies are streamlined and
        shaped for efficient movement through water. They have
        smooth skin, powerful tail flukes, and a dorsal fin that
        helps provide stability while swimming.

        Unlike fish, dolphins breathe air. They regularly return
        to the surface and take breaths through a blowhole located
        on the top of their heads. Their breathing is controlled
        consciously, which is one reason their sleeping behavior
        is so unusual.

        Dolphins are highly social animals. Many species live in
        groups called pods, where individuals cooperate while
        hunting, communicate with one another, care for young,
        and sometimes defend injured or vulnerable members.

        Their intelligence is closely connected to their ability
        to communicate and understand their environment. Dolphins
        use clicks, whistles, body movements, and other sounds
        to exchange information and coordinate their activities.
    `,

    funFacts: [
        {
            title: "Built-In 3D Sonar",
            text: `
                Dolphins use echolocation to explore their
                underwater surroundings. They produce clicking
                sounds that travel through the water and bounce
                back from objects. A specialized fatty structure
                in the forehead called the melon helps focus
                these sounds, allowing the dolphin to interpret
                returning echoes and locate objects or prey.
            `
        },

        {
            title: "Half-Brain Sleep",
            text: `
                Dolphins use a remarkable sleeping strategy called
                unihemispheric sleep. One hemisphere of the brain
                can rest while the other remains active. This allows
                the dolphin to continue surfacing to breathe and
                maintain awareness of its surroundings.
            `
        },

        {
            title: "Every Dolphin Has a Signature Whistle",
            text: `
                Many dolphins develop an individual signature
                whistle that functions somewhat like a name.
                Other dolphins can learn to recognize these whistles
                and use them when communicating with particular
                individuals.
            `
        },

        {
            title: "Tool-Using Dolphins",
            text: `
                In Shark Bay, Australia, some bottlenose dolphins
                have been observed carrying marine sponges over
                their beaks while searching the seafloor for food.
                The sponge appears to protect the sensitive beak
                from rough surfaces while the dolphin forages.
            `
        },

        {
            title: "Orcas Are Dolphins",
            text: `
                The Orca, also called the Killer Whale, belongs to
                the dolphin family Delphinidae. It is actually the
                largest living member of the dolphin family and can
                reach around 9 meters (30 feet) in length.

                So despite its common name, an Orca is technically
                a very large dolphin rather than a true whale.
            `
        }
    ],

    khmerTitle: "អ្នកធ្វើដំណើរឆ្លាតវៃនៃមហាសមុទ្រ៖ សត្វផ្សោត",

    khmerQuote: `
        ជាថនិកសត្វសមុទ្រដែលមានភាពវៃឆ្លាតខ្ពស់ មានសមត្ថភាព
        ប្រើ echolocation ការទំនាក់ទំនងស្មុគស្មាញ សមត្ថភាព
        រៀនសូត្រ និងសមត្ថភាពហែលទឹកដ៏អស្ចារ្យ។
    `,

    khmerDescription: `
        សត្វផ្សោតគឺជាថនិកសត្វសមុទ្រដែលមានភាពវៃឆ្លាតខ្ពស់
        និងស្ថិតនៅក្នុងក្រុម cetaceans។ រាងកាយរបស់វាមានរាង
        រលូន និងត្រូវបានបង្កើតឡើងសម្រាប់ផ្លាស់ទីក្នុងទឹកបាន
        យ៉ាងមានប្រសិទ្ធភាព។ វាមានស្បែករលោង កន្ទុយដែលមាន
        កម្លាំង និងព្រុយខាងលើដែលជួយរក្សាលំនឹងនៅពេលហែលទឹក។

        មិនដូចត្រីទេ សត្វផ្សោតដកដង្ហើមដោយប្រើខ្យល់។
        វាត្រូវឡើងមកលើផ្ទៃទឹកជាប្រចាំ ដើម្បីដកដង្ហើមតាម
        រន្ធដង្ហើមដែលស្ថិតនៅផ្នែកខាងលើនៃក្បាល។ ការដកដង្ហើម
        របស់វាត្រូវបានគ្រប់គ្រងដោយចេតនា ដែលជាមូលហេតុមួយ
        ដែលធ្វើឱ្យរបៀបគេងរបស់វាពិសេសខ្លាំង។

        សត្វផ្សោតជាសត្វដែលចូលចិត្តរស់នៅជាសង្គម។ ប្រភេទ
        ជាច្រើនរស់នៅជាក្រុមដែលហៅថា pod។ ពួកវាអាច
        សហការគ្នាប្រមាញ់ ទំនាក់ទំនងគ្នា ថែរក្សាកូន និង
        ពេលខ្លះជួយការពារសមាជិកដែលរងរបួស ឬខ្សោយ។

        ភាពវៃឆ្លាតរបស់វាមានទំនាក់ទំនងយ៉ាងជិតស្និទ្ធជាមួយ
        សមត្ថភាពទំនាក់ទំនង និងការយល់ដឹងពីបរិស្ថាន។
        សត្វផ្សោតប្រើសំឡេង click សំឡេង whistle ចលនារាងកាយ
        និងសំឡេងផ្សេងៗ ដើម្បីផ្លាស់ប្តូរព័ត៌មាន និងសម្របសម្រួល
        សកម្មភាពជាមួយសត្វផ្សោតដទៃទៀត។
    `,

    khmerFunFacts: [
        {
            title: "Sonar 3D ដែលមាននៅក្នុងខ្លួន",
            text: `
                សត្វផ្សោតប្រើ echolocation ដើម្បីស្វែងយល់ពី
                បរិស្ថាននៅក្រោមទឹក។ វាបង្កើតសំឡេង click
                ដែលធ្វើដំណើរតាមទឹក ហើយត្រឡប់មកវិញនៅពេល
                ប៉ះវត្ថុផ្សេងៗ។ រចនាសម្ព័ន្ធខ្លាញ់ពិសេសនៅលើ
                ថ្ងាសដែលហៅថា melon ជួយផ្តោតសំឡេងទាំងនេះ
                ឱ្យវាអាចបកស្រាយសំឡេងត្រឡប់ និងរកទីតាំងវត្ថុ
                ឬសត្វចំណី។
            `
        },

        {
            title: "គេងដោយសម្រាកខួរក្បាលតែពាក់កណ្តាល",
            text: `
                សត្វផ្សោតប្រើវិធីគេងដ៏ពិសេសដែលហៅថា
                unihemispheric sleep។ ផ្នែកមួយនៃខួរក្បាល
                អាចសម្រាក ខណៈផ្នែកម្ខាងទៀតនៅតែសកម្ម។
                វាអនុញ្ញាតឱ្យសត្វផ្សោតបន្តឡើងមកដកដង្ហើម
                និងរក្សាការយល់ដឹងអំពីបរិស្ថានជុំវិញខ្លួន។
            `
        },

        {
            title: "ផ្សោតនីមួយៗមានសំឡេងហៅផ្ទាល់ខ្លួន",
            text: `
                សត្វផ្សោតជាច្រើនបង្កើតសំឡេង whistle
                ពិសេសសម្រាប់ខ្លួនឯង ដែលមានតួនាទីប្រហាក់ប្រហែល
                នឹងឈ្មោះ។ សត្វផ្សោតដទៃទៀតអាចរៀនស្គាល់
                សំឡេងនេះ ហើយប្រើវាដើម្បីទាក់ទងទៅកាន់
                សមាជិកជាក់លាក់ម្នាក់។
            `
        },

        {
            title: "ផ្សោតដែលប្រើឧបករណ៍",
            text: `
                នៅ Shark Bay ប្រទេសអូស្ត្រាលី សត្វផ្សោត
                bottlenose មួយចំនួនត្រូវបានសង្កេតឃើញថា
                កាន់អេប៉ុងសមុទ្រដាក់លើច្រមុះ ខណៈពេលស្វែងរក
                អាហារនៅបាតសមុទ្រ។ អេប៉ុងអាចជួយការពារ
                ច្រមុះរបស់វាពីផ្ទៃរដុប ខណៈវាកំពុងស្វែងរកអាហារ។
            `
        },

        {
            title: "Orca ក៏ជាផ្សោតដែរ",
            text: `
                Orca ដែលគេហៅថា Killer Whale ក៏ស្ថិតនៅក្នុង
                គ្រួសារផ្សោត Delphinidae ផងដែរ។ តាមចំណាត់ថ្នាក់
                វាគឺជាសមាជិកដែលមានទំហំធំបំផុតក្នុងគ្រួសារផ្សោត
                ហើយអាចមានប្រវែងប្រហែល ៩ ម៉ែត្រ។

                ដូច្នេះ ទោះបីឈ្មោះរបស់វាមានពាក្យ Whale
                ក៏ដោយ Orca តាមចំណាត់ថ្នាក់វិទ្យាសាស្ត្រ
                គឺជាផ្សោតដែលមានទំហំធំខ្លាំងមួយ។
            `
        }
    ]
},

{
    name: "Octopus",
    title: "THE ALIEN OF THE DEEP: THE OCTOPUS",
    khmer: "សត្វរតីយក្ស",
    category: "Aquatic",
    image: "images/octopus.jpg",

    quote: `
        A remarkable master of camouflage and decentralized
        intelligence, equipped with three hearts, blue blood,
        flexible arms, and extraordinary problem-solving abilities.
    `,

    scientificName: `
        Octopoda (over 300 living species)
    `,

    habitat: `
        Oceans around the world, from shallow coral reefs and
        rocky shores to deep-sea environments.
    `,

    status: `
        Varies by species. Many species are not currently
        considered threatened, while some rare and poorly
        studied species have limited conservation information.
    `,

    lifespan: `
        Often around 1–5 years, although lifespan varies
        considerably between species.
    `,

    topSpeed: `
        Capable of rapid bursts of movement using jet propulsion,
        although most octopuses spend much of their time crawling
        along the seafloor.
    `,

    description: `
        Octopuses are soft-bodied marine animals belonging to the
        cephalopod group. They have eight flexible arms covered
        with suckers and a soft body containing no internal bones
        or external shell.

        Their lack of a rigid skeleton allows them to squeeze
        through surprisingly small openings. The main limitation
        is usually the size of their hard beak, which is located
        at the center of the arms.

        An octopus moves using a combination of crawling, swimming,
        and jet propulsion. It can draw water into its mantle and
        force that water through a muscular structure called the
        siphon, producing a powerful burst of movement.

        Octopuses are also famous for their incredible camouflage.
        Specialized cells in their skin allow them to rapidly
        change color and patterns, while other structures can
        change the texture of their skin to resemble rocks,
        coral, sand, or other surfaces.

        Their intelligence is especially remarkable because they
        are invertebrates. They can learn from experience, explore
        unfamiliar objects, solve physical problems, and use
        their environment in surprisingly creative ways.
    `,

    funFacts: [
        {
            title: "Eight Arms With Their Own Intelligence",
            text: `
                A large proportion of an octopus's neurons are
                distributed throughout its arms rather than being
                concentrated entirely in the brain. Their arms
                contain complex neural networks that allow them
                to process sensory information and coordinate
                movements locally.
            `
        },

        {
            title: "Three Hearts and Blue Blood",
            text: `
                An octopus has three hearts. Two branchial hearts
                pump blood through the gills, while a systemic heart
                circulates oxygenated blood through the rest of the
                body.

                Their blood appears blue because it uses the
                copper-containing protein hemocyanin to transport
                oxygen instead of the iron-based hemoglobin found
                in humans.
            `
        },

        {
            title: "A Living Disappearing Act",
            text: `
                Octopuses can change their skin color and patterns
                extremely quickly. Chromatophores help control
                visible colors, while other specialized structures
                can reflect light and alter the appearance of the
                skin.

                Some species can also change the texture of their
                skin, helping them resemble rocks, coral, or other
                objects in their environment.
            `
        },

        {
            title: "The Tool-Using Invertebrate",
            text: `
                Some octopuses have demonstrated impressive
                problem-solving abilities. Certain species have
                been observed carrying coconut shells or other
                objects and later using them as shelter or
                protection.

                Captive octopuses have also been observed opening
                containers and manipulating objects in their
                surroundings.
            `
        },

        {
            title: "A Mother's Final Mission",
            text: `
                In many octopus species, females reproduce only
                once. After laying their eggs, a mother may spend
                weeks or months protecting, cleaning, and circulating
                water around them.

                During this period she often stops feeding.
                After the eggs hatch, the female usually dies as
                part of the natural life cycle of the species.
            `
        }
    ],

    khmerTitle: "អ្នកប្រមាញ់ដូចសត្វក្រៅភពក្នុងសមុទ្រ៖ សត្វរតីយក្ស",

    khmerQuote: `
        ជាសត្វសមុទ្រដ៏អស្ចារ្យដែលមានសមត្ថភាពលាក់ខ្លួន
        យ៉ាងលឿន ភាពវៃឆ្លាតដែលចែកចាយតាមដៃ មានបេះដូង
        បី ឈាមពណ៌ខៀវ និងសមត្ថភាពដោះស្រាយបញ្ហាដ៏អស្ចារ្យ។
    `,

    khmerDescription: `
        សត្វរតីយក្សគឺជាសត្វសមុទ្រដែលមានរាងកាយទន់
        និងស្ថិតនៅក្នុងក្រុម cephalopods។ វាមានដៃចំនួនប្រាំបី
        ដែលអាចបត់បែនបាន និងមានឧបករណ៍បឺតជាច្រើននៅលើដៃ។
        រាងកាយរបស់វាមិនមានឆ្អឹងខាងក្នុង ឬសំបកខាងក្រៅរឹងទេ។

        ដោយសារតែវាមិនមានគ្រោងឆ្អឹងរឹង សត្វរតីយក្សអាច
        បង្រួមរាងកាយ និងឆ្លងកាត់ចន្លោះតូចៗបាន។ ជាទូទៅ
        អ្វីដែលកំណត់ទំហំចន្លោះដែលវាអាចឆ្លងកាត់បាន គឺ
        ចំពុះរឹងរបស់វា ដែលស្ថិតនៅកណ្តាលដៃទាំងប្រាំបី។

        សត្វរតីយក្សអាចផ្លាស់ទីដោយវារ ហែលទឹក និងប្រើ
        កម្លាំងបាញ់ទឹក។ វាទាញទឹកចូលទៅក្នុង mantle ហើយ
        បញ្ចេញទឹកតាមរយៈរចនាសម្ព័ន្ធសាច់ដុំមួយដែលហៅថា
        siphon ដើម្បីបង្កើតកម្លាំងរុញទៅមុខ។

        សត្វរតីយក្សក៏ល្បីដោយសារសមត្ថភាពលាក់ខ្លួនដ៏អស្ចារ្យ។
        កោសិកាពិសេសនៅក្នុងស្បែកអាចជួយឱ្យវាប្តូរពណ៌
        និងលំនាំយ៉ាងលឿន ខណៈរចនាសម្ព័ន្ធផ្សេងៗអាចប្តូរ
        វាយនភាពស្បែកឱ្យស្រដៀងនឹងថ្ម ផ្កាថ្ម ខ្សាច់
        ឬផ្ទៃផ្សេងៗ។

        ភាពវៃឆ្លាតរបស់វាពិសេសខ្លាំង ព្រោះវាជាសត្វគ្មាន
        ឆ្អឹងខាងក្នុង។ វាអាចរៀនពីបទពិសោធន៍ ស្វែងយល់
        វត្ថុដែលមិនស្គាល់ ដោះស្រាយបញ្ហាផ្នែករាងកាយ
        និងប្រើបរិស្ថានជុំវិញខ្លួនយ៉ាងច្នៃប្រឌិត។
    `,

    khmerFunFacts: [
        {
            title: "ដៃទាំងប្រាំបីមានប្រព័ន្ធប្រសាទស្មុគស្មាញ",
            text: `
                ផ្នែកធំនៃកោសិកាប្រសាទរបស់សត្វរតីយក្ស
                ស្ថិតនៅតាមដៃរបស់វា មិនមែនស្ថិតនៅក្នុងខួរក្បាល
                ទាំងអស់នោះទេ។ ដៃរបស់វាមានបណ្តាញប្រសាទ
                ស្មុគស្មាញ ដែលអាចជួយដំណើរការព័ត៌មានអារម្មណ៍
                និងសម្របសម្រួលចលនាមួយចំនួនដោយខ្លួនឯង។
            `
        },

        {
            title: "បេះដូងបី និងឈាមពណ៌ខៀវ",
            text: `
                សត្វរតីយក្សមានបេះដូងបី។ បេះដូងពីរជួយ
                បូមឈាមតាមក្រពេញដង្ហើម ខណៈបេះដូងមួយទៀត
                បូមឈាមដែលមានអុកស៊ីសែនទៅកាន់ផ្នែកផ្សេងៗ
                នៃរាងកាយ។

                ឈាមរបស់វាមានពណ៌ខៀវ ព្រោះវាប្រើប្រូតេអ៊ីន
                ដែលមានទង់ដែងហៅថា hemocyanin ដើម្បីដឹក
                អុកស៊ីសែន ជំនួសឱ្យ hemoglobin ដែលមានជាតិដែក
                ដូចនៅក្នុងមនុស្ស។
            `
        },

        {
            title: "អ្នកជំនាញខាងបាត់ខ្លួន",
            text: `
                សត្វរតីយក្សអាចប្តូរពណ៌ និងលំនាំស្បែកបានយ៉ាងលឿន។
                កោសិកា chromatophores ជួយគ្រប់គ្រងពណ៌ដែល
                អាចមើលឃើញ ខណៈរចនាសម្ព័ន្ធពិសេសផ្សេងទៀត
                អាចជួយឆ្លុះពន្លឺ និងផ្លាស់ប្តូររូបរាងរបស់ស្បែក។

                ប្រភេទខ្លះក៏អាចប្តូរវាយនភាពស្បែក ដើម្បីធ្វើឱ្យ
                វាស្រដៀងនឹងថ្ម ផ្កាថ្ម ឬវត្ថុផ្សេងៗនៅជុំវិញ។
            `
        },

        {
            title: "សត្វគ្មានឆ្អឹងដែលប្រើឧបករណ៍",
            text: `
                សត្វរតីយក្សមួយចំនួនបានបង្ហាញសមត្ថភាព
                ដោះស្រាយបញ្ហាដ៏គួរឱ្យចាប់អារម្មណ៍។ ប្រភេទខ្លះ
                ត្រូវបានសង្កេតឃើញថាកាន់សំបកដូង ឬវត្ថុផ្សេងៗ
                ហើយយកវាមកប្រើជាជម្រក ឬការពារ។

                សត្វរតីយក្សដែលរស់នៅក្នុងការឃុំឃាំងក៏ត្រូវបាន
                សង្កេតឃើញថាអាចបើកធុង និងប្រើវត្ថុជុំវិញខ្លួន
                ដើម្បីដោះស្រាយបញ្ហាផ្សេងៗ។
            `
        },

        {
            title: "បេសកកម្មចុងក្រោយរបស់ម្តាយ",
            text: `
                នៅក្នុងប្រភេទសត្វរតីយក្សជាច្រើន សត្វញី
                បន្តពូជតែម្តងក្នុងមួយជីវិត។ បន្ទាប់ពីដាក់ពង
                វាអាចចំណាយពេលជាច្រើនសប្តាហ៍ ឬខែ ដើម្បី
                ការពារ សម្អាត និងធ្វើឱ្យទឹកហូរជុំវិញពង។

                ក្នុងអំឡុងពេលនេះ វាជាញឹកញាប់ឈប់ស៊ីអាហារ។
                បន្ទាប់ពីពងញាស់ សត្វញីភាគច្រើនស្លាប់
                ដែលជាផ្នែកមួយនៃវដ្តជីវិតធម្មជាតិរបស់ប្រភេទនោះ។
            `
        }
    ]
},

{
    name: "Squid",
    title: "THE JET-PROPELLED PHANTOM: THE SQUID",
    khmer: "សត្វមឹក",
    category: "Aquatic",
    image: "images/squid.jpg",

    quote: `
        A streamlined ocean predator equipped with jet propulsion,
        specialized tentacles, powerful camouflage, and remarkable
        sensory adaptations for life in the open sea.
    `,

    scientificName: `
        Squid (over 300 living species across several groups)
    `,

    habitat: `
        Open oceans and deep-sea environments around the world,
        from coastal waters to depths exceeding 6,000 meters
        in some species.
    `,

    status: `
        Varies by species. Many commercially important species
        are not currently considered threatened, while some
        deep-sea species remain poorly studied.
    `,

    lifespan: `
        About 1–3 years for many species, although lifespan
        varies between species.
    `,

    topSpeed: `
        Some squid can reach around 40 km/h (25 mph) during
        rapid jet-propelled escape movements.
    `,

    description: `
        Squid are free-swimming marine animals belonging to the
        cephalopod group. Their streamlined bodies are specially
        shaped for efficient movement through open water.

        Unlike octopuses, which have eight arms, squid have
        eight shorter arms plus two longer feeding tentacles.
        The tentacles can rapidly extend to capture prey and
        bring it toward the mouth.

        Squid have a flexible internal structure called a pen
        or gladius. This structure supports the body while
        remaining light and flexible, helping squid maintain
        their streamlined shape.

        Their main form of rapid movement is jet propulsion.
        Water is drawn into the mantle cavity and then forced
        out through a muscular siphon. By controlling the
        direction of the siphon, a squid can quickly change
        direction or escape from predators.

        Many squid are active predators. They use their arms,
        tentacles, suckers, and sharp beaks to capture and
        consume fish, crustaceans, and other marine animals.
    `,

    funFacts: [
        {
            title: "Some Squid Have Enormous Eyes",
            text: `
                Giant Squid and Colossal Squid have extremely
                large eyes compared with most other animals.
                These huge eyes help them gather as much light
                as possible in the dark deep ocean and may help
                them detect large animals or faint bioluminescent
                signals.
            `
        },

        {
            title: "Flying Above the Ocean",
            text: `
                Some open-ocean squid can launch themselves
                out of the water to escape predators. They use
                jet propulsion to gain speed, then spread their
                fins and arms while gliding above the surface.
                This unusual behavior has been observed in several
                species of flying squid.
            `
        },

        {
            title: "Suckers With Sharp Rings",
            text: `
                Squid suckers are more than simple suction cups.
                Many species have rings made from hard chitin
                around their suckers that help them grip prey.
                Some species, including the Colossal Squid,
                have specialized hooks on their tentacles that
                help secure struggling prey.
            `
        },

        {
            title: "Invisible From Below",
            text: `
                Some squid use a form of camouflage called
                counter-illumination. Light-producing organs
                called photophores emit light from the underside
                of the body, helping the squid match the brightness
                of the water above and reduce its silhouette when
                viewed from below.
            `
        },

        {
            title: "The Giant Nerve That Changed Neuroscience",
            text: `
                Squid have unusually large nerve fibers called
                giant axons. Their large size made them extremely
                useful for scientific research into how electrical
                signals travel through nerve cells.

                Experiments using squid giant axons helped
                scientists develop important ideas about the
                electrical behavior of neurons.
            `
        }
    ],

    khmerTitle: "ខ្មោចដែលបាញ់ទឹកជំរុញខ្លួន៖ សត្វមឹក",

    khmerQuote: `
        ជាសត្វប្រមាញ់ក្នុងមហាសមុទ្រដែលមានរាងរលូនសម្រាប់
        ហែលទឹកលឿន មានប្រព័ន្ធបាញ់ទឹកជំរុញខ្លួន តង់តាគុល
        ពិសេស សមត្ថភាពលាក់ខ្លួន និងអារម្មណ៍ដែលសម្របខ្លួន
        សម្រាប់ជីវិតនៅក្នុងសមុទ្របើកចំហ។
    `,

    khmerDescription: `
        សត្វមឹកគឺជាសត្វសមុទ្រដែលអាចហែលទឹកដោយសេរី
        និងស្ថិតនៅក្នុងក្រុម cephalopods។ រាងកាយរបស់វា
        មានរាងរលូនដែលសមស្របសម្រាប់ផ្លាស់ទីក្នុងទឹក
        បើកចំហបានយ៉ាងមានប្រសិទ្ធភាព។

        មិនដូចសត្វរតីយក្សដែលមានដៃប្រាំបីទេ សត្វមឹកមាន
        ដៃខ្លីចំនួនប្រាំបី និងតង់តាគុលវែងចំនួនពីរ។
        តង់តាគុលអាចលាតចេញយ៉ាងលឿនដើម្បីចាប់សត្វចំណី
        ហើយទាញវាមកកាន់មាត់។

        សត្វមឹកមានរចនាសម្ព័ន្ធខាងក្នុងដែលអាចបត់បែនបាន
        ហៅថា pen ឬ gladius។ វាជួយទ្រទ្រង់រាងកាយ ខណៈ
        នៅតែរក្សាទម្ងន់ស្រាល និងភាពបត់បែន ដែលជួយឱ្យ
        សត្វមឹករក្សារាងកាយដែលសមស្របសម្រាប់ការហែលទឹក។

        វិធីផ្លាស់ទីលឿនសំខាន់មួយរបស់សត្វមឹកគឺការបាញ់ទឹក
        ជំរុញខ្លួន។ វាទាញទឹកចូលក្នុងផ្នែក mantle ហើយ
        បញ្ចេញទឹកតាមរយៈ siphon ដែលមានសាច់ដុំ។ ដោយ
        គ្រប់គ្រងទិសដៅរបស់ siphon វាអាចប្តូរទិសដៅយ៉ាងលឿន
        ឬគេចពីសត្វប្រមាញ់។

        សត្វមឹកជាច្រើនជាអ្នកប្រមាញ់សកម្ម។ ពួកវាប្រើដៃ
        តង់តាគុល ឧបករណ៍បឺត និងចំពុះរឹង ដើម្បីចាប់ និងស៊ី
        ត្រី សត្វសំបកតូចៗ និងសត្វសមុទ្រផ្សេងៗ។
    `,

    khmerFunFacts: [
        {
            title: "សត្វមឹកខ្លះមានភ្នែកធំខ្លាំង",
            text: `
                Giant Squid និង Colossal Squid មានភ្នែកធំ
                ខ្លាំងបើប្រៀបធៀបនឹងសត្វភាគច្រើន។ ភ្នែកធំៗ
                ជួយឱ្យវាប្រមូលពន្លឺបានច្រើននៅក្នុងសមុទ្រជ្រៅ
                និងអាចជួយរកឃើញសត្វធំៗ ឬសញ្ញាពន្លឺខ្សោយ
                ដែលបង្កើតដោយសត្វមានពន្លឺក្នុងខ្លួន។
            `
        },

        {
            title: "អាចហោះលើសមុទ្រ",
            text: `
                សត្វមឹកនៅមហាសមុទ្របើកចំហមួយចំនួនអាច
                លោតចេញពីទឹកដើម្បីគេចពីសត្វប្រមាញ់។ វាប្រើ
                កម្លាំងបាញ់ទឹកដើម្បីបង្កើនល្បឿន បន្ទាប់មក
                លាតព្រុយ និងដៃដើម្បីរអិលលើផ្ទៃទឹក។
                ឥរិយាបថដ៏ចម្លែកនេះត្រូវបានសង្កេតឃើញ
                ក្នុងសត្វមឹកហោះជាច្រើនប្រភេទ។
            `
        },

        {
            title: "ឧបករណ៍បឺតដែលមានគែមមុត",
            text: `
                ឧបករណ៍បឺតរបស់សត្វមឹកមិនមែនមានតួនាទី
                សម្រាប់បឺតតែប៉ុណ្ណោះទេ។ ប្រភេទជាច្រើនមាន
                រង្វង់ធ្វើពី chitin រឹងនៅជុំវិញឧបករណ៍បឺត
                ដែលជួយឱ្យវាចាប់សត្វចំណីបានរឹងមាំ។
                ប្រភេទខ្លះ រួមទាំង Colossal Squid មាន
                ទំពក់ពិសេសនៅលើតង់តាគុលសម្រាប់ជួយចាប់
                សត្វចំណីដែលកំពុងតស៊ូ។
            `
        },

        {
            title: "លាក់ខ្លួនរហូតមើលមិនឃើញពីខាងក្រោម",
            text: `
                សត្វមឹកមួយចំនួនប្រើវិធីលាក់ខ្លួនដែលហៅថា
                counter-illumination។ សរីរាង្គដែលអាចបញ្ចេញ
                ពន្លឺហៅថា photophores បញ្ចេញពន្លឺពីផ្នែក
                ខាងក្រោមនៃរាងកាយ ដើម្បីធ្វើឱ្យពណ៌ភ្លឺរបស់វា
                ស្រដៀងនឹងទឹកនៅខាងលើ និងកាត់បន្ថយស្រមោល
                របស់វានៅពេលសត្វប្រមាញ់មើលពីខាងក្រោម។
            `
        },

        {
            title: "សរសៃប្រសាទយក្សដែលជួយវិទ្យាសាស្ត្រ",
            text: `
                សត្វមឹកមានសរសៃប្រសាទធំៗដែលហៅថា
                giant axons។ ដោយសារទំហំធំរបស់វា វាមាន
                សារៈសំខាន់ខ្លាំងសម្រាប់ការសិក្សាវិទ្យាសាស្ត្រ
                អំពីរបៀបដែលសញ្ញាអគ្គិសនីធ្វើដំណើរតាម
                កោសិកាប្រសាទ។

                ការស្រាវជ្រាវលើ giant axons របស់សត្វមឹក
                បានជួយអ្នកវិទ្យាសាស្ត្រយល់ដឹងកាន់តែច្បាស់
                អំពីដំណើរការអគ្គិសនីរបស់ neurons។
            `
        }
    ]
},

{
    name: "Blue Whale",
    title: "THE GIANTS OF EARTH: THE BLUE WHALE",
    khmer: "ត្រីបាឡែនពណ៌ខៀវ",
    category: "Aquatic",
    image: "images/blue-whale.jpg",

    quote: `
        The largest animal known to have ever lived on Earth,
        reaching extraordinary sizes while surviving almost
        entirely on tiny shrimp-like animals called krill.
    `,

    scientificName: `
        Balaenoptera musculus
    `,

    habitat: `
        All major oceans around the world, with populations
        migrating between feeding and breeding areas.
    `,

    status: `
        Endangered 🔴
    `,

    lifespan: `
        About 80–90 years, with some individuals living
        for more than 100 years.
    `,

    topSpeed: `
        Usually cruises around 8–20 km/h (5–12 mph), but
        can reach much higher speeds during short bursts.
    `,

    description: `
        Blue whales are enormous marine mammals belonging to
        the baleen whale group. They are the largest animals
        known to have ever lived on Earth, reaching lengths of
        around 30 meters (100 feet) and weighing well over
        100 metric tons.

        Their bodies are long and streamlined, with blue-gray
        coloring and lighter mottled patterns across the skin.
        They have a broad, flat head and a relatively small
        dorsal fin positioned far back on their body.

        Unlike toothed whales, blue whales do not have teeth.
        Instead, they have hundreds of baleen plates hanging
        from their upper jaws. These plates act like a giant
        filter, allowing the whale to capture enormous amounts
        of tiny prey while releasing most of the surrounding
        seawater.

        Blue whales are filter feeders and primarily eat krill.
        During feeding seasons, they can consume several tons
        of krill in a single day. Their enormous size therefore
        comes from an animal that feeds on creatures that are
        individually tiny.
    `,

    funFacts: [
        {
            title: "The Giant Heart",
            text: `
                A blue whale has an enormous heart that can weigh
                hundreds of kilograms. Its heartbeat becomes much
                slower during deep dives, helping conserve energy
                while the whale remains underwater.
            `
        },

        {
            title: "The World's Biggest Animal Eats Tiny Krill",
            text: `
                Blue whales are the largest animals ever known,
                yet their main food is tiny shrimp-like animals
                called krill.

                During productive feeding seasons, an adult blue
                whale can consume several tons of krill in a day.
                It gathers huge amounts of water and prey into its
                mouth before pushing the water back through its
                baleen plates.
            `
        },

        {
            title: "One of the Loudest Animals on Earth",
            text: `
                Blue whales produce extremely powerful,
                low-frequency calls. These sounds can travel
                enormous distances through the ocean and are
                believed to play an important role in communication
                between whales.
            `
        },

        {
            title: "A Tongue That Weighs as Much as an Elephant",
            text: `
                A blue whale's tongue is extraordinarily large
                and can weigh several tons. During feeding, the
                whale expands its mouth and throat region to take
                in a huge volume of water containing krill.

                Flexible throat grooves allow the whale to expand
                this part of its body dramatically during feeding.
            `
        },

        {
            title: "The Giant Ocean Blow",
            text: `
                Blue whales breathe through two blowholes located
                on top of their heads. When a whale surfaces, it
                forcefully exhales warm, moist air, producing the
                enormous column of spray and water vapor commonly
                called its blow.

                The blow can rise several meters above the ocean
                surface, making a surfacing blue whale visible
                from a considerable distance.
            `
        }
    ],

    khmerTitle: "យក្សនៃផែនដី៖ ត្រីបាឡែនពណ៌ខៀវ",

    khmerQuote: `
        ជាសត្វដែលមានទំហំធំបំផុតដែលគេដឹងថាធ្លាប់រស់នៅ
        លើផែនដី ហើយអាចមានទំហំធំមហាសាល ទោះបីអាហារ
        សំខាន់របស់វាគឺសត្វ krill ដែលមានទំហំតូចខ្លាំងក៏ដោយ។
    `,

    khmerDescription: `
        ត្រីបាឡែនពណ៌ខៀវគឺជាថនិកសត្វសមុទ្រដែលស្ថិតនៅក្នុង
        ក្រុមត្រីបាឡែនដែលមានបន្ទះ baleen។ វាជាសត្វដែលមាន
        ទំហំធំបំផុតដែលគេដឹងថាធ្លាប់រស់នៅលើផែនដី ហើយអាច
        មានប្រវែងប្រហែល ៣០ ម៉ែត្រ និងទម្ងន់លើសពី ១០០
        តោនមេត្រិក។

        រាងកាយរបស់វាវែង និងមានរាងសមស្របសម្រាប់ហែលទឹក
        ដោយមានពណ៌ខៀវប្រផេះ និងលំនាំពណ៌ស្រាលៗនៅលើស្បែក។
        វាមានក្បាលធំទូលាយ និងព្រុយខ្នងតូចមួយដែលស្ថិតនៅ
        ខាងក្រោយនៃរាងកាយ។

        មិនដូចត្រីបាឡែនដែលមានធ្មេញទេ ត្រីបាឡែនពណ៌ខៀវ
        មិនមានធ្មេញឡើយ។ វាមានបន្ទះ baleen រាប់រយ
        ដែលព្យួរចុះពីថ្គាមខាងលើ។ បន្ទះទាំងនេះធ្វើការដូចជា
        តម្រងធំមួយ ដែលអនុញ្ញាតឱ្យវាចាប់សត្វចំណីតូចៗ
        ខណៈដែលទឹកភាគច្រើនត្រូវបានបញ្ចេញចេញ។

        ត្រីបាឡែនពណ៌ខៀវជាសត្វស៊ីអាហារតាមរយៈការចម្រោះទឹក
        ហើយអាហារសំខាន់របស់វាគឺ krill។ ក្នុងរដូវដែលមាន
        អាហារច្រើន វាអាចស៊ី krill បានច្រើនតោនក្នុងមួយថ្ងៃ។
        ដូច្នេះ ទំហំដ៏ធំសម្បើមរបស់វាត្រូវបានរក្សាទុកដោយ
        អាហារដែលមានទំហំតូចបំផុត។
    `,

    khmerFunFacts: [
        {
            title: "បេះដូងយក្ស",
            text: `
                ត្រីបាឡែនពណ៌ខៀវមានបេះដូងធំសម្បើមដែលអាច
                មានទម្ងន់រាប់រយគីឡូក្រាម។ នៅពេលមុជទឹកជ្រៅ
                ចង្វាក់បេះដូងរបស់វាអាចថយចុះយ៉ាងខ្លាំង ដើម្បី
                សន្សំថាមពលនៅពេលស្ថិតនៅក្រោមទឹក។
            `
        },

        {
            title: "សត្វធំបំផុត ប៉ុន្តែស៊ី Krill តូចៗ",
            text: `
                ត្រីបាឡែនពណ៌ខៀវគឺជាសត្វធំបំផុតដែលគេដឹង
                ប៉ុន្តែអាហារសំខាន់របស់វាគឺសត្វតូចៗដែល
                មានរាងដូចបង្គា ហៅថា krill។

                ក្នុងរដូវដែលមានអាហារច្រើន ត្រីបាឡែនពេញវ័យ
                មួយអាចស៊ី krill បានច្រើនតោនក្នុងមួយថ្ងៃ។
                វាប្រមូលទឹក និងសត្វចំណីចូលក្នុងមាត់ក្នុងបរិមាណ
                ដ៏ច្រើន ហើយបន្ទាប់មកបញ្ចេញទឹកតាមបន្ទះ baleen។
            `
        },

        {
            title: "សំឡេងខ្លាំងបំផុតមួយនៅលើផែនដី",
            text: `
                ត្រីបាឡែនពណ៌ខៀវបង្កើតសំឡេងដែលមានថាមពលខ្លាំង
                និងមានប្រេកង់ទាប។ សំឡេងទាំងនេះអាចធ្វើដំណើរ
                បានចម្ងាយយ៉ាងឆ្ងាយនៅក្នុងមហាសមុទ្រ ហើយ
                ត្រូវបានគេជឿថាមានតួនាទីសំខាន់ក្នុងការទំនាក់ទំនង
                រវាងត្រីបាឡែន។
            `
        },

        {
            title: "អណ្តាតធំដូចដំរី",
            text: `
                អណ្តាតរបស់ត្រីបាឡែនពណ៌ខៀវមានទំហំធំសម្បើម
                ហើយអាចមានទម្ងន់ជាច្រើនតោន។ នៅពេលស៊ីអាហារ
                វាពង្រីកមាត់ និងផ្នែកបំពង់ក ដើម្បីប្រមូលទឹក
                និង krill ក្នុងបរិមាណដ៏ច្រើន។

                ផ្នត់បំពង់កដែលអាចបត់បែនបានជួយឱ្យផ្នែកនេះ
                នៃរាងកាយអាចពង្រីកបានយ៉ាងខ្លាំងនៅពេលស៊ីអាហារ។
            `
        },

        {
            title: "ទឹកបាញ់ដ៏ធំពីរន្ធដង្ហើម",
            text: `
                ត្រីបាឡែនពណ៌ខៀវដកដង្ហើមតាមរន្ធដង្ហើមពីរ
                ដែលស្ថិតនៅផ្នែកខាងលើនៃក្បាល។ នៅពេលវាឡើង
                មកលើផ្ទៃទឹក វាបញ្ចេញខ្យល់ក្តៅ និងសំណើមយ៉ាង
                ខ្លាំង ដែលបង្កើតជាជួរទឹក និងចំហាយទឹកធំមួយ។

                ជួរនេះអាចឡើងខ្ពស់ជាច្រើនម៉ែត្រពីលើផ្ទៃទឹក
                ហើយធ្វើឱ្យគេអាចសម្គាល់ត្រីបាឡែនដែលកំពុង
                ឡើងមកដកដង្ហើមបានពីចម្ងាយ។
            `
        }
    ]
},

{
    name: "Penguin",
    title: "THE AQUATIC MARINER: THE PENGUIN",
    khmer: "សត្វភេនឃ្វីន",
    category: "Aquatic",
    image: "images/penguin.jpg",

    quote: `
        Flightless birds built for life in the ocean, using
        powerful flippers, dense insulation, and specialized
        diving abilities to survive in some of Earth's harshest
        environments.
    `,

    scientificName: `
        Spheniscidae
    `,

    habitat: `
        Oceans and coastal regions of the Southern Hemisphere,
        including Antarctica, South America, southern Africa,
        Australia, New Zealand, and the Galápagos Islands.
    `,

    status: `
        Varies by species. Some species are Least Concern 🟢,
        while others face serious conservation threats.
    `,

    lifespan: `
        Around 15–20 years in the wild, depending on the species.
    `,

    topSpeed: `
        Some penguins can swim at speeds approaching
        36 km/h (22 mph), with Gentoo Penguins among
        the fastest.
    `,

    description: `
        Penguins are flightless birds that have evolved to spend
        much of their lives in and around the ocean. Although
        their ancestors could fly, modern penguins have wings
        that have transformed into rigid, paddle-like flippers.

        These flippers allow penguins to "fly" underwater,
        providing excellent maneuverability while hunting fish,
        squid, and other marine prey.

        Penguins have dense feathers that overlap tightly to
        create a waterproof layer around the body. Beneath the
        feathers, many species also have a layer of body fat
        called blubber that provides additional insulation in
        cold environments.

        Their famous black-and-white coloration is an example
        of countershading. From above, a penguin's dark back
        can blend with the darker ocean below. From underneath,
        its white belly can blend with the brighter surface
        above, making it harder for predators to spot.

        Penguins cannot fly through the air, but they are highly
        capable swimmers and divers. Different species have
        evolved different abilities depending on the environment
        in which they live.
    `,

    funFacts: [
        {
            title: "They Fly Underwater",
            text: `
                Penguin wings have evolved into stiff flippers
                that are perfectly suited for swimming. Instead
                of generating lift through the air, they generate
                thrust through water, allowing penguins to make
                rapid turns while chasing prey.
            `
        },

        {
            title: "Their Bodies Can Remove Salt",
            text: `
                Penguins often swallow seawater while feeding.
                Specialized salt glands located above their eyes
                help remove excess salt from their bloodstream.
                The concentrated salt solution can then be
                expelled through passages connected to the beak.
            `
        },

        {
            title: "The Catastrophic Molt",
            text: `
                Penguins undergo a dramatic annual molt.
                Instead of replacing feathers gradually, they
                replace a large portion of their feathers over
                a short period.

                During this time their old feathers lose their
                waterproofing, so penguins generally remain on
                land until their new protective feathers have
                grown in.
            `
        },

        {
            title: "The Emperor Penguin Fathers",
            text: `
                Male Emperor Penguins are famous for their
                extraordinary parenting duties. After the female
                lays a single egg, the male balances it on his
                feet and covers it with a warm fold of skin.

                He can protect the egg through the Antarctic
                winter for around two months while surviving
                extreme cold and strong winds.
            `
        },

        {
            title: "Penguins Live Near the Equator Too",
            text: `
                Penguins are not limited to freezing Antarctic
                environments. The Galápagos Penguin lives near
                the equator, where ocean currents provide cooler
                water and suitable feeding conditions.

                African Penguins also live along the relatively
                warm coast of southern Africa.
            `
        }
    ],

    khmerTitle: "អ្នកធ្វើដំណើរតាមសមុទ្រ៖ សត្វភេនឃ្វីន",

    khmerQuote: `
        ជាសត្វស្លាបដែលមិនអាចហោះហើរបាន ប៉ុន្តែបានវិវត្ត
        ឱ្យសមស្របសម្រាប់ជីវិតក្នុងសមុទ្រ ដោយប្រើព្រុយដ៏រឹងមាំ
        ស្រទាប់ការពារកម្តៅ និងសមត្ថភាពមុជទឹកដ៏អស្ចារ្យ។
    `,

    khmerDescription: `
        សត្វភេនឃ្វីនគឺជាសត្វស្លាបដែលមិនអាចហោះហើរបាន
        ហើយបានវិវត្តឱ្យរស់នៅក្នុង និងជុំវិញមហាសមុទ្រ។
        ទោះបីបុព្វបុរសរបស់វាអាចហោះហើរបានក៏ដោយ
        ភេនឃ្វីនសព្វថ្ងៃមានស្លាបដែលបានវិវត្តទៅជាព្រុយ
        រឹងដែលមានរាងដូចឧបករណ៍ចែវទឹក។

        ព្រុយទាំងនេះអនុញ្ញាតឱ្យភេនឃ្វីន "ហោះ" នៅក្រោមទឹក
        ហើយអាចបត់បែនបានយ៉ាងល្អនៅពេលប្រមាញ់ត្រី មឹក
        និងសត្វសមុទ្រផ្សេងៗ។

        ភេនឃ្វីនមានរោមក្រាស់ដែលត្រួតលើគ្នាយ៉ាងជិតស្និទ្ធ
        ដើម្បីបង្កើតស្រទាប់ការពារទឹកជុំវិញរាងកាយ។ នៅក្រោម
        រោម សត្វជាច្រើនប្រភេទក៏មានស្រទាប់ខ្លាញ់ដែលហៅថា
        blubber ដែលជួយរក្សាកម្តៅក្នុងបរិយាកាសត្រជាក់។

        ពណ៌ខ្មៅ និងសដ៏ល្បីរបស់ភេនឃ្វីនគឺជាឧទាហរណ៍
        នៃ countershading។ ពេលមើលពីខាងលើ ខ្នងពណ៌ងងឹត
        អាចលាយជាមួយទឹកសមុទ្រដែលមានពណ៌ងងឹត។ ពេលមើល
        ពីខាងក្រោម ពោះពណ៌សអាចលាយជាមួយពន្លឺពីផ្ទៃទឹក
        ដែលធ្វើឱ្យសត្វប្រមាញ់ពិបាកមើលឃើញវា។

        ភេនឃ្វីនមិនអាចហោះហើរតាមខ្យល់បានទេ ប៉ុន្តែវា
        ជាអ្នកហែលទឹក និងមុជទឹកដ៏មានសមត្ថភាព។ ប្រភេទ
        ផ្សេងៗបានវិវត្តសមត្ថភាពខុសៗគ្នា ទៅតាមបរិស្ថាន
        ដែលពួកវារស់នៅ។
    `,

    khmerFunFacts: [
        {
            title: "វាហោះនៅក្រោមទឹក",
            text: `
                ស្លាបរបស់ភេនឃ្វីនបានវិវត្តទៅជាព្រុយរឹង
                ដែលសមស្របសម្រាប់ហែលទឹក។ ជំនួសឱ្យការបង្កើត
                កម្លាំងលើកនៅក្នុងខ្យល់ ព្រុយរបស់វាបង្កើត
                កម្លាំងរុញក្នុងទឹក ដែលអនុញ្ញាតឱ្យវាបត់ទិស
                បានយ៉ាងលឿននៅពេលប្រមាញ់សត្វចំណី។
            `
        },

        {
            title: "រាងកាយអាចបញ្ចេញអំបិល",
            text: `
                ភេនឃ្វីនអាចលេបទឹកសមុទ្រនៅពេលប្រមាញ់អាហារ។
                ក្រពេញបញ្ចេញអំបិលពិសេសដែលស្ថិតនៅពីលើភ្នែក
                ជួយយកអំបិលលើសចេញពីឈាម។ បន្ទាប់មកសារធាតុ
                អំបិលដែលមានកំហាប់ខ្ពស់អាចត្រូវបានបញ្ចេញ
                តាមផ្លូវដែលភ្ជាប់ទៅនឹងចំពុះ។
            `
        },

        {
            title: "ការប្តូររោមដ៏ធំប្រចាំឆ្នាំ",
            text: `
                ភេនឃ្វីនមានការប្តូររោមដ៏គួរឱ្យចាប់អារម្មណ៍
                ជារៀងរាល់ឆ្នាំ។ ជំនួសឱ្យការប្តូររោមបន្តិចម្តងៗ
                វាប្តូររោមច្រើនក្នុងរយៈពេលខ្លី។

                ក្នុងអំឡុងពេលនេះ រោមចាស់របស់វាមិនអាច
                ការពារទឹកបានល្អទេ ដូច្នេះភេនឃ្វីនជាទូទៅ
                នៅលើគោករហូតដល់រោមថ្មីលូតឡើងវិញ។
            `
        },

        {
            title: "ឪពុកភេនឃ្វីន Emperor",
            text: `
                ភេនឃ្វីន Emperor ឈ្មោលមានតួនាទីជាឪពុក
                ដ៏អស្ចារ្យ។ បន្ទាប់ពីភេនឃ្វីនញីដាក់ពងមួយ
                ពងនោះត្រូវបានដាក់នៅលើជើងរបស់ភេនឃ្វីនឈ្មោល
                ហើយគ្របដោយស្បែកក្តៅមួយផ្នត់។

                វាអាចការពារពងពេញមួយរដូវរងារនៅអង់តាក់ទិក
                ប្រហែលពីរខែ ខណៈដែលតស៊ូជាមួយអាកាសធាតុ
                ត្រជាក់ខ្លាំង និងខ្យល់កន្ត្រាក់។
            `
        },

        {
            title: "ភេនឃ្វីនក៏រស់នៅជិតខ្សែអេក្វាទ័រដែរ",
            text: `
                ភេនឃ្វីនមិនរស់នៅតែក្នុងតំបន់ទឹកកកអង់តាក់ទិកទេ។
                Galápagos Penguin រស់នៅជិតខ្សែអេក្វាទ័រ
                ដែលចរន្តទឹកសមុទ្រជួយនាំទឹកត្រជាក់ និងអាហារ
                សមស្របសម្រាប់វា។

                African Penguin ក៏រស់នៅតាមឆ្នេរសមុទ្រដែល
                មានអាកាសធាតុកក់ក្តៅជាងនៅភាគខាងត្បូង
                នៃទ្វីបអាហ្វ្រិកផងដែរ។
            `
        }
    ]
},

{
    name: "Seal",
    title: "THE OCEAN SLEEK MARINER: THE SEAL",
    khmer: "សត្វត្រា",
    category: "Aquatic",
    image: "images/seal.jpg",

    quote: `
        Sleek marine mammals built for life in the water,
        using insulating blubber, sensitive whiskers, and
        remarkable diving abilities to hunt and survive.
    `,

    scientificName: `
        Phocidae (True Seals) & Otariidae (Eared Seals)
    `,

    habitat: `
        Polar, sub-polar, and temperate oceans and coastlines
        around the world, with a few species living in freshwater.
    `,

    status: `
        Varies by species. Some seals are Least Concern 🟢,
        while species such as Hawaiian and Mediterranean Monk
        Seals are Endangered 🔴.
    `,

    lifespan: `
        Around 25–35 years in the wild for many species.
    `,

    topSpeed: `
        Up to around 35 km/h (22 mph) in short underwater bursts.
    `,

    description: `
        Seals are semi-aquatic marine mammals belonging to the
        group Pinnipedia, a name meaning "fin-footed." They are
        specially adapted for swimming and spending much of
        their lives in the water.

        True seals have streamlined, barrel-shaped bodies,
        powerful rear flippers, and no external ear flaps.
        Their front flippers help them steer while swimming,
        while their rear flippers provide much of their
        underwater propulsion.

        On land, true seals can appear surprisingly awkward.
        Because their rear flippers cannot rotate underneath
        their bodies in the same way as those of sea lions,
        they often move by pulling and pushing their bodies
        across the ground.

        In the water, however, they become extremely agile.
        Their streamlined bodies reduce resistance, while
        thick layers of blubber provide insulation and help
        store energy in cold environments.

        Seals are predators that eat a variety of marine animals,
        including fish, squid, crustaceans, and other prey.
        Their whiskers are especially important because they
        can detect disturbances in the water created by nearby
        swimming animals.
    `,

    funFacts: [
        {
            title: "Whiskers That Track Invisible Trails",
            text: `
                A seal's whiskers, called vibrissae, are extremely
                sensitive. They can detect tiny changes in water
                movement and turbulence left behind by swimming
                prey.

                This allows seals to follow hydrodynamic trails
                even when visibility is poor or they are hunting
                in darkness.
            `
        },

        {
            title: "Weddell Seals Are Deep-Diving Experts",
            text: `
                Weddell Seals are capable of making extremely
                deep dives and remaining underwater for long
                periods. They can slow their heart rate during
                dives and rely heavily on oxygen stored in their
                blood and muscles.

                These adaptations allow them to continue hunting
                beneath Antarctic ice for extended periods.
            `
        },

        {
            title: "Oxygen Stored in Blood and Muscles",
            text: `
                Seals carry large amounts of oxygen in their
                blood and muscles rather than relying only on
                their lungs.

                Their blood contains large amounts of hemoglobin,
                while their muscles contain high concentrations
                of myoglobin. These adaptations provide oxygen
                reserves that can be used during long dives.
            `
        },

        {
            title: "Some Seals Sleep Underwater",
            text: `
                Seals can rest while floating or swimming underwater.
                Some species can enter periods of sleep while
                submerged and then return to the surface to breathe.

                Other seals use a behavior sometimes called
                "bottling," where they float vertically in the
                water with their nostrils near the surface.
            `
        },

        {
            title: "The Freshwater Seal",
            text: `
                The Baikal Seal, also called the nerpa, lives
                exclusively in Lake Baikal in Siberia.

                It is the only seal species that naturally lives
                entirely in freshwater, making it one of the most
                unusual members of the seal family.
            `
        }
    ],

    khmerTitle: "អ្នកធ្វើដំណើរដ៏រលូនក្នុងមហាសមុទ្រ៖ សត្វត្រា",

    khmerQuote: `
        ជាថនិកសត្វសមុទ្រដែលមានរាងរលូន និងបានសម្របខ្លួន
        យ៉ាងល្អសម្រាប់ជីវិតក្នុងទឹក ដោយប្រើស្រទាប់ខ្លាញ់
        ការពារកម្តៅ ពុកមាត់ដ៏មានភាពរសើប និងសមត្ថភាព
        មុជទឹកដ៏អស្ចារ្យ។
    `,

    khmerDescription: `
        សត្វត្រាគឺជាថនិកសត្វសមុទ្រដែលអាចរស់នៅទាំងក្នុងទឹក
        និងលើគោក ហើយស្ថិតនៅក្នុងក្រុម Pinnipedia ដែលមាន
        ន័យថា "ជើងមានរាងដូចព្រុយ"។ រាងកាយរបស់វាត្រូវបាន
        សម្របខ្លួនយ៉ាងល្អសម្រាប់ការហែលទឹក និងការរស់នៅ
        ក្នុងទឹករយៈពេលយូរ។

        សត្វត្រាពិតមានរាងកាយរលូន និងមូលក្រាស់ មានព្រុយ
        ខាងក្រោយដ៏មានកម្លាំង និងមិនមានត្រចៀកខាងក្រៅ
        ដែលអាចមើលឃើញ។ ព្រុយខាងមុខជួយបញ្ជាទិស ខណៈ
        ព្រុយខាងក្រោយជួយផ្តល់កម្លាំងសម្រាប់ហែលទឹក។

        នៅលើគោក សត្វត្រាពិតអាចមើលទៅមានភាពឆ្គងបន្តិច។
        ដោយសារព្រុយខាងក្រោយរបស់វាមិនអាចបង្វិលមកក្រោម
        រាងកាយបានដូចសត្វ sea lion វាត្រូវប្រើរាងកាយ
        ដើម្បីទាញ និងរុញខ្លួនទៅមុខ។

        ប៉ុន្តែនៅក្នុងទឹក វាអាចផ្លាស់ទីបានយ៉ាងរហ័ស និង
        បត់បែនបានល្អ។ រាងកាយដែលរលូនជួយកាត់បន្ថយ
        ការទប់ទល់ពីទឹក ខណៈស្រទាប់ខ្លាញ់ក្រាស់ជួយរក្សា
        កម្តៅ និងរក្សាទុកថាមពលនៅក្នុងបរិយាកាសត្រជាក់។

        សត្វត្រាជាសត្វប្រមាញ់ដែលស៊ីសត្វសមុទ្រជាច្រើនប្រភេទ
        ដូចជា ត្រី មឹក សត្វសំបកតូចៗ និងសត្វចំណីផ្សេងៗ។
        ពុកមាត់របស់វាមានសារៈសំខាន់ខ្លាំង ព្រោះវាអាច
        រកឃើញការរំញ័រនៃទឹកដែលបង្កើតដោយសត្វចំណី
        ដែលកំពុងហែលនៅក្បែរនោះ។
    `,

    khmerFunFacts: [
        {
            title: "ពុកមាត់ដែលអាចតាមដានស្នាមក្នុងទឹក",
            text: `
                ពុកមាត់របស់សត្វត្រាដែលហៅថា vibrissae
                មានភាពរសើបខ្លាំង។ វាអាចរកឃើញការផ្លាស់ប្តូរ
                តូចៗនៃចលនា និងការរំញ័ររបស់ទឹកដែលបន្សល់
                ទុកដោយសត្វចំណីដែលកំពុងហែល។

                សមត្ថភាពនេះអនុញ្ញាតឱ្យវាតាមដានស្នាមចលនា
                ក្នុងទឹក ទោះបីមើលមិនសូវឃើញ ឬកំពុងប្រមាញ់
                នៅក្នុងភាពងងឹតក៏ដោយ។
            `
        },

        {
            title: "Weddell Seal ជាអ្នកមុជទឹកជ្រៅ",
            text: `
                Weddell Seal អាចមុជទឹកបានជ្រៅខ្លាំង និង
                អាចស្ថិតនៅក្រោមទឹកបានយូរ។ វាអាចបន្ថយ
                ចង្វាក់បេះដូងនៅពេលមុជទឹក ហើយពឹងផ្អែក
                លើអុកស៊ីសែនដែលរក្សាទុកក្នុងឈាម និងសាច់ដុំ។

                ការសម្របខ្លួនទាំងនេះអនុញ្ញាតឱ្យវាបន្ត
                ប្រមាញ់នៅក្រោមទឹកកកអង់តាក់ទិកបានយូរ។
            `
        },

        {
            title: "រក្សាអុកស៊ីសែនក្នុងឈាម និងសាច់ដុំ",
            text: `
                សត្វត្រារក្សាទុកអុកស៊ីសែនក្នុងឈាម និងសាច់ដុំ
                ក្នុងបរិមាណច្រើន ជំនួសឱ្យពឹងផ្អែកលើសួតតែប៉ុណ្ណោះ។

                ឈាមរបស់វាមាន hemoglobin ច្រើន ខណៈសាច់ដុំ
                មាន myoglobin ក្នុងកំហាប់ខ្ពស់។ ការសម្របខ្លួន
                ទាំងនេះផ្តល់ឱ្យវានូវទុនអុកស៊ីសែនសម្រាប់ប្រើប្រាស់
                នៅពេលមុជទឹក។
            `
        },

        {
            title: "សត្វត្រាខ្លះអាចគេងនៅក្រោមទឹក",
            text: `
                សត្វត្រាអាចសម្រាកនៅពេលអណ្តែត ឬហែលនៅ
                ក្រោមទឹក។ ប្រភេទខ្លះអាចគេងក្នុងទឹក ហើយ
                បន្ទាប់មកឡើងមកលើផ្ទៃដើម្បីដកដង្ហើម។

                សត្វតាខ្លះក៏ប្រើឥរិយាបថដែលហៅថា "bottling"
                ដោយអណ្តែតបញ្ឈរនៅក្នុងទឹក និងរក្សារន្ធច្រមុះ
                នៅជិតផ្ទៃទឹក។
            `
        },

        {
            title: "សត្វត្រាដែលរស់ក្នុងទឹកសាប",
            text: `
                Baikal Seal ឬ nerpa រស់នៅទាំងស្រុងក្នុង
                Lake Baikal នៅតំបន់ស៊ីបេរី។

                វាគឺជាប្រភេទសត្វត្រាតែមួយដែលរស់នៅក្នុង
                ទឹកសាបទាំងស្រុងតាមធម្មជាតិ ដែលធ្វើឱ្យវា
                ក្លាយជាសមាជិកដ៏ពិសេសមួយនៃក្រុមសត្វត្រា។
            `
        }
    ]
},

{
    name: "Humpback Whale",
    title: "THE MAJESTIC OCEAN ACROBAT: THE HUMPBACK WHALE",
    khmer: "ត្រីបាឡែន Humpback",
    category: "Aquatic",
    image: "images/humpback-whale.jpg",

    quote: `
        The ocean's expressive giant, famous for powerful songs,
        cooperative bubble-net hunting, long migrations, and
        spectacular full-body breaches.
    `,

    scientificName: `
        Megaptera novaeangliae
    `,

    habitat: `
        Oceans worldwide, migrating between polar feeding grounds
        and warmer tropical or subtropical breeding waters.
    `,

    status: `
        Least Concern 🟢
    `,

    lifespan: `
        Around 80–90 years in the wild.
    `,

    topSpeed: `
        Humpback whales are not built for sustained high speed,
        but can make powerful bursts during feeding and other
        active behaviors.
    `,

    description: `
        Humpback whales are large baleen whales recognized by
        their dark bodies, broad heads, and exceptionally long
        pectoral flippers. Their flippers can reach roughly
        one-third of their body length, making them unusually
        large compared with those of many other whales.

        Their heads and lower jaws are covered with distinctive
        bumps called tubercles. These structures contain sensory
        hair follicles and are part of the whale's specialized
        feeding and sensory anatomy.

        Humpback whales are famous for their spectacular behavior.
        They can breach completely out of the water, slap the
        surface with their tails, and strike the water with their
        long flippers.

        They are also highly skilled hunters. Some populations
        use bubble-net feeding, a cooperative hunting technique
        in which whales create a circle or spiral of bubbles
        around schools of fish. The whales then swim upward
        through the concentrated prey with their mouths open.

        Humpback whales undertake long seasonal migrations.
        They generally feed in colder, food-rich waters and travel
        toward warmer waters for breeding and raising calves.
    `,

    funFacts: [
        {
            title: "The Ocean's Greatest Singers",
            text: `
                Male humpback whales are famous for their complex
                songs. A song can contain repeated sequences of
                moans, cries, and other sounds and may continue
                for many minutes or even hours.

                Males in the same population often share similar
                songs, and the structure of those songs can change
                over time.
            `
        },

        {
            title: "Bubble-Net Teamwork",
            text: `
                Some humpback whales cooperate to catch fish using
                bubble-net feeding. One or more whales release
                bubbles while swimming around or beneath a school
                of fish.

                The bubbles can create a barrier that concentrates
                the fish. The whales then swim upward through the
                middle with their mouths open, capturing large
                amounts of prey.
            `
        },

        {
            title: "Every Tail Has a Story",
            text: `
                The underside of a humpback whale's tail flukes
                has a distinctive combination of colors, patterns,
                scars, and markings.

                Researchers can photograph these patterns and use
                them to identify individual whales. This allows
                scientists to follow the movements and lives of
                particular whales over many years.
            `
        },

        {
            title: "Bumpy Flippers Are Surprisingly Useful",
            text: `
                The tubercles along the leading edges of humpback
                whale flippers affect the flow of water around
                them. Research suggests that these bumps can
                improve the flippers' ability to generate lift
                and remain effective during sharp turns.

                This helps explain how such a massive animal can
                maneuver with surprising agility.
            `
        },

        {
            title: "Long-Distance Travelers",
            text: `
                Humpback whales undertake some of the longest
                migrations of any mammal. Some populations travel
                thousands of kilometers between feeding and
                breeding grounds.

                During migration and breeding periods, they rely
                heavily on energy stored in their bodies from
                previous feeding seasons.
            `
        }
    ],

    khmerTitle: "យក្សដ៏អស្ចារ្យនៃមហាសមុទ្រ៖ ត្រីបាឡែន Humpback",

    khmerQuote: `
        ជាយក្សនៃមហាសមុទ្រដែលល្បីដោយសារសំឡេងចម្រៀងដ៏ស្មុគស្មាញ
        ការប្រមាញ់ជាក្រុមដោយប្រើពពុះ ការធ្វើដំណើរចម្ងាយឆ្ងាយ
        និងការលោតចេញពីទឹកដ៏អស្ចារ្យ។
    `,

    khmerDescription: `
        ត្រីបាឡែន Humpback គឺជាត្រីបាឡែនដែលមានទំហំធំ
        និងស្ថិតនៅក្នុងក្រុម baleen whales។ វាត្រូវបានស្គាល់
        ដោយសាររាងកាយពណ៌ងងឹត ក្បាលធំ និងព្រុយខាងមុខ
        ដែលមានប្រវែងវែងខ្លាំង។ ព្រុយរបស់វាអាចមានប្រវែង
        ប្រហែលមួយភាគបីនៃប្រវែងរាងកាយទាំងមូល។

        ក្បាល និងថ្គាមខាងក្រោមរបស់វាមានដុំតូចៗជាច្រើន
        ដែលហៅថា tubercles។ រចនាសម្ព័ន្ធទាំងនេះមានសរសៃ
        រោមដែលមានភាពរសើប និងជាផ្នែកមួយនៃប្រព័ន្ធអារម្មណ៍
        និងការស៊ីអាហាររបស់វា។

        ត្រីបាឡែន Humpback ល្បីដោយសារឥរិយាបថដ៏គួរឱ្យ
        ចាប់អារម្មណ៍។ វាអាចលោតចេញពីទឹកទាំងមូល វាយកន្ទុយ
        ទៅលើផ្ទៃទឹក និងវាយទឹកដោយព្រុយវែងៗរបស់វា។

        វាក៏ជាអ្នកប្រមាញ់ដែលមានបច្ចេកទេសខ្ពស់។ ប្រជាជន
        ត្រីបាឡែនមួយចំនួនប្រើវិធីប្រមាញ់ដែលហៅថា
        bubble-net feeding។ ពួកវាសហការគ្នាបង្កើតរង្វង់
        ឬខ្សែពពុះជុំវិញក្រុមត្រី ហើយបន្ទាប់មកហែលឡើង
        ពីក្រោមដោយបើកមាត់ ដើម្បីចាប់ត្រីក្នុងបរិមាណច្រើន។

        ត្រីបាឡែន Humpback ធ្វើដំណើរឆ្លងកាត់មហាសមុទ្រ
        តាមរដូវ។ ជាទូទៅ វាស៊ីអាហារនៅតំបន់ទឹកត្រជាក់
        ដែលមានអាហារច្រើន ហើយធ្វើដំណើរទៅតំបន់ទឹកក្តៅ
        ជាងសម្រាប់បន្តពូជ និងចិញ្ចឹមកូន។
    `,

    khmerFunFacts: [
        {
            title: "អ្នកចម្រៀងដ៏អស្ចារ្យនៃមហាសមុទ្រ",
            text: `
                ត្រីបាឡែន Humpback ឈ្មោលល្បីដោយសារចម្រៀង
                ដ៏ស្មុគស្មាញរបស់វា។ ចម្រៀងអាចមានលំដាប់សំឡេង
                ដែលរួមមានសំឡេងថ្ងូរ សំឡេងយំ និងសំឡេងផ្សេងៗ
                ហើយអាចបន្តរយៈពេលជាច្រើននាទី ឬសូម្បីតែច្រើនម៉ោង។

                ត្រីឈ្មោលនៅក្នុងតំបន់តែមួយជាញឹកញាប់មាន
                ចម្រៀងស្រដៀងគ្នា ហើយរចនាសម្ព័ន្ធចម្រៀងអាច
                ផ្លាស់ប្តូរតាមពេលវេលា។
            `
        },

        {
            title: "ការសហការប្រមាញ់ដោយពពុះ",
            text: `
                ត្រីបាឡែន Humpback មួយចំនួនសហការគ្នា
                ប្រមាញ់ត្រីដោយប្រើ bubble-net feeding។
                ត្រីបាឡែនមួយ ឬច្រើនបញ្ចេញពពុះ ខណៈពេល
                ហែលជុំវិញ ឬនៅក្រោមក្រុមត្រី។

                ពពុះអាចបង្កើតជារបាំងដែលធ្វើឱ្យត្រីប្រមូលផ្តុំគ្នា។
                បន្ទាប់មក ត្រីបាឡែនហែលឡើងតាមកណ្តាលដោយ
                បើកមាត់ ដើម្បីចាប់សត្វចំណីក្នុងបរិមាណច្រើន។
            `
        },

        {
            title: "កន្ទុយនីមួយៗមានលំនាំពិសេស",
            text: `
                ផ្នែកខាងក្រោមនៃកន្ទុយត្រីបាឡែន Humpback
                មានពណ៌ លំនាំ ស្នាមរបួស និងស្នាមផ្សេងៗ
                ដែលអាចខុសគ្នាពីត្រីមួយទៅត្រីមួយ។

                អ្នកស្រាវជ្រាវអាចថតរូបលំនាំទាំងនេះ ដើម្បី
                សម្គាល់ត្រីបាឡែននីមួយៗ និងតាមដានជីវិត
                និងការធ្វើដំណើររបស់វាអស់រយៈពេលជាច្រើនឆ្នាំ។
            `
        },

        {
            title: "ព្រុយដែលមានដុំតូចៗមានប្រយោជន៍",
            text: `
                ដុំតូចៗដែលស្ថិតនៅលើគែមខាងមុខនៃព្រុយ
                របស់ត្រីបាឡែន Humpback មានឥទ្ធិពលលើ
                លំហូរទឹកជុំវិញព្រុយ។ ការសិក្សាបង្ហាញថា
                tubercles ទាំងនេះអាចជួយបង្កើនសមត្ថភាព
                របស់ព្រុយក្នុងការបង្កើតកម្លាំងលើក និង
                រក្សាប្រសិទ្ធភាពនៅពេលបត់ទិសយ៉ាងខ្លាំង។

                នេះជួយពន្យល់ថា ហេតុអ្វីបានជាសត្វដែលមាន
                ទំហំធំសម្បើមនេះអាចបត់បែនបានយ៉ាងលឿន។
            `
        },

        {
            title: "អ្នកធ្វើដំណើរចម្ងាយឆ្ងាយ",
            text: `
                ត្រីបាឡែន Humpback ធ្វើដំណើរចម្ងាយឆ្ងាយ
                ក្នុងចំណោមសត្វថនិកសត្វជាច្រើន។ ប្រជាជន
                មួយចំនួនអាចធ្វើដំណើររាប់ពាន់គីឡូម៉ែត្រ
                រវាងតំបន់ស៊ីអាហារ និងតំបន់បន្តពូជ។

                ក្នុងអំឡុងពេលធ្វើដំណើរ និងបន្តពូជ វាពឹងផ្អែក
                យ៉ាងខ្លាំងលើថាមពលដែលបានរក្សាទុកក្នុងរាងកាយ
                ពីរដូវដែលវាស៊ីអាហារច្រើន។
            `
        }
    ]
},

{
    name: "Sperm Whale",
    title: "THE LEVIATHAN OF THE DEEP: THE SPERM WHALE",
    khmer: "ត្រីបាឡែន Sperm",
    category: "Aquatic",
    image: "images/sperm-whale.jpg",

    quote: `
        The world's largest toothed predator, built for extreme
        deep-sea diving, powerful echolocation, and hunting
        enormous prey in the darkness of the deep ocean.
    `,

    scientificName: `
        Physeter macrocephalus
    `,

    habitat: `
        Ice-free open oceans worldwide, especially deep waters
        near underwater trenches and continental slopes.
    `,

    status: `
        Vulnerable 🟠
    `,

    lifespan: `
        Around 60–70+ years in the wild.
    `,

    topSpeed: `
        Sperm whales are powerful swimmers but are primarily
        specialized for long-distance travel and deep diving
        rather than extreme surface speed.
    `,

    description: `
        Sperm whales are the largest toothed whales alive today
        and among the most impressive deep-diving mammals on Earth.

        Their most recognizable feature is their enormous,
        block-shaped head, which can make up a large portion of
        their total body length. Inside this massive head is a
        specialized structure called the spermaceti organ,
        which plays an important role in producing and focusing
        their powerful echolocation clicks.

        Sperm whales have relatively small lower jaws lined with
        large conical teeth. Their skin has a distinctive wrinkled
        appearance, giving them a texture that can resemble a
        dried prune.

        Unlike most whales, which have blowholes positioned near
        the center of the head, sperm whales have a single blowhole
        positioned toward the left side. This gives their blow a
        distinctive forward-angled appearance.

        Sperm whales spend much of their lives in deep ocean
        environments. They can descend thousands of meters below
        the surface to hunt squid and other deep-sea animals in
        almost complete darkness.

        Their combination of extreme diving ability, enormous
        size, and sophisticated echolocation makes them one of
        the ocean's most specialized predators.
    `,

    funFacts: [
        {
            title: "The Largest Brain in the Animal Kingdom",
            text: `
                Sperm whales have the largest brain of any living
                animal. Their brain can weigh around 7–8 kilograms,
                several times heavier than a human brain.

                A huge brain does not automatically mean an animal
                is "smarter," because brain size alone cannot tell
                us how intelligence works. However, sperm whales
                clearly possess complex social behavior and highly
                specialized sensory abilities.
            `
        },

        {
            title: "Champions of the Deep",
            text: `
                Sperm whales are among the deepest-diving mammals
                on Earth. They can descend to depths of more than
                2,000 meters and remain underwater for long periods
                while searching for prey.

                Their main deep-sea targets include squid, fish,
                and other animals living far below the sunlit
                surface waters.
            `
        },

        {
            title: "The Ocean's Sonic Radar",
            text: `
                Sperm whales produce powerful clicking sounds for
                echolocation. These clicks travel through the water,
                bounce off objects, and return to the whale.

                By analyzing the returning echoes, a sperm whale can
                determine information about the location and movement
                of objects and prey in the darkness.
            `
        },

        {
            title: "They Sleep Standing Up",
            text: `
                Sperm whales have an unusual sleeping behavior.
                They can gather together near the surface and rest
                in a vertical position, with their heads pointing
                toward the surface and their bodies extending
                downward.

                These resting periods are relatively short compared
                with the long sleep periods of many land mammals.
            `
        },

        {
            title: "The Mystery of Ambergris",
            text: `
                Sperm whales sometimes produce a waxy substance
                called ambergris. It is associated with the whale's
                digestive system and is thought to help surround
                irritating objects such as squid beaks.

                Over long periods, ambergris can float in the ocean
                and become weathered by sunlight and seawater.
                Historically, it became highly valued in the perfume
                industry because of its ability to help scents last
                longer.
            `
        }
    ],

    khmerTitle: "យក្សនៃជម្រៅសមុទ្រ៖ ត្រីបាឡែន Sperm",

    khmerQuote: `
        ជាអ្នកប្រមាញ់ដែលមានធ្មេញធំបំផុតក្នុងចំណោមត្រីបាឡែន
        ដែលមានជីវិតសព្វថ្ងៃ ដោយបានវិវត្តសម្រាប់ការមុជទឹកជ្រៅ
        ការប្រើសំឡេង echolocation ដ៏ខ្លាំង និងការប្រមាញ់សត្វ
        ធំៗនៅក្នុងភាពងងឹតនៃមហាសមុទ្រ។
    `,

    khmerDescription: `
        ត្រីបាឡែន Sperm គឺជាត្រីបាឡែនដែលមានធ្មេញធំបំផុត
        ក្នុងចំណោមត្រីបាឡែនដែលមានជីវិតសព្វថ្ងៃ ហើយក៏ជា
        ថនិកសត្វមួយក្នុងចំណោមសត្វដែលអាចមុជទឹកបានជ្រៅបំផុត
        នៅលើផែនដី។

        លក្ខណៈដែលងាយសម្គាល់បំផុតរបស់វាគឺក្បាលដ៏ធំ
        មានរាងដូចប្រអប់។ នៅខាងក្នុងក្បាលធំនេះមាន
        រចនាសម្ព័ន្ធពិសេសមួយដែលហៅថា spermaceti organ
        ដែលមានតួនាទីសំខាន់ក្នុងការបង្កើត និងផ្តោត
        សំឡេង echolocation របស់វា។

        ត្រីបាឡែន Sperm មានថ្គាមក្រោមតូចជាងក្បាល
        និងមានធ្មេញរាងសាជីធំៗ។ ស្បែករបស់វាមានស្នាមជ្រីវជ្រួញ
        ដែលអាចធ្វើឱ្យវាមើលទៅដូចផ្លែឈើដែលស្ងួត។

        មិនដូចត្រីបាឡែនភាគច្រើនដែលមានរន្ធដង្ហើមនៅជិត
        កណ្តាលក្បាលទេ ត្រីបាឡែន Sperm មានរន្ធដង្ហើមតែមួយ
        ដែលស្ថិតនៅខាងឆ្វេងនៃក្បាល។ ដូច្នេះពេលវាបញ្ចេញ
        ខ្យល់ចេញ វាបង្កើតជាខ្សែទឹកដែលបាញ់ទៅមុខ និងទៅខាងឆ្វេង។

        ត្រីបាឡែន Sperm ចំណាយពេលជាច្រើននៅក្នុងតំបន់
        សមុទ្រជ្រៅ។ វាអាចចុះទៅជម្រៅរាប់ពាន់ម៉ែត្រ ដើម្បី
        ប្រមាញ់មឹក និងសត្វសមុទ្រផ្សេងៗនៅក្នុងភាពងងឹត
        ស្ទើរតែទាំងស្រុង។

        សមត្ថភាពមុជទឹកជ្រៅ ទំហំដ៏ធំ និងប្រព័ន្ធ echolocation
        ដ៏មានប្រសិទ្ធភាព ធ្វើឱ្យវាក្លាយជាអ្នកប្រមាញ់ដែល
        មានជំនាញពិសេសបំផុតមួយនៅក្នុងមហាសមុទ្រ។
    `,

    khmerFunFacts: [
        {
            title: "ខួរក្បាលធំបំផុតក្នុងចំណោមសត្វ",
            text: `
                ត្រីបាឡែន Sperm មានខួរក្បាលធំបំផុតក្នុងចំណោម
                សត្វដែលមានជីវិត។ ខួរក្បាលរបស់វាអាចមានទម្ងន់
                ប្រហែល ៧–៨ គីឡូក្រាម ដែលធ្ងន់ជាងខួរក្បាល
                មនុស្សជាច្រើនដង។

                ប៉ុន្តែខួរក្បាលធំមិនមានន័យថាវាឆ្លាតជាងសត្វ
                ផ្សេងៗដោយស្វ័យប្រវត្តិទេ ព្រោះទំហំខួរក្បាល
                តែមួយមិនអាចប្រាប់ពីភាពវៃឆ្លាតទាំងមូលបានឡើយ។
            `
        },

        {
            title: "ជើងឯកនៃការមុជទឹកជ្រៅ",
            text: `
                ត្រីបាឡែន Sperm គឺជាថនិកសត្វមួយក្នុងចំណោម
                អ្នកមុជទឹកជ្រៅបំផុតនៅលើផែនដី។ វាអាចចុះទៅ
                ជម្រៅលើសពី ២,០០០ ម៉ែត្រ ហើយនៅក្រោមទឹកបាន
                រយៈពេលយូរ ដើម្បីស្វែងរកអាហារ។

                អាហារសំខាន់ៗរបស់វារួមមាន មឹក ត្រី និងសត្វ
                សមុទ្រផ្សេងៗដែលរស់នៅជ្រៅពីផ្ទៃទឹក។
            `
        },

        {
            title: "រ៉ាដាសំឡេងនៃមហាសមុទ្រ",
            text: `
                ត្រីបាឡែន Sperm បង្កើតសំឡេងចុចដ៏ខ្លាំង
                សម្រាប់ echolocation។ សំឡេងនេះធ្វើដំណើរ
                តាមទឹក ប៉ះនឹងវត្ថុ ហើយត្រឡប់មកវិញ។

                តាមរយៈការវិភាគសំឡេងដែលត្រឡប់មកវិញ
                វាអាចទទួលបានព័ត៌មានអំពីទីតាំង និងចលនា
                របស់វត្ថុ ឬសត្វចំណីនៅក្នុងភាពងងឹត។
            `
        },

        {
            title: "វាគេងក្នុងទីតាំងឈរ",
            text: `
                ត្រីបាឡែន Sperm មានវិធីសម្រាកដ៏ចម្លែកមួយ។
                វាអាចប្រមូលផ្តុំគ្នានៅជិតផ្ទៃទឹក ហើយសម្រាក
                ក្នុងទីតាំងបញ្ឈរ ដោយក្បាលបែរទៅរកផ្ទៃទឹក
                ខណៈរាងកាយបន្តចុះទៅក្រោម។

                រយៈពេលសម្រាករបស់វាជាទូទៅខ្លីជាងរយៈពេល
                គេងរបស់ថនិកសត្វលើគោកជាច្រើន។
            `
        },

        {
            title: "អាថ៌កំបាំងនៃ Ambergris",
            text: `
                ត្រីបាឡែន Sperm អាចបង្កើតសារធាតុរឹងដូចក្រមួន
                មួយដែលហៅថា ambergris។ វាពាក់ព័ន្ធនឹងប្រព័ន្ធ
                រំលាយអាហាររបស់វា ហើយគេជឿថាអាចជួយគ្របដណ្តប់
                វត្ថុដែលធ្វើឱ្យប្រព័ន្ធរំលាយអាហាររលាក ដូចជា
                ចំពុះមឹក។

                បន្ទាប់ពីអណ្តែតនៅក្នុងសមុទ្ររយៈពេលយូរ
                ambergris អាចត្រូវបានប៉ះពាល់ដោយពន្លឺថ្ងៃ
                និងទឹកសមុទ្រ។ កាលពីមុន វាត្រូវបានគេឱ្យតម្លៃ
                ខ្ពស់ក្នុងឧស្សាហកម្មទឹកអប់ ដោយសារវាអាចជួយ
                ឱ្យក្លិនក្រអូបជាប់បានយូរ។
            `
        }
    ]
},

{
    name: "Crab",
    title: "THE ARMORED COASTAL NAVIGATOR: THE CRAB",
    khmer: "ក្តាម",
    category: "Aquatic",
    image: "images/crab.jpg",

    quote: `
        A masterpiece of crustacean engineering, protected by
        hard armor and equipped with sideways movement,
        powerful claws, and remarkable survival adaptations.
    `,

    scientificName: `
        Brachyura
    `,

    habitat: `
        Oceans, coral reefs, sandy beaches, mangrove swamps,
        freshwater rivers, and terrestrial environments around
        the world.
    `,

    status: `
        Varies by species. Many common shore species are
        Least Concern 🟢, while some specialized island species
        face greater conservation threats.
    `,

    lifespan: `
        Around 3–30+ years depending on the species.
    `,

    topSpeed: `
        Varies greatly between species. Many crabs are capable
        of surprisingly fast sideways movement across beaches,
        rocks, and muddy shorelines.
    `,

    description: `
        Crabs are decapod crustaceans, meaning they belong to a
        group of animals with ten walking legs. They are easily
        recognized by their hard outer skeleton, flattened body,
        and front claws.

        Instead of having an internal skeleton like humans,
        crabs are protected by an exoskeleton made primarily
        from chitin. This hard outer armor provides protection
        from predators while also supporting the crab's body.

        Most crabs have two prominent front claws called
        chelipeds. These claws can be used for feeding,
        fighting, digging, defense, and communication.

        Their eyes are mounted on movable stalks, giving them
        a wide field of view. Their abdomen is much smaller
        than the main body and is tucked underneath the crab's
        carapace.

        Crabs live in an enormous variety of environments.
        Some spend nearly their entire lives underwater, while
        others have adapted to beaches, mangrove forests,
        freshwater habitats, and even land.

        They are important members of many ecosystems because
        they can act as scavengers, predators, herbivores, and
        prey for larger animals.
    `,

    funFacts: [
        {
            title: "Evolution Keeps Making Crabs",
            text: `
                Crab-like body shapes have evolved independently
                in several different groups of crustaceans.

                This repeated evolution toward a crab-like form
                is known as carcinization. It is one of the most
                famous examples of convergent evolution in biology.
            `
        },

        {
            title: "Why Do Crabs Walk Sideways?",
            text: `
                Most crabs move sideways because the structure
                and orientation of their legs makes this movement
                especially efficient.

                Their legs can push against the ground while
                moving their body sideways, allowing them to
                navigate beaches, rocks, mud, and narrow spaces
                quickly.
            `
        },

        {
            title: "Claws Can Grow Back",
            text: `
                Some crabs can lose a claw or leg and survive.
                Through a process called autotomy, a crab can
                deliberately detach an injured limb to escape
                a predator.

                A replacement limb can then begin developing
                during later molts. The new limb starts smaller
                and becomes larger through subsequent molts.
            `
        },

        {
            title: "The Coconut Crab Is a Giant",
            text: `
                The Coconut Crab is the largest land-dwelling
                arthropod and one of the most impressive
                terrestrial crustaceans.

                It can grow very large and has powerful claws
                capable of opening tough food, including coconuts.
                Despite being related to crabs, it spends its
                adult life primarily on land.
            `
        },

        {
            title: "Some Crabs Change Color",
            text: `
                Certain crabs can change the intensity of their
                body coloration in response to environmental
                conditions.

                Fiddler crabs and some other shore crabs can
                become darker or lighter during different parts
                of the day. Changes in hormones and light exposure
                can influence this coloration.
            `
        }
    ],

    khmerTitle: "អ្នកធ្វើដំណើរតាមឆ្នេរដែលមានសំបកការពារ៖ ក្តាម",

    khmerQuote: `
        ជាស្នាដៃដ៏អស្ចារ្យនៃការវិវត្តរបស់សត្វសំបក
        ដែលមានសំបករឹងសម្រាប់ការពារ ចលនាទៅចំហៀង
        ក្រញ៉ាំដ៏មានកម្លាំង និងសមត្ថភាពរស់រានមានជីវិត
        នៅក្នុងបរិស្ថានជាច្រើន។
    `,

    khmerDescription: `
        ក្តាមគឺជាសត្វ crustacean ដែលមានជើងដើរចំនួនដប់។
        វាងាយសម្គាល់ដោយសារសំបករឹងនៅខាងក្រៅ រាងកាយ
        រាបស្មើ និងក្រញ៉ាំនៅផ្នែកខាងមុខ។

        ជំនួសឱ្យមានគ្រោងឆ្អឹងនៅខាងក្នុងដូចមនុស្ស
        ក្តាមមានគ្រោងរឹងនៅខាងក្រៅដែលបង្កើតឡើងភាគច្រើន
        ពីសារធាតុ chitin។ សំបករឹងនេះជួយការពាររាងកាយ
        ពីសត្វប្រមាញ់ និងជួយទ្រទ្រង់រាងកាយរបស់វា។

        ក្តាមភាគច្រើនមានក្រញ៉ាំធំពីរនៅផ្នែកខាងមុខ
        ដែលហៅថា chelipeds។ ក្រញ៉ាំទាំងនេះអាចប្រើសម្រាប់
        ស៊ីអាហារ ប្រយុទ្ធ ជីកដី ការពារខ្លួន និងទំនាក់ទំនង។

        ភ្នែករបស់វាស្ថិតនៅលើដងភ្នែកដែលអាចផ្លាស់ទីបាន
        ដែលអនុញ្ញាតឱ្យវាមានទិដ្ឋភាពជុំវិញខ្លួនបានទូលំទូលាយ។
        ផ្នែកពោះរបស់វាតូចជាងផ្នែករាងកាយសំខាន់ ហើយត្រូវបាន
        បត់លាក់នៅក្រោមសំបក carapace។

        ក្តាមរស់នៅក្នុងបរិស្ថានជាច្រើនប្រភេទ។ ក្តាមខ្លះ
        រស់នៅក្នុងទឹកស្ទើរតែពេញមួយជីវិត ខណៈក្តាមផ្សេងទៀត
        បានសម្របខ្លួនទៅនឹងឆ្នេរខ្សាច់ ព្រៃកោងកាង ទឹកសាប
        និងសូម្បីតែការរស់នៅលើគោក។

        ក្តាមមានតួនាទីសំខាន់នៅក្នុងប្រព័ន្ធអេកូឡូស៊ីជាច្រើន
        ព្រោះវាអាចធ្វើជាសត្វស៊ីសាកសព សត្វប្រមាញ់ សត្វស៊ីរុក្ខជាតិ
        និងជាអាហាររបស់សត្វធំៗផ្សេងទៀត។
    `,

    khmerFunFacts: [
        {
            title: "ការវិវត្តចូលចិត្តបង្កើតរាងដូចក្តាម",
            text: `
                រាងកាយដែលមានលក្ខណៈដូចក្តាមបានវិវត្តដោយឡែក
                ពីគ្នាជាច្រើនដងនៅក្នុងក្រុម crustaceans ផ្សេងៗ។

                ការវិវត្តម្តងហើយម្តងទៀតទៅរករាងដូចក្តាមនេះ
                ត្រូវបានហៅថា carcinization។ វាគឺជាឧទាហរណ៍
                ដ៏ល្បីមួយនៃ convergent evolution ក្នុងជីវវិទ្យា។
            `
        },

        {
            title: "ហេតុអ្វីក្តាមដើរទៅចំហៀង?",
            text: `
                ក្តាមភាគច្រើនដើរទៅចំហៀង ព្រោះរចនាសម្ព័ន្ធ
                និងទិសដៅនៃជើងរបស់វាធ្វើឱ្យចលនាបែបនេះ
                មានប្រសិទ្ធភាពជាពិសេស។

                ជើងរបស់វាអាចរុញលើដី ខណៈពេលផ្លាស់ទី
                រាងកាយទៅចំហៀង ដែលអនុញ្ញាតឱ្យវាផ្លាស់ទី
                លើឆ្នេរ ថ្ម ភក់ និងតំបន់តូចចង្អៀតបានយ៉ាងលឿន។
            `
        },

        {
            title: "ក្រញ៉ាំអាចដុះឡើងវិញ",
            text: `
                ក្តាមខ្លះអាចបាត់បង់ក្រញ៉ាំ ឬជើងមួយ ហើយនៅរស់បាន។
                តាមរយៈដំណើរការដែលហៅថា autotomy ក្តាមអាច
                ផ្តាច់អវយវៈដែលរងរបួសដោយខ្លួនឯង ដើម្បីគេចពី
                សត្វប្រមាញ់។

                អវយវៈថ្មីអាចចាប់ផ្តើមលូតលាស់ក្នុងអំឡុងពេល
                ប្តូរសំបកនៅពេលក្រោយ។ អវយវៈថ្មីនឹងមានទំហំតូច
                ហើយធំឡើងតាមការប្តូរសំបកបន្តបន្ទាប់។
            `
        },

        {
            title: "Coconut Crab គឺជាក្តាមយក្ស",
            text: `
                Coconut Crab គឺជាសត្វ arthropod ដែលរស់នៅលើគោក
                និងមានទំហំធំបំផុតមួយក្នុងចំណោមសត្វសំបកលើគោក។

                វាអាចធំខ្លាំង និងមានក្រញ៉ាំដ៏មានកម្លាំង
                ដែលអាចបើកអាហារដែលមានសំបករឹង រួមទាំង
                ផ្លែដូងផងដែរ។ ទោះបីវាមានសាច់ញាតិជាមួយក្តាម
                ក៏ដោយ វារស់នៅលើគោកជាចម្បងនៅពេលពេញវ័យ។
            `
        },

        {
            title: "ក្តាមខ្លះអាចផ្លាស់ប្តូរពណ៌",
            text: `
                ក្តាមមួយចំនួនអាចផ្លាស់ប្តូរកម្រិតភាពងងឹត
                ឬភ្លឺនៃពណ៌រាងកាយរបស់វា ដោយឆ្លើយតបទៅនឹង
                បរិស្ថានជុំវិញ។

                Fiddler crabs និងក្តាមតាមឆ្នេរមួយចំនួន
                អាចមានពណ៌ងងឹត ឬស្រាលជាងមុនក្នុងពេលផ្សេងៗ
                នៃថ្ងៃ។ អរម៉ូន និងពន្លឺអាចមានឥទ្ធិពលលើ
                ការផ្លាស់ប្តូរពណ៌នេះ។
            `
        }
    ]
},


{
    name: "Ant",
    title: "THE ARCHITECT OF THE UNDERWORLD: THE ANT",
    khmer: "ស្រមោច",
    category: "Insects",
    image: "images/ant.jpg",

    quote: `
        Nature's ultimate super-organism, combining remarkable
        proportional strength, agricultural innovation, chemical
        communication, and an incredibly complex division of labor.
    `,

    scientificName: `
        Formicidae
    `,

    habitat: `
        Forests, deserts, grasslands, underground environments,
        and human structures on every continent except Antarctica.
    `,

    status: `
        Least Concern 🟢 overall, although individual ant species
        can face significant threats from habitat destruction.
    `,

    lifespan: `
        Workers: around 1–3 years.
        Queens: up to 30 years in some species.
    `,

    topSpeed: `
        Speed varies greatly between species and body size.
        Some ants are capable of moving surprisingly quickly
        relative to their tiny body size.
    `,

    description: `
        Ants are social insects belonging to the family Formicidae
        within the order Hymenoptera, making them close relatives
        of bees and wasps.

        They are easily recognized by their elbowed antennae,
        narrow waist-like body segments, and powerful mandibles.
        But what makes ants truly remarkable is not an individual
        ant. It is the colony.

        Ant colonies function almost like a single super-organism.
        Worker ants usually cannot reproduce, but they perform
        specialized jobs such as finding food, defending the nest,
        caring for young, and maintaining the colony.

        Queens are specialized reproductive females that produce
        eggs and help maintain the next generation of the colony.
        Depending on the species, a colony may contain a single
        queen or several queens.

        Ants communicate extensively using chemical signals.
        By leaving chemical trails called pheromone trails,
        workers can guide other members of the colony toward
        food sources, warn them about danger, and coordinate
        large-scale activities.

        Their incredible cooperation allows relatively tiny insects
        to construct enormous underground colonies, farm fungi,
        protect other insects, move objects many times heavier
        than themselves, and even survive catastrophic floods
        by forming living rafts.
    `,

    funFacts: [
        {
            title: "Superhuman Proportional Strength",
            text: `
                Ants can carry objects many times heavier than
                their own bodies. Depending on the species and
                the type of task, an ant may carry roughly
                10–50 times its own body weight.

                Their tiny bodies have an extremely high ratio
                of muscle mass to body volume, allowing them to
                perform feats of strength that would be impossible
                for a similarly sized human.
            `
        },

        {
            title: "Underground Farmers",
            text: `
                Leafcutter ants do not primarily eat the leaves
                they collect.

                Instead, they cut leaves into small pieces and
                transport them underground. The leaf material is
                used to grow specialized fungus gardens.

                The ants maintain these gardens by tending them,
                removing unwanted organisms, and providing fresh
                plant material. The fungus then becomes an
                important food source for the colony.
            `
        },

        {
            title: "The Trap-Jaw Launch",
            text: `
                Trap-jaw ants possess some of the fastest
                biological movements known in the animal kingdom.

                Their specialized mandibles can snap shut in
                fractions of a millisecond. Some species can
                also strike their jaws against the ground,
                using the resulting force to launch their own
                bodies backward and escape predators.
            `
        },

        {
            title: "Ants Farm Aphids",
            text: `
                Some ant species maintain relationships with
                aphids that resemble a form of livestock farming.

                Ants protect aphids from predators and may move
                them to plants with better food sources. In return,
                the ants collect a sugary liquid called honeydew
                produced by the aphids.

                The ants stimulate the aphids with their antennae
                to encourage them to release more honeydew.
            `
        },

        {
            title: "Living Rafts",
            text: `
                Fire ants can survive floods by linking their
                bodies and legs together to form a floating raft.

                The colony can create a living structure that
                keeps vulnerable individuals, including queens
                and larvae, toward the protected center.

                These living rafts can remain afloat for extended
                periods, allowing the colony to survive until
                floodwaters disappear and dry ground becomes
                available again.
            `
        }
    ],

    khmerTitle: "ស្ថាបត្យករនៃពិភពក្រោមដី៖ ស្រមោច",

    khmerQuote: `
        ជាសត្វល្អិតដែលមានការរៀបចំជាសង្គមដ៏អស្ចារ្យ
        ដោយរួមបញ្ចូលកម្លាំងដ៏គួរឱ្យភ្ញាក់ផ្អើល ការដាំដុះអាហារ
        ការទំនាក់ទំនងតាមសារធាតុគីមី និងការបែងចែកការងារ
        យ៉ាងស្មុគស្មាញ។
    `,

    khmerDescription: `
        ស្រមោចគឺជាសត្វល្អិតដែលស្ថិតក្នុងគ្រួសារ Formicidae
        នៃលំដាប់ Hymenoptera ដែលមានសាច់ញាតិជិតស្និទ្ធ
        ជាមួយឃ្មុំ និងស្វា។

        ស្រមោចអាចសម្គាល់បានតាមរយៈអង់តែនដែលបត់ជង្គង់
        រាងកាយដែលមានផ្នែកកណ្តាលតូច និងថ្គាមដ៏រឹងមាំ។
        ប៉ុន្តែអ្វីដែលធ្វើឱ្យស្រមោចគួរឱ្យចាប់អារម្មណ៍បំផុត
        មិនមែនជាស្រមោចមួយក្បាលទេ ប៉ុន្តែគឺជាអាណានិគមទាំងមូល។

        អាណានិគមស្រមោចអាចដំណើរការដូចជាសារពាង្គកាយធំមួយ។
        ស្រមោចកម្មករភាគច្រើនមិនអាចបន្តពូជបានទេ ប៉ុន្តែវា
        មានការងារជាច្រើនដូចជា ស្វែងរកអាហារ ការពារសំបុក
        ថែទាំកូន និងថែរក្សាអាណានិគម។

        ស្រមោចមហាក្សត្រីគឺជាស្រមោចញីដែលមានតួនាទីសំខាន់
        ក្នុងការបន្តពូជ និងការផលិតពងសម្រាប់ជំនាន់បន្ទាប់។
        អាស្រ័យលើប្រភេទ អាណានិគមអាចមានមហាក្សត្រីមួយ
        ឬច្រើន។

        ស្រមោចប្រើសារធាតុគីមីយ៉ាងសកម្មសម្រាប់ទំនាក់ទំនង។
        វាអាចបន្សល់ទុកផ្លូវសារធាតុគីមីដែលហៅថា pheromone
        ដើម្បីណែនាំស្រមោចផ្សេងទៀតទៅកាន់ប្រភពអាហារ
        ព្រមានអំពីគ្រោះថ្នាក់ និងសម្របសម្រួលការងាររបស់ក្រុម។

        ការសហការដ៏អស្ចារ្យនេះអនុញ្ញាតឱ្យស្រមោចតូចៗ
        សាងសង់សំបុកក្រោមដីដ៏ធំ ដាំផ្សិត ធ្វើការជាមួយសត្វល្អិត
        ផ្សេងទៀត លើកវត្ថុដែលធ្ងន់ជាងខ្លួន និងសូម្បីតែបង្កើត
        ជាក្បូនរស់នៅពេលមានទឹកជំនន់។
    `,

    khmerFunFacts: [
        {
            title: "កម្លាំងដ៏អស្ចារ្យបើប្រៀបធៀបនឹងទំហំ",
            text: `
                ស្រមោចអាចលើកវត្ថុដែលមានទម្ងន់ធ្ងន់ជាងខ្លួន
                ជាច្រើនដង។ អាស្រ័យលើប្រភេទ ស្រមោចខ្លះអាច
                លើកវត្ថុដែលមានទម្ងន់ប្រហែល ១០–៥០ ដងនៃ
                ទម្ងន់ខ្លួនរបស់វា។

                រាងកាយតូចរបស់វាមានសមាមាត្រសាច់ដុំខ្ពស់
                បើប្រៀបធៀបនឹងទំហំរាងកាយ ដែលអនុញ្ញាតឱ្យវា
                ធ្វើសកម្មភាពដែលគួរឱ្យភ្ញាក់ផ្អើល។
            `
        },

        {
            title: "កសិករនៅក្រោមដី",
            text: `
                ស្រមោចកាត់ស្លឹកមិនស៊ីស្លឹកដែលវាប្រមូល
                ដោយផ្ទាល់ជាចម្បងទេ។

                វាកាត់ស្លឹកជាបំណែកតូចៗ ហើយដឹកចូលទៅ
                ក្នុងសំបុកក្រោមដី ដើម្បីប្រើសម្រាប់ដាំផ្សិត។

                ស្រមោចថែរក្សាសួនផ្សិត ដោយយកចិត្តទុកដាក់
                លើការលូតលាស់ និងយកសារពាង្គកាយដែលមិនចង់បាន
                ចេញ។ ផ្សិតនេះក្លាយជាប្រភពអាហារសំខាន់សម្រាប់
                អាណានិគម។
            `
        },

        {
            title: "ការបាញ់ខ្លួនរបស់ស្រមោច Trap-Jaw",
            text: `
                ស្រមោច Trap-Jaw មានចលនាមួយក្នុងចំណោម
                ចលនាជីវសាស្ត្រដែលលឿនបំផុតនៅក្នុងនគរសត្វ។

                ថ្គាមពិសេសរបស់វាអាចបិទក្នុងរយៈពេលខ្លីបំផុត
                ហើយប្រភេទខ្លះអាចវាយថ្គាមទៅលើដី ដើម្បីប្រើ
                កម្លាំងនោះបាញ់ខ្លួនទៅក្រោយ និងគេចពីសត្វប្រមាញ់។
            `
        },

        {
            title: "ស្រមោចចិញ្ចឹម Aphids",
            text: `
                ស្រមោចមួយចំនួនមានទំនាក់ទំនងជាមួយ Aphids
                ដែលមានលក្ខណៈស្រដៀងនឹងការចិញ្ចឹមសត្វ។

                ស្រមោចការពារ Aphids ពីសត្វប្រមាញ់ ហើយអាច
                ផ្លាស់ទីពួកវាទៅកាន់រុក្ខជាតិដែលមានអាហារល្អជាងមុន។
                ជាការឆ្លើយតប ស្រមោចទទួលបានសារធាតុរាវផ្អែម
                ដែលហៅថា honeydew ពី Aphids។

                ស្រមោចអាចប្រើអង់តែនប៉ះ Aphids ដើម្បីជំរុញ
                ឱ្យវាបញ្ចេញ honeydew កាន់តែច្រើន។
            `
        },

        {
            title: "ក្បូនរស់នៅពេលទឹកជំនន់",
            text: `
                ស្រមោចភ្លើងអាចរស់រានមានជីវិតក្នុងពេលទឹកជំនន់
                ដោយភ្ជាប់រាងកាយ និងជើងរបស់វាជាមួយគ្នា
                ដើម្បីបង្កើតជាក្បូនអណ្តែតលើទឹក។

                អាណានិគមអាចបង្កើតរចនាសម្ព័ន្ធរស់មួយ
                ដែលការពារស្រមោចដែលងាយរងគ្រោះ រួមទាំង
                មហាក្សត្រី និងដង្កូវ ឱ្យស្ថិតនៅតំបន់កណ្តាល។

                ក្បូនរស់នេះអាចអណ្តែតបានរយៈពេលយូរ
                រហូតដល់ទឹកជំនន់ស្រក និងមានដីស្ងួតសម្រាប់
                អាណានិគមត្រឡប់ទៅវិញ។
            `
        }
    ]
},

{
    name: "Honey Bee",
    title: "THE PLANET'S MASTER POLLINATOR: THE HONEY BEE",
    khmer: "ឃ្មុំទឹកឃ្មុំ",
    category: "Insects",
    image: "images/honey-bee.jpg",

    quote: `
        A tiny ecological powerhouse combining symbolic dance
        communication, remarkable wax architecture, pollen
        collection, and extraordinary food preservation.
    `,

    scientificName: `
        Apis
    `,

    habitat: `
        Meadows, forests, agricultural fields, orchards,
        gardens, and other flowering environments around
        the world.
    `,

    status: `
        Domestically thriving 🟢, while wild populations face
        pressure from habitat loss, pesticides, parasites,
        disease, and other environmental stresses.
    `,

    lifespan: `
        Workers: around 6 weeks during summer and up to
        several months during winter.
        Queens: around 2–5 years.
    `,

    topSpeed: `
        Up to around 24 km/h (15 mph).
    `,

    description: `
        Honey bees are social flying insects famous for their
        extraordinary importance to pollination and their ability
        to produce and store honey.

        Their bodies are covered with fine hairs that help collect
        pollen from flowers. They also possess compound eyes,
        antennae packed with sensory receptors, and specialized
        pollen baskets called corbiculae on their hind legs.

        A honey bee colony operates as a highly organized social
        community. A typical colony contains a queen, many female
        worker bees, and male drones. Each group has different
        roles that help keep the colony alive.

        Worker bees perform many different jobs throughout their
        lives. Younger workers usually care for developing larvae
        and maintain the hive, while older workers often leave
        the hive to collect nectar, pollen, water, and other
        resources.

        The queen's main role is reproduction. She can lay a huge
        number of eggs during periods of peak colony activity,
        while workers feed and care for the developing young.

        Honey bees are also extremely important pollinators.
        When bees visit flowers to collect nectar and pollen,
        pollen grains stick to their bodies and are transferred
        between flowers. This helps many flowering plants
        reproduce and supports agricultural ecosystems.
    `,

    funFacts: [
        {
            title: "The Waggle Dance GPS",
            text: `
                Honey bees have an extraordinary way of telling
                other workers where food can be found.

                A returning scout performs a figure-eight movement
                known as the waggle dance. The direction and
                duration of the dance provide information about
                the direction and approximate distance of a food
                source.

                The sun acts as an important reference point,
                allowing bees to communicate surprisingly precise
                information without using maps or spoken language.
            `
        },

        {
            title: "Honey Can Last for Thousands of Years",
            text: `
                Properly stored pure honey can remain edible for
                extremely long periods.

                Honey has very little available water and is
                naturally acidic. Bees also add substances that
                help prevent many microorganisms from growing.

                Archaeologists have even found ancient honey that
                remained preserved for remarkably long periods.
                Basically, bees accidentally invented a food
                storage system humans still haven't managed to
                improve upon.
            `
        },

        {
            title: "Electrostatic Pollen Collection",
            text: `
                Bees can develop an electrical charge while flying.

                When a bee approaches a flower, the electrical
                difference between the bee and the flower can help
                attract pollen grains toward the bee's body.

                The bee's fuzzy body hairs then trap the pollen,
                which the bee can groom and pack into specialized
                pollen baskets on its hind legs.
            `
        },

        {
            title: "Millions of Flower Visits",
            text: `
                Producing honey requires an enormous amount of
                work from an entire colony.

                Worker bees must visit huge numbers of flowers
                to collect nectar. They repeatedly travel between
                the hive and flowering plants, carrying tiny
                amounts of nectar during each trip.

                When thousands of workers perform these trips
                together, the colony can gradually build up
                substantial stores of honey.
            `
        },

        {
            title: "The Hexagon Architects",
            text: `
                Honey bees construct their famous honeycombs
                from wax produced by their own bodies.

                The cells are arranged in a highly efficient
                hexagonal pattern. Hexagons allow the bees to
                create a large amount of storage space while
                using relatively little building material.

                The result is one of nature's most recognizable
                examples of efficient biological architecture.
            `
        }
    ],

    khmerTitle: "អ្នកបំពុលផ្កាដ៏សំខាន់របស់ភពផែនដី៖ ឃ្មុំទឹកឃ្មុំ",

    khmerQuote: `
        ជាសត្វល្អិតតូចមួយដែលមានសារៈសំខាន់យ៉ាងខ្លាំង
        ចំពោះប្រព័ន្ធអេកូឡូស៊ី ដោយមានសមត្ថភាពទំនាក់ទំនង
        តាមរយៈការរាំ សាងសង់សំបុកដោយក្រមួន ប្រមូលលម្អងផ្កា
        និងរក្សាទុកអាហារបានយ៉ាងអស្ចារ្យ។
    `,

    khmerDescription: `
        ឃ្មុំទឹកឃ្មុំគឺជាសត្វល្អិតហោះដែលរស់នៅជាសង្គម
        និងមានភាពល្បីល្បាញដោយសារតួនាទីសំខាន់របស់វា
        ក្នុងការបំពុលផ្កា និងសមត្ថភាពផលិត និងរក្សាទុក
        ទឹកឃ្មុំ។

        រាងកាយរបស់វាមានរោមតូចៗជាច្រើនដែលជួយប្រមូល
        លម្អងផ្កា។ វាក៏មានភ្នែកផ្សំ អង់តែនដែលមានឧបករណ៍
        ទទួលអារម្មណ៍ជាច្រើន និងកន្ត្រកប្រមូលលម្អងផ្កា
        ដែលហៅថា corbiculae នៅលើជើងខាងក្រោយ។

        អាណានិគមឃ្មុំដំណើរការដូចជាសហគមន៍ដែលមាន
        ការរៀបចំយ៉ាងល្អ។ ជាទូទៅ វាមានមហាក្សត្រី
        ឃ្មុំកម្មករញីជាច្រើន និងឃ្មុំឈ្មោលដែលមានតួនាទី
        ខុសៗគ្នា។

        ឃ្មុំកម្មករធ្វើការងារជាច្រើនប្រភេទក្នុងជីវិតរបស់វា។
        ឃ្មុំវ័យក្មេងជាធម្មតាថែទាំដង្កូវ និងថែរក្សាសំបុក
        ខណៈឃ្មុំដែលមានវ័យច្រើនជាងអាចចេញក្រៅសំបុក
        ដើម្បីប្រមូលទឹកដមផ្កា លម្អងផ្កា ទឹក និងធនធានផ្សេងៗ។

        មហាក្សត្រីមានតួនាទីសំខាន់ក្នុងការបន្តពូជ។
        វាអាចដាក់ពងបានច្រើនក្នុងអំឡុងពេលដែលអាណានិគម
        មានសកម្មភាពខ្លាំង ខណៈឃ្មុំកម្មករជួយចិញ្ចឹម
        និងថែទាំកូនឃ្មុំ។

        ឃ្មុំទឹកឃ្មុំក៏មានសារៈសំខាន់យ៉ាងខ្លាំងក្នុងការ
        បំពុលផ្កា។ នៅពេលឃ្មុំទៅលើផ្កាដើម្បីប្រមូលទឹកដម
        និងលម្អងផ្កា លម្អងផ្កាអាចជាប់នឹងរាងកាយរបស់វា
        ហើយត្រូវបានផ្ទេរទៅផ្កាផ្សេងទៀត។ ដំណើរការនេះ
        ជួយឱ្យរុក្ខជាតិផ្កាជាច្រើនអាចបន្តពូជបាន។
    `,

    khmerFunFacts: [
        {
            title: "ការរាំ Waggle ដូចជា GPS",
            text: `
                ឃ្មុំទឹកឃ្មុំមានវិធីដ៏អស្ចារ្យមួយក្នុងការប្រាប់
                ឃ្មុំផ្សេងទៀតថា អាហារស្ថិតនៅទីណា។

                ឃ្មុំដែលត្រឡប់មកពីស្វែងរកអាហារអាចធ្វើចលនា
                រាងដូចលេខប្រាំបី ដែលហៅថា waggle dance។
                ទិសដៅ និងរយៈពេលនៃការរាំផ្តល់ព័ត៌មានអំពី
                ទិសដៅ និងចម្ងាយប្រហាក់ប្រហែលទៅកាន់ប្រភពអាហារ។

                ព្រះអាទិត្យក៏ជាចំណុចយោងសំខាន់មួយសម្រាប់
                ការទំនាក់ទំនងរបស់ឃ្មុំផងដែរ។
            `
        },

        {
            title: "ទឹកឃ្មុំអាចរក្សាទុកបានយូរខ្លាំង",
            text: `
                ទឹកឃ្មុំសុទ្ធដែលរក្សាទុកបានត្រឹមត្រូវ
                អាចនៅល្អសម្រាប់រយៈពេលយូរខ្លាំង។

                ទឹកឃ្មុំមានទឹកដែលអាចប្រើប្រាស់បានតិច
                និងមានជាតិអាស៊ីតតាមធម្មជាតិ។ ឃ្មុំក៏បន្ថែម
                សារធាតុមួយចំនួនដែលជួយរារាំងការលូតលាស់
                របស់មេរោគជាច្រើន។

                អ្នកបុរាណវិទូបានរកឃើញទឹកឃ្មុំបុរាណដែល
                ត្រូវបានរក្សាទុកបានយូរគួរឱ្យភ្ញាក់ផ្អើល។
            `
        },

        {
            title: "ការប្រមូលលម្អងផ្កាដោយអគ្គិសនី",
            text: `
                ឃ្មុំអាចបង្កើតបន្ទុកអគ្គិសនីនៅពេលវាហោះ។

                នៅពេលឃ្មុំខិតទៅជិតផ្កា ភាពខុសគ្នានៃបន្ទុក
                អគ្គិសនីរវាងឃ្មុំ និងផ្កាអាចជួយទាក់ទាញ
                គ្រាប់លម្អងផ្កាមកកាន់រាងកាយរបស់វា។

                រោមតូចៗនៅលើរាងកាយរបស់ឃ្មុំអាចចាប់
                លម្អងផ្កាទាំងនេះ ហើយឃ្មុំអាចរៀបចំវាទុក
                ក្នុងកន្ត្រកប្រមូលលម្អងនៅជើងខាងក្រោយ។
            `
        },

        {
            title: "ការទៅលើផ្ការាប់លានដង",
            text: `
                ការផលិតទឹកឃ្មុំត្រូវការការងារយ៉ាងច្រើន
                ពីឃ្មុំទាំងមូលក្នុងអាណានិគម។

                ឃ្មុំកម្មករត្រូវទៅលើផ្កាជាច្រើនយ៉ាងខ្លាំង
                ដើម្បីប្រមូលទឹកដមផ្កា។ វាធ្វើដំណើរទៅមក
                រវាងសំបុក និងផ្កាជាច្រើនដង ដោយក្នុងមួយដង
                វាអាចដឹកទឹកដមបានត្រឹមតែបរិមាណតិចប៉ុណ្ណោះ។

                នៅពេលឃ្មុំរាប់ពាន់ធ្វើការរួមគ្នា វាអាច
                បង្កើតស្តុកទឹកឃ្មុំដ៏ច្រើនសម្រាប់អាណានិគម។
            `
        },

        {
            title: "ស្ថាបត្យកររូបរាងប្រាំមួយជ្រុង",
            text: `
                ឃ្មុំទឹកឃ្មុំសាងសង់សំបុកដ៏ល្បីរបស់វា
                ដោយប្រើក្រមួនដែលផលិតចេញពីរាងកាយរបស់វា។

                កោសិកានីមួយៗត្រូវបានរៀបចំជារូបរាងប្រាំមួយជ្រុង
                ដែលមានប្រសិទ្ធភាពខ្ពស់។ រូបរាងនេះអនុញ្ញាតឱ្យ
                ឃ្មុំបង្កើតកន្លែងផ្ទុកអាហារបានច្រើន ខណៈប្រើ
                សម្ភារៈសាងសង់តិចជាង។

                លទ្ធផលគឺជាឧទាហរណ៍ដ៏ល្បីមួយនៃស្ថាបត្យកម្ម
                ជីវសាស្ត្រដែលមានប្រសិទ្ធភាពខ្ពស់ក្នុងធម្មជាតិ។
            `
        }
    ]
},

{
    name: "Butterfly",
    title: "THE SCALED WINGED TRANSFORMER: THE BUTTERFLY",
    khmer: "មេអំបៅ",
    category: "Insects",
    image: "images/butterfly.jpg",

    quote: `
        A marvel of complete metamorphosis, combining microscopic
        light-refracting scales, foot-based taste receptors,
        and remarkable long-distance navigation.
    `,

    scientificName: `
        Lepidoptera
    `,

    habitat: `
        Rainforests, meadows, gardens, mountains, and deserts
        across the world except Antarctica.
    `,

    status: `
        Varies by species. Many common species are Least Concern 🟢,
        while some specialized species face serious threats.
    `,

    lifespan: `
        Most adult butterflies live around 2–4 weeks,
        although some species and overwintering generations
        can survive for several months.
    `,

    topSpeed: `
        Typically around 8–20 km/h (5–12 mph).
        Some fast-flying butterflies can reach much higher speeds.
    `,

    description: `
        Butterflies are day-flying insects famous for their
        colorful patterns, slender bodies, and large wings
        covered with microscopic scales.

        They belong to the order Lepidoptera and undergo one
        of nature's most dramatic transformations through a
        process called complete metamorphosis.

        Their life cycle has four major stages: egg, caterpillar,
        chrysalis, and adult butterfly. Each stage looks almost
        completely different from the one before it.

        Caterpillars are primarily focused on eating and growing.
        When they reach the pupal stage, their bodies undergo
        an extraordinary transformation before emerging as
        winged adults.

        Adult butterflies primarily feed on liquids such as
        flower nectar. They use a long, flexible feeding tube
        called a proboscis, which works somewhat like a straw.

        Butterflies also play an important ecological role.
        While collecting nectar, they can transfer pollen between
        flowers and therefore contribute to plant reproduction.
        Their sensitivity to environmental changes also makes
        many butterfly species useful indicators of ecosystem
        health.
    `,

    funFacts: [
        {
            title: "They Taste with Their Feet",
            text: `
                Butterflies have chemical sensors called
                chemoreceptors on their feet.

                When a butterfly lands on a plant, these sensors
                can detect chemical compounds on the plant's surface.
                This helps the butterfly determine whether the plant
                is suitable for feeding or laying eggs.

                In other words, butterflies don't need to bite
                the plant to find out whether it's a good restaurant.
                Their feet do the inspection first.
            `
        },

        {
            title: "Microscopic Prism Scales",
            text: `
                Some of the brilliant blue and green colors seen
                on butterfly wings are not produced primarily by
                pigments.

                Instead, microscopic structures within their wing
                scales interact with light and reflect particular
                wavelengths.

                This phenomenon is known as structural coloration
                and is responsible for the spectacular shimmering
                appearance of butterflies such as the Morpho.
            `
        },

        {
            title: "The Caterpillar Transformation",
            text: `
                A caterpillar doesn't simply grow wings while
                sitting inside a chrysalis.

                During metamorphosis, much of the larval body is
                broken down and reorganized. Specialized groups
                of cells then contribute to building the structures
                of the adult butterfly.

                The result is one of nature's most dramatic examples
                of biological transformation.
            `
        },

        {
            title: "The Glasswing's Invisible Wings",
            text: `
                Glasswing butterflies, including Greta oto,
                have wings that are remarkably transparent.

                Their wings contain very few of the light-scattering
                scales normally responsible for butterfly wing
                coloration. Their specialized microscopic structures
                help reduce reflections.

                This transparency can make the butterfly much harder
                for predators to detect.
            `
        },

        {
            title: "Monarchs Cross Thousands of Kilometers",
            text: `
                Monarch butterflies are famous for their enormous
                seasonal migrations.

                Some populations travel thousands of kilometers
                between North America and overwintering areas in
                central Mexico.

                Their navigation involves several systems, including
                the position of the sun and internal biological
                clocks. Some research also shows that monarchs can
                use Earth's magnetic field as an additional
                navigational cue.
            `
        }
    ],

    khmerTitle: "មេអំបៅដែលមានស្លាបគ្របដោយជញ្ជីង៖ មេអំបៅ",

    khmerQuote: `
        ជាអច្ឆរិយៈនៃការប្រែប្រួលរូបរាងពេញលេញ
        ដែលរួមបញ្ចូលជញ្ជីងមីក្រូសម្រាប់ឆ្លុះពន្លឺ
        ឧបករណ៍ទទួលរសជាតិនៅលើជើង និងសមត្ថភាព
        ធ្វើដំណើរឆ្ងាយដ៏គួរឱ្យចាប់អារម្មណ៍។
    `,

    khmerDescription: `
        មេអំបៅគឺជាសត្វល្អិតដែលហោះនៅពេលថ្ងៃ
        និងល្បីដោយសារលំនាំពណ៌ដ៏ស្រស់ស្អាត រាងកាយស្តើង
        និងស្លាបធំៗដែលគ្របដណ្តប់ដោយជញ្ជីងតូចៗ
        ដែលមើលមិនឃើញដោយភ្នែកទទេ។

        វាស្ថិតក្នុងលំដាប់ Lepidoptera ហើយឆ្លងកាត់
        ការផ្លាស់ប្តូររូបរាងដ៏អស្ចារ្យមួយដែលហៅថា
        complete metamorphosis។

        វដ្តជីវិតរបស់វាមានដំណាក់កាលសំខាន់ចំនួនបួន៖
        ពង ដង្កូវ មេអំបៅក្នុងសំបុក chrysalis និងមេអំបៅពេញវ័យ។
        ដំណាក់កាលនីមួយៗអាចមានរូបរាងខុសគ្នាយ៉ាងខ្លាំង។

        ដង្កូវផ្តោតជាចម្បងលើការស៊ីអាហារ និងការលូតលាស់។
        នៅពេលវាចូលដល់ដំណាក់កាល chrysalis រាងកាយរបស់វា
        ឆ្លងកាត់ការរៀបចំឡើងវិញដ៏អស្ចារ្យ មុនពេលចេញមក
        ជាមេអំបៅដែលមានស្លាប។

        មេអំបៅពេញវ័យភាគច្រើនស៊ីអាហារដែលមានសភាពរាវ
        ដូចជាទឹកដមផ្កា។ វាប្រើបំពង់វែងដែលអាចបត់បាន
        ហៅថា proboscis ដែលដំណើរការស្រដៀងនឹងចំបើង។

        មេអំបៅក៏មានតួនាទីសំខាន់ក្នុងប្រព័ន្ធអេកូឡូស៊ី។
        នៅពេលវាទៅប្រមូលទឹកដមផ្កា វាអាចផ្ទេរលម្អងផ្កា
        រវាងផ្កាផ្សេងៗ ហើយជួយដល់ការបន្តពូជរបស់រុក្ខជាតិ។
    `,

    khmerFunFacts: [
        {
            title: "វាមានឧបករណ៍ទទួលរសជាតិនៅលើជើង",
            text: `
                មេអំបៅមានឧបករណ៍ទទួលសារធាតុគីមី
                ដែលហៅថា chemoreceptors នៅលើជើងរបស់វា។

                នៅពេលមេអំបៅចុះលើរុក្ខជាតិ ឧបករណ៍ទាំងនេះ
                អាចរកឃើញសារធាតុគីមីនៅលើផ្ទៃរុក្ខជាតិ។
                វាជួយឱ្យមេអំបៅដឹងថារុក្ខជាតិនោះសមស្រប
                សម្រាប់ស៊ី ឬដាក់ពងឬអត់។

                និយាយឱ្យសាមញ្ញ មេអំបៅប្រើជើងរបស់វា
                ដើម្បី "សាករសជាតិ" មុនពេលសម្រេចចិត្ត។
            `
        },

        {
            title: "ជញ្ជីងដែលដំណើរការដូចព្រីស",
            text: `
                ពណ៌ខៀវ និងបៃតងដ៏ភ្លឺចែងចាំងរបស់មេអំបៅខ្លះ
                មិនមែនកើតឡើងពីសារធាតុពណ៌តែប៉ុណ្ណោះទេ។

                រចនាសម្ព័ន្ធតូចៗនៅក្នុងជញ្ជីងស្លាប
                អាចធ្វើអន្តរកម្មជាមួយពន្លឺ និងឆ្លុះ
                រលកពន្លឺជាក់លាក់។

                បាតុភូតនេះហៅថា structural coloration
                ហើយវាជាមូលហេតុមួយដែលធ្វើឱ្យមេអំបៅ
                ដូចជា Morpho មានពណ៌ភ្លឺចែងចាំង។
            `
        },

        {
            title: "ការផ្លាស់ប្តូររូបរាងរបស់ដង្កូវ",
            text: `
                ដង្កូវមិនមែនគ្រាន់តែអង្គុយក្នុង chrysalis
                ហើយរង់ចាំឱ្យស្លាបដុះឡើងនោះទេ។

                ក្នុងអំឡុងពេល metamorphosis ផ្នែកជាច្រើន
                នៃរាងកាយដង្កូវត្រូវបានបំបែក និងរៀបចំឡើងវិញ។
                ក្រុមកោសិកាពិសេសជួយបង្កើតផ្នែកផ្សេងៗ
                របស់មេអំបៅពេញវ័យ។

                លទ្ធផលគឺជាឧទាហរណ៍ដ៏អស្ចារ្យមួយនៃការប្រែប្រួល
                ជីវសាស្ត្រនៅក្នុងធម្មជាតិ។
            `
        },

        {
            title: "ស្លាបដែលស្ទើរតែមើលមិនឃើញ",
            text: `
                មេអំបៅ Glasswing ដូចជា Greta oto
                មានស្លាបដែលថ្លាគួរឱ្យភ្ញាក់ផ្អើល។

                ស្លាបរបស់វាមានជញ្ជីងដែលបំបែកពន្លឺតិចជាង
                មេអំបៅភាគច្រើន ហើយរចនាសម្ព័ន្ធមីក្រូ
                ពិសេសរបស់វាជួយកាត់បន្ថយការឆ្លុះពន្លឺ។

                ភាពថ្លានេះអាចធ្វើឱ្យមេអំបៅពិបាកឱ្យ
                សត្វប្រមាញ់សម្គាល់។
            `
        },

        {
            title: "Monarch ធ្វើដំណើររាប់ពាន់គីឡូម៉ែត្រ",
            text: `
                មេអំបៅ Monarch មានភាពល្បីល្បាញដោយសារ
                ការធ្វើចំណាកស្រុកតាមរដូវដ៏ឆ្ងាយ។

                ប្រជាជនមួយចំនួនអាចធ្វើដំណើររាប់ពាន់គីឡូម៉ែត្រ
                រវាងអាមេរិកខាងជើង និងតំបន់ដែលវាស្នាក់នៅ
                ក្នុងរដូវរងារនៅម៉ិកស៊ិកកណ្តាល។

                ការរុករករបស់វាពាក់ព័ន្ធនឹងប្រព័ន្ធជាច្រើន
                រួមទាំងទីតាំងព្រះអាទិត្យ និងនាឡិកាជីវសាស្ត្រ
                នៅក្នុងរាងកាយ។ ការស្រាវជ្រាវមួយចំនួនក៏បង្ហាញថា
                វាអាចប្រើដែនម៉ាញេទិចរបស់ផែនដីជាជំនួយក្នុង
                ការរុករកផ្លូវផងដែរ។
            `
        }
    ]
},

{
    name: "Beetle",
    title: "THE ARMORED TITAN OF THE INSECT WORLD: THE BEETLE",
    khmer: "សត្វកណ្ដៀរ",
    category: "Insects",
    image: "images/beetle.jpg",

    quote: `
        Evolution's most diverse creation, combining protective
        wing armor, powerful defenses, extraordinary strength,
        and adaptations for almost every environment on Earth.
    `,

    scientificName: `
        Coleoptera
    `,

    habitat: `
        Deserts, tropical rainforests, freshwater habitats,
        mountains, underground environments, and many other
        ecosystems across the world except Antarctica.
    `,

    status: `
        Varies by species. Many beetle species are widespread,
        while some specialized and habitat-restricted species
        face serious conservation threats.
    `,

    lifespan: `
        Varies enormously. Some species live only weeks as
        adults, while others spend several years developing
        as larvae before becoming adults.
    `,

    topSpeed: `
        Varies greatly between species. Some beetles are slow
        crawlers, while others can run surprisingly quickly
        for their size.
    `,

    description: `
        Beetles are one of the most diverse groups of animals
        on Earth. They belong to the order Coleoptera, a name
        that refers to their distinctive hardened forewings.

        These protective forewings are called elytra. Instead
        of being used primarily for flight, the elytra act like
        armor, protecting the delicate flying wings and much of
        the beetle's body underneath.

        When a beetle takes flight, it opens its elytra and
        unfolds the thin hind wings hidden underneath. After
        landing, those wings fold back into a compact package
        beneath the protective shell.

        Beetles have chewing mouthparts, compound eyes,
        antennae, and a hard external skeleton made largely
        from chitin. Different species have evolved enormous
        differences in body shape, color, size, behavior, and
        diet.

        They can be found in deserts, forests, rivers,
        underground environments, mountains, and even highly
        specialized habitats where few other insects can survive.

        Some beetles are predators, some eat plants, some feed
        on fungi, and others recycle dead plants and animals.
        Because of this incredible variety, beetles play
        countless different roles in ecosystems around the world.
    `,

    funFacts: [
        {
            title: "Beetles Are Everywhere",
            text: `
                Beetles are one of the most species-rich groups
                of animals on Earth, with hundreds of thousands
                of described species.

                They occupy an extraordinary range of ecological
                niches, from tiny beetles living in leaf litter
                to enormous species living in tropical forests.

                Their incredible diversity is one reason beetles
                have become such an important example of evolutionary
                success.
            `
        },

        {
            title: "Ridiculous Strength for Their Size",
            text: `
                Some rhinoceros beetles are capable of moving
                objects many times heavier than their own bodies.

                Their powerful muscles, compact body design, and
                specialized horns allow them to push, lift, and
                wrestle with rivals.

                Relative to their size, their strength is
                astonishing. A human with comparable proportional
                strength would be capable of moving objects weighing
                many tons.
            `
        },

        {
            title: "Dung Beetles Use the Stars",
            text: `
                Some dung beetles navigate using the night sky.

                After finding a piece of dung, a beetle may roll
                a ball away from competitors. Rather than wandering
                around in circles, it can use celestial light
                patterns to maintain a relatively straight path.

                Research has shown that certain dung beetles can
                use the Milky Way as a visual compass when the
                night sky is dark enough.
            `
        },

        {
            title: "The Bombardier Beetle's Chemical Cannon",
            text: `
                Bombardier beetles have one of the strangest
                defensive systems in the insect world.

                When threatened, they mix reactive chemicals
                inside specialized abdominal chambers. The
                resulting reaction produces a hot, irritating
                spray that can be directed toward an attacker.

                The beetle can release repeated bursts, giving
                it a surprisingly effective chemical defense
                against predators.
            `
        },

        {
            title: "The Desert Beetle Collects Fog",
            text: `
                Some beetles living in extremely dry deserts
                have developed clever ways to obtain water.

                The Namib Desert Beetle can collect tiny droplets
                from fog that forms in the early morning.

                Special surface structures on its back help water
                droplets gather and move across the body, allowing
                the beetle to obtain moisture even when rainfall
                is extremely rare.
            `
        }
    ],

    khmerTitle: "យក្សមានសំបកការពារនៃពិភពសត្វល្អិត៖ សត្វកណ្ដៀរ",

    khmerQuote: `
        ជាសត្វល្អិតដែលមានភាពចម្រុះយ៉ាងខ្លាំងក្នុងការវិវត្ត
        ដោយរួមបញ្ចូលសំបកការពារស្លាប ប្រព័ន្ធការពារដ៏មានប្រសិទ្ធភាព
        កម្លាំងដ៏អស្ចារ្យ និងសមត្ថភាពរស់នៅក្នុងបរិស្ថានជាច្រើន
        នៅលើផែនដី។
    `,

    khmerDescription: `
        សត្វកណ្ដៀរគឺជាក្រុមសត្វដែលមានប្រភេទច្រើនបំផុត
        មួយនៅលើផែនដី។ វាស្ថិតក្នុងលំដាប់ Coleoptera
        ដែលមានលក្ខណៈពិសេសគឺស្លាបខាងមុខរឹងរបស់វា។

        ស្លាបខាងមុខដែលរឹងនេះហៅថា elytra។ ជំនួសឱ្យ
        ប្រើសម្រាប់ហោះហើរជាចម្បង elytra មានតួនាទីដូចជា
        សំបកការពារ ដើម្បីការពារស្លាបហោះដែលស្តើង និង
        ផ្នែកសំខាន់ៗនៃរាងកាយនៅខាងក្រោម។

        នៅពេលសត្វកណ្ដៀរហោះ វាបើក elytra ហើយលាតស្លាប
        ខាងក្រោយដែលត្រូវបានបត់ទុកនៅខាងក្រោម។ បន្ទាប់ពី
        ចុះចត វាអាចបត់ស្លាបទាំងនោះចូលវិញបានយ៉ាងស្អាត។

        សត្វកណ្ដៀរមានមាត់សម្រាប់ខាំ ភ្នែកផ្សំ អង់តែន
        និងគ្រោងរឹងនៅខាងក្រៅដែលបង្កើតឡើងភាគច្រើនពី chitin។
        ប្រភេទផ្សេងៗបានវិវត្តឱ្យមានរាង ពណ៌ ទំហំ អាកប្បកិរិយា
        និងរបបអាហារខុសៗគ្នាយ៉ាងខ្លាំង។

        វាអាចរស់នៅក្នុងវាលខ្សាច់ ព្រៃឈើ ទន្លេ តំបន់ក្រោមដី
        តំបន់ភ្នំ និងបរិស្ថានពិសេសជាច្រើនដែលសត្វល្អិតផ្សេងទៀត
        ពិបាករស់នៅ។

        សត្វកណ្ដៀរខ្លះជាសត្វប្រមាញ់ ខ្លះស៊ីរុក្ខជាតិ
        ខ្លះស៊ីផ្សិត ហើយខ្លះទៀតជួយកែច្នៃរុក្ខជាតិ និងសត្វដែលងាប់។
        ដោយសារភាពចម្រុះនេះ វាមានតួនាទីជាច្រើននៅក្នុង
        ប្រព័ន្ធអេកូឡូស៊ីជុំវិញពិភពលោក។
    `,

    khmerFunFacts: [
        {
            title: "សត្វកណ្ដៀរមាននៅស្ទើរគ្រប់ទីកន្លែង",
            text: `
                សត្វកណ្ដៀរគឺជាក្រុមសត្វមួយក្នុងចំណោមក្រុមដែល
                មានប្រភេទច្រើនបំផុតនៅលើផែនដី។

                វាអាចរស់នៅក្នុងបរិស្ថានជាច្រើនប្រភេទ
                ចាប់ពីសត្វកណ្ដៀរតូចៗនៅក្នុងស្លឹកស្ងួត
                រហូតដល់ប្រភេទធំៗនៅក្នុងព្រៃត្រូពិច។

                ភាពចម្រុះដ៏អស្ចារ្យនេះគឺជាមូលហេតុមួយដែលធ្វើឱ្យ
                សត្វកណ្ដៀរក្លាយជាឧទាហរណ៍ដ៏ល្អនៃភាពជោគជ័យ
                ក្នុងការវិវត្ត។
            `
        },

        {
            title: "កម្លាំងខ្លាំងមិនគួរឱ្យជឿសម្រាប់ទំហំខ្លួន",
            text: `
                សត្វកណ្ដៀររមាសមួយចំនួនអាចផ្លាស់ទីវត្ថុ
                ដែលមានទម្ងន់ធ្ងន់ជាងខ្លួនជាច្រើនដង។

                សាច់ដុំដ៏មានកម្លាំង រាងកាយតូចរឹងមាំ
                និងស្នែងពិសេសរបស់វាជួយឱ្យវារុញ លើក
                និងប្រយុទ្ធជាមួយគូប្រជែង។

                បើប្រៀបធៀបនឹងទំហំខ្លួន កម្លាំងរបស់វា
                គួរឱ្យភ្ញាក់ផ្អើលយ៉ាងខ្លាំង។
            `
        },

        {
            title: "សត្វកណ្ដៀរស៊ីលាមកប្រើផ្កាយសម្រាប់រកផ្លូវ",
            text: `
                សត្វកណ្ដៀរស៊ីលាមកមួយចំនួនអាចប្រើមេឃ
                ពេលយប់សម្រាប់រកទិសដៅ។

                បន្ទាប់ពីរកឃើញលាមក វាអាចបង្កើតជាគ្រាប់
                ហើយរមៀលវាចេញពីតំបន់ដែលមានគូប្រជែង។

                នៅពេលមេឃងងឹត វាអាចប្រើលំនាំពន្លឺនៅលើមេឃ
                រួមទាំង Milky Way ដើម្បីជួយរក្សាទិសដៅ
                ឱ្យបានត្រង់។
            `
        },

        {
            title: "កាំភ្លើងគីមីរបស់ Bombardier Beetle",
            text: `
                Bombardier Beetle មានប្រព័ន្ធការពារដ៏ចម្លែក
                មួយក្នុងចំណោមប្រព័ន្ធការពារដែលគួរឱ្យចាប់អារម្មណ៍
                បំផុតនៅក្នុងពិភពសត្វល្អិត។

                នៅពេលមានគ្រោះថ្នាក់ វាលាយសារធាតុគីមី
                ដែលមានប្រតិកម្មជាមួយគ្នានៅក្នុងផ្នែកពោះពិសេស។
                ប្រតិកម្មនេះបង្កើតជាថ្នាំបាញ់ក្តៅ និងរំខាន
                ដែលអាចបាញ់ទៅរកសត្រូវបាន។

                វាអាចបញ្ចេញការបាញ់ជាបន្តបន្ទាប់
                ដែលជួយការពារវាពីសត្វប្រមាញ់។
            `
        },

        {
            title: "សត្វកណ្ដៀរវាលខ្សាច់ប្រមូលទឹកពីអ័ព្ទ",
            text: `
                សត្វកណ្ដៀរមួយចំនួនដែលរស់នៅក្នុងវាលខ្សាច់
                ស្ងួតខ្លាំងបានវិវត្តវិធីពិសេសដើម្បីទទួលបានទឹក។

                Namib Desert Beetle អាចប្រមូលដំណក់ទឹកតូចៗ
                ពីអ័ព្ទដែលកើតឡើងនៅពេលព្រឹក។

                រចនាសម្ព័ន្ធពិសេសនៅលើខ្នងរបស់វាជួយឱ្យ
                ដំណក់ទឹកប្រមូលផ្តុំ និងផ្លាស់ទីតាមរាងកាយ
                ដើម្បីឱ្យវាអាចទទួលបានសំណើម ទោះបីភ្លៀង
                កម្រខ្លាំងក៏ដោយ។
            `
        }
    ]
},

{
    name: "Grasshopper",
    title: "THE HIGH-JUMPING ACOUSTIC ATHLETE: THE GRASSHOPPER",
    khmer: "កណ្ដូប",
    category: "Insects",
    image: "images/grasshopper.jpg",

    quote: `
        Master of kinetic leaps and mechanical music,
        combining catapult-like legs, abdominal hearing,
        and remarkable swarm transformations.
    `,

    scientificName: `
        Caelifera
    `,

    habitat: `
        Grasslands, meadows, tropical rainforests,
        and agricultural areas around the world
        except Antarctica.
    `,

    status: `
        Least Concern 🟢 for many common species,
        although some grasshopper populations can become
        serious agricultural pests.
    `,

    lifespan: `
        Around 9–12 months, with many species spending
        the winter as eggs in soil.
    `,

    topSpeed: `
        Grasshoppers are better known for their powerful
        jumping ability than their running speed. They can
        jump roughly 20 times their body length.
    `,

    description: `
        Grasshoppers are plant-eating insects famous for their
        powerful hind legs and extraordinary jumping ability.

        They belong to the suborder Caelifera within the order
        Orthoptera. Unlike crickets and katydids, grasshoppers
        generally have shorter and thicker antennae.

        Their bodies contain two pairs of wings, large compound
        eyes, chewing mouthparts, and extremely powerful
        hind legs specialized for jumping.

        Grasshoppers are important herbivores in many ecosystems.
        They consume vegetation and, at the same time, provide
        an important food source for birds, reptiles, mammals,
        spiders, and other predators.

        Some grasshopper species can undergo dramatic behavioral
        and physical changes when environmental conditions cause
        their populations to become extremely crowded.

        Under these conditions, certain species can transform
        into locusts, forming enormous moving swarms capable
        of consuming huge quantities of vegetation.
    `,

    funFacts: [
        {
            title: "Biological Catapult Legs",
            text: `
                A grasshopper's incredible jump is not simply
                produced by extremely fast muscles.

                Its hind legs contain elastic structures that
                allow the insect to store energy before jumping.
                When that stored energy is suddenly released,
                the legs act like biological catapults.

                This mechanism allows a grasshopper to launch
                itself many times its own body length into the air
                in a fraction of a second.
            `
        },

        {
            title: "Ears on the Abdomen",
            text: `
                Grasshoppers have a very unusual hearing system.

                Their main auditory organs, called tympanal organs,
                are located on the sides of the first abdominal
                segment rather than on the head.

                This allows them to detect sounds such as mating
                calls and warning signals despite having no
                conventional ears like mammals.
            `
        },

        {
            title: "Making Music with Their Legs",
            text: `
                Many male grasshoppers produce sounds by rubbing
                specialized structures on their hind legs against
                ridges on their wings.

                This behavior is called stridulation.

                The resulting vibrations create the familiar
                chirping and buzzing sounds associated with
                grass-filled fields during warm weather.
            `
        },

        {
            title: "Locusts Are Crowded Grasshoppers",
            text: `
                A locust is not simply a completely different
                kind of insect.

                Certain grasshopper species can enter a different
                behavioral and physical state when population
                density becomes extremely high and resources
                become limited.

                Under the right conditions, normally solitary
                insects can become highly social, mobile, and
                swarm-forming locusts.

                These swarms can travel long distances and
                consume enormous quantities of vegetation.
            `
        },

        {
            title: "The Strange Defense Juice",
            text: `
                When attacked or captured by a predator,
                some grasshoppers can regurgitate a dark,
                unpleasant-tasting fluid from their digestive
                system.

                This defensive substance can smell and taste
                unpleasant to predators, potentially causing
                them to release the grasshopper.

                The unusual defense is sometimes informally
                called "tobacco juice."
            `
        }
    ],

    khmerTitle: "អត្តពលិកលោតខ្ពស់ និងអ្នកបង្កើតសំឡេង៖ កណ្ដូប",

    khmerQuote: `
        ជាអ្នកជំនាញខាងការលោតដោយប្រើថាមពលយ៉ាងមានប្រសិទ្ធភាព
        និងការបង្កើតសំឡេង ដោយមានជើងដ៏មានកម្លាំង
        ប្រព័ន្ធស្តាប់នៅលើពោះ និងសមត្ថភាពផ្លាស់ប្តូរ
        ទៅជាសត្វកណ្ដូបហ្វូងនៅក្រោមលក្ខខណ្ឌជាក់លាក់។
    `,

    khmerDescription: `
        កណ្ដូបគឺជាសត្វល្អិតស៊ីរុក្ខជាតិដែលល្បីដោយសារ
        ជើងខាងក្រោយដ៏មានកម្លាំង និងសមត្ថភាពលោតបានឆ្ងាយ
        បើប្រៀបធៀបនឹងទំហំរាងកាយរបស់វា។

        វាស្ថិតក្នុងក្រុម Caelifera នៃលំដាប់ Orthoptera។
        វាមានអង់តែនខ្លី និងក្រាស់ជាងកណ្ដូបចង្រិត
        និង katydid ជាច្រើនប្រភេទ។

        រាងកាយរបស់វាមានស្លាបពីរគូ ភ្នែកផ្សំធំៗ
        មាត់សម្រាប់ខាំ និងជើងខាងក្រោយដ៏មានកម្លាំង
        ដែលត្រូវបានសម្របខ្លួនសម្រាប់ការលោត។

        កណ្ដូបមានតួនាទីសំខាន់ក្នុងប្រព័ន្ធអេកូឡូស៊ី
        ជាច្រើន ដោយវាស៊ីរុក្ខជាតិ និងក្លាយជាអាហារ
        សម្រាប់សត្វស្លាប សត្វល្មូន ថនិកសត្វ ពីងពាង
        និងសត្វប្រមាញ់ផ្សេងៗ។

        កណ្ដូបមួយចំនួនអាចផ្លាស់ប្តូរអាកប្បកិរិយា
        និងលក្ខណៈរាងកាយយ៉ាងខ្លាំង នៅពេលចំនួនរបស់វា
        កើនឡើងយ៉ាងច្រើន និងមានការកកកុញខ្លាំង។

        នៅក្រោមលក្ខខណ្ឌបែបនេះ កណ្ដូបប្រភេទខ្លះអាច
        ផ្លាស់ប្តូរទៅជាសត្វកណ្ដូបហ្វូង ដែលអាចបង្កើតជា
        ហ្វូងដ៏ធំ និងស៊ីរុក្ខជាតិយ៉ាងច្រើន។
    `,

    khmerFunFacts: [
        {
            title: "ជើងដូចជាម៉ាស៊ីនបាញ់",
            text: `
                ការលោតដ៏អស្ចារ្យរបស់កណ្ដូបមិនមែនកើតឡើង
                ពីសាច់ដុំដែលមានល្បឿនលឿនតែប៉ុណ្ណោះទេ។

                ជើងខាងក្រោយរបស់វាមានរចនាសម្ព័ន្ធយឺត
                ដែលអាចរក្សាទុកថាមពលមុនពេលលោត។

                នៅពេលថាមពលត្រូវបានបញ្ចេញយ៉ាងរហ័ស
                ជើងរបស់វាដំណើរការដូចជាម៉ាស៊ីនបាញ់តូចមួយ
                ដែលបញ្ជូនកណ្ដូបឡើងទៅក្នុងអាកាស។
            `
        },

        {
            title: "ត្រចៀកនៅលើពោះ",
            text: `
                កណ្ដូបមានប្រព័ន្ធស្តាប់ដ៏ចម្លែកមួយ។

                ឧបករណ៍ស្តាប់សំខាន់របស់វា ដែលហៅថា
                tympanal organs ស្ថិតនៅសងខាងនៃផ្នែកពោះ
                ដំបូង ជំនួសឱ្យស្ថិតនៅលើក្បាល។

                វាជួយឱ្យកណ្ដូបអាចទទួលសំឡេងដូចជា
                សំឡេងសម្រាប់រកគូ និងសញ្ញាព្រមាន។
            `
        },

        {
            title: "បង្កើតតន្ត្រីដោយប្រើជើង",
            text: `
                កណ្ដូបឈ្មោលជាច្រើនប្រភេទអាចបង្កើតសំឡេង
                ដោយកកិតផ្នែកពិសេសនៅលើជើងខាងក្រោយ
                ទៅនឹងជ្រុងរឹងនៅលើស្លាប។

                អាកប្បកិរិយានេះហៅថា stridulation។

                រំញ័រដែលកើតឡើងបង្កើតជាសំឡេងច្រៀង
                ឬសំឡេងហ៊ឺៗដែលយើងជាញឹកញាប់ឮនៅតាម
                វាលស្មៅក្នុងអាកាសធាតុក្តៅ។
            `
        },

        {
            title: "Locust គឺជាកណ្ដូបដែលកកកុញ",
            text: `
                Locust មិនមែនជាសត្វល្អិតដែលខុសពីកណ្ដូប
                ទាំងស្រុងនោះទេ។

                កណ្ដូបប្រភេទខ្លះអាចផ្លាស់ប្តូរទៅជាស្ថានភាព
                ផ្សេង នៅពេលចំនួនរបស់វាកើនឡើងខ្លាំង
                និងធនធានអាហារមានកំណត់។

                ក្នុងលក្ខខណ្ឌសមស្រប សត្វដែលធ្លាប់រស់នៅ
                ដោយឡែកពីគ្នាអាចក្លាយជាសត្វដែលរស់នៅជាក្រុម
                ធ្វើដំណើរច្រើន និងបង្កើតជាហ្វូងធំៗ។

                ហ្វូងទាំងនេះអាចធ្វើដំណើរបានឆ្ងាយ
                និងស៊ីរុក្ខជាតិបានក្នុងបរិមាណយ៉ាងច្រើន។
            `
        },

        {
            title: "ទឹកការពារដ៏ចម្លែក",
            text: `
                នៅពេលត្រូវបានវាយប្រហារ ឬចាប់ដោយសត្វប្រមាញ់
                កណ្ដូបមួយចំនួនអាចបញ្ចេញសារធាតុរាវ
                ដែលមានរសជាតិមិនល្អចេញពីប្រព័ន្ធរំលាយអាហារ។

                សារធាតុនេះអាចមានក្លិន និងរសជាតិមិនល្អ
                សម្រាប់សត្វប្រមាញ់ ហើយអាចធ្វើឱ្យវាបោះបង់
                និងដោះលែងកណ្ដូប។

                វាត្រូវបានគេហៅក្រៅផ្លូវការថា "tobacco juice"។
            `
        }
    ]
},

{
    name: "Spider",
    title: "THE SILK-SPINNING ARCHITECT: THE SPIDER",
    khmer: "សត្វពីងពាង",
    category: "Arachnids",
    image: "images/spider.jpg",

    quote: `
        Master of hydraulic motion and silk engineering,
        combining high-tensile silk traps, venomous predation,
        and sophisticated sensory tracking.
    `,

    scientificName: `
        Araneae
    `,

    habitat: `
        Forests, deserts, caves, homes, grasslands,
        and freshwater margins around the world.
    `,

    status: `
        Varies by species. Many spider species are widespread,
        while some specialized island and cave species face
        serious conservation threats.
    `,

    lifespan: `
        Around 1–3 years for many web-building spiders,
        while some large tarantula females can live for
        more than 20 years.
    `,

    topSpeed: `
        Varies greatly by species. Many spiders rely more on
        sudden lightning-fast strikes and pounces than
        sustained running speed.
    `,

    description: `
        Spiders are air-breathing arthropods belonging to the
        class Arachnida. Unlike insects, they have eight legs,
        two main body sections, and no antennae or wings.

        Their front mouthparts include specialized structures
        called chelicerae, which contain fangs used to inject
        venom into prey.

        Nearly all spiders produce silk using specialized glands
        associated with spinnerets near the end of the abdomen.
        Depending on the species, silk can be used to construct
        webs, wrap prey, protect eggs, create shelters, or even
        help spiders travel through the air.

        Spiders are important predators in ecosystems because
        they consume enormous numbers of insects and other
        small animals.

        Although many people associate spiders with webs,
        not every spider builds a traditional web. Some species
        actively hunt their prey, while others ambush prey
        or use specialized silk traps.
    `,

    funFacts: [
        {
            title: "Hydraulic Leg Power",
            text: `
                Spiders have a strange way of extending their legs.

                Their leg extension relies heavily on hydraulic
                pressure created by hemolymph, the fluid circulating
                through their bodies.

                When a spider dies, this internal pressure disappears,
                which is why its legs often curl inward.
            `
        },

        {
            title: "Spider Silk is Incredibly Strong",
            text: `
                Spider silk combines high tensile strength with
                remarkable elasticity.

                This combination allows certain types of silk
                to absorb the energy of struggling or fast-moving
                prey without immediately snapping.

                Different spiders produce different kinds of silk
                for different jobs, including structural support,
                prey capture, egg protection, and transportation.
            `
        },

        {
            title: "Net-Casting Spiders Hunt with Nets",
            text: `
                Ogre-faced spiders use an unusual hunting strategy.

                Instead of waiting in a large web, they construct
                a small rectangular silk net and hold it open
                between their legs.

                When prey passes underneath, the spider rapidly
                lunges downward and throws the silk net over it.
            `
        },

        {
            title: "Jumping Spiders Can Sense Vibrations",
            text: `
                Jumping spiders are famous for their excellent
                vision, but they also detect vibrations through
                sensory structures in their legs.

                Male jumping spiders perform elaborate courtship
                displays involving body movements, leg movements,
                and vibrations.

                These signals help males communicate with females
                during courtship.
            `
        },

        {
            title: "The Vegetarian Spider",
            text: `
                Almost all spiders are predators, but there is
                a remarkable exception.

                The Central American jumping spider
                Bagheera kiplingi obtains much of its nutrition
                from Beltian bodies produced by acacia plants.

                This makes it one of the most unusual examples
                of plant-feeding behavior among spiders.
            `
        }
    ],

    khmerTitle: "ស្ថាបត្យករដែលបង្កើតសូត្រ៖ សត្វពីងពាង",

    khmerQuote: `
        ជាអ្នកជំនាញខាងចលនាដោយសម្ពាធរាវ និងការផលិតសូត្រ
        ដែលមានសមត្ថភាពបង្កើតអន្ទាក់សូត្រ ប្រមាញ់ដោយពិស
        និងប្រើប្រព័ន្ធអារម្មណ៍ដ៏អស្ចារ្យ។
    `,

    khmerDescription: `
        សត្វពីងពាងគឺជាសត្វអារទ្រូផូដដែលដកដង្ហើមតាមខ្យល់
        និងស្ថិតក្នុងថ្នាក់ Arachnida។ មិនដូចសត្វល្អិតទេ
        វាមានជើងប្រាំបី រាងកាយមានផ្នែកសំខាន់ពីរ
        និងគ្មានអង់តែន ឬស្លាប។

        ផ្នែកមាត់ខាងមុខរបស់វាមាន chelicerae ដែលមាន
        ចង្កូមសម្រាប់ចាក់ពិសចូលទៅក្នុងសត្វដែលវាប្រមាញ់។

        សត្វពីងពាងស្ទើរតែគ្រប់ប្រភេទអាចផលិតសូត្រ
        តាមរយៈក្រពេញពិសេស និង spinnerets នៅផ្នែកខាងក្រោយ
        នៃពោះ។

        សូត្រអាចត្រូវបានប្រើសម្រាប់សាងសង់បណ្តាញ
        រុំចំណី ការពារពង សាងសង់ទីជម្រក និងជួយឱ្យ
        សត្វពីងពាងមួយចំនួនធ្វើដំណើរតាមខ្យល់។

        សត្វពីងពាងមានតួនាទីសំខាន់ក្នុងប្រព័ន្ធអេកូឡូស៊ី
        ព្រោះវាជាសត្វប្រមាញ់ដែលស៊ីសត្វល្អិត និងសត្វតូចៗ
        ជាច្រើន។

        ទោះបីមនុស្សជាច្រើនភ្ជាប់សត្វពីងពាងជាមួយបណ្តាញ
        ក៏ដោយ ក៏មិនមែនសត្វពីងពាងគ្រប់ប្រភេទសាងសង់
        បណ្តាញសម្រាប់ចាប់ចំណីនោះទេ។ ប្រភេទខ្លះ
        ប្រមាញ់ដោយផ្ទាល់ ខ្លះប្រើការស្ទាក់ចាប់ និងខ្លះ
        ប្រើអន្ទាក់សូត្រពិសេស។
    `,

    khmerFunFacts: [
        {
            title: "កម្លាំងជើងដោយសម្ពាធរាវ",
            text: `
                សត្វពីងពាងមានវិធីចម្លែកមួយក្នុងការលាតជើង។

                ការលាតជើងរបស់វាពឹងផ្អែកយ៉ាងខ្លាំងលើសម្ពាធ
                របស់សារធាតុរាវដែលហៅថា hemolymph
                ដែលហូរនៅក្នុងរាងកាយ។

                នៅពេលសត្វពីងពាងស្លាប់ សម្ពាធខាងក្នុងនេះ
                បាត់បង់ ហើយជើងរបស់វាជាញឹកញាប់នឹងកោងចូល។
            `
        },

        {
            title: "សូត្ររបស់ពីងពាងមានភាពរឹងមាំខ្លាំង",
            text: `
                សូត្ររបស់សត្វពីងពាងមួយចំនួនមានទាំង
                ភាពរឹងមាំ និងភាពយឺតខ្លាំង។

                ការរួមបញ្ចូលគ្នានេះអាចឱ្យសូត្រទទួល
                ថាមពលពីសត្វដែលកំពុងតស៊ូ ឬហោះបុក
                ដោយមិនងាយដាច់ភ្លាមៗ។

                ពីងពាងប្រភេទផ្សេងៗផលិតសូត្រប្រភេទផ្សេងៗ
                សម្រាប់ការងារខុសៗគ្នា។
            `
        },

        {
            title: "ពីងពាងចាប់ចំណីដោយបោះសំណាញ់",
            text: `
                Ogre-faced spider មានវិធីប្រមាញ់ដ៏ចម្លែក។

                វាមិនរង់ចាំនៅក្នុងបណ្តាញធំទេ។
                វាបង្កើតសំណាញ់សូត្រតូចមួយ ហើយកាន់វា
                ដោយជើងរបស់វា។

                នៅពេលសត្វចំណីឆ្លងកាត់ខាងក្រោម
                ពីងពាងអាចលោតចុះយ៉ាងលឿន ហើយបោះ
                សំណាញ់ទៅលើចំណី។
            `
        },

        {
            title: "ពីងពាងលោតអាចដឹងពីរំញ័រ",
            text: `
                Jumping spiders មានភ្នែកដែលមានសមត្ថភាពល្អ
                ប៉ុន្តែវាក៏អាចទទួលរំញ័រតាមរយៈឧបករណ៍
                ទទួលអារម្មណ៍នៅលើជើងផងដែរ។

                ពីងពាងឈ្មោលអាចធ្វើចលនាសម្រាប់ការរកគូ
                ដែលរួមមានចលនារាងកាយ ចលនាជើង
                និងការបង្កើតរំញ័រ។
            `
        },

        {
            title: "ពីងពាងដែលស៊ីរុក្ខជាតិ",
            text: `
                ពីងពាងស្ទើរតែទាំងអស់ជាសត្វប្រមាញ់
                ប៉ុន្តែមានករណីពិសេសមួយ។

                Bagheera kiplingi ដែលជាប្រភេទ jumping spider
                នៅអាមេរិកកណ្តាល ទទួលបានអាហារភាគច្រើន
                ពី Beltian bodies ដែលបង្កើតដោយដើមអាកាស្យា។

                វាគឺជាឧទាហរណ៍ដ៏កម្រមួយនៃការស៊ីរុក្ខជាតិ
                ក្នុងចំណោមសត្វពីងពាង។
            `
        }
    ]
},

{
    name: "Mosquito",
    title: "THE BLOOD-SENSING PREDATOR: THE MOSQUITO",
    khmer: "មូស",
    category: "Insects",
    image: "images/mosquito.jpg",

    quote: `
        Nature's most efficient stealth tracker, combining
        chemical sensing, heat detection, and highly specialized
        feeding mouthparts.
    `,

    scientificName: `
        Culicidae
    `,

    habitat: `
        Standing water, wetlands, tropical forests, tundra,
        and urban environments across the world except Antarctica.
    `,

    status: `
        Least Concern 🟢 for many widespread species,
        although individual mosquito species vary greatly
        in distribution and importance.
    `,

    lifespan: `
        Males usually live around 1–2 weeks.
        Females commonly live around 2–6 weeks,
        although some can survive considerably longer
        under favorable conditions.
    `,

    topSpeed: `
        Around 1.5–2.5 km/h (1–1.5 mph).
    `,

    description: `
        Mosquitoes are small flying insects belonging to the
        order Diptera. They have slender bodies, long legs,
        one pair of wings, and highly specialized mouthparts
        called a proboscis.

        Both male and female mosquitoes feed on plant nectar
        and other sugary liquids for energy.

        Female mosquitoes of many species also consume blood.
        The proteins and nutrients obtained from a blood meal
        help them produce and develop their eggs.

        Mosquitoes locate potential hosts using a combination
        of chemical, thermal, and sensory information.

        They can detect carbon dioxide released when animals
        breathe. As they approach a host, additional signals
        such as body heat, moisture, and skin-related chemical
        compounds help them locate a suitable place to land.

        Although mosquitoes are tiny, they have an enormous
        ecological impact. Their larvae are part of aquatic
        food webs, while adults provide food for birds, bats,
        fish, amphibians, and other predators.
    `,

    funFacts: [
        {
            title: "The Proboscis Is More Than One Needle",
            text: `
                A female mosquito's feeding apparatus is an
                extremely specialized structure.

                Rather than using one simple hollow needle,
                the proboscis contains several tiny structures
                that work together to penetrate skin, keep the
                feeding area open, deliver saliva, and draw blood.

                This allows the mosquito to feed efficiently
                while minimizing the damage caused by the bite.
            `
        },

        {
            title: "Carbon Dioxide Is a Major Tracking Signal",
            text: `
                Mosquitoes can detect carbon dioxide released
                by animals when they breathe.

                This creates a chemical trail that helps the
                mosquito locate potential hosts from a distance.

                As it gets closer, the mosquito combines this
                information with other signals including body
                heat, moisture, and chemical compounds associated
                with skin.
            `
        },

        {
            title: "Only Females Take Blood Meals",
            text: `
                Male mosquitoes do not normally drink blood.

                They feed primarily on plant nectar and other
                sugary liquids.

                Female mosquitoes also feed on plant sugars,
                but females of many species require the nutrients
                from blood meals to develop their eggs.

                Male mosquitoes also have noticeably bushier
                antennae, which help them detect the wingbeat
                sounds of females.
            `
        },

        {
            title: "They Can Remove Water While Feeding",
            text: `
                A female mosquito needs to keep her body
                light enough to remain mobile after feeding.

                During a blood meal, she can process and remove
                excess water from the ingested fluid while
                retaining nutrients.

                This helps her concentrate the useful components
                of the meal and reduces the weight she needs
                to carry after feeding.
            `
        },

        {
            title: "The Itch Comes From Your Immune System",
            text: `
                The itching caused by a mosquito bite is not
                simply the result of the tiny puncture.

                During feeding, the mosquito introduces saliva
                containing proteins into the skin.

                Your immune system recognizes these foreign
                proteins and can release histamines, producing
                the familiar redness, swelling, and itching
                around the bite.
            `
        }
    ],

    khmerTitle: "សត្វប្រមាញ់ដែលស្គាល់ឈាម៖ មូស",

    khmerQuote: `
        ជាសត្វល្អិតតូចមួយដែលមានសមត្ថភាពស្វែងរកម្ចាស់ផ្ទះ
        យ៉ាងមានប្រសិទ្ធភាព ដោយប្រើការទទួលសារធាតុគីមី
        ការរកកម្តៅ និងផ្នែកមាត់ដែលមានជំនាញពិសេស។
    `,

    khmerDescription: `
        មូសគឺជាសត្វល្អិតហោះតូចៗដែលស្ថិតក្នុងលំដាប់ Diptera។
        វាមានរាងកាយស្តើង ជើងវែង ស្លាបមួយគូ
        និងផ្នែកមាត់ដែលមានជំនាញពិសេសហៅថា proboscis។

        មូសឈ្មោល និងមូសញីទាំងពីរអាចស៊ីទឹកដមផ្កា
        និងសារធាតុរាវដែលមានជាតិស្ករ ដើម្បីទទួលបានថាមពល។

        មូសញីនៃប្រភេទជាច្រើនក៏ស៊ីឈាមផងដែរ។
        ប្រូតេអ៊ីន និងសារធាតុចិញ្ចឹមពីឈាមជួយឱ្យវា
        ផលិត និងអភិវឌ្ឍពង។

        មូសស្វែងរកម្ចាស់ផ្ទះដោយប្រើសញ្ញាជាច្រើនប្រភេទ
        រួមមានកាបូនឌីអុកស៊ីត កម្តៅរាងកាយ សំណើម
        និងសារធាតុគីមីមួយចំនួនដែលពាក់ព័ន្ធនឹងស្បែក។

        ទោះបីមូសមានទំហំតូចក៏ដោយ វាមានតួនាទីសំខាន់
        នៅក្នុងប្រព័ន្ធអេកូឡូស៊ី។ ដង្កូវមូសជាផ្នែកមួយ
        នៃខ្សែអាហារក្នុងទឹក ខណៈមូសពេញវ័យអាចក្លាយជា
        អាហាររបស់សត្វស្លាប ប្រចៀវ ត្រី កង្កែប
        និងសត្វប្រមាញ់ផ្សេងៗ។
    `,

    khmerFunFacts: [
        {
            title: "Proboscis មិនមែនជាម្ជុលតែមួយទេ",
            text: `
                ផ្នែកមាត់របស់មូសញីគឺជារចនាសម្ព័ន្ធ
                ដែលមានជំនាញខ្ពស់។

                វាមិនមែនជាម្ជុលប្រហោងតែមួយនោះទេ។
                វាមានផ្នែកតូចៗជាច្រើនដែលធ្វើការរួមគ្នា
                ដើម្បីចាក់ចូលស្បែក រក្សាតំបន់ចាក់ឱ្យបើក
                បញ្ចេញទឹកមាត់ និងទាញឈាមចូល។
            `
        },

        {
            title: "កាបូនឌីអុកស៊ីតជាសញ្ញាសំខាន់",
            text: `
                មូសអាចរកឃើញកាបូនឌីអុកស៊ីតដែលសត្វ
                បញ្ចេញនៅពេលដកដង្ហើម។

                វាបង្កើតជាសញ្ញាគីមីដែលជួយឱ្យមូស
                ស្វែងរកម្ចាស់ផ្ទះដែលអាចស៊ីឈាមបាន។

                នៅពេលវាខិតទៅជិត វារួមបញ្ចូលព័ត៌មាននេះ
                ជាមួយកម្តៅរាងកាយ សំណើម និងសារធាតុគីមី
                ដែលពាក់ព័ន្ធនឹងស្បែក។
            `
        },

        {
            title: "មានតែមូសញីដែលស៊ីឈាម",
            text: `
                មូសឈ្មោលជាទូទៅមិនស៊ីឈាមទេ។

                វាស៊ីជាចម្បងនូវទឹកដមផ្កា និងសារធាតុរាវ
                ដែលមានជាតិស្ករ។

                មូសញីក៏អាចស៊ីជាតិស្ករពីរុក្ខជាតិដែរ
                ប៉ុន្តែមូសញីនៃប្រភេទជាច្រើនត្រូវការ
                សារធាតុចិញ្ចឹមពីឈាម ដើម្បីអភិវឌ្ឍពង។
            `
        },

        {
            title: "វាអាចដកទឹកចេញពេលកំពុងស៊ី",
            text: `
                មូសញីត្រូវរក្សារាងកាយឱ្យមានទម្ងន់សមរម្យ
                ដើម្បីអាចហោះបានបន្ទាប់ពីស៊ីឈាម។

                ក្នុងអំឡុងពេលស៊ី វាអាចដំណើរការទឹក
                និងយកទឹកលើសចេញ ខណៈរក្សាទុកសារធាតុ
                ចិញ្ចឹមដែលមានប្រយោជន៍ពីអាហារ។
            `
        },

        {
            title: "ការរមាស់កើតចេញពីប្រព័ន្ធការពាររាងកាយ",
            text: `
                ការរមាស់បន្ទាប់ពីមូសខាំមិនមែនកើតឡើង
                ដោយសាររន្ធតូចដែលមូសចាក់តែប៉ុណ្ណោះទេ។

                នៅពេលមូសស៊ីឈាម វាបញ្ចេញទឹកមាត់ដែលមាន
                ប្រូតេអ៊ីនចូលទៅក្នុងស្បែក។

                ប្រព័ន្ធការពាររាងកាយរបស់យើងស្គាល់ប្រូតេអ៊ីន
                ទាំងនេះថាជាសារធាតុបរទេស ហើយអាចបញ្ចេញ
                histamine ដែលបង្កឱ្យមានការឡើងក្រហម
                ហើម និងរមាស់។
            `
        }
    ]
},

{
    name: "Housefly",
    title: "THE HIGH-SPEED AEROBATIC EVADER: THE HOUSEFLY",
    khmer: "រុយផ្ទះ",
    category: "Insects",
    image: "images/housefly.jpg",

    quote: `
        A master of escape and visual perception, combining
        wide-angle compound vision, liquid digestion,
        and sensory feet that can taste what they touch.
    `,

    scientificName: `
        Musca domestica
    `,

    habitat: `
        Human settlements, farms, animal facilities,
        organic waste areas, and many other terrestrial
        environments around the world.
    `,

    status: `
        Least Concern 🟢
    `,

    lifespan: `
        Adults generally live around 15–30 days.
        Under warm conditions, the complete development
        from egg to adult can occur in roughly 7–10 days.
    `,

    topSpeed: `
        Around 8 km/h (5 mph), with extremely rapid
        wing movements that allow exceptional maneuverability.
    `,

    description: `
        The common housefly is a small true fly belonging
        to the order Diptera.

        It has a gray-black body, four dark longitudinal
        stripes on the thorax, a slightly yellowish abdomen,
        and large reddish compound eyes.

        Unlike many other flying insects, houseflies have
        only one functional pair of wings. Their hind wings
        have evolved into tiny balancing structures called
        halteres.

        These structures provide sensory feedback during
        flight and help the fly maintain stability while
        performing extremely rapid turns and evasive
        maneuvers.

        Houseflies are also specialized for feeding on
        liquid food. Their mouthparts are adapted for
        absorbing dissolved nutrients rather than biting
        and chewing solid food.

        Despite their reputation as annoying household pests,
        houseflies are also part of natural ecosystems,
        where their larvae help break down decaying organic
        material and adults provide food for other animals.
    `,

    funFacts: [
        {
            title: "They Process Visual Information Extremely Fast",
            text: `
                Flies can process visual changes much faster
                than humans.

                Their compound eyes and nervous systems allow
                them to detect rapid changes in their surroundings,
                giving them excellent reaction times when a
                predator or swatter approaches.

                This rapid visual processing is one reason
                catching a housefly with a swatter can feel
                like trying to hit a tiny fighter jet.
            `
        },

        {
            title: "Built-In Gyroscopes",
            text: `
                Behind a housefly's wings are tiny structures
                called halteres.

                These modified hind wings vibrate rapidly during
                flight and act as sensory organs that detect
                changes in body rotation.

                The information helps the fly maintain balance
                and perform rapid aerial maneuvers.
            `
        },

        {
            title: "They Taste with Their Feet",
            text: `
                Houseflies have chemical taste receptors
                on their legs and feet.

                When a fly lands on a surface, these receptors
                can detect chemical substances before the fly
                begins feeding.

                This allows the fly to investigate potential
                food simply by walking across it.
            `
        },

        {
            title: "They Turn Solid Food into Liquid",
            text: `
                Houseflies cannot chew solid food in the same
                way animals with biting mouthparts can.

                Instead, they can release digestive fluids
                onto suitable food.

                These fluids help break down solid material
                into a liquid that the fly can then absorb
                through its specialized mouthparts.
            `
        },

        {
            title: "Walking Upside Down",
            text: `
                Houseflies can walk across glass, windows,
                ceilings, and other smooth surfaces.

                Their feet contain specialized pads called
                pulvilli covered with microscopic structures.

                These structures help generate adhesion and
                surface contact, allowing flies to remain attached
                even while walking upside down.
            `
        }
    ],

    khmerTitle: "អ្នកគេចខ្លួនលឿនក្នុងពិភពសត្វល្អិត៖ រុយផ្ទះ",

    khmerQuote: `
        ជាអ្នកជំនាញខាងការគេចខ្លួន និងការមើលឃើញ
        ដែលមានភ្នែកផ្សំមើលបានទូលំទូលាយ ប្រព័ន្ធរំលាយ
        អាហារជារបស់រាវ និងជើងដែលអាចទទួលរសជាតិ
        ពីផ្ទៃដែលវាប៉ះ។
    `,

    khmerDescription: `
        រុយផ្ទះគឺជាសត្វរុយពិតមួយប្រភេទដែលស្ថិតក្នុង
        លំដាប់ Diptera។

        វាមានរាងកាយពណ៌ប្រផេះខ្មៅ មានឆ្នូតពណ៌ខ្មៅ
        បួននៅលើផ្នែកទ្រូង ពោះមានពណ៌លឿងបន្តិច
        និងភ្នែកផ្សំពណ៌ក្រហមធំៗ។

        រុយផ្ទះមានស្លាបដែលអាចហោះបានតែមួយគូ។
        ស្លាបខាងក្រោយបានវិវត្តទៅជារចនាសម្ព័ន្ធតូចៗ
        សម្រាប់រក្សាលំនឹង ដែលហៅថា halteres។

        រចនាសម្ព័ន្ធទាំងនេះជួយផ្តល់ព័ត៌មានអំពីចលនា
        និងការបង្វិលរាងកាយរបស់រុយនៅពេលហោះ
        ដើម្បីឱ្យវាអាចរក្សាលំនឹង និងបត់ទិសដៅបានយ៉ាងលឿន។

        រុយផ្ទះក៏មានប្រព័ន្ធស៊ីអាហារដែលសម្របខ្លួន
        សម្រាប់អាហារដែលមានសភាពរាវ។ ផ្នែកមាត់របស់វា
        សមស្របសម្រាប់ស្រូបសារធាតុចិញ្ចឹមដែលបានរំលាយ
        ជាជាងខាំ និងទំពារអាហាររឹង។

        ទោះបីរុយផ្ទះត្រូវបានមនុស្សចាត់ទុកថាជាសត្វរំខាន
        ក៏ដោយ វាក៏មានតួនាទីក្នុងធម្មជាតិផងដែរ។
        ដង្កូវរបស់វាជួយបំបែកសារធាតុសរីរាង្គដែលកំពុងរលួយ
        ខណៈរុយពេញវ័យអាចក្លាយជាអាហាររបស់សត្វផ្សេងៗ។
    `,

    khmerFunFacts: [
        {
            title: "វាដំណើរការព័ត៌មានដែលមើលឃើញបានលឿន",
            text: `
                រុយអាចទទួល និងដំណើរការការផ្លាស់ប្តូរ
                ដែលមើលឃើញបានលឿនជាងមនុស្ស។

                ភ្នែកផ្សំ និងប្រព័ន្ធប្រសាទរបស់វាអាចរកឃើញ
                ការផ្លាស់ប្តូរយ៉ាងឆាប់រហ័សនៅជុំវិញខ្លួន។

                នេះជាមូលហេតុមួយដែលធ្វើឱ្យការវាយរុយ
                ដោយប្រើឧបករណ៍វាយរុយពិបាកគួរឱ្យខឹង។
            `
        },

        {
            title: "Gyroscope ដែលមានស្រាប់",
            text: `
                នៅខាងក្រោយស្លាបរបស់រុយមានរចនាសម្ព័ន្ធតូចៗ
                ដែលហៅថា halteres។

                វាគឺជាស្លាបខាងក្រោយដែលបានវិវត្តទៅជាឧបករណ៍
                ទទួលអារម្មណ៍។ វាញ័រយ៉ាងលឿនពេលរុយហោះ
                និងជួយរកឃើញការបង្វិលរាងកាយ។

                ព័ត៌មាននេះជួយឱ្យរុយរក្សាលំនឹង និងធ្វើចលនា
                គេចខ្លួនបានយ៉ាងលឿន។
            `
        },

        {
            title: "វាភ្លក់រសជាតិដោយជើង",
            text: `
                រុយផ្ទះមានឧបករណ៍ទទួលរសជាតិ
                នៅលើជើង និងបាតជើងរបស់វា។

                នៅពេលវាចុះលើផ្ទៃមួយ ឧបករណ៍ទាំងនេះ
                អាចរកឃើញសារធាតុគីមីមួយចំនួន
                មុនពេលវាចាប់ផ្តើមស៊ី។

                ដូច្នេះវាអាច "សាករសជាតិ" អាហារ
                ដោយគ្រាន់តែដើរលើវា។
            `
        },

        {
            title: "វាប្រែក្លាយអាហាររឹងទៅជារាវ",
            text: `
                រុយផ្ទះមិនអាចខាំ និងទំពារអាហាររឹង
                ដូចសត្វដែលមានមាត់សម្រាប់ខាំនោះទេ។

                វាអាចបញ្ចេញសារធាតុរំលាយអាហារទៅលើ
                អាហារដែលសមស្រប។

                សារធាតុទាំងនេះជួយបំបែកអាហាររឹង
                ទៅជារាវ ដែលរុយអាចស្រូបចូលបាន។
            `
        },

        {
            title: "ដើរបញ្ច្រាសក្បាល",
            text: `
                រុយផ្ទះអាចដើរលើកញ្ចក់ បង្អួច ពិដាន
                និងផ្ទៃរលោងផ្សេងៗបាន។

                ជើងរបស់វាមានបន្ទះពិសេសដែលហៅថា pulvilli
                និងមានរចនាសម្ព័ន្ធតូចៗជាច្រើន។

                រចនាសម្ព័ន្ធទាំងនេះជួយបង្កើតកម្លាំង
                ទាក់ទាញទៅនឹងផ្ទៃ និងអនុញ្ញាតឱ្យរុយ
                អាចជាប់នៅលើផ្ទៃសូម្បីតែពេលដើរបញ្ច្រាស។
            `
        }
    ]
},

{
    name: "Cockroach",
    title: "THE ULTIMATE SURVIVALIST: THE COCKROACH",
    khmer: "កន្លាត",
    category: "Insects",
    image: "images/cockroach.jpg",

    quote: `
        Evolution's most resilient survivor, combining
        extreme adaptability, flexible body structure,
        decentralized nervous systems, and lightning-fast reflexes.
    `,

    scientificName: `
        Blattodea
    `,

    habitat: `
        Rainforests, leaf litter, caves, and human structures
        across almost every continent except Antarctica.
    `,

    status: `
        Least Concern 🟢
    `,

    lifespan: `
        Around 6 months to 2 years,
        depending on species and environmental conditions.
    `,

    topSpeed: `
        Up to 5 km/h (3 mph) in short bursts.
    `,

    description: `
        Cockroaches are ancient and highly adaptable insects
        characterized by flat, oval-shaped bodies, long antennae,
        and flexible exoskeletons.

        Their spiny legs are specialized for rapid movement
        across a wide variety of surfaces.

        Although cockroaches are commonly associated with
        human buildings, only a small fraction of the thousands
        of known species regularly live around humans.

        Most cockroach species live in natural environments
        such as forests, where they play an important role as
        decomposers by breaking down dead plant and animal matter.

        Their combination of flexibility, speed, sensory systems,
        and environmental tolerance has allowed cockroaches
        to survive and diversify for hundreds of millions of years.
    `,

    funFacts: [
        {
            title: "Surviving Without a Head",
            text: `
                A cockroach can survive for several days without
                its head.

                Unlike humans, cockroaches do not breathe through
                their mouths or rely on their heads for breathing.
                Instead, they breathe through small openings called
                spiracles located along the body.

                Eventually, however, the cockroach dies because
                it cannot drink water or feed normally without
                its mouth.
            `
        },

        {
            title: "Extreme Flexibility",
            text: `
                Cockroaches can squeeze through remarkably narrow
                spaces.

                Their flexible exoskeleton and body structure allow
                them to compress themselves significantly while
                their legs continue functioning.

                This ability helps them escape predators and hide
                inside extremely small cracks and gaps.
            `
        },

        {
            title: "Surprisingly Radiation Resistant",
            text: `
                Cockroaches are more resistant to radiation than
                humans, although the popular claim that they could
                survive a nuclear explosion is greatly exaggerated.

                Their resistance is partly related to the fact that
                many of their cells divide relatively slowly.

                Radiation tends to cause greater damage to cells
                during active cell division.
            `
        },

        {
            title: "Their Rear End Detects Danger",
            text: `
                Cockroaches have paired sensory structures called
                cerci at the rear of their abdomen.

                These structures detect changes in air movement.

                When a predator approaches, the resulting air
                currents can trigger an extremely rapid escape
                response before the cockroach even has time to
                process the danger consciously.
            `
        },

        {
            title: "They Can Hold Their Breath",
            text: `
                Cockroaches can close their spiracles and greatly
                reduce their oxygen intake.

                This helps prevent water loss and allows them
                to survive temporary periods of immersion.

                Some species can remain underwater for surprisingly
                long periods by slowing their metabolism.
            `
        }
    ],

    khmerTitle: "អ្នករស់រានមានជីវិតដ៏អស្ចារ្យ៖ កន្លាត",

    khmerQuote: `
        ជាអ្នករស់រានមានជីវិតដ៏រឹងមាំ ដែលមានសមត្ថភាព
        សម្របខ្លួនខ្ពស់ រាងកាយអាចបត់បែនបាន
        ប្រព័ន្ធប្រសាទដែលមិនពឹងផ្អែកលើខួរក្បាលតែមួយ
        និងប្រតិកម្មគេចខ្លួនយ៉ាងលឿន។
    `,

    khmerDescription: `
        កន្លាតគឺជាសត្វល្អិតបុរាណ និងអាចសម្របខ្លួនបានយ៉ាងល្អ
        ដែលមានរាងកាយសំប៉ែត រាងពងក្រពើ អង់តែនវែង
        និងសំបកខាងក្រៅដែលអាចបត់បែនបាន។

        ជើងរបស់វាមានបន្លាតូចៗ និងត្រូវបានសម្របសម្រាប់
        ការរត់យ៉ាងលឿនលើផ្ទៃជាច្រើនប្រភេទ។

        ទោះបីកន្លាតត្រូវបានភ្ជាប់ជាមួយអគារ និងផ្ទះមនុស្ស
        ក៏ដោយ ប្រភេទដែលរស់នៅជិតមនុស្សមានតែផ្នែកតូចមួយ
        ក្នុងចំណោមប្រភេទកន្លាតរាប់ពាន់ប្រភេទ។

        ប្រភេទភាគច្រើនរស់នៅក្នុងធម្មជាតិ ដូចជាព្រៃឈើ
        ហើយមានតួនាទីសំខាន់ជាអ្នកបំបែកសារធាតុសរីរាង្គ
        ដោយជួយបំបែកសំណល់រុក្ខជាតិ និងសត្វដែលស្លាប់។

        ការរួមបញ្ចូលគ្នារវាងភាពបត់បែន ល្បឿន
        ប្រព័ន្ធទទួលអារម្មណ៍ និងសមត្ថភាពទ្រាំទ្របរិស្ថាន
        បានជួយឱ្យកន្លាតរស់រាន និងវិវត្តអស់រយៈពេល
        រាប់រយលានឆ្នាំ។
    `,

    khmerFunFacts: [
        {
            title: "អាចរស់បានដោយគ្មានក្បាល",
            text: `
                កន្លាតអាចរស់បានជាច្រើនថ្ងៃបន្ទាប់ពីបាត់ក្បាល។

                មិនដូចមនុស្សទេ កន្លាតមិនដកដង្ហើមតាមមាត់
                ហើយក៏មិនពឹងផ្អែកលើក្បាលសម្រាប់ការដកដង្ហើមដែរ។

                វាដកដង្ហើមតាមរន្ធតូចៗដែលហៅថា spiracles
                ដែលស្ថិតនៅតាមផ្នែកផ្សេងៗនៃរាងកាយ។

                ប៉ុន្តែចុងក្រោយវានឹងស្លាប់ ព្រោះវាមិនអាច
                ផឹកទឹក ឬស៊ីអាហារបានធម្មតាដោយគ្មានមាត់។
            `
        },

        {
            title: "ភាពបត់បែនដ៏អស្ចារ្យ",
            text: `
                កន្លាតអាចចូលតាមចន្លោះតូចៗបានយ៉ាងអស្ចារ្យ។

                សំបកខាងក្រៅ និងរចនាសម្ព័ន្ធរាងកាយដែលបត់បែនបាន
                អនុញ្ញាតឱ្យវាបង្រួមខ្លួនបានយ៉ាងខ្លាំង
                ខណៈជើងរបស់វានៅតែអាចដំណើរការបាន។

                សមត្ថភាពនេះជួយឱ្យវាគេចពីសត្វប្រមាញ់
                និងលាក់ខ្លួនក្នុងរន្ធតូចៗ។
            `
        },

        {
            title: "ធន់នឹងវិទ្យុសកម្មគួរឱ្យភ្ញាក់ផ្អើល",
            text: `
                កន្លាតអាចទ្រាំទ្រវិទ្យុសកម្មបានល្អជាងមនុស្ស
                ប៉ុន្តែការអះអាងថាវាអាចរស់រានពីការផ្ទុះនុយក្លេអ៊ែរ
                គឺជាការនិយាយបំផ្លើស។

                មូលហេតុមួយគឺកោសិកាជាច្រើនរបស់វាបែងចែកខ្លួន
                ក្នុងល្បឿនយឺត។

                វិទ្យុសកម្មជាទូទៅបង្កការខូចខាតខ្លាំងជាង
                ទៅលើកោសិកាដែលកំពុងបែងចែកយ៉ាងសកម្ម។
            `
        },

        {
            title: "ផ្នែកខាងក្រោយរបស់វាអាចរកឃើញគ្រោះថ្នាក់",
            text: `
                កន្លាតមានរចនាសម្ព័ន្ធទទួលអារម្មណ៍មួយគូ
                ដែលហៅថា cerci នៅផ្នែកខាងក្រោយពោះ។

                រចនាសម្ព័ន្ធទាំងនេះអាចរកឃើញការផ្លាស់ប្តូរ
                នៃចលនាខ្យល់។

                នៅពេលសត្វប្រមាញ់ខិតជិត ចលនាខ្យល់ដែលកើតឡើង
                អាចបង្កឱ្យកន្លាតចាប់ផ្តើមរត់គេចយ៉ាងលឿន។
            `
        },

        {
            title: "វាអាចទប់ដង្ហើមបាន",
            text: `
                កន្លាតអាចបិទ spiracles របស់វា
                និងកាត់បន្ថយការទទួលអុកស៊ីសែនយ៉ាងខ្លាំង។

                វាជួយកាត់បន្ថយការបាត់បង់ទឹក
                និងអនុញ្ញាតឱ្យវារស់រានក្នុងទឹក
                ក្នុងរយៈពេលខ្លី។

                ប្រភេទខ្លះអាចនៅក្នុងទឹកបានយូរគួរឱ្យភ្ញាក់ផ្អើល
                ដោយបន្ថយល្បឿនមេតាប៉ូលីសរបស់ខ្លួន។
            `
        }
    ]
},

{
    name: "Praying Mantis",
    title: "THE AMBUSH APEX HUNTER: THE PRAYING MANTIS",
    khmer: "សត្វអធិស្ឋាន",
    category: "Insects",
    image: "images/praying-mantis.jpg",

    quote: `
        Nature's patient assassin, combining advanced depth
        perception, lightning-fast raptorial forelegs,
        and remarkable head mobility.
    `,

    scientificName: `
        Mantodea
    `,

    habitat: `
        Tropical rainforests, temperate forests, grasslands,
        agricultural areas, and home gardens across most
        continents except Antarctica.
    `,

    status: `
        Least Concern 🟢 for many widespread species,
        although conservation status varies between species.
    `,

    lifespan: `
        Around 6–12 months for many species.
    `,

    topSpeed: `
        Prey strikes can be completed in roughly
        30–50 milliseconds.
    `,

    description: `
        Praying mantises are predatory insects recognized by
        their elongated triangular heads, large compound eyes,
        flexible necks, and distinctive folded forelegs.

        Those specialized front legs are called raptorial legs.
        They are equipped with sharp spines and function like
        rapid mechanical traps, allowing mantises to grab,
        pin, and hold struggling prey.

        Mantises are ambush predators. Rather than constantly
        chasing prey, they often remain motionless and rely
        on camouflage while carefully tracking nearby movement.

        Their combination of excellent vision, flexible head
        movement, camouflage, and extremely rapid strikes makes
        them highly effective predators despite their relatively
        small size.
    `,

    funFacts: [
        {
            title: "The 180-Degree Head Turn",
            text: `
                Praying mantises can rotate their heads through
                an impressive range, allowing them to inspect
                areas around and behind their bodies without
                moving the rest of themselves.

                This is especially useful for an ambush predator
                because unnecessary body movement could reveal
                its position to potential prey.
            `
        },

        {
            title: "Three-Dimensional Vision",
            text: `
                Mantises have an unusual form of depth perception.

                Their visual system can use motion information
                to determine the distance to moving objects.

                This helps a mantis calculate when and where
                to launch its raptorial legs at moving prey.
            `
        },

        {
            title: "Sexual Cannibalism",
            text: `
                Female mantises sometimes consume males during
                or after mating.

                However, this behavior does not occur in every
                mating encounter. It is influenced by factors
                including the female's nutritional condition
                and environmental circumstances.

                The additional nutrients can potentially benefit
                egg production.
            `
        },

        {
            title: "An Ear Built for Bats",
            text: `
                Many mantises possess a specialized auditory
                organ located on the underside of the thorax.

                It is particularly sensitive to ultrasonic
                sounds, including the echolocation calls produced
                by hunting bats.

                When a mantis detects an approaching bat,
                it can perform sudden aerial evasive maneuvers
                to escape.
            `
        },

        {
            title: "Some Mantises Hunt More Than Insects",
            text: `
                Large mantis species can sometimes capture prey
                much larger than typical insects.

                Depending on the species and opportunity,
                mantises have been observed attacking small
                vertebrates such as frogs, lizards, and fish,
                as well as other arthropods.
            `
        }
    ],

    khmerTitle: "អ្នកប្រមាញ់ដែលស្ទាក់ចាំ៖ សត្វអធិស្ឋាន",

    khmerQuote: `
        ជាអ្នកប្រមាញ់ដែលមានភាពអត់ធ្មត់ខ្ពស់
        ប្រើការមើលឃើញសម្រាប់វាស់ចម្ងាយ ជើងមុខដែលវាយប្រហារ
        យ៉ាងលឿន និងសមត្ថភាពបង្វិលក្បាលដ៏អស្ចារ្យ។
    `,

    khmerDescription: `
        សត្វអធិស្ឋានគឺជាសត្វល្អិតប្រមាញ់
        ដែលអាចសម្គាល់បានតាមរយៈក្បាលរាងត្រីកោណវែង
        ភ្នែកផ្សំធំៗ ក និងជើងមុខដែលបត់ជាប់នឹងទ្រូង
        ដូចជាកំពុងអធិស្ឋាន។

        ជើងមុខពិសេសទាំងនេះហៅថា raptorial legs។
        វាមានបន្លាមុតៗ និងដើរតួដូចជាអន្ទាក់មេកានិច
        ដែលអាចចាប់ ទប់ និងកាន់សត្វចំណីដែលកំពុងតស៊ូ។

        សត្វអធិស្ឋានជាសត្វប្រមាញ់ដោយការស្ទាក់ចាំ។
        ជំនួសឱ្យការដេញតាមចំណីជានិច្ច វាច្រើនតែឈរ
        ដោយមិនចលនា ដោយប្រើពណ៌ និងរូបរាងសម្រាប់
        លាក់ខ្លួន ខណៈពិនិត្យមើលចលនារបស់សត្វនៅជិត។

        ការរួមបញ្ចូលគ្នារវាងការមើលឃើញល្អ
        សមត្ថភាពបង្វិលក្បាល ការលាក់ខ្លួន
        និងការវាយប្រហារដ៏លឿន ធ្វើឱ្យវាក្លាយជា
        អ្នកប្រមាញ់ដែលមានប្រសិទ្ធភាពខ្ពស់។
    `,

    khmerFunFacts: [
        {
            title: "ការបង្វិលក្បាល",
            text: `
                សត្វអធិស្ឋានអាចបង្វិលក្បាលរបស់វាបាន
                ក្នុងមុំធំគួរឱ្យចាប់អារម្មណ៍។

                វាអាចពិនិត្យមើលតំបន់ជុំវិញ និងខាងក្រោយ
                ដោយមិនចាំបាច់ផ្លាស់ទីរាងកាយទាំងមូល។

                នេះមានប្រយោជន៍ខ្លាំងសម្រាប់សត្វប្រមាញ់
                ដែលពឹងផ្អែកលើការស្ទាក់ចាំ ព្រោះចលនាដែលមិនចាំបាច់
                អាចធ្វើឱ្យចំណីរកឃើញវា។
            `
        },

        {
            title: "ការមើលឃើញជាបីវិមាត្រ",
            text: `
                សត្វអធិស្ឋានមានប្រព័ន្ធមើលឃើញ
                ដែលអាចជួយវាវាស់ចម្ងាយ។

                ប្រព័ន្ធមើលឃើញរបស់វាអាចប្រើព័ត៌មាន
                ពីចលនា ដើម្បីកំណត់ចម្ងាយទៅវត្ថុដែលកំពុងផ្លាស់ទី។

                នេះជួយឱ្យវាគណនាពេលវេលា និងទីតាំង
                សម្រាប់វាយជើងមុខទៅលើចំណី។
            `
        },

        {
            title: "ការស៊ីគូរបស់ខ្លួន",
            text: `
                សត្វអធិស្ឋានញីអាចស៊ីសត្វឈ្មោល
                ក្នុងអំឡុងពេល ឬបន្ទាប់ពីការរួមភេទ។

                ប៉ុន្តែវាមិនកើតឡើងគ្រប់ពេលទេ។
                អាកប្បកិរិយានេះអាចពាក់ព័ន្ធនឹងស្ថានភាព
                អាហារូបត្ថម្ភរបស់សត្វញី និងបរិស្ថាន។

                សារធាតុចិញ្ចឹមបន្ថែមអាចជួយដល់ការផលិតពង។
            `
        },

        {
            title: "ត្រចៀកសម្រាប់រកសត្វប្រចៀវ",
            text: `
                សត្វអធិស្ឋានជាច្រើនមានសរីរាង្គស្តាប់
                ពិសេសមួយនៅផ្នែកខាងក្រោមនៃទ្រូង។

                វាមានភាពរសើបខ្លាំងចំពោះសំឡេងប្រេកង់ខ្ពស់
                រួមទាំងសំឡេង echolocation របស់សត្វប្រចៀវ។

                នៅពេលវារកឃើញសត្វប្រចៀវកំពុងខិតជិត
                វាអាចធ្វើចលនាគេចខ្លួនតាមអាកាសយ៉ាងរហ័ស។
            `
        },

        {
            title: "វាមិនស៊ីតែសត្វល្អិតទេ",
            text: `
                សត្វអធិស្ឋានប្រភេទធំៗអាចចាប់សត្វ
                ដែលមានទំហំធំជាងសត្វល្អិតធម្មតា។

                អាស្រ័យលើប្រភេទ និងឱកាស
                វាអាចវាយប្រហារសត្វតូចៗដូចជា កង្កែប
                ជីងចក់ និងត្រី ព្រមទាំងសត្វអារទ្រូផូដផ្សេងៗ។
            `
        }
    ]
},

{
    name: "Dragonfly",
    title: "THE PREHISTORIC AERIAL ACES: THE DRAGONFLY",
    khmer: "សត្វកន្ទុំរុយ",
    category: "Insects",
    image: "images/dragonfly.jpg",

    quote: `
        Nature's formidable aerial predator, combining
        extraordinary hunting accuracy, independently controlled
        wings, and panoramic compound vision.
    `,

    scientificName: `
        Anisoptera
    `,

    habitat: `
        Freshwater environments, ponds, rivers, wetlands,
        and tropical forests across the world except Antarctica.
    `,

    status: `
        Least Concern 🟢
    `,

    lifespan: `
        Up to 5 years, with most of the life spent underwater
        as a nymph. The adult stage generally lasts around
        1–2 months.
    `,

    topSpeed: `
        Around 30 km/h (18 mph) while cruising,
        with short bursts reaching up to 56 km/h (35 mph).
    `,

    description: `
        Dragonflies are large predatory insects recognized by
        their long slender abdomens, two pairs of transparent
        wings, and enormous compound eyes that cover much of
        their heads.

        Their four wings allow them to perform extremely
        precise aerial maneuvers, including hovering,
        sudden direction changes, and rapid interception
        of flying prey.

        Unlike damselflies, their close relatives, dragonflies
        normally rest with their wings extended horizontally
        rather than folded along their bodies.

        Dragonflies spend an important part of their lives
        underwater as aquatic nymphs. During this stage,
        they are aggressive predators that hunt other aquatic
        organisms before eventually emerging and transforming
        into flying adults.
    `,

    funFacts: [
        {
            title: "One of Nature's Most Successful Predators",
            text: `
                Dragonflies are exceptionally effective aerial
                hunters.

                Instead of simply chasing prey from behind,
                they can predict where a moving target will be
                and intercept it in mid-air.

                Their combination of excellent vision,
                maneuverability, and rapid reactions makes them
                highly efficient predators of flying insects.
            `
        },

        {
            title: "Four Independently Controlled Wings",
            text: `
                Dragonflies have two pairs of wings that can
                operate with considerable independence.

                This gives them exceptional control over their
                flight and allows them to hover, move backward,
                change direction rapidly, and perform tight turns.

                Their aerial control is one of the main reasons
                they are such effective hunters.
            `
        },

        {
            title: "Thousands of Tiny Lenses",
            text: `
                A dragonfly's compound eyes contain thousands
                of individual visual units called ommatidia.

                Because the eyes cover much of the head,
                dragonflies have an enormous field of view.

                Their visual systems are especially good at
                detecting movement, which is extremely useful
                when tracking fast-moving prey in the air.
            `
        },

        {
            title: "Underwater Assassins",
            text: `
                Dragonfly nymphs spend months or even years
                living underwater.

                They are powerful aquatic predators equipped
                with a specialized hinged lower jaw called
                a labium or "mask."

                The mask can rapidly extend forward to capture
                prey such as mosquito larvae, tadpoles, and
                other small aquatic animals.
            `
        },

        {
            title: "Older Than the Dinosaurs",
            text: `
                Ancient relatives of modern dragonflies existed
                more than 300 million years ago.

                These prehistoric insects appeared long before
                dinosaurs, birds, and pterosaurs.

                Some ancient relatives were enormous compared
                with modern dragonflies, with wingspans exceeding
                70 centimeters.
            `
        }
    ],

    khmerTitle: "អ្នកប្រមាញ់លើអាកាសពីសម័យបុរាណ៖ សត្វកន្ទុំរុយ",

    khmerQuote: `
        ជាអ្នកប្រមាញ់ដ៏មានប្រសិទ្ធភាពលើអាកាស
        ដែលរួមបញ្ចូលសមត្ថភាពហោះហើរដ៏អស្ចារ្យ
        ស្លាបដែលអាចគ្រប់គ្រងបានយ៉ាងឯករាជ្យ
        និងភ្នែកផ្សំដែលអាចមើលបានទូលំទូលាយ។
    `,

    khmerDescription: `
        សត្វកន្ទុំរុយគឺជាសត្វល្អិតប្រមាញ់ដែលមានទំហំធំ
        អាចសម្គាល់បានតាមរយៈពោះវែងស្តើង ស្លាបថ្លាពីរគូ
        និងភ្នែកផ្សំធំៗដែលគ្របដណ្តប់ផ្នែកធំនៃក្បាល។

        ស្លាបទាំងបួនរបស់វាអាចគ្រប់គ្រងបានយ៉ាងល្អ
        ដែលអនុញ្ញាតឱ្យវាហោះនៅនឹងកន្លែង ប្តូរទិសដៅ
        យ៉ាងលឿន និងស្ទាក់ចាប់សត្វចំណីនៅកណ្តាលអាកាស។

        មិនដូចសត្វ damselfly ដែលជាសាច់ញាតិជិតស្និទ្ធទេ
        សត្វកន្ទុំរុយជាទូទៅដាក់ស្លាបរាលផ្ដេកនៅពេលសម្រាក
        ជំនួសឱ្យបត់ស្លាបជាប់នឹងខ្នង។

        សត្វកន្ទុំរុយចំណាយពេលដ៏សំខាន់មួយនៃជីវិត
        រស់នៅក្រោមទឹកក្នុងដំណាក់កាល nymph។
        នៅដំណាក់កាលនេះ វាជាសត្វប្រមាញ់ដ៏សកម្ម
        មុនពេលឡើងពីទឹក និងក្លាយជាសត្វកន្ទុំរុយពេញវ័យ។
    `,

    khmerFunFacts: [
        {
            title: "អ្នកប្រមាញ់ដ៏មានប្រសិទ្ធភាព",
            text: `
                សត្វកន្ទុំរុយមានសមត្ថភាពប្រមាញ់លើអាកាស
                បានយ៉ាងមានប្រសិទ្ធភាព។

                ជំនួសឱ្យការដេញតាមចំណីពីខាងក្រោយ
                វាអាចព្យាករណ៍ពីទីតាំងដែលចំណីកំពុងផ្លាស់ទីទៅ
                ហើយស្ទាក់ចាប់វានៅកណ្តាលអាកាស។

                ការរួមបញ្ចូលគ្នារវាងការមើលឃើញល្អ
                ភាពរហ័សរហួន និងប្រតិកម្មលឿន
                ធ្វើឱ្យវាក្លាយជាអ្នកប្រមាញ់ដ៏មានប្រសិទ្ធភាព។
            `
        },

        {
            title: "ស្លាបបួនដែលគ្រប់គ្រងបានដោយឯករាជ្យ",
            text: `
                សត្វកន្ទុំរុយមានស្លាបពីរគូ
                ដែលអាចធ្វើការដោយឯករាជ្យពីគ្នាបានយ៉ាងច្រើន។

                វាផ្តល់ឱ្យវានូវការគ្រប់គ្រងលើការហោះហើរ
                យ៉ាងអស្ចារ្យ និងអាចឱ្យវាហោះនៅនឹងកន្លែង
                ថយក្រោយ ប្តូរទិសដៅ និងបត់យ៉ាងតឹង។
            `
        },

        {
            title: "ភ្នែកដែលមានកញ្ចក់តូចៗរាប់ពាន់",
            text: `
                ភ្នែកផ្សំរបស់សត្វកន្ទុំរុយមានផ្នែកមើលឃើញតូចៗ
                ជាច្រើនដែលហៅថា ommatidia។

                ដោយសារភ្នែករបស់វាគ្របដណ្តប់ផ្នែកធំនៃក្បាល
                វាមានទិដ្ឋភាពមើលឃើញយ៉ាងទូលំទូលាយ។

                ប្រព័ន្ធមើលឃើញរបស់វាពូកែរកឃើញចលនា
                ដែលមានសារៈសំខាន់សម្រាប់ការតាមដាន
                សត្វចំណីដែលហោះលឿន។
            `
        },

        {
            title: "អ្នកប្រមាញ់ក្រោមទឹក",
            text: `
                ដង្កូវរបស់សត្វកន្ទុំរុយអាចរស់នៅក្រោមទឹក
                អស់រយៈពេលជាច្រើនខែ ឬច្រើនឆ្នាំ។

                វាជាអ្នកប្រមាញ់ក្នុងទឹកដ៏មានប្រសិទ្ធភាព
                ដែលមានថ្គាមក្រោមពិសេសមួយហៅថា labium
                ឬ "mask"។

                វាអាចលាតថ្គាមនេះទៅមុខយ៉ាងលឿន
                ដើម្បីចាប់ដង្កូវមូស កូនកង្កែប
                និងសត្វតូចៗផ្សេងទៀតក្នុងទឹក។
            `
        },

        {
            title: "ចាស់ជាងដាយណូស័រ",
            text: `
                សាច់ញាតិបុរាណរបស់សត្វកន្ទុំរុយសម័យទំនើប
                មានជីវិតរស់នៅជាង 300 លានឆ្នាំមុន។

                សត្វល្អិតបុរាណទាំងនេះមានវត្តមាន
                មុនដាយណូស័រ សត្វស្លាប និង pterosaurs។

                ប្រភេទបុរាណមួយចំនួនមានទំហំធំជាង
                សត្វកន្ទុំរុយសព្វថ្ងៃយ៉ាងខ្លាំង
                ដោយមានប្រវែងស្លាបលើសពី 70 សង់ទីម៉ែត្រ។
            `
        }
    ]
},

{
    name: "Ladybug",
    title: "THE GARDEN'S ARMORED PROTECTOR: THE LADYBUG",
    khmer: "សត្វមេអំបៅក្រហម",
    category: "Insects",
    image: "images/ladybug.jpg",

    quote: `
        Nature's colorful pest-control agent, combining
        warning coloration, chemical defenses, and a voracious
        appetite for plant pests.
    `,

    scientificName: `
        Coccinellidae
    `,

    habitat: `
        Gardens, agricultural fields, meadows, forests,
        and suburban parks around the world.
    `,

    status: `
        Least Concern 🟢
    `,

    lifespan: `
        Around 1–2 years, depending on species and conditions.
        They undergo complete metamorphosis through four stages:
        egg, larva, pupa, and adult.
    `,

    topSpeed: `
        Up to 24 km/h (15 mph) during flight.
    `,

    description: `
        Ladybugs, also known as ladybirds or ladybeetles,
        are small dome-shaped beetles belonging to the family
        Coccinellidae.

        They are easily recognized by their brightly colored
        hardened wing covers, called elytra, which may be red,
        orange, yellow, or other colors and often feature
        contrasting spots.

        Despite their harmless-looking appearance, many ladybug
        species are active predators.

        Both adults and larvae feed on agricultural pests such
        as aphids, scale insects, and spider mites, making many
        species valuable natural pest controllers.

        Their bright coloration also serves as a warning to
        predators that they may be unpleasant or toxic to eat.
    `,

    funFacts: [
        {
            title: "Chemical Reflex Bleeding",
            text: `
                When threatened, some ladybugs can release a
                yellowish defensive fluid from joints in their legs.

                This behavior is called reflex bleeding.

                The fluid can contain bitter or toxic defensive
                chemicals that discourage predators such as birds
                and frogs from eating them.
            `
        },

        {
            title: "Aphid-Hunting Machines",
            text: `
                Ladybugs can consume large numbers of aphids
                during their lifetime.

                Both adult ladybugs and their larvae can actively
                hunt aphids and other soft-bodied insects.

                This makes many ladybug species useful allies
                for farmers and gardeners seeking biological
                pest control.
            `
        },

        {
            title: "Hidden Folding Wings",
            text: `
                The colorful outer shell of a ladybug is actually
                a pair of hardened structures called elytra.

                When the ladybug prepares to fly, the elytra
                separate and reveal delicate transparent wings
                underneath.

                After landing, those wings fold away beneath
                the protective elytra.
            `
        },

        {
            title: "Warning Colors",
            text: `
                The bright colors of many ladybugs are a form
                of warning coloration called aposematism.

                Red, orange, or yellow patterns combined with
                contrasting markings can signal potential
                predators that the insect may taste bad or
                contain defensive chemicals.
            `
        },

        {
            title: "Winter Clusters",
            text: `
                During cold periods, some ladybug species gather
                together in large groups beneath bark, rocks,
                leaves, or other sheltered locations.

                Clustering can help reduce heat loss and maintain
                suitable humidity while also providing protection
                from environmental conditions and predators.
            `
        }
    ],

    khmerTitle: "អ្នកការពារសួនច្បារដែលមានសំបកការពារ៖ សត្វមេអំបៅក្រហម",

    khmerQuote: `
        ជាសត្វល្អិតដែលមានពណ៌ស្រស់ស្អាត និងជួយកម្ចាត់
        សត្វល្អិតបំផ្លាញដំណាំ ដោយប្រើពណ៌ព្រមាន
        សារធាតុការពារ និងការស៊ីសត្វល្អិតយ៉ាងច្រើន។
    `,

    khmerDescription: `
        Ladybug ឬ ladybird គឺជាសត្វល្អិតប្រភេទ beetle
        តូចៗដែលមានរាងមូល និងស្ថិតក្នុងគ្រួសារ Coccinellidae។

        វាអាចសម្គាល់បានតាមរយៈសំបកស្លាបរឹងដែលមានពណ៌
        ក្រហម ទឹកក្រូច លឿង ឬពណ៌ផ្សេងៗ
        ហើយជាញឹកញាប់មានចំណុចពណ៌ខ្មៅ។

        ទោះបីវាមើលទៅគួរឱ្យស្រឡាញ់ និងគ្មានគ្រោះថ្នាក់ក៏ដោយ
        ladybug ប្រភេទជាច្រើនគឺជាសត្វប្រមាញ់សកម្ម។

        ទាំងសត្វពេញវ័យ និងដង្កូវរបស់វាអាចស៊ីសត្វល្អិត
        ដែលបំផ្លាញដំណាំ ដូចជា aphids និងសត្វល្អិតតូចៗផ្សេងទៀត។

        ដូច្នេះ ladybug ប្រភេទជាច្រើនមានតួនាទីសំខាន់
        ក្នុងការគ្រប់គ្រងសត្វល្អិតតាមធម្មជាតិ។
    `,

    khmerFunFacts: [
        {
            title: "ការបញ្ចេញសារធាតុការពារ",
            text: `
                នៅពេលមានគ្រោះថ្នាក់ ladybug ប្រភេទខ្លះ
                អាចបញ្ចេញសារធាតុរាវពណ៌លឿងពីសន្លាក់ជើង។

                អាកប្បកិរិយានេះហៅថា reflex bleeding។

                សារធាតុនេះអាចមានសារធាតុគីមីដែលមានរសជាតិជូរចត់
                ឬមានជាតិពុល ដែលជួយបំបាក់ទឹកចិត្តសត្វប្រមាញ់
                មិនឱ្យស៊ីវា។
            `
        },

        {
            title: "អ្នកប្រមាញ់ Aphid",
            text: `
                Ladybug អាចស៊ី aphids បានច្រើនក្នុងមួយជីវិត។

                ទាំង ladybug ពេញវ័យ និងដង្កូវរបស់វា
                អាចប្រមាញ់ aphids និងសត្វល្អិតរាងទន់ផ្សេងៗ។

                ដោយសារតែនេះ ladybug ប្រភេទជាច្រើន
                ត្រូវបានចាត់ទុកថាមានប្រយោជន៍សម្រាប់កសិករ
                និងអ្នកថែសួនក្នុងការគ្រប់គ្រងសត្វល្អិត។
            `
        },

        {
            title: "ស្លាបដែលបត់លាក់នៅខាងក្នុង",
            text: `
                សំបកពណ៌ស្រស់នៅខាងក្រៅរបស់ ladybug
                គឺជាស្លាបខាងមុខរឹងដែលហៅថា elytra។

                នៅពេលវាត្រៀមហោះ សំបកទាំងពីរបើកចេញ
                ហើយបង្ហាញស្លាបថ្លាដែលស្ថិតនៅខាងក្រោម។

                បន្ទាប់ពីចុះចត ស្លាបទាំងនោះត្រូវបានបត់
                និងលាក់ទុកក្រោម elytra វិញ។
            `
        },

        {
            title: "ពណ៌សម្រាប់ព្រមាន",
            text: `
                ពណ៌ភ្លឺរបស់ ladybug ប្រភេទជាច្រើន
                គឺជាប្រភេទនៃពណ៌ព្រមានដែលហៅថា aposematism។

                ពណ៌ក្រហម ទឹកក្រូច ឬលឿងដែលមានលំនាំ
                ផ្ទុយគ្នា អាចជាសញ្ញាប្រាប់សត្វប្រមាញ់ថា
                វាអាចមានរសជាតិអាក្រក់ ឬមានសារធាតុការពារ។
            `
        },

        {
            title: "ការប្រមូលផ្តុំគ្នានៅរដូវត្រជាក់",
            text: `
                នៅពេលអាកាសធាតុត្រជាក់ ladybug ប្រភេទខ្លះ
                ប្រមូលផ្តុំគ្នាជាក្រុមធំៗក្រោមសំបកដើមឈើ
                ថ្ម ស្លឹក ឬកន្លែងដែលមានការការពារ។

                ការប្រមូលផ្តុំគ្នាអាចជួយកាត់បន្ថយការបាត់បង់កម្តៅ
                និងរក្សាសំណើមសមស្រប ខណៈជួយការពារពួកវា
                ពីបរិស្ថាន និងសត្វប្រមាញ់។
            `
        }
    ]
},

{
    name: "Scorpion",
    title: "THE ARMORED VENOM HUNTER: THE SCORPION",
    khmer: "ខ្យាដំរី",

    category: "Arachnids",
    image: "images/scorpion.jpg",

    quote: `
        An ancient night stalker combining crushing pincers,
        venomous tail stingers, UV fluorescence, and
        extraordinary metabolic survival.
    `,

    scientificName: `
        Scorpiones
    `,

    habitat: `
        Deserts, tropical rainforests, caves, grasslands,
        and high-altitude mountains across the world except Antarctica.
    `,

    status: `
        Least Concern 🟢
    `,

    lifespan: `
        2–6 years in the wild, with some larger species
        living 15–20 years in captivity.
    `,

    topSpeed: `
        Tail stinger strikes can hit a target in under
        100 milliseconds.
    `,

    description: `
        Scorpions are eight-legged predatory arachnids
        recognized by their powerful grasping pincers,
        segmented tails, and venomous stingers.

        Their pincers, called pedipalps, are used to grab
        and restrain prey, while the tail ends in a structure
        called the telson, which contains the venom apparatus.

        Scorpions are primarily nocturnal hunters and often
        rely heavily on vibrations detected through specialized
        sensory structures in their legs and body to locate prey
        in darkness.

        They are among the oldest terrestrial arthropod groups,
        with an evolutionary history stretching back hundreds
        of millions of years.
    `,

    funFacts: [
        {
            title: "Glow-in-the-Dark UV Fluorescence",
            text: `
                Scorpions can glow bright cyan-blue when exposed
                to ultraviolet light.

                Chemicals within their hardened exoskeleton
                absorb ultraviolet radiation and re-emit it as
                visible light.

                This fluorescence is one of the most recognizable
                characteristics of scorpions and can even remain
                detectable in preserved or fossilized material.
            `
        },

        {
            title: "Extreme Metabolic Survival",
            text: `
                Scorpions are extraordinarily efficient at
                conserving energy.

                Their metabolism can slow dramatically when food
                is scarce, allowing them to survive for long periods
                with very little food.

                When prey finally appears, they can rapidly switch
                back into hunting mode and attack almost immediately.
            `
        },

        {
            title: "Maternal Backpack Ride",
            text: `
                Female scorpions give birth to live young rather
                than laying eggs externally.

                After birth, the tiny offspring climb onto their
                mother's back and remain there for weeks.

                They stay with her while their soft bodies develop
                and their exoskeletons harden enough for independent
                survival.
            `
        },

        {
            title: "Pincer Size vs. Venom Strength",
            text: `
                In many scorpion species, there is a general
                relationship between pincer size and venom use.

                Species with large, powerful pincers often rely
                more heavily on mechanical crushing.

                Species with smaller pincers may rely more heavily
                on venom to quickly immobilize prey.

                This is a general pattern rather than a rule that
                applies perfectly to every species.
            `
        },

        {
            title: "Masters of Extreme Conditions",
            text: `
                Some scorpion species are remarkably tolerant
                of extreme environmental conditions.

                Certain species can survive very low temperatures
                and periods of freezing conditions by dramatically
                reducing their metabolic activity.

                Their ability to tolerate harsh environments helps
                explain why scorpions can inhabit deserts,
                mountains, forests, and other demanding habitats.
            `
        }
    ],

    khmerTitle: "អ្នកប្រមាញ់មានពិសដែលមានសំបកការពារ៖ ខ្យាដំរី",

    khmerQuote: `
        ជាអ្នកប្រមាញ់ពេលយប់ពីសម័យបុរាណ
        ដែលមានក្រញ៉ាំដ៏រឹងមាំ កន្ទុយមានទ្រនិចពិស
        និងសមត្ថភាពរស់រានមានជីវិតបានយូរ
        ទោះបីមានអាហារតិចក៏ដោយ។
    `,

    khmerDescription: `
        ខ្យាដំរីគឺជាសត្វអារ៉ាក់នីតដែលមានជើងប្រាំបី
        និងជាសត្វប្រមាញ់ដែលអាចសម្គាល់បានតាមរយៈ
        ក្រញ៉ាំសម្រាប់ចាប់ចំណី កន្ទុយដែលមានផ្នែកជាច្រើន
        និងទ្រនិចមានពិសនៅចុងកន្ទុយ។

        ក្រញ៉ាំរបស់វា ហៅថា pedipalps ប្រើសម្រាប់ចាប់
        និងទប់សត្វចំណី ខណៈចុងកន្ទុយដែលហៅថា telson
        មានប្រព័ន្ធបញ្ចេញពិស។

        ខ្យាដំរីភាគច្រើនប្រមាញ់នៅពេលយប់
        ហើយពឹងផ្អែកខ្លាំងលើការរកឃើញរំញ័រ
        ដើម្បីកំណត់ទីតាំងសត្វចំណីនៅក្នុងភាពងងឹត។

        វាជាក្រុមសត្វអារីត្រូផូដលើគោកដែលមានប្រវត្តិវិវត្តន៍
        ដ៏ចំណាស់បំផុតមួយនៅលើផែនដី។
    `,

    khmerFunFacts: [
        {
            title: "ភ្លឺនៅក្រោមពន្លឺ UV",
            text: `
                ខ្យាដំរីអាចបញ្ចេញពន្លឺពណ៌ខៀវបៃតង
                នៅពេលត្រូវពន្លឺអ៊ុលត្រាវីយូឡេត (UV)។

                សារធាតុគីមីនៅក្នុងសំបករឹងរបស់វា
                ស្រូបពន្លឺ UV ហើយបញ្ចេញវាឡើងវិញ
                ជាពន្លឺដែលភ្នែកមនុស្សអាចមើលឃើញ។

                លក្ខណៈនេះគឺជារឿងដ៏គួរឱ្យចាប់អារម្មណ៍
                មួយរបស់ខ្យាដំរី។
            `
        },

        {
            title: "សមត្ថភាពរស់នៅដោយប្រើថាមពលតិច",
            text: `
                ខ្យាដំរីអាចរក្សាថាមពលក្នុងរាងកាយបានយ៉ាងមានប្រសិទ្ធភាព។

                នៅពេលខ្វះអាហារ វាអាចបន្ថយអត្រាមេតាបូលីស
                យ៉ាងខ្លាំង ហើយរស់នៅបានយូរ
                ទោះបីមានអាហារតិចក៏ដោយ។

                នៅពេលមានសត្វចំណី វាអាចត្រឡប់ទៅសកម្មភាពប្រមាញ់
                បានយ៉ាងឆាប់រហ័ស។
            `
        },

        {
            title: "កូនជិះលើខ្នងម្តាយ",
            text: `
                ខ្យាដំរីញីផ្តល់កំណើតឱ្យកូនជាខ្យាដំរីតូចៗ
                ជំនួសឱ្យការដាក់ពងនៅខាងក្រៅ។

                បន្ទាប់ពីកើត កូនខ្យាដំរីឡើងទៅលើខ្នងម្តាយ
                ហើយនៅទីនោះអស់រយៈពេលជាច្រើនសប្តាហ៍។

                វានៅជាមួយម្តាយរហូតដល់រាងកាយ
                និងសំបករបស់វារឹងមាំគ្រប់គ្រាន់។
            `
        },

        {
            title: "ក្រញ៉ាំធំ និងកម្លាំងពិស",
            text: `
                ខ្យាដំរីប្រភេទជាច្រើនមានទំនាក់ទំនងរវាង
                ទំហំក្រញ៉ាំ និងការប្រើប្រាស់ពិស។

                ប្រភេទដែលមានក្រញ៉ាំធំ និងរឹងមាំ
                ជាញឹកញាប់ពឹងផ្អែកលើកម្លាំងក្រញ៉ាំ
                ដើម្បីកម្ចាត់សត្វចំណី។

                ប្រភេទដែលមានក្រញ៉ាំតូចជាង
                អាចពឹងផ្អែកខ្លាំងលើពិស
                ដើម្បីធ្វើឱ្យសត្វចំណីមិនអាចរើខ្លួនបាន។
            `
        },

        {
            title: "អ្នករស់រានមានជីវិតក្នុងបរិស្ថានខ្លាំង",
            text: `
                ខ្យាដំរីប្រភេទខ្លះមានសមត្ថភាពទ្រាំទ្រ
                នឹងលក្ខខណ្ឌបរិស្ថានដ៏លំបាកបានយ៉ាងល្អ។

                ប្រភេទខ្លះអាចទ្រាំទ្រនឹងសីតុណ្ហភាពទាប
                និងលក្ខខណ្ឌត្រជាក់ខ្លាំងបាន។

                សមត្ថភាពនេះជួយពន្យល់ថា
                ហេតុអ្វីខ្យាដំរីអាចរស់នៅក្នុងវាលខ្សាច់
                ភ្នំ ព្រៃឈើ និងបរិស្ថានដ៏លំបាកផ្សេងៗ។
            `
        }
    ]
},

{
    name: "Tarantula",
    title: "THE SILENT GIANT OF THE ARACHNIDS: THE TARANTULA",
    khmer: "តារ៉ង់ទូឡា",

    category: "Arachnids",
    image: "images/tarantula.jpg",

    quote: `
        The heavyweight champ of the spider world, combining
        hairy defenses, specialized strike fangs, and
        remarkable longevity.
    `,

    scientificName: `
        Theraphosidae
    `,

    habitat: `
        Rainforests, scrublands, deserts, and burrows across
        North and South America, Africa, Asia, and Australia.
    `,

    status: `
        Varies by species. Most wild populations are
        Least Concern 🟢, while some species are Vulnerable
        or Endangered 🔴.
    `,

    lifespan: `
        Females: 15–30+ years.
        Males: 3–10 years.
    `,

    topSpeed: `
        Uses rapid downward strikes to capture prey.
    `,

    description: `
        Tarantulas are large, hairy arachnids belonging to the
        family Theraphosidae and the spider lineage
        Mygalomorphae.

        Unlike many modern spiders whose fangs move toward each
        other like pincers, tarantula fangs point downward.
        They use powerful downward strikes to subdue prey.

        New World tarantulas from the Americas commonly possess
        irritating defensive hairs, while Old World tarantulas
        from Africa, Asia, and Europe generally lack this
        particular hair defense and may have stronger venom.

        Despite their intimidating appearance, tarantulas are
        generally reclusive predators that spend much of their
        time hiding in burrows or sheltered environments.
    `,

    funFacts: [
        {
            title: "Urticating Hair Missiles",
            text: `
                Many New World tarantulas have a remarkable
                defensive mechanism.

                When threatened, they can use their hind legs
                to kick thousands of tiny barbed hairs called
                urticating hairs from their abdomen.

                These hairs can irritate the skin, eyes, and
                respiratory passages of potential predators.
            `
        },

        {
            title: "Silk-Producing Feet",
            text: `
                Tarantulas primarily produce silk using spinnerets
                on their abdomen.

                Some tarantulas can also produce silk from
                specialized structures on their feet.

                These silk threads can help provide traction
                while climbing smooth or vertical surfaces.
            `
        },

        {
            title: "Decades of Longevity",
            text: `
                Female tarantulas can live for decades,
                particularly under favorable captive conditions.

                Because tarantulas continue molting throughout
                much of their lives, they can also regenerate
                damaged or lost limbs during subsequent molts.

                A regenerated leg may initially be smaller
                before becoming more developed through later molts.
            `
        },

        {
            title: "Usually Not Dangerous to Humans",
            text: `
                Despite their frightening reputation,
                tarantula bites are generally not considered
                life-threatening to healthy humans.

                Many New World species have relatively mild venom,
                although their bites can still be painful.

                Some Old World tarantulas possess stronger venom
                and their bites can cause significant pain,
                muscle cramping, or other unpleasant symptoms.
            `
        },

        {
            title: "Frog Roommates",
            text: `
                Some tarantulas have been observed living alongside
                tiny frogs in their burrows.

                In certain relationships, the frog may eat small
                insects that could otherwise threaten the spider's
                eggs, while the tarantula provides protection
                within its burrow.

                This unusual relationship is an example of
                cooperation between two very different animals.
            `
        }
    ],

    khmerTitle: "យក្សស្ងាត់នៃពិភពអារ៉ាក់នីត៖ តារ៉ង់ទូឡា",

    khmerQuote: `
        ជាយក្សនៃពិភពសត្វពីងពាង ដែលមានសក់ការពារ
        ចង្កូមពិសេសសម្រាប់វាយប្រហារ
        និងអាយុជីវិតដ៏យូរអស្ចារ្យ។
    `,

    khmerDescription: `
        តារ៉ង់ទូឡាគឺជាសត្វអារ៉ាក់នីតដែលមានទំហំធំ
        មានរោម និងស្ថិតក្នុងគ្រួសារ Theraphosidae។

        ខុសពីសត្វពីងពាងទំនើបជាច្រើនដែលចង្កូមរបស់វា
        ផ្លាស់ទីចូលគ្នាដូចកន្ត្រៃ ចង្កូមរបស់តារ៉ង់ទូឡា
        បែរចុះក្រោម ហើយវាប្រើការវាយចុះក្រោម
        ដើម្បីចាប់ និងកម្ចាត់សត្វចំណី។

        តារ៉ង់ទូឡាពិភពថ្មីដែលរស់នៅអាមេរិក
        ប្រភេទជាច្រើនមានរោមការពារដែលអាចបង្កការរលាក។

        តារ៉ង់ទូឡាពិភពចាស់ដែលរស់នៅអាហ្វ្រិក អាស៊ី
        និងអឺរ៉ុប ជាទូទៅមិនមានការការពារដោយរោមប្រភេទនេះទេ
        ហើយប្រភេទខ្លះមានពិសខ្លាំងជាង។
    `,

    khmerFunFacts: [
        {
            title: "រោមការពារដែលអាចបាញ់បាន",
            text: `
                តារ៉ង់ទូឡាពិភពថ្មីប្រភេទជាច្រើន
                មានវិធីការពារដ៏គួរឱ្យចាប់អារម្មណ៍។

                នៅពេលមានគ្រោះថ្នាក់ វាអាចប្រើជើងខាងក្រោយ
                កកិតរោមតូចៗដែលមានកន្ទុយមុត
                ចេញពីផ្នែកពោះរបស់វា។

                រោមទាំងនេះអាចធ្វើឱ្យស្បែក ភ្នែក
                និងផ្លូវដង្ហើមរបស់សត្វប្រមាញ់រលាក។
            `
        },

        {
            title: "ជើងដែលអាចបង្កើតសរសៃសូត្រ",
            text: `
                តារ៉ង់ទូឡាផលិតសរសៃសូត្រជាចម្បង
                តាមរយៈ spinnerets នៅផ្នែកពោះ។

                តារ៉ង់ទូឡាប្រភេទខ្លះក៏អាចបង្កើតសរសៃសូត្រ
                ពីរចនាសម្ព័ន្ធពិសេសនៅបាតជើងផងដែរ។

                សរសៃទាំងនេះអាចជួយបង្កើនការកាន់ជាប់
                នៅពេលឡើងលើផ្ទៃរលោង ឬផ្ទៃបញ្ឈរ។
            `
        },

        {
            title: "អាយុជីវិតរាប់ទសវត្សរ៍",
            text: `
                តារ៉ង់ទូឡាញីអាចរស់នៅបានរាប់ទសវត្សរ៍
                ជាពិសេសនៅក្នុងលក្ខខណ្ឌចិញ្ចឹមដែលសមស្រប។

                ដោយសារវានៅតែប្តូរសំបកពេញមួយជីវិត
                វាអាចបង្កើតជើងដែលខូច ឬបាត់ឡើងវិញ
                ក្នុងអំឡុងពេលប្តូរសំបក។

                ជើងដែលដុះឡើងវិញដំបូងអាចតូចជាងធម្មតា
                ហើយអភិវឌ្ឍបន្ថែមតាមការប្តូរសំបកបន្ទាប់ៗ។
            `
        },

        {
            title: "ជាទូទៅមិនមានគ្រោះថ្នាក់ធ្ងន់ដល់មនុស្ស",
            text: `
                ទោះបីតារ៉ង់ទូឡាមើលទៅគួរឱ្យខ្លាចក៏ដោយ
                ការខាំរបស់វាជាទូទៅមិនបង្កគ្រោះថ្នាក់ដល់ជីវិត
                មនុស្សដែលមានសុខភាពល្អទេ។

                តារ៉ង់ទូឡាពិភពថ្មីជាច្រើនមានពិសកម្រិតស្រាល
                ប៉ុន្តែការខាំនៅតែអាចឈឺចាប់។

                តារ៉ង់ទូឡាពិភពចាស់ប្រភេទខ្លះមានពិសខ្លាំងជាង
                ហើយការខាំអាចបណ្តាលឱ្យឈឺចាប់ខ្លាំង
                និងរមួលសាច់ដុំ។
            `
        },

        {
            title: "មិត្តរួមផ្ទះជាកង្កែប",
            text: `
                តារ៉ង់ទូឡាប្រភេទខ្លះត្រូវបានគេសង្កេតឃើញ
                រស់នៅជាមួយកង្កែបតូចៗក្នុងរូងរបស់វា។

                ក្នុងទំនាក់ទំនងប្រភេទនេះ កង្កែបអាចស៊ីសត្វល្អិតតូចៗ
                ដែលអាចបង្កគ្រោះថ្នាក់ដល់ពងរបស់សត្វពីងពាង
                ខណៈតារ៉ង់ទូឡាផ្តល់ការការពារដល់កង្កែប
                នៅក្នុងរូងរបស់វា។

                នេះជាឧទាហរណ៍គួរឱ្យចាប់អារម្មណ៍
                នៃការរស់នៅរួមគ្នារវាងសត្វពីរប្រភេទខុសគ្នា។
            `
        }
    ]
},

{
    name: "Black Widow",
    title: "THE POTENT WEAVER OF WARNINGS: THE BLACK WIDOW",
    khmer: "សត្វពីងពាងមេម៉ាយខ្មៅ",

    category: "Arachnids",
    image: "images/black widow.jpg",

    quote: `
        Nature's famous venomous architect, combining glossy
        black coloration, warning markings, and powerful
        neurotoxic venom.
    `,

    scientificName: `
        Latrodectus
    `,

    habitat: `
        Temperate and tropical regions across North and South
        America, Southern Europe, Africa, Asia, and Australia.
    `,

    status: `
        Least Concern 🟢
    `,

    lifespan: `
        Females: 1–3 years.
        Males: 1–4 months.
    `,

    topSpeed: `
        Relies primarily on web construction and rapid
        defensive responses rather than high-speed pursuit.
    `,

    description: `
        Black widow spiders are comb-footed web-building spiders
        belonging to the family Theridiidae.

        Adult females are famous for their glossy black bodies
        and distinctive red or orange hourglass marking on the
        underside of the abdomen.

        Males and juveniles look very different. They are smaller,
        generally lighter in color, and often have stripes or spots.

        Black widows construct irregular, tangled webs in dark,
        sheltered locations such as woodpiles, sheds, and
        protected cracks.

        They use their silk webs to capture prey before
        immobilizing it with venom.
    `,

    funFacts: [
        {
            title: "The Cannibal Myth Is Overblown",
            text: `
                The name "Black Widow" comes from the famous belief
                that females always eat the male after mating.

                This behavior can occur, particularly under certain
                stressful conditions, but it is not inevitable.

                Wild males may escape after mating, and mating
                behavior varies among different Latrodectus species.
            `
        },

        {
            title: "Powerful Neurotoxic Venom",
            text: `
                Black widow venom contains a powerful neurotoxin
                called alpha-latrotoxin.

                Rather than primarily destroying tissue, the venom
                interferes with the nervous system and can trigger
                excessive neurotransmitter release.

                This can result in severe muscle pain and cramping,
                abdominal discomfort, sweating, and an increased
                heart rate.
            `
        },

        {
            title: "Extremely Reluctant Biters",
            text: `
                Black widows are generally shy spiders and usually
                avoid confrontation with larger animals.

                They typically bite when they are accidentally
                trapped, pressed, or threatened.

                This is why bites are more likely to occur when a
                spider is accidentally trapped inside clothing,
                shoes, gloves, or another confined space.
            `
        },

        {
            title: "The Comb-Footed Web",
            text: `
                Black widows have specialized curved bristles
                on their hind legs called a comb foot.

                They use these structures to pull and throw silk
                around struggling prey.

                This allows the spider to immobilize prey with
                silk before approaching closely enough to deliver
                a venomous bite.
            `
        },

        {
            title: "Extreme Sexual Dimorphism",
            text: `
                Female black widows are dramatically larger and
                heavier than males.

                Females have the familiar large black abdomen,
                while males are much smaller and usually have
                lighter coloration with stripes or spots.

                Their different body sizes and appearances are
                an excellent example of sexual dimorphism.
            `
        }
    ],

    khmerTitle: "អ្នកតម្បាញដ៏មានពិសនៃពិភពអារ៉ាក់នីត៖ សត្វពីងពាងមេម៉ាយខ្មៅ",

    khmerQuote: `
        ជាអ្នកតម្បាញដែលមានពិសដ៏ល្បីល្បាញក្នុងធម្មជាតិ
        ដែលមានរាងកាយពណ៌ខ្មៅភ្លឺ សញ្ញាព្រមានពណ៌ក្រហម
        និងពិសដែលមានឥទ្ធិពលលើប្រព័ន្ធប្រសាទ។
    `,

    khmerDescription: `
        សត្វពីងពាងមេម៉ាយខ្មៅគឺជាសត្វពីងពាងដែលត្បាញសំណាញ់
        ហើយស្ថិតក្នុងគ្រួសារ Theridiidae។

        សត្វញីពេញវ័យមានរាងកាយពណ៌ខ្មៅភ្លឺ
        និងមានសញ្ញារាងនាឡិកាខ្សាច់ពណ៌ក្រហម ឬទឹកក្រូច
        នៅផ្នែកខាងក្រោមនៃពោះ។

        សត្វឈ្មោល និងសត្វវ័យក្មេងមានរូបរាងខុសគ្នាយ៉ាងច្រើន។
        ពួកវាមានទំហំតូចជាង និងជាទូទៅមានពណ៌ស្រាល
        ជាមួយឆ្នូត ឬចំណុច។

        ពួកវាត្បាញសំណាញ់ដែលមានរាងរញ៉េរញ៉ៃ
        នៅកន្លែងងងឹត និងមានការការពារ
        ដូចជា គំនរឈើ រោង ឬរន្ធតូចៗ។

        សំណាញ់ត្រូវបានប្រើសម្រាប់ចាប់សត្វចំណី
        មុនពេលប្រើពិសដើម្បីធ្វើឱ្យសត្វចំណីមិនអាចរើខ្លួនបាន។
    `,

    khmerFunFacts: [
        {
            title: "រឿងព្រេងអំពីការស៊ីសត្វឈ្មោល",
            text: `
                ឈ្មោះ "Black Widow" មានប្រភពពីជំនឿដ៏ល្បីថា
                សត្វញីតែងតែស៊ីសត្វឈ្មោលបន្ទាប់ពីការរួមភេទ។

                ប៉ុន្តែអាកប្បកិរិយានេះមិនកើតឡើងគ្រប់ពេលទេ។

                សត្វឈ្មោលនៅក្នុងធម្មជាតិអាចរួចផុតពីសត្វញី
                បន្ទាប់ពីការរួមភេទ ហើយអាកប្បកិរិយារួមភេទ
                ក៏ខុសគ្នាតាមប្រភេទ Latrodectus ផងដែរ។
            `
        },

        {
            title: "ពិសដែលមានឥទ្ធិពលលើប្រព័ន្ធប្រសាទ",
            text: `
                ពិសរបស់ Black Widow មានសារធាតុ neurotoxin
                ដ៏ខ្លាំងមួយហៅថា alpha-latrotoxin។

                ពិសនេះមានឥទ្ធិពលលើប្រព័ន្ធប្រសាទ
                និងអាចធ្វើឱ្យសារធាតុបញ្ជូនសញ្ញាប្រសាទ
                ត្រូវបានបញ្ចេញក្នុងបរិមាណច្រើន។

                វាអាចបណ្តាលឱ្យឈឺសាច់ដុំខ្លាំង
                រមួលសាច់ដុំ ឈឺពោះ បែកញើស
                និងបេះដូងលោតលឿន។
            `
        },

        {
            title: "មិនងាយខាំមនុស្សទេ",
            text: `
                Black Widow ជាទូទៅជាសត្វពីងពាងដែលខ្លាច
                និងចូលចិត្តជៀសវាងការប្រឈមមុខជាមួយសត្វធំៗ។

                វាជាទូទៅខាំនៅពេលវាត្រូវបានជាប់
                ត្រូវបានសង្កត់ ឬមានអារម្មណ៍ថាត្រូវគំរាមកំហែង។

                ដូច្នេះការខាំអាចកើតឡើងនៅពេលសត្វពីងពាង
                ត្រូវបានជាប់ក្នុងស្បែកជើង ស្រោមដៃ
                ឬសម្លៀកបំពាក់។
            `
        },

        {
            title: "ជើងសម្រាប់តម្បាញសំណាញ់",
            text: `
                Black Widow មានរោមកោងពិសេសនៅជើងខាងក្រោយ
                ដែលហៅថា comb foot។

                វាប្រើជើងទាំងនេះដើម្បីទាញ និងបោះសរសៃសូត្រ
                ជុំវិញសត្វចំណីដែលកំពុងតស៊ូ។

                វាអាចធ្វើឱ្យសត្វចំណីជាប់សរសៃសូត្រ
                មុនពេលចូលទៅជិត និងចាក់ពិស។
            `
        },

        {
            title: "ភាពខុសគ្នារវាងឈ្មោល និងញី",
            text: `
                Black Widow ញីមានទំហំ និងទម្ងន់ធំជាង
                Black Widow ឈ្មោលយ៉ាងច្រើន។

                សត្វញីមានពោះធំ និងពណ៌ខ្មៅដែលគេស្គាល់ច្បាស់
                ខណៈសត្វឈ្មោលមានទំហំតូចជាង
                និងជាទូទៅមានពណ៌ស្រាលជាមួយឆ្នូត ឬចំណុច។

                នេះគឺជាឧទាហរណ៍ដ៏ច្បាស់នៃ
                sexual dimorphism ក្នុងសត្វ។
            `
        }
    ]
},

{
    name: "Jumping Spider",
    title: "THE ACROBATIC HIGH-DEF HUNTER: THE JUMPING SPIDER",
    khmer: "សត្វពីងពាងលោត",

    category: "Arachnids",
    image: "images/jumping-spider.jpg",

    quote: `
        Nature's curious micro-acrobat, combining high-resolution
        vision, powerful jumping abilities, and complex
        courtship dances.
    `,

    scientificName: `
        Salticidae
    `,

    habitat: `
        Tropical forests, deserts, temperate woodlands,
        mountains, and gardens worldwide except Antarctica.
    `,

    status: `
        Least Concern 🟢
    `,

    lifespan: `
        Around 1–3 years.
    `,

    topSpeed: `
        Can leap 10–50 times their own body length
        in a single jump.
    `,

    description: `
        Jumping spiders are small to medium-sized active hunters
        belonging to the family Salticidae.

        They are recognized by their compact bodies and four
        forward-facing eyes, including two enormous central eyes
        that give them an unusually expressive appearance.

        Unlike spiders that depend on capture webs, jumping spiders
        actively stalk prey during daylight hours.

        They use their excellent vision to judge distances,
        track movement, and accurately pounce on insects.
    `,

    funFacts: [
        {
            title: "Hydraulic-Powered Leap",
            text: `
                Jumping spiders can perform remarkable leaps
                without relying entirely on large leg muscles.

                They rapidly alter hemolymph pressure inside their
                bodies, helping extend their legs and launch them
                through the air.

                This allows some species to jump many times
                their own body length.
            `
        },

        {
            title: "Safety Dragline Tether",
            text: `
                Before jumping, a jumping spider commonly attaches
                a silk safety line to the surface.

                If the spider misses its target or loses its balance,
                the silk dragline can help prevent a dangerous fall.

                It functions much like a tiny biological safety rope.
            `
        },

        {
            title: "Telephoto High-Definition Vision",
            text: `
                The two large principal eyes are highly specialized
                for detailed vision.

                Their internal retinas can move, allowing the spider
                to examine objects and detect movement with impressive
                precision.

                This exceptional eyesight helps jumping spiders
                accurately locate and attack prey.
            `
        },

        {
            title: "Elaborate Tap-Dance Courtship",
            text: `
                Male jumping spiders perform elaborate courtship
                displays to attract females.

                Depending on the species, males may wave their
                brightly colored legs, display their chelicerae,
                move their bodies, and produce vibrations through
                the surface beneath them.

                These displays help communicate identity and
                reproductive fitness.
            `
        },

        {
            title: "Surprising Intelligence & Planning",
            text: `
                Experiments suggest that some jumping spiders
                can plan routes toward prey.

                They may visually inspect a target, move away from
                it, navigate around an obstacle, and eventually
                approach the prey from an appropriate direction.

                This ability is remarkable for an animal with such
                a tiny nervous system.
            `
        }
    ],

    khmerTitle: "អ្នកប្រមាញ់លោតដែលមានភ្នែកច្បាស់បំផុត៖ សត្វពីងពាងលោត",

    khmerQuote: `
        ជាអ្នកកាយសម្ព័ន្ធខ្នាតតូចដ៏ចង់ដឹងចង់ឃើញ
        ដែលមានសមត្ថភាពមើលឃើញលម្អិតខ្ពស់
        លោតបានឆ្ងាយ និងមានពិធីទាក់ទាញគូដ៏ស្មុគស្មាញ។
    `,

    khmerDescription: `
        សត្វពីងពាងលោតគឺជាសត្វពីងពាងដែលមានទំហំតូច
        ឬមធ្យម និងជាអ្នកប្រមាញ់សកម្ម
        ដែលស្ថិតក្នុងគ្រួសារ Salticidae។

        វាអាចសម្គាល់បានតាមរយៈរាងកាយតូចរឹងមាំ
        និងភ្នែកបួនដែលបែរមុខទៅខាងមុខ
        ជាពិសេសភ្នែកកណ្តាលពីរដែលមានទំហំធំ។

        ខុសពីសត្វពីងពាងដែលពឹងផ្អែកលើសំណាញ់
        សម្រាប់ចាប់សត្វចំណី សត្វពីងពាងលោត
        ប្រមាញ់សត្វចំណីដោយដើរតាម និងលោតចាប់
        ជាពិសេសនៅពេលថ្ងៃ។

        វាពឹងផ្អែកយ៉ាងខ្លាំងលើការមើលឃើញ
        ដើម្បីវាស់ចម្ងាយ តាមដានចលនា
        និងលោតចាប់សត្វល្អិតយ៉ាងត្រឹមត្រូវ។
    `,

    khmerFunFacts: [
        {
            title: "ការលោតដោយប្រើសម្ពាធក្នុងរាងកាយ",
            text: `
                សត្វពីងពាងលោតអាចលោតបានយ៉ាងអស្ចារ្យ
                ដោយមិនពឹងផ្អែកតែលើសាច់ដុំជើងធំៗទេ។

                វាអាចផ្លាស់ប្តូរសម្ពាធ hemolymph
                នៅក្នុងរាងកាយយ៉ាងលឿន
                ដែលជួយឱ្យជើងលាត និងបាញ់ខ្លួនទៅមុខ។

                ប្រភេទខ្លះអាចលោតបានចម្ងាយ
                ច្រើនដងនៃប្រវែងរាងកាយរបស់វា។
            `
        },

        {
            title: "ខ្សែសុវត្ថិភាពពីសរសៃសូត្រ",
            text: `
                មុនពេលលោត សត្វពីងពាងលោតជាទូទៅ
                ភ្ជាប់សរសៃសូត្រតូចមួយទៅនឹងផ្ទៃដែលវាឈរ។

                ប្រសិនបើវាខកខានគោលដៅ ឬបាត់លំនឹង
                ខ្សែសូត្រនេះអាចជួយទប់វាពីការធ្លាក់ខ្លាំង។

                វាមានតួនាទីដូចជាខ្សែសុវត្ថិភាពតូចមួយ
                របស់សត្វពីងពាង។
            `
        },

        {
            title: "ភ្នែកច្បាស់បែបកាមេរ៉ា Telephoto",
            text: `
                ភ្នែកកណ្តាលធំពីររបស់វាមានរចនាសម្ព័ន្ធ
                ពិសេសសម្រាប់ការមើលឃើញលម្អិត។

                រីទីណាខាងក្នុងអាចផ្លាស់ទីបាន
                ដែលអនុញ្ញាតឱ្យវាពិនិត្យមើលវត្ថុ
                និងរកឃើញចលនាបានយ៉ាងច្បាស់។

                ការមើលឃើញដ៏អស្ចារ្យនេះជួយឱ្យវា
                កំណត់ទីតាំង និងវាយប្រហារសត្វចំណី។
            `
        },

        {
            title: "ការរាំ និងបង្កើតរំញ័រដើម្បីរកគូ",
            text: `
                សត្វពីងពាងលោតឈ្មោលធ្វើការបង្ហាញ
                ដ៏ស្មុគស្មាញដើម្បីទាក់ទាញសត្វញី។

                អាស្រ័យលើប្រភេទ វាអាចគ្រវីជើងដែលមានពណ៌ស្រស់
                បង្ហាញ chelicerae ផ្លាស់ទីរាងកាយ
                និងបង្កើតរំញ័រតាមផ្ទៃដែលវាឈរ។

                ការបង្ហាញទាំងនេះជួយបញ្ជាក់អត្តសញ្ញាណ
                និងសមត្ថភាពក្នុងការបន្តពូជ។
            `
        },

        {
            title: "ភាពឆ្លាត និងការរៀបចំផែនការ",
            text: `
                ការពិសោធន៍មួយចំនួនបង្ហាញថា
                សត្វពីងពាងលោតប្រភេទខ្លះ
                អាចរៀបចំផ្លូវដើម្បីទៅរកសត្វចំណី។

                វាអាចមើលគោលដៅ បន្ទាប់មកដើរចេញពីគោលដៅ
                ឆ្លងកាត់ឧបសគ្គ ហើយចុងក្រោយទៅដល់សត្វចំណី
                ពីទិសដៅដែលសមស្រប។

                សមត្ថភាពនេះគួរឱ្យចាប់អារម្មណ៍ខ្លាំង
                សម្រាប់សត្វដែលមានប្រព័ន្ធប្រសាទតូចបែបនេះ។
            `
        }
    ]
},

{
    name: "Orb-Weaver Spider",
    title: "THE MASTER ARCHITECT OF SILK: THE ORB-WEAVER SPIDER",

    category: "Arachnids",

    image: "images/orb-weaver-spider.jpg",

    quote: "Nature's geometric engineer—combining classic wheel-shaped web designs, daily silk recycling, and intricate UV-reflective decorations.",

    scientificName: "Araneidae (Over 3,100 species across 180+ genera)",

    habitat: "Gardens, forests, fields, orchards, and tall grass structures across every continent except Antarctica",

    status: "Least Concern 🟢",

    lifespan: "Around 1 year",

    topSpeed: "Can build a complete, complex spiral web in about 30–60 minutes",

    description: "Orb-weavers are the quintessential web-spinning spiders responsible for creating the iconic circular, wheel-shaped webs seen in gardens and forests. They typically feature large, swollen abdomens with striking colors and patterns, ranging from bright yellow and black Argiope spiders to spiky, crab-like Gasteracantha species. Most orb-weavers sit in the center of their web or hide nearby while holding a tension signal line.",

    funFacts: [
        {
            title: "Daily Web Recycling",
            text: "Many orb-weavers tear down and reconstruct their entire web every night or morning. To save energy, they eat the old silk and digest its proteins and amino acids, allowing their silk glands to recycle the materials into new web lines."
        },

        {
            title: "The Mysterious Web Decorator",
            text: "Species such as the Yellow Garden Spider add a thick zigzag band of silk called a stabilimentum to their webs. Scientists believe it may help warn birds, attract insects through UV reflection, or disguise the spider from predators."
        },

        {
            title: "Selective Sticky Threads",
            text: "Orb-weavers do not stick to every part of their own webs. The spiral capture threads contain sticky glue droplets, while many structural radial threads and the center hub remain dry. The spider carefully moves across these non-sticky sections."
        },

        {
            title: "Extreme Web Strength",
            text: "Orb-weaver dragline silk combines impressive tensile strength with elasticity. This allows the web to stretch and absorb the impact energy of flying insects such as beetles and grasshoppers without immediately breaking."
        },

        {
            title: "Nighttime Stealth Rebuilders",
            text: "Many nocturnal orb-weaver species hide under bark or inside folded leaves during the daytime. They build their large circular webs after dark and some completely remove them before sunrise."
        }
    ],

    khmerTitle: "អ្នកស្ថាបនាសំណាញ់សូត្រដ៏អស្ចារ្យ៖ សត្វពីងពាង Orb-Weaver",

    khmerQuote: "វិស្វករធរណីមាត្រនៃធម្មជាតិ ដែលមានសមត្ថភាពបង្កើតសំណាញ់រាងកង់ដ៏ស្មុគស្មាញ កែច្នៃសរសៃសូត្រចាស់ និងបង្កើតការតុបតែងសំណាញ់ដែលអាចឆ្លុះពន្លឺ UV។",

    khmerScientificName: "Araneidae (មានជាង 3,100 ប្រភេទ និងជាង 180 អំបូរ)",

    khmerHabitat: "សួនច្បារ ព្រៃឈើ វាលស្មៅ ចម្ការ និងតំបន់ដែលមានស្មៅខ្ពស់ នៅស្ទើរតែគ្រប់ទ្វីប លើកលែងតែអង់តាក់ទិក",

    khmerStatus: "មិនស្ថិតក្នុងហានិភ័យ 🟢",

    khmerLifespan: "ប្រហែល 1 ឆ្នាំ",

    khmerTopSpeed: "អាចបង្កើតសំណាញ់រាងវង់ដ៏ស្មុគស្មាញមួយក្នុងរយៈពេលប្រហែល 30–60 នាទី",

    khmerDescription: "សត្វពីងពាង Orb-Weaver គឺជាសត្វពីងពាងដែលល្បីល្បាញដោយសារការបង្កើតសំណាញ់រាងរង្វង់ដូចកង់ ដែលអាចឃើញនៅក្នុងសួនច្បារ និងព្រៃឈើ។ ជាទូទៅ វាមានពោះធំ និងមូល ជាមួយពណ៌និងលំនាំគួរឱ្យចាប់អារម្មណ៍។ ប្រភេទខ្លះមានពណ៌លឿងនិងខ្មៅដ៏ស្រស់ស្អាត ខណៈប្រភេទផ្សេងទៀតមានរាងដូចសត្វក្តាមដែលមានបន្លា។",

    khmerFunFacts: [
        {
            title: "ការកែច្នៃសំណាញ់សូត្រចាស់",
            text: "សត្វពីងពាង Orb-Weaver ជាច្រើនប្រភេទរុះរើ និងបង្កើតសំណាញ់របស់ខ្លួនឡើងវិញជារៀងរាល់យប់ ឬពេលព្រឹក។ ដើម្បីសន្សំថាមពល វាអាចស៊ីសរសៃសូត្រចាស់ ហើយរំលាយប្រូតេអ៊ីន និងអាស៊ីតអាមីណូ ដើម្បីយកមកប្រើសម្រាប់ផលិតសរសៃសូត្រថ្មី។"
        },

        {
            title: "អ្នកតុបតែងសំណាញ់ដ៏អាថ៌កំបាំង",
            text: "ប្រភេទខ្លះ ដូចជា Yellow Garden Spider បង្កើតខ្សែសូត្រក្រាស់រាង zigzag នៅលើសំណាញ់ ដែលហៅថា stabilimentum។ អ្នកវិទ្យាសាស្ត្រសន្មតថា វាអាចជួយព្រមានសត្វបក្សី ទាក់ទាញសត្វល្អិតតាមរយៈការឆ្លុះពន្លឺ UV ឬជួយបំបាំងសត្វពីងពាងពីសត្វមំសាសី។"
        },

        {
            title: "សរសៃស្អិត និងសរសៃមិនស្អិត",
            text: "សត្វពីងពាង Orb-Weaver មិនជាប់នឹងគ្រប់ផ្នែកនៃសំណាញ់របស់ខ្លួនទេ។ សរសៃរាងវង់ដែលប្រើសម្រាប់ចាប់សត្វចំណីមានដំណក់កាវស្អិត ខណៈសរសៃរចនាសម្ព័ន្ធ និងផ្នែកកណ្តាលជាច្រើនមិនស្អិត។ សត្វពីងពាងដើរយ៉ាងប្រុងប្រយ័ត្នតាមផ្នែកដែលមិនស្អិតទាំងនេះ។"
        },

        {
            title: "សរសៃសូត្រដ៏រឹងមាំ",
            text: "សរសៃសូត្ររបស់ Orb-Weaver មានទាំងភាពរឹងមាំ និងភាពយឺត។ វាអាចលាតសន្ធឹង និងស្រូបយកថាមពលពីសត្វល្អិតដែលហោះមកបុកសំណាញ់ ដូចជា beetles និង grasshoppers ដោយមិនងាយដាច់ភ្លាមៗ។"
        },

        {
            title: "អ្នកបង្កើតសំណាញ់នៅពេលយប់",
            text: "សត្វពីងពាង Orb-Weaver ដែលសកម្មនៅពេលយប់ជាច្រើនប្រភេទ លាក់ខ្លួនក្រោមសំបកឈើ ឬក្នុងស្លឹកដែលបត់នៅពេលថ្ងៃ។ ពួកវាបង្កើតសំណាញ់រាងរង្វង់ធំរបស់ខ្លួននៅពេលយប់ ហើយប្រភេទខ្លះរុះរើសំណាញ់ចេញទាំងស្រុងមុនពេលថ្ងៃរះ។"
        }
    ]
},



];

animals = animals.filter(animal => animal.name !== "Spider");
const khmerNameFixes = {
    "Ladybug": "សត្វអណ្ដើកមាស",
    "Cockroach": "សត្វកន្លាត",
    "Housefly": "សត្វរុយ"
    
};

animals.forEach(animal => {
    if (khmerNameFixes[animal.name]) {
        animal.khmer = khmerNameFixes[animal.name];
    }
});


const animalInfo = document.getElementById("animalInfo");
const animalModal = document.getElementById("animalModal");
const closeModal = document.getElementById("closeModal");


const categoryContainers = {
    Mammals: document.getElementById("mammals"),
    Birds: document.getElementById("birds"),
    Reptiles: document.getElementById("reptiles"),
    Aquatic: document.getElementById("aquatic"),
    Insects: document.getElementById("insects"),
    Arachnids: document.getElementById("arachnids"),
    Amphibians: document.getElementById("amphibians")
};

closeModal.onclick = function() {
    animalModal.style.display = "none";
};


animalModal.onclick = function(event) {

    if (event.target === animalModal) {
        animalModal.style.display = "none";
    }

};

function getAnimalImage(animal) {
    const imageName = animal.name
        .toLowerCase()
        .replaceAll(" ", "-");

    return `images/${imageName}.jpg`;
}
function displayAnimals() {

    animals.forEach(function(animal, index) {

        const card = document.createElement("div");

        card.className = "animal-card";

        card.innerHTML = `
            <img
                src="${getAnimalImage(animal)}"
                alt="${animal.name}"
                class="animal-card-image"
            >

            <h2>${animal.name}</h2>

            <p>${animal.khmer}</p>
        `;

        card.onclick = function() {
            showAnimal(animal);
        };

        const category = categoryContainers[animal.category];

        category.appendChild(card);
    });
}


function showAnimal(animal) {

    animalInfo.innerHTML = `

        <h1>🦁 ${animal.title}</h1>

        <blockquote>
            <em>"${animal.quote}"</em>
        </blockquote>

        <img
            src="${getAnimalImage(animal)}"
            alt="${animal.name}"
        >


        <h3>🌿 Profile Overview</h3>

        <ul>
            <li>
                <strong>Scientific Name:</strong>
                <em>${animal.scientificName}</em>
            </li>

            <li>
                <strong>Habitat:</strong>
                ${animal.habitat}
            </li>

            <li>
                <strong>Status:</strong>
                ${animal.status}
            </li>

            <li>
                <strong>Life Span:</strong>
                ${animal.lifespan}
            </li>

            <li>
                <strong>Top Speed:</strong>
                ${animal.topSpeed}
            </li>
        </ul>


        <h3>📝 Description</h3>

        <p>${animal.description}</p>


        <h3>⚡ Fun & Surprising Facts</h3>

        <ol>

            ${animal.funFacts.map(function(fact) {

                return `
                    <li>
                        <strong>${fact.title}:</strong>
                        ${fact.text}
                    </li>
                `;

            }).join("")}

        </ol>


        <hr>


        <h2>🇰🇭 ការបកប្រែជាភាសាខ្មែរ</h2>

        <h3>${animal.khmerTitle}</h3>

        <blockquote>
            <em>"${animal.khmerQuote}"</em>
        </blockquote>


        <h3>📝 ការពិពណ៌នា</h3>

        <p>${animal.khmerDescription}</p>


        <h3>⚡ ការពិតគួរឱ្យចាប់អារម្មណ៍</h3>

        <ol>

            ${animal.khmerFunFacts.map(function(fact) {

                return `
                    <li>
                        <strong>${fact.title}:</strong>
                        ${fact.text}
                    </li>
                `;

            }).join("")}

        </ol>

    `;

    animalModal.style.display = "block";
}


displayAnimals();