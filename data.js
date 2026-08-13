const travelData = {
  services: [
    { icon: 'plane', title: 'رحلات منظمة', description: 'برامج سفر مرتبة بعناية لتعيش التجربة براحة.' },
    { icon: 'passport', title: 'خدمات التأشيرة', description: 'إرشاد واضح في خطوات طلب التأشيرة والوثائق.' },
    { icon: 'hotel', title: 'حجوزات الفنادق', description: 'خيارات إقامة مناسبة لخطة سفرك واحتياجاتك.' },
    { icon: 'shield', title: 'تأمين السفر', description: 'مساعدة في اختيار التغطية المناسبة لرحلتك.' }
  ],
  packages: [
    {category:'city', label:'رحلة مدينة', country:'تركيا', title:'إسطنبول الساحرة', description:'ثقافة، أسواق ونبض البوسفور في تجربة واحدة.', duration:'برنامج مرن', image:'assets/istanbul-hero.png', alt:'مآذن إسطنبول ونهر البوسفور'},
    {category:'city', label:'اكتشف الشرق', country:'الإمارات العربية المتحدة', title:'دبي الحديثة', description:'مدينة استثنائية تجمع بين الراحة والمغامرة.', duration:'برنامج مرن', image:'assets/dubai.png', alt:'أفق مدينة دبي'},
    {category:'beach', label:'استجمام', country:'تونس', title:'سحر المتوسط', description:'أيام هادئة بين البحر والأزقة المضيئة.', duration:'برنامج مرن', image:'assets/tunis.png', alt:'المدينة البيضاء في تونس'},
    {category:'spiritual', label:'رحلة دينية', country:'المملكة العربية السعودية', title:'برنامج عمرة', description:'تنظيم هادئ يراعي روحانية هذه الرحلة الخاصة.', duration:'حسب البرنامج', image:'assets/istanbul-hero.png', alt:'ممر معماري هادئ'}
  ],
  destinations: [
    {slug:'istanbul', name:'إسطنبول', country:'تركيا', image:'assets/istanbul-hero.png', alt:'إسطنبول عند الغروب'},
    {slug:'dubai', name:'دبي', country:'الإمارات', image:'assets/dubai.png', alt:'دبي الحديثة'},
    {slug:'tunis', name:'تونس', country:'تونس', image:'assets/tunis.png', alt:'تونس المتوسطية'}
  ]
};
