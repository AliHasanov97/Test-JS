  const subjects = [
    {
        name: "C# Əsasları",
        questions: [
            {
                text: "C# dilində dəyişənin dəyərinin null olub-olmadığını yoxlamaq üçün hansı operator istifadə olunur?",
                options: ["is", "as", "??", "=="],
                correctOptionIndex: 2,
                explainAnswer: "C# dilində `??` (null-coalescing operator) dəyişənin null olub-olmadığını yoxlayır və null olarsa alternativ dəyər qaytarır. Məsələn, `int? x = null; int y = x ?? 0;` kodu x null olduqda y-ə 0 dəyərini təyin edir."
            },
            {
                text: "C# dilində `const` açar sözü ilə təyin olunan dəyişənin xüsusiyyəti nədir?",
                options: ["Dəyişən runtime zamanı dəyişdirilə bilər", "Dəyişən yalnız kompilyasiya zamanı təyin olunur", "Dəyişən null ola bilər", "Dəyişən avtomatik olaraq sıfırlanır"],
                correctOptionIndex: 1,
                explainAnswer: "`const` açar sözü ilə təyin olunan dəyişənlər kompilyasiya zamanı dəyər alır və sonradan dəyişdirilə bilməz. Bu, sabit dəyərlər üçün istifadə olunur, məsələn, `const int MaxValue = 100;`."
            },
            {
                text: "C# dilində hansı metod `string` obyektinin bütün simvollarını kiçik hərflərə çevirir?",
                options: ["ToLower()", "ToUpper()", "Trim()", "Replace()"],
                correctOptionIndex: 0,
                explainAnswer: "`ToLower()` metodu `string` obyektinin bütün simvollarını kiçik hərflərə çevirir. Məsələn, `Hello`.ToLower() `hello` qaytarır. `ToUpper()` böyük hərflərə çevirir, `Trim()` boşluqları silir, `Replace()` isə simvolları əvəz edir."
            },
            {
                text: "C# dilində `foreach` dövrü hansı tipli kolleksiyalarla işləyir?",
                options: ["Yalnız massivlərlə", "Yalnız `List<T>` ilə", "Hər hansı `IEnumerable` tətbiq edən kolleksiyalarla", "Yalnız `Dictionary` ilə"],
                correctOptionIndex: 2,
                explainAnswer: "`foreach` dövrü `IEnumerable` və ya `IEnumerable<T>` interfeysini tətbiq edən hər hansı kolleksiya ilə işləyir, məsələn, massivlər, `List<T>`, `Dictionary<TKey, TValue>` və s."
            },
            {
                text: "C# dilində `try-catch` bloku nə üçün istifadə olunur?",
                options: ["Dəyişənləri təyin etmək üçün", "Xətaları idarə etmək üçün", "Döngüləri idarə etmək üçün", "Metodları çağırmaq üçün"],
                correctOptionIndex: 1,
                explainAnswer: "`try-catch` bloku xətaları (exceptions) idarə etmək üçün istifadə olunur. `try` bloku potensial xəta ehtiva edən kodu, `catch` isə xəta baş verdikdə işləyəcək kodu müəyyənləşdirir."
            },
            {
                text: "C# dilində `var` açar sözü hansı məqsədlə istifadə olunur?",
                options: ["Statik dəyişən təyin etmək", "Tipi kompilyator tərəfindən avtomatik təyin olunan dəyişən yaratmaq", "Yalnız sabitlər üçün", "Metod daxilində global dəyişən yaratmaq"],
                correctOptionIndex: 1,
                explainAnswer: "`var` açar sözü dəyişənin tipini kompilyatorun avtomatik təyin etməsinə imkan verir, lakin dəyişən təyin olunan anda dəyəri olmalıdır. Məsələn, `var x = 10;` x-i `int` kimi təyin edir."
            },
            {
                text: "C# dilində `string` tipli dəyişənlər hansı xüsusiyyətə malikdir?",
                options: ["Dəyişkəndir (mutable)", "Dəyişkən deyil (immutable)", "Yalnız rəqəmləri saxlaya bilər", "Avtomatik null olur"],
                correctOptionIndex: 1,
                explainAnswer: "C# dilində `string` tipli dəyişənlər dəyişkən deyil (immutable). Bir `string` dəyəri dəyişdirildikdə, yeni bir `string` obyekti yaradılır."
            },
            {
                text: "C# dilində `List<T>` sinfi hansı interfeysi tətbiq edir?",
                options: ["ICollection<T>", "IDictionary<TKey, TValue>", "IQueryable<T>", "IComparable<T>"],
                correctOptionIndex: 0,
                explainAnswer: "`List<T>` sinfi `ICollection<T>` interfeysini tətbiq edir, bu da `IEnumerable<T>`-dən miras alınır və kolleksiya əməliyyatlarını dəstəkləyir."
            },
            {
                text: "C# dilində `null` dəyəri hansı tiplərə təyin oluna bilər?",
                options: ["Yalnız dəyər tiplərinə", "Yalnız istinad tiplərinə", "Həm dəyər, həm də istinad tiplərinə", "Nullable dəyər tiplərinə və istinad tiplərinə"],
                correctOptionIndex: 3,
                explainAnswer: "`null` istinad tiplərinə (məsələn, `string`, siniflər) və `Nullable<T>` (məsələn, `int?`) tiplərinə təyin oluna bilər. Adi dəyər tipləri (məsələn, `int`) `null` ola bilməz."
            },
            {
                text: "C# dilində hansı açar söz metodun sinifdən kənarda çağırılmasını təmin edir?",
                options: ["private", "protected", "public", "internal"],
                correctOptionIndex: 2,
                explainAnswer: "`public` açar sözü metodun sinifdən kənarda çağırılmasını təmin edir. `private` yalnız sinif daxilində, `protected` miras alan siniflərdə, `internal` isə eyni assembly-də işləyir."
            },
            {
                text: "C# dilində `switch` ifadəsi hansı tiplərlə istifadə oluna bilər?",
                options: ["Yalnız `int` ilə", "Yalnız `string` ilə", "`int`, `string`, `enum` və s.", "Yalnız `bool` ilə"],
                correctOptionIndex: 2,
                explainAnswer: "C# dilində `switch` ifadəsi `int`, `string`, `enum`, `char` və bəzi digər tiplərlə istifadə oluna bilər. `bool` ilə işləmir."
            },
            {
                text: "C# dilində `ref` açar sözü nə üçün istifadə olunur?",
                options: ["Dəyişəni kopyalamaq üçün", "Dəyişəni istinadla ötürmək üçün", "Dəyişəni null etmək üçün", "Metodu statik etmək üçün"],
                correctOptionIndex: 1,
                explainAnswer: "`ref` açar sözü dəyişəni istinadla (reference) metodlara ötürür, beləliklə dəyişənin dəyəri metod daxilində dəyişdirilə bilər."
            },
            {
                text: "C# dilində `enum` nədir?",
                options: ["Dəyişən tipi", "Sabit dəyərlər toplusu", "Metod növü", "Sinif şablonu"],
                correctOptionIndex: 1,
                explainAnswer: "`enum` sabit dəyərlər toplusunu təyin etmək üçün istifadə olunur, məsələn, `enum Days { Monday, Tuesday };`."
            },
            {
                text: "C# dilində `out` açar sözü ilə `ref` arasındakı fərq nədir?",
                options: ["`out` dəyəri təyin etməyi tələb etmir", "`ref` dəyəri təyin etməyi tələb edir", "`out` yalnız dəyər tipləri ilə işləyir", "`ref` yalnız istinad tipləri ilə işləyir"],
                correctOptionIndex: 1,
                explainAnswer: "`ref` ilə ötürülən dəyişənin ilkin dəyəri olmalıdır, `out` isə metod daxilində dəyər təyin edilməlidir və ilkin dəyər tələb olunmur."
            },
            {
                text: "C# dilində `ArrayList` ilə `List<T>` arasındakı əsas fərq nədir?",
                options: ["`ArrayList` tip təhlükəsizdir", "`List<T>` tip təhlükəsizdir", "`ArrayList` daha sürətlidir", "`List<T>` yalnız rəqəmləri saxlaya bilər"],
                correctOptionIndex: 1,
                explainAnswer: "`List<T>` generikdir və tip təhlükəsizliyini təmin edir, `ArrayList` isə qeyri-generikdir və tip təhlükəsizliyi yoxdur."
            },
            {
                text: "C# dilində `string.Join` metodu nə edir?",
                options: ["Sətirləri birləşdirir", "Sətirləri bölür", "Sətirləri sıralayır", "Sətirləri silir"],
                correctOptionIndex: 0,
                explainAnswer: "`string.Join` metodu sətir massivini ayırıcı ilə birləşdirir. Məsələn, `string.Join(\",\", [\"a\", \"b\"])` `a,b` qaytarır."
            },
            {
                text: "C# dilində `break` açar sözü nə üçün istifadə olunur?",
                options: ["Döngünü dayandırmaq üçün", "Döngünü yenidən başlatmaq üçün", "Xəta atmaq üçün", "Metodu bağlamaq üçün"],
                correctOptionIndex: 0,
                explainAnswer: "`break` açar sözü döngünü (məsələn, `for`, `while`) dayandırır və nəzarəti döngüdən kənara ötürür."
            },
            {
                text: "C# dilində `default` açar sözü nə üçün istifadə olunur?",
                options: ["Dəyişəni silmək üçün", "Tipin standart dəyərini qaytarmaq üçün", "Metodu statik etmək üçün", "Döngünü başlatmaq üçün"],
                correctOptionIndex: 1,
                explainAnswer: "`default` açar sözü bir tipin standart dəyərini qaytarır, məsələn, `int` üçün 0, istinad tipləri üçün `null`."
            },
            {
                text: "C# dilində `static` metodlar hansı xüsusiyyətə malikdir?",
                options: ["Yalnız obyektlə çağırılır", "Sinif səviyyəsində çağırılır", "Avtomatik çağırılır", "Yalnız daxili metodlarda işləyir"],
                correctOptionIndex: 1,
                explainAnswer: "`static` metodlar sinif səviyyəsində çağırılır və obyekt yaratmağa ehtiyac yoxdur, məsələn, `Math.Abs()`."
            },
            {
                text: "C# dilində `Tuple` nədir?",
                options: ["Sətir kolleksiyası", "Bir neçə dəyəri birləşdirən tip", "Metod növü", "Sabit dəyər"],
                correctOptionIndex: 1,
                explainAnswer: "`Tuple` bir neçə dəyəri birləşdirən tipdir, məsələn, `(int, string) pair = (1, \"test\");`."
            },
            {
                text: "C# dilində `async` metodlar hansı məqsədlə istifadə olunur?",
                options: ["Sinxron əməliyyatlar üçün", "Asinxron əməliyyatlar üçün", "Statik metodlar üçün", "Döngülər üçün"],
                correctOptionIndex: 1,
                explainAnswer: "`async` metodlar asinxron əməliyyatlar üçün istifadə olunur, `await` ilə birlikdə uzun müddətli tapşırıqları bloklamadan icra edir."
            },
            {
                text: "C# dilində `LINQ` nədir?",
                options: ["Məlumat bazası sistemi", "Sorğu dili", "Kolleksiyalar üzərində sorğu aləti", "Şifrələmə aləti"],
                correctOptionIndex: 2,
                explainAnswer: "LINQ (Language Integrated Query) kolleksiyalar üzərində sorğular icra etmək üçün alətdir, məsələn, `list.Where(x => x > 0)`."
            },
            {
                text: "C# dilində `using` açar sözü nə üçün istifadə olunur?",
                options: ["Resursları idarə etmək üçün", "Dəyişənləri təyin etmək üçün", "Metodları çağırmaq üçün", "Döngüləri idarə etmək üçün"],
                correctOptionIndex: 0,
                explainAnswer: "`using` açar sözü resursları (məsələn, fayllar, məlumat bazası bağlantıları) idarə etmək və avtomatik sərbəst buraxmaq üçün istifadə olunur."
            },
            {
                text: "C# dilində `params` açar sözü nə edir?",
                options: ["Metoda dəyişən sayda arqument ötürməyə imkan verir", "Metodu statik edir", "Metodu sinxron edir", "Metodu qoruyur"],
                correctOptionIndex: 0,
                explainAnswer: "`params` açar sözü metoda dəyişən sayda arqument ötürməyə imkan verir, məsələn, `void Sum(params int[] numbers)`."
            },
            {
                text: "C# dilində `nameof` operatoru nə üçün istifadə olunur?",
                options: ["Dəyişənin adını sətir kimi qaytarır", "Dəyişənin dəyərini qaytarır", "Dəyişəni sıfırlayır", "Dəyişəni silir"],
                correctOptionIndex: 0,
                explainAnswer: "`nameof` operatoru dəyişən, metod və ya sinfin adını sətir kimi qaytarır, məsələn, `nameof(x)` `x` qaytarır."
            }
        ]
    },
    {
        name: "Obyekt Yönümlü Proqramlaşdırma",
        questions: [
            {
                text: "C# dilində sinfin birbaşa nümunə alınmasını qadağan etmək üçün hansı açar söz istifadə olunur?",
                options: ["abstract", "sealed", "static", "private"],
                correctOptionIndex: 0,
                explainAnswer: "`abstract` açar sözü sinfin birbaşa nümunə alınmasını qadağan edir və yalnız miras almaq üçün istifadə olunur. `sealed` miras almağı qadağan edir, `static` sinif səviyyəsində işləyir."
            },
            {
                text: "C# dilində miras alma hansı açar sözlə təyin olunur?",
                options: [":", "extends", "implements", "base"],
                correctOptionIndex: 0,
                explainAnswer: "C# dilində miras alma `:` simvolu ilə təyin olunur, məsələn, `class Derived : Base`."
            },
            {
                text: "C# dilində `virtual` metod nədir?",
                options: ["Yalnız sinif daxilində çağırılan metod", "Miras alan sinifdə dəyişdirilə bilən metod", "Avtomatik çağırılan metod", "Statik metod"],
                correctOptionIndex: 1,
                explainAnswer: "`virtual` metod miras alan sinifdə `override` ilə dəyişdirilə bilər, polimorfizmi təmin edir."
            },
            {
                text: "C# dilində `interface` ilə `abstract class` arasındakı əsas fərq nədir?",
                options: ["`interface` metod tətbiqini ehtiva edə bilər", "`abstract class` çoxsaylı miras almağa imkan verir", "`interface` yalnız metod və xüsusiyyət bəyanlarını ehtiva edir", "`abstract class` yalnız statik metodları dəstəkləyir"],
                correctOptionIndex: 2,
                explainAnswer: "`interface` yalnız metod və xüsusiyyət bəyanlarını ehtiva edir, `abstract class` isə həm tətbiqləri, həm də abstrakt elementləri saxlaya bilər."
            },
            {
                text: "C# dilində `override` açar sözü nə üçün istifadə olunur?",
                options: ["Metodu statik etmək üçün", "`virtual` və ya `abstract` metodu yenidən təyin etmək üçün", "Metodu gizlətmək üçün", "Metodu silmək üçün"],
                correctOptionIndex: 1,
                explainAnswer: "`override` açar sözü `virtual` və ya `abstract` metodları miras alan sinifdə yenidən təyin etmək üçün istifadə olunur."
            },
            {
                text: "C# dilində `sealed` açar sözü nə edir?",
                options: ["Sinfi miras almağa bağlayır", "Sinfi abstrakt edir", "Sinfi statik edir", "Sinfi public edir"],
                correctOptionIndex: 0,
                explainAnswer: "`sealed` açar sözü sinfin miras alınmasını qadağan edir, məsələn, `sealed class MyClass`."
            },
            {
                text: "C# dilində `base` açar sözü nə üçün istifadə olunur?",
                options: ["Yeni sinif yaratmaq üçün", "Əsas sinfin konstruktorunu və ya metodunu çağırmaq üçün", "Dəyişəni sıfırlamaq üçün", "Metodu gizlətmək üçün"],
                correctOptionIndex: 1,
                explainAnswer: "`base` açar sözü miras alan sinifdə əsas sinfin konstruktorunu və ya metodunu çağırmaq üçün istifadə olunur, məsələn, `base.Method()`."
            },
            {
                text: "C# dilində çoxsaylı miras alma dəstəklənir?",
                options: ["Bəli, siniflər üçün", "Xeyr, yalnız interfeyslər üçün", "Bəli, həm siniflər, həm interfeyslər üçün", "Xeyr, siniflər üçün dəstəklənmir"],
                correctOptionIndex: 3,
                explainAnswer: "C# dilində siniflər üçün çoxsaylı miras alma dəstəklənmir, lakin bir sinif birdən çox interfeysi tətbiq edə bilər."
            },
            {
                text: "C# dilində `abstract` metodun xüsusiyyəti nədir?",
                options: ["Tətbiqi olmalıdır", "Tətbiqi olmamalıdır", "Yalnız statik ola bilər", "Yalnız public ola bilər"],
                correctOptionIndex: 1,
                explainAnswer: "`abstract` metodun tətbiqi olmamalıdır və miras alan sinifdə `override` ilə təyin olunmalıdır."
            },
            {
                text: "C# dilində `new` açar sözü metodda nə edir?",
                options: ["Metodu yenidən təyin edir", "Metodu gizlədir", "Metodu silir", "Metodu abstrakt edir"],
                correctOptionIndex: 1,
                explainAnswer: "`new` açar sözü əsas sinfin metodunu gizlədir (hiding), polimorfizm olmadan yeni tətbiq təmin edir."
            },
            {
                text: "C# dilində `property` nədir?",
                options: ["Metodun alternativi", "Dəyişənə nəzarətli giriş təmin edən mexanizm", "Sinfi statik edən element", "Sabit dəyər"],
                correctOptionIndex: 1,
                explainAnswer: "`property` dəyişənə nəzarətli giriş təmin edir, məsələn, `public int Age { get; set; }`."
            },
            {
                text: "C# dilində `interface` daxilində metodlar hansı formada olur?",
                options: ["Tam tətbiqlə", "Yalnız bəyanla", "Yalnız statik", "Yalnız protected"],
                correctOptionIndex: 1,
                explainAnswer: "C# 8.0-dan əvvəl `interface` yalnız metod bəyanlarını ehtiva edirdi. C# 8.0-dan sonra standart tətbiqlər də əlavə oluna bilər."
            },
            {
                text: "C# dilində `polymorphism` nədir?",
                options: ["Bir sinfin çoxsaylı instansiyası", "Eyni metodun fərqli davranışlar sərgiləməsi", "Sinfin statik olması", "Dəyişənin null olması"],
                correctOptionIndex: 1,
                explainAnswer: "Polimorfizm eyni metodun fərqli siniflərdə fərqli davranışlar sərgiləməsini təmin edir, məsələn, `virtual` və `override` ilə."
            },
            {
                text: "C# dilində `constructor` nədir?",
                options: ["Sinfi silən metod", "Sinfi başlatan metod", "Statik metod", "Abstrakt metod"],
                correctOptionIndex: 1,
                explainAnswer: "`constructor` sinfi başlatan xüsusi metodudur, obyekt yaradılarkən çağırılır, məsələn, `public MyClass() {}`."
            },
            {
                text: "C# dilində `encapsulation` nəyi nəzərdə tutur?",
                options: ["Məlumatın gizlədilməsi və nəzarətli giriş", "Çoxsaylı miras alma", "Metodların statik olması", "Döngülərin idarə edilməsi"],
                correctOptionIndex: 0,
                explainAnswer: "Encapsulation məlumatın gizlədilməsini (`private` dəyişənlər) və nəzarətli girişi (`get`, `set`) təmin edir."
            },
            {
                text: "C# dilində `this` açar sözü nə üçün istifadə olunur?",
                options: ["Əsas sinfi çağırmaq üçün", "Cari obyektə istinad etmək üçün", "Metodu gizlətmək üçün", "Dəyişəni sıfırlamaq üçün"],
                correctOptionIndex: 1,
                explainAnswer: "`this` açar sözü cari obyektə istinad edir, məsələn, `this.field` ilə sinif dəyişəninə müraciət edilir."
            },
            {
                text: "C# dilində `inheritance` nədir?",
                options: ["Bir sinfin başqa sinfdən xüsusiyyətləri alması", "Metodun gizlədilməsi", "Sinfin statik olması", "Dəyişənin dəyişdirilməsi"],
                correctOptionIndex: 0,
                explainAnswer: "Inheritance bir sinfin başqa sinfdən xüsusiyyətləri və metodları almasını təmin edir, məsələn, `class Derived : Base`."
            },
            {
                text: "C# dilində `static constructor` nədir?",
                options: ["Obyektləri başlatan metod", "Sinfi başlatan metod", "Metodu gizlədən metod", "Abstrakt metod"],
                correctOptionIndex: 1,
                explainAnswer: "`static constructor` sinfi başlatmaq üçün istifadə olunur və yalnız bir dəfə çağırılır."
            },
            {
                text: "C# dilində `method overloading` nədir?",
                options: ["Eyni metodun fərqli parametrlərlə təyin edilməsi", "Metodun silinməsi", "Metodun statik olması", "Metodun abstrakt olması"],
                correctOptionIndex: 0,
                explainAnswer: "Method overloading eyni adlı metodun fərqli parametrlərlə təyin edilməsini təmin edir, məsələn, `void Method(int x)` və `void Method(string x)`."
            },
            {
                text: "C# dilində `protected` açar sözü nə edir?",
                options: ["Metodu yalnız sinif daxilində əlçatan edir", "Metodu sinif və miras alan siniflərdə əlçatan edir", "Metodu hamıya əlçatan edir", "Metodu statik edir"],
                correctOptionIndex: 1,
                explainAnswer: "`protected` açar sözü metodu sinif daxilində və miras alan siniflərdə əlçatan edir."
            },
            {
                text: "C# dilində `interface` nədir?",
                options: ["Sinifin tətbiqi", "Metod və xüsusiyyətlərin bəyanı", "Statik sinif", "Dəyişən toplusu"],
                correctOptionIndex: 1,
                explainAnswer: "`interface` metod və xüsusiyyətlərin bəyanını ehtiva edir və siniflər tərəfindən tətbiq edilir."
            },
            {
                text: "C# dilində `abstract` sinifdə metodların vəziyyəti necə ola bilər?",
                options: ["Yalnız abstrakt", "Yalnız tətbiqli", "Həm abstrakt, həm tətbiqli", "Yalnız statik"],
                correctOptionIndex: 2,
                explainAnswer: "`abstract` sinif həm abstrakt (tətbiqsiz), həm də tətbiqli metodları ehtiva edə bilər."
            },
            {
                text: "C# dilində `struct` ilə `class` arasındakı əsas fərq nədir?",
                options: ["`struct` istinad tipi, `class` dəyər tipidir", "`struct` dəyər tipi, `class` istinad tipidir", "`struct` miras ala bilər", "`class` yalnız statik ola bilər"],
                correctOptionIndex: 1,
                explainAnswer: "`struct` dəyər tipidir və yaddaşda stack-də saxlanılır, `class` isə istinad tipidir və heap-də saxlanılır."
            },
            {
                text: "C# dilində `delegate` nədir?",
                options: ["Metod istinadı", "Sinif şablonu", "Dəyişən tipi", "Sabit dəyər"],
                correctOptionIndex: 0,
                explainAnswer: "`delegate` metod istinadıdır və metodları dinamik şəkildə çağırmağa imkan verir, məsələn, hadisələrdə istifadə olunur."
            },
            {
                text: "C# dilində `event` nədir?",
                options: ["Metodun tətbiqi", "Hadisəni idarə edən mexanizm", "Dəyişənin dəyəri", "Sinfin şablonu"],
                correctOptionIndex: 1,
                explainAnswer: "`event` hadisələri idarə etmək üçün istifadə olunur, `delegate` ilə birlikdə işləyir, məsələn, düymə klikləri."
            }
        ]
    },
    {
        name: "Məlumat Bazaları ilə İş",
        questions: [
            {
                text: "Entity Framework-də `DbContext` sinfi nə üçün istifadə olunur?",
                options: ["Məlumat bazası ilə bağlantı idarə etmək üçün", "Metodları statik etmək üçün", "Sinfi abstrakt etmək üçün", "Dəyişənləri sıfırlamaq üçün"],
                correctOptionIndex: 0,
                explainAnswer: "`DbContext` sinfi Entity Framework-də məlumat bazası ilə bağlantını idarə edir və CRUD əməliyyatlarını təmin edir."
            },
            {
                text: "C# dilində Entity Framework ilə məlumat bazasına sorğu göndərmək üçün hansı metod istifadə olunur?",
                options: ["SaveChanges()", "Find()", "ToList()", "All()"],
                correctOptionIndex: 2,
                explainAnswer: "`ToList()` metodu LINQ sorğularını icra edərək məlumatları siyahı kimi qaytarır. `SaveChanges()` dəyişiklikləri yadda saxlayır, `Find()` isə ID ilə axtarır."
            },
            {
                text: "Entity Framework-də `Lazy Loading` nədir?",
                options: ["Məlumatların avtomatik yüklənməsi", "Məlumatların tələb olunduqda yüklənməsi", "Məlumatların silinməsi", "Məlumatların sıxılması"],
                correctOptionIndex: 1,
                explainAnswer: "`Lazy Loading` əlaqəli məlumatların yalnız tələb olunduqda yüklənməsini təmin edir, bu performansı optimallaşdırır."
            },
            {
                text: "Entity Framework-də `Eager Loading` üçün hansı metod istifadə olunur?",
                options: ["Include()", "Load()", "Find()", "Select()"],
                correctOptionIndex: 0,
                explainAnswer: "`Include()` metodu `Eager Loading` üçün istifadə olunur, əlaqəli məlumatları sorğu ilə birlikdə yükləyir."
            },
            {
                text: "C# dilində `DbSet<T>` nədir?",
                options: ["Məlumat bazası cədvəlinin təmsilçisi", "Sinif şablonu", "Metod istinadı", "Dəyişən tipi"],
                correctOptionIndex: 0,
                explainAnswer: "`DbSet<T>` məlumat bazası cədvəlini təmsil edir və Entity Framework-də CRUD əməliyyatları üçün istifadə olunur."
            },
            {
                text: "Entity Framework-də `Migration` nədir?",
                options: ["Məlumat bazası sxemini yeniləmək", "Məlumatları ixrac etmək", "Məlumatları sıxmaq", "Məlumatları silmək"],
                correctOptionIndex: 0,
                explainAnswer: "Migration məlumat bazası sxemini yeniləmək və ya yaratmaq üçün istifadə olunur, məsələn, `Add-Migration` və `Update-Database`."
            },
            {
                text: "C# dilində `LINQ to SQL` ilə `Entity Framework` arasındakı fərq nədir?",
                options: ["`LINQ to SQL` daha müasirdir", "`Entity Framework` yalnız SQL Server ilə işləyir", "`LINQ to SQL` yalnız SQL Server ilə işləyir", "`Entity Framework` yalnız NoSQL ilə işləyir"],
                correctOptionIndex: 2,
                explainAnswer: "`LINQ to SQL` yalnız SQL Server ilə işləyir, `Entity Framework` isə çoxsaylı məlumat bazalarını dəstəkləyir."
            },
            {
                text: "Entity Framework-də `SaveChanges()` metodu nə edir?",
                options: ["Məlumatları silir", "Məlumatları yadda saxlayır", "Məlumatları yükləyir", "Məlumatları sıxır"],
                correctOptionIndex: 1,
                explainAnswer: "`SaveChanges()` metodu `DbContext`-də edilən dəyişiklikləri (əlavə, yeniləmə, silmə) məlumat bazasına yazır."
            },
            {
                text: "C# dilində `ADO.NET` ilə məlumat bazasına qoşulmaq üçün hansı sinif istifadə olunur?",
                options: ["SqlConnection", "DbContext", "SqlCommand", "SqlDataReader"],
                correctOptionIndex: 0,
                explainAnswer: "`SqlConnection` sinfi `ADO.NET`-də məlumat bazasına qoşulmaq üçün istifadə olunur."
            },
            {
                text: "Entity Framework-də `Find()` metodu nə edir?",
                options: ["Bütün məlumatları qaytarır", "ID ilə obyekt axtarır", "Məlumatları sıralayır", "Məlumatları silir"],
                correctOptionIndex: 1,
                explainAnswer: "`Find()` metodu ID ilə müəyyən bir obyekti axtarır və taparsa qaytarır."
            },
            {
                text: "C# dilində `SqlCommand` nədir?",
                options: ["Məlumat bazası bağlantısı", "SQL sorğusunu icra edən obyekt", "Məlumatları oxuyan obyekt", "Məlumat bazası cədvəli"],
                correctOptionIndex: 1,
                explainAnswer: "`SqlCommand` SQL sorğularını icra etmək üçün istifadə olunur, məsələn, `SELECT` və ya `INSERT`."
            },
            {
                text: "Entity Framework-də `Code First` yanaşması nədir?",
                options: ["Məlumat bazasından sinif yaratmaq", "Siniflərdən məlumat bazası yaratmaq", "Məlumatları ixrac etmək", "Məlumatları sıxmaq"],
                correctOptionIndex: 1,
                explainAnswer: "`Code First` siniflərdən və xüsusiyyətlərdən avtomatik olaraq məlumat bazası sxemi yaratmağa imkan verir."
            },
            {
                text: "C# dilində `SqlDataReader` nə üçün istifadə olunur?",
                options: ["Məlumatları yazmaq üçün", "Məlumatları oxumaq üçün", "Məlumatları sıxmaq üçün", "Məlumatları silmək üçün"],
                correctOptionIndex: 1,
                explainAnswer: "`SqlDataReader` SQL sorğusunun nəticələrini oxumaq üçün istifadə olunur, yalnız irəli oxumağı dəstəkləyir."
            },
            {
                text: "Entity Framework-də `navigation property` nədir?",
                options: ["Məlumat bazası bağlantısı", "Əlaqəli obyektlərə giriş", "Metod istinadı", "Dəyişən tipi"],
                correctOptionIndex: 1,
                explainAnswer: "Navigation property əlaqəli obyektlərə (məsələn, bir modeldəki digər cədvələ) giriş təmin edir."
            },
            {
                text: "C# dilində `ADO.NET` ilə tranzaksiyaları idarə etmək üçün hansı sinif istifadə olunur?",
                options: ["SqlTransaction", "SqlConnection", "SqlCommand", "SqlDataReader"],
                correctOptionIndex: 0,
                explainAnswer: "`SqlTransaction` tranzaksiyaları idarə etmək üçün istifadə olunur, məsələn, `Commit` və ya `Rollback`."
            },
            {
                text: "Entity Framework-də `AsNoTracking()` metodu nə edir?",
                options: ["Məlumatları silir", "Məlumatları izləmədən oxuyur", "Məlumatları yadda saxlayır", "Məlumatları sıralayır"],
                correctOptionIndex: 1,
                explainAnswer: "`AsNoTracking()` məlumatları izləmədən oxuyur, bu da performansı artırır, çünki dəyişikliklər izlənilmir."
            },
            {
                text: "C# dilində `SqlParameter` nə üçün istifadə olunur?",
                options: ["SQL sorğularını icra etmək", "SQL inyeksiyasından qorunmaq", "Məlumatları oxumaq", "Məlumat bazasını sıfırlamaq"],
                correctOptionIndex: 1,
                explainAnswer: "`SqlParameter` SQL inyeksiyasından qorunmaq üçün parametrikləşdirilmiş sorğular yaratmağa imkan verir."
            },
            {
                text: "Entity Framework-də `Database First` yanaşması nədir?",
                options: ["Siniflərdən məlumat bazası yaratmaq", "Məlumat bazasından sinif yaratmaq", "Məlumatları ixrac etmək", "Məlumatları sıxmaq"],
                correctOptionIndex: 1,
                explainAnswer: "`Database First` mövcud məlumat bazasından siniflər və modellər yaratmağa imkan verir."
            },
            {
                text: "C# dilində `DataTable` nədir?",
                options: ["Məlumat bazası cədvəli", "Yaddaşda cədvəl təmsilçisi", "SQL sorğusu", "Metod istinadı"],
                correctOptionIndex: 1,
                explainAnswer: "`DataTable` yaddaşda cədvəl təmsilçisidir, `ADO.NET`-də məlumatları saxlamaq və idarə etmək üçün istifadə olunur."
            },
            {
                text: "Entity Framework-də `DbContext` sinfi hansı sinifdən miras alır?",
                options: ["DbSet", "DbConnection", "Object", "DbContextOptions"],
                correctOptionIndex: 2,
                explainAnswer: "`DbContext` sinfi `Object` sinfindən miras alır və məlumat bazası ilə işləmək üçün əsas sinifdir."
            },
            {
                text: "C# dilində `SqlDataAdapter` nə üçün istifadə olunur?",
                options: ["Məlumatları oxumaq", "Məlumat bazası ilə `DataSet` arasında körpü yaratmaq", "Məlumatları silmək", "Məlumatları sıxmaq"],
                correctOptionIndex: 1,
                explainAnswer: "`SqlDataAdapter` məlumat bazası ilə `DataSet` və ya `DataTable` arasında körpü yaradır, məlumatları doldurur və yeniləyir."
            },
            {
                text: "Entity Framework-də `ForeignKey` atributu nə üçün istifadə olunur?",
                options: ["Cədvəllər arasında əlaqə təyin etmək", "Məlumatları sıralamaq", "Məlumatları silmək", "Məlumatları sıxmaq"],
                correctOptionIndex: 0,
                explainAnswer: "`ForeignKey` atributu cədvəllər arasında xarici açar əlaqəsini təyin etmək üçün istifadə olunur."
            },
            {
                text: "C# dilində `ExecuteNonQuery` metodu nə üçün istifadə olunur?",
                options: ["Məlumatları oxumaq", "Məlumatları əlavə etmək, yeniləmək və ya silmək", "Məlumatları sıralamaq", "Məlumatları sıxmaq"],
                correctOptionIndex: 1,
                explainAnswer: "`ExecuteNonQuery` `INSERT`, `UPDATE` və ya `DELETE` kimi sorğuları icra etmək üçün istifadə olunur."
            },
            {
                text: "Entity Framework-də `Explicit Loading` nədir?",
                options: ["Məlumatların avtomatik yüklənməsi", "Məlumatların əl ilə yüklənməsi", "Məlumatların silinməsi", "Məlumatların sıxılması"],
                correctOptionIndex: 1,
                explainAnswer: "`Explicit Loading` əlaqəli məlumatların əl ilə, məsələn, `Load()` metodu ilə yüklənməsini təmin edir."
            },
            {
                text: "C# dilində `ConnectionString` nədir?",
                options: ["Məlumat bazası sorğusu", "Məlumat bazasına qoşulma məlumatı", "Məlumatları oxuyan obyekt", "Məlumatları sıxan alət"],
                correctOptionIndex: 1,
                explainAnswer: "`ConnectionString` məlumat bazasına qoşulmaq üçün lazım olan məlumatları (server, verilənlər bazası adı və s.) ehtiva edir."
            }
        ]
    },
    {
        name: "ASP.NET Core və API",
        questions: [
            {
                text: "ASP.NET Core-da `Controller` nədir?",
                options: ["Məlumat bazası bağlantısı", "HTTP sorğularını idarə edən sinif", "Məlumatları oxuyan obyekt", "Statik metod"],
                correctOptionIndex: 1,
                explainAnswer: "`Controller` HTTP sorğularını idarə edən sinifdir, məsələn, GET, POST sorğularına cavab verir."
            },
            {
                text: "ASP.NET Core-da `Startup.cs` faylının rolu nədir?",
                options: ["Məlumat bazasını idarə etmək", "Tətbiqin konfiqurasiyasını təyin etmək", "Məlumatları ixrac etmək", "Məlumatları sıxmaq"],
                correctOptionIndex: 1,
                explainAnswer: "`Startup.cs` tətbiqin konfiqurasiyasını (middleware, servislər) təyin etmək üçün istifadə olunur."
            },
            {
                text: "ASP.NET Core-da `Dependency Injection` nədir?",
                options: ["Məlumatların sıxılması", "Asılılıqların avtomatik idarə edilməsi", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "Dependency Injection asılılıqların (servislərin) avtomatik idarə edilməsini təmin edir, məsələn, `services.AddScoped<IMyService, MyService>();`."
            },
            {
                text: "ASP.NET Core-da `Middleware` nədir?",
                options: ["Məlumat bazası bağlantısı", "HTTP sorğu və cavab zəncirini idarə edən komponent", "Məlumatları oxuyan obyekt", "Statik metod"],
                correctOptionIndex: 1,
                explainAnswer: "Middleware HTTP sorğu və cavab zəncirini idarə edən komponentdir, məsələn, autentifikasiya və ya logging."
            },
            {
                text: "ASP.NET Core-da `Routing` nədir?",
                options: ["Məlumatların sıralanması", "HTTP sorğularının uyğun endpoint-a yönləndirilməsi", "Məlumatların silinməsi", "Məlumatların sıxılması"],
                correctOptionIndex: 1,
                explainAnswer: "Routing HTTP sorğularını uyğun controller və ya action-a yönləndirir, məsələn, `[Route(\"api/[controller]\")]`."
            },
            {
                text: "ASP.NET Core-da `ApiController` atributu nə edir?",
                options: ["API üçün xüsusi davranışları aktivləşdirir", "Məlumatları silir", "Məlumatları sıralayır", "Məlumatları sıxır"],
                correctOptionIndex: 0,
                explainAnswer: "`[ApiController]` atributu API üçün xüsusi davranışları (məsələn, avtomatik model validasiyası) aktivləşdirir."
            },
            {
                text: "ASP.NET Core-da `HttpGet` atributu nə üçün istifadə olunur?",
                options: ["Məlumatları silmək", "GET sorğularını idarə etmək", "Məlumatları yeniləmək", "Məlumatları sıxmaq"],
                correctOptionIndex: 1,
                explainAnswer: "`[HttpGet]` atributu metodun GET sorğularına cavab verməsini təmin edir."
            },
            {
                text: "ASP.NET Core-da `Model Binding` nədir?",
                options: ["Məlumatların sıxılması", "HTTP sorğusundan obyektə məlumat bağlamaq", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "Model Binding HTTP sorğusundakı məlumatları (məsələn, JSON) obyektə bağlayır."
            },
            {
                text: "ASP.NET Core-da ` IActionResult` nədir?",
                options: ["Məlumat bazası bağlantısı", "HTTP cavabını təmsil edən interfeys", "Məlumatları oxuyan obyekt", "Statik metod"],
                correctOptionIndex: 1,
                explainAnswer: "`IActionResult` HTTP cavabını təmsil edir, məsələn, `Ok()`, `NotFound()`, `BadRequest()`."
            },
            {
                text: "ASP.NET Core-da `appsettings.json` faylı nə üçün istifadə olunur?",
                options: ["Məlumatların sıxılması", "Tətbiq konfiqurasiyasını saxlamaq", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "`appsettings.json` tətbiq konfiqurasiyasını (məsələn, bağlantı sətirləri) saxlamaq üçün istifadə olunur."
            },
            {
                text: "ASP.NET Core-da `CORS` nədir?",
                options: ["Məlumatların sıxılması", "Cross-Origin Resource Sharing", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "CORS (Cross-Origin Resource Sharing) fərqli domenlərdən gələn sorğuları idarə etmək üçün istifadə olunur."
            },
            {
                text: "ASP.NET Core-da `AddControllers()` metodu nə edir?",
                options: ["Məlumatları silir", "Controller servislərini qeydiyyatdan keçirir", "Məlumatları sıralayır", "Məlumatları sıxır"],
                correctOptionIndex: 1,
                explainAnswer: "`AddControllers()` controller servislərini DI konteynerində qeydiyyatdan keçirir."
            },
            {
                text: "ASP.NET Core-da `FromBody` atributu nə üçün istifadə olunur?",
                options: ["Məlumatları URL-dən almaq", "Məlumatları sorğu gövdəsindən almaq", "Məlumatları başlıqdan almaq", "Məlumatları silmək"],
                correctOptionIndex: 1,
                explainAnswer: "`[FromBody]` atributu məlumatları sorğu gövdəsindən (məsələn, JSON) almaq üçün istifadə olunur."
            },
            {
                text: "ASP.NET Core-da `UseRouting()` nə edir?",
                options: ["Məlumatları silir", "Sorğuları uyğun endpoint-a yönləndirir", "Məlumatları sıralayır", "Məlumatları sıxır"],
                correctOptionIndex: 1,
                explainAnswer: "`UseRouting()` middleware sorğuları uyğun endpoint-a yönləndirir."
            },
            {
                text: "ASP.NET Core-da `Swagger` nə üçün istifadə olunur?",
                options: ["Məlumatların sıxılması", "API sənədləşdirməsi", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "Swagger API sənədləşdirməsini və test interfeysini təmin edir."
            },
            {
                text: "ASP.NET Core-da `StatusCode` metodu nə qaytarır?",
                options: ["Məlumat bazası bağlantısı", "HTTP status kodu ilə cavab", "Məlumatları oxuyan obyekt", "Statik metod"],
                correctOptionIndex: 1,
                explainAnswer: "`StatusCode` metodu müəyyən HTTP status kodu ilə cavab qaytarır, məsələn, `StatusCode(404)`."
            },
            {
                text: "ASP.NET Core-da `UseAuthentication()` nə edir?",
                options: ["Məlumatları silir", "İstifadəçi autentifikasiyasını idarə edir", "Məlumatları sıralayır", "Məlumatları sıxır"],
                correctOptionIndex: 1,
                explainAnswer: "`UseAuthentication()` middleware istifadəçi autentifikasiyasını idarə edir."
            },
            {
                text: "ASP.NET Core-da `ValidateAntiForgeryToken` atributu nə üçün istifadə olunur?",
                options: ["Məlumatların sıxılması", "CSRF hücumlarından qorunmaq", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "`[ValidateAntiForgeryToken]` CSRF (Cross-Site Request Forgery) hücumlarından qorunmaq üçün istifadə olunur."
            },
            {
                text: "ASP.NET Core-da `JsonResult` nədir?",
                options: ["Məlumat bazası bağlantısı", "JSON formatında cavab qaytaran obyekt", "Məlumatları oxuyan obyekt", "Statik metod"],
                correctOptionIndex: 1,
                explainAnswer: "`JsonResult` JSON formatında cavab qaytarır, məsələn, `return new JsonResult(data);`."
            },
            {
                text: "ASP.NET Core-da `UseAuthorization()` nə edir?",
                options: ["Məlumatları silir", "İstifadəçi icazələrini idarə edir", "Məlumatları sıralayır", "Məlumatları sıxır"],
                correctOptionIndex: 1,
                explainAnswer: "`UseAuthorization()` middleware istifadəçi icazələrini idarə edir."
            },
            {
                text: "ASP.NET Core-da `FromQuery` atributu nə üçün istifadə olunur?",
                options: ["Məlumatları URL sorğu parametrlərindən almaq", "Məlumatları sorğu gövdəsindən almaq", "Məlumatları başlıqdan almaq", "Məlumatları silmək"],
                correctOptionIndex: 0,
                explainAnswer: "`[FromQuery]` atributu məlumatları URL sorğu parametrlərindən almaq üçün istifadə olunur."
            },
            {
                text: "ASP.NET Core-da `Minimal API` nədir?",
                options: ["Məlumatların sıxılması", "Sadələşdirilmiş API təyin etmə üsulu", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "Minimal API sadələşdirilmiş şəkildə API endpoint-ları təyin etmək üçün istifadə olunur, məsələn, `app.MapGet(\"/\", () => \"Hello\");`."
            },
            {
                text: "ASP.NET Core-da `UseEndpoints()` nə edir?",
                options: ["Məlumatları silir", "Endpoint-ları konfiqurasiya edir", "Məlumatları sıralayır", "Məlumatları sıxır"],
                correctOptionIndex: 1,
                explainAnswer: "`UseEndpoints()` middleware endpoint-ları konfiqurasiya edir, məsələn, `app.UseEndpoints(endpoints => endpoints.MapControllers());`."
            },
            {
                text: "ASP.NET Core-da `Produces` atributu nə üçün istifadə olunur?",
                options: ["Məlumatların sıxılması", "Cavab formatını təyin etmək", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "`[Produces]` atributu cavabın formatını (məsələn, JSON, XML) təyin etmək üçün istifadə olunur."
            },
            {
                text: "ASP.NET Core-da `IConfiguration` nədir?",
                options: ["Məlumat bazası bağlantısı", "Tətbiq konfiqurasiyasını oxumaq üçün interfeys", "Məlumatları oxuyan obyekt", "Statik metod"],
                correctOptionIndex: 1,
                explainAnswer: "`IConfiguration` tətbiq konfiqurasiyasını (məsələn, `appsettings.json`) oxumaq üçün istifadə olunur."
            }
        ]
    },
    {
        name: "Təhlükəsizlik və Performans",
        questions: [
            {
                text: "C# dilində `async/await` istifadəsinin əsas üstünlüyü nədir?",
                options: ["Kodun sadələşdirilməsi", "Performansın artırılması", "Xətaların azaldılması", "Məlumatların sıxılması"],
                correctOptionIndex: 1,
                explainAnswer: "`async/await` asinxron əməliyyatlarla performansı artırır, çünki uzun müddətli tapşırıqlar əsas thread-i bloklamır."
            },
            {
                text: "ASP.NET Core-da JWT autentifikasiyası nə üçün istifadə olunur?",
                options: ["Məlumatların sıxılması", "İstifadəçi autentifikasiyasını təmin etmək", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "JWT (JSON Web Token) istifadəçi autentifikasiyasını təmin etmək üçün istifadə olunur, token əsaslı təhlükəsizlik təmin edir."
            },
            {
                text: "C# dilində `Task` sinfi nə üçün istifadə olunur?",
                options: ["Məlumatların sıxılması", "Asinxron əməliyyatları idarə etmək", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "`Task` sinfi asinxron əməliyyatları idarə etmək üçün istifadə olunur, məsələn, `Task.Run(() => {})`."
            },
            {
                text: "ASP.NET Core-da `HTTPS` istifadəsinin əsas məqsədi nədir?",
                options: ["Məlumatların sıxılması", "Məlumatların şifrələnməsi", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "HTTPS məlumatların şifrələnməsini təmin edir, beləliklə məlumatlar təhlükəsiz ötürülür."
            },
            {
                text: "C# dilində `lock` açar sözü nə üçün istifadə olunur?",
                options: ["Məlumatların sıxılması", "Thread təhlükəsizliyini təmin etmək", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "`lock` açar sözü thread təhlükəsizliyini təmin etmək üçün istifadə olunur, çoxlu thread-lərin eyni resursa girişini sinxronlaşdırır."
            },
            {
                text: "ASP.NET Core-da `Rate Limiting` nədir?",
                options: ["Məlumatların sıxılması", "Sorğu sayını məhdudlaşdırmaq", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "Rate Limiting müəyyən müddət ərzində sorğu sayını məhdudlaşdıraraq sistemin həddindən artıq yüklənməsinin qarşısını alır."
            },
            {
                text: "C# dilində `StringBuilder` nə üçün istifadə olunur?",
                options: ["Məlumatların sıxılması", "Sətirləri effektiv şəkildə manipulyasiya etmək", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "`StringBuilder` sətirləri effektiv şəkildə manipulyasiya etmək üçün istifadə olunur, çünki `string` dəyişkən deyildir."
            },
            {
                text: "ASP.NET Core-da `Authentication` ilə `Authorization` arasındakı fərq nədir?",
                options: ["`Authentication` icazələri, `Authorization` kimliyi yoxlayır", "`Authentication` kimliyi, `Authorization` icazələri yoxlayır", "Hər ikisi eynidir", "Hər ikisi məlumatları silir"],
                correctOptionIndex: 1,
                explainAnswer: "`Authentication` istifadəçinin kimliyini yoxlayır, `Authorization` isə istifadəçinin icazələrini yoxlayır."
            },
            {
                text: "C# dilində `Parallel.For` nə üçün istifadə olunur?",
                options: ["Məlumatların sıxılması", "Paralel döngülər icra etmək", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "`Parallel.For` paralel döngülər icra etmək üçün istifadə olunur, performansı artırır."
            },
            {
                text: "ASP.NET Core-da `Data Protection` nədir?",
                options: ["Məlumatların sıxılması", "Məlumatların şifrələnməsi və təhlükəsiz saxlanması", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "Data Protection məlumatların şifrələnməsini və təhlükəsiz saxlanmasını təmin edir."
            },
            {
                text: "C# dilində `try-finally` bloku nə üçün istifadə olunur?",
                options: ["Xətaları idarə etmək", "Resursları sərbəst buraxmaq", "Məlumatları sıralamaq", "Məlumatları sıxmaq"],
                correctOptionIndex: 1,
                explainAnswer: "`try-finally` bloku resursları sərbəst buraxmaq üçün istifadə olunur, xəta olsa da olmasa da `finally` bloku icra edilir."
            },
            {
                text: "ASP.NET Core-da `Content Security Policy (CSP)` nədir?",
                options: ["Məlumatların sıxılması", "XSS hücumlarından qorunmaq", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "CSP (Content Security Policy) XSS (Cross-Site Scripting) hücumlarından qorunmaq üçün istifadə olunur."
            },
            {
                text: "C# dilində `CancellationToken` nə üçün istifadə olunur?",
                options: ["Məlumatların sıxılması", "Asinxron əməliyyatları ləğv etmək", "Məlumatların oxunması", "Məlumatların silinməsi"],
                correctOptionIndex: 1,
                explainAnswer: "`CancellationToken` asinxron əməliyyatları ləğv etmək üçün istifadə olunur."
            }
        ]
    }
];

