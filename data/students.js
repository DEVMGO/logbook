const DUMMY_STUDENTS = [
    {
        id: 'st1',
        title: 'شاگردان زیر نظر شما',
        members: [
            {
                id: 'sm1',
                index: 1,
                name: 'رضا نظری',
                date: '1401/01/17',
                city: 'تهران(تهران)',
                site: 'Vardavrd(812 M)',
                level: 'خلبان (مبتدی)',
                speed_takeoff: '10Km',
                time_takeoff: '14:15',
                time_landing: '15:15',
                brand: 'B',
                direction_takeoff: 'S',
                speed_landing: '8Km',
                type_cloud: 'Cumulos',
                model: 'GIN / Atlas',
                style_takeoff: 'Reverse',
                direction_landing: 'SE',
                time_fly: 1,
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد',
            },
            {
                id: 'sm2',
                index: 2,
                name: 'علیرضا فهیم',
                date: '1398/05/04',
                city: 'خراسان شمالی(شیروان)',
                site: 'Shirvan(100 NE)',
                level: 'تندم',
                speed_takeoff: '20Km',
                time_takeoff: '22:30',
                time_landing: '23:15',
                brand: 'A',
                direction_takeoff: 'W',
                speed_landing: '10Km',
                type_cloud: 'Pumulos',
                model: 'ABC / Atlas',
                style_takeoff: 'Reverse',
                direction_landing: 'N',
                time_fly: 3,
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد',
            },
            {
                id: 'sm3',
                index: 3,
                name: 'متین بهرامی',
                date: '1400/12/20',
                city: 'فارس(شیراز)',
                site: 'Shiraz(500 M)',
                level: 'پیشرفته',
                speed_takeoff: '9Km',
                time_takeoff: '19:20',
                time_landing: '20:30',
                brand: 'C',
                direction_takeoff: 'N',
                speed_landing: '11Km',
                type_cloud: 'Tumplos',
                model: 'GIN / Atlas',
                style_takeoff: 'Reverse',
                direction_landing: 'E',
                time_fly: 2,
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد',
            },
        ]
    },
    {
        id: 'st2',
        title: 'خلبان های زیر نظر شما',
        members: [
            {
                id: 'kh4',
                index: 1,
                name: 'امیر کریمی',
                date: '1401/01/17',
                city: 'تهران(تهران)',
                site: 'Vardavrd(812 M)',
                level: 'خلبان (مبتدی)',
                speed_takeoff: '10Km',
                time_takeoff: '14:15',
                time_landing: '15:15',
                brand: 'B',
                direction_takeoff: 'S',
                speed_landing: '8Km',
                type_cloud: 'Cumulos',
                model: 'GIN / Atlas',
                style_takeoff: 'Reverse',
                direction_landing: 'SE',
                time_fly: 1,
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد',
            },
            {
                id: 'kh5',
                index: 2,
                name: 'پویا خشنو',
                date: '1398/05/04',
                city: 'قم(قم)',
                site: 'Shirvan(100 NE)',
                level: 'تندم',
                speed_takeoff: '20Km',
                time_takeoff: '22:30',
                time_landing: '23:15',
                brand: 'A',
                direction_takeoff: 'W',
                speed_landing: '10Km',
                type_cloud: 'Pumulos',
                model: 'ABC / Atlas',
                style_takeoff: 'Reverse',
                direction_landing: 'N',
                time_fly: 3,
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد',
            },
            {
                id: 'kh6',
                index: 3,
                name: 'محمد تیموری',
                date: '1400/12/20',
                city: 'فارس(شیراز)',
                site: 'Shiraz(500 M)',
                level: 'پیشرفته',
                speed_takeoff: '9Km',
                time_takeoff: '19:20',
                time_landing: '20:30',
                brand: 'C',
                direction_takeoff: 'N',
                speed_landing: '11Km',
                type_cloud: 'Tumplos',
                model: 'GIN / Atlas',
                style_takeoff: 'Reverse',
                direction_landing: 'E',
                time_fly: 2,
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد',
            },
        ]
    },
];

export const getAllStudents = () => {
    return DUMMY_STUDENTS;
};