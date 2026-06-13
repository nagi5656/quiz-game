const questions = [
    {
        question: "<ruby>優<rt>ㄧㄡ</rt></ruby><ruby>格<rt>ㄍㄜˊ</rt></ruby><ruby>是<rt>ㄕˋ</rt></ruby><ruby>屬<rt>ㄕㄨˇ</rt></ruby><ruby>於<rt>ㄩˊ</rt></ruby><ruby>哪<rt>ㄋㄚˇ</rt></ruby><ruby>六<rt>ㄌㄧㄡˋ</rt></ruby><ruby>大<rt>ㄉㄚˋ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby><ruby>食<rt>ㄕˊ</rt></ruby><ruby>物<rt>ㄨˋ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？",
        options: [
            "<ruby>五<rt>ㄨˇ</rt></ruby><ruby>穀<rt>ㄍㄨˇ</rt></ruby><ruby>雜<rt>ㄗㄚˊ</rt></ruby><ruby>糧<rt>ㄌㄧㄤˊ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>",
            "<ruby>油<rt>ㄧㄡˊ</rt></ruby><ruby>脂<rt>ㄓ</rt></ruby><ruby>與<rt>ㄩˇ</rt></ruby><ruby>堅<rt>ㄐㄧㄢ</rt></ruby><ruby>果<rt>ㄍㄨㄛˇ</rt></ruby><ruby>種<rt>ㄓㄨㄥˇ</rt></ruby><ruby>子<rt>ㄗˇ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>",
            "<ruby>乳<rt>ㄖㄨˇ</rt></ruby><ruby>品<rt>ㄆㄧㄣˇ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>",
            "<ruby>豆<rt>ㄉㄡˋ</rt></ruby><ruby>魚<rt>ㄩˊ</rt></ruby><ruby>蛋<rt>ㄉㄢˋ</rt></ruby><ruby>肉<rt>ㄖㄡˋ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>"
        ],
        answer: "<ruby>乳<rt>ㄖㄨˇ</rt></ruby><ruby>品<rt>ㄆㄧㄣˇ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>",
        explain: "<ruby>優<rt>ㄧㄡ</rt></ruby><ruby>格<rt>ㄍㄜˊ</rt></ruby><ruby>是<rt>ㄕˋ</rt></ruby><ruby>乳<rt>ㄖㄨˇ</rt></ruby><ruby>品<rt>ㄆㄧㄣˇ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>，<ruby>有<rt>ㄧㄡˇ</rt></ruby><ruby>豐<rt>ㄈㄥ</rt></ruby><ruby>富<rt>ㄈㄨˋ</rt></ruby><ruby>的<rt>ㄉㄜ˙</rt></ruby><ruby>蛋<rt>ㄉㄢˋ</rt></ruby><ruby>白<rt>ㄅㄞˊ</rt></ruby><ruby>質<rt>ㄓˊ</rt></ruby>、<ruby>鈣<rt>ㄍㄞˋ</rt></ruby><ruby>質<rt>ㄓˊ</rt></ruby><ruby>和<rt>ㄏㄢˋ</rt></ruby><ruby>維<rt>ㄨㄟˊ</rt></ruby><ruby>生<rt>ㄕㄥ</rt></ruby><ruby>素<rt>ㄙㄨˋ</rt></ruby>"
    },
    {
        question: "<ruby>小<rt>ㄒㄧㄠˇ</rt></ruby><ruby>黃<rt>ㄏㄨㄤˊ</rt></ruby><ruby>瓜<rt>ㄍㄨㄚ</rt></ruby><ruby>是<rt>ㄕˋ</rt></ruby><ruby>屬<rt>ㄕㄨˇ</rt></ruby><ruby>於<rt>ㄩˊ</rt></ruby><ruby>哪<rt>ㄋㄚˇ</rt></ruby><ruby>六<rt>ㄌㄧㄡˋ</rt></ruby><ruby>大<rt>ㄉㄚˋ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby><ruby>食<rt>ㄕˊ</rt></ruby><ruby>物<rt>ㄨˋ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？",
        options: ["<ruby>五<rt>ㄨˇ</rt></ruby><ruby>穀<rt>ㄍㄨˇ</rt></ruby><ruby>雜<rt>ㄗㄚˊ</rt></ruby><ruby>糧<rt>ㄌㄧㄤˊ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>", "<ruby>油<rt>ㄧㄡˊ</rt></ruby><ruby>脂<rt>ㄓ</rt></ruby><ruby>與<rt>ㄩˇ</rt></ruby><ruby>堅<rt>ㄐㄧㄢ</rt></ruby><ruby>果<rt>ㄍㄨㄛˇ</rt></ruby><ruby>種<rt>ㄓㄨㄥˇ</rt></ruby><ruby>子<rt>ㄗˇ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>", "<ruby>蔬<rt>ㄕㄨ</rt></ruby><ruby>菜<rt>ㄘㄞˋ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>", "<ruby>水<rt>ㄕㄨㄟˇ</rt></ruby><ruby>果<rt>ㄍㄨㄛˇ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>"],
        answer: "<ruby>蔬<rt>ㄕㄨ</rt></ruby><ruby>菜<rt>ㄘㄞˋ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>",
        explain: "<ruby>小<rt>ㄒㄧㄠˇ</rt></ruby><ruby>黃<rt>ㄏㄨㄤˊ</rt></ruby><ruby>瓜<rt>ㄍㄨㄚ</rt></ruby><ruby>是<rt>ㄕˋ</rt></ruby><ruby>蔬<rt>ㄕㄨ</rt></ruby><ruby>菜<rt>ㄘㄞˋ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>，<ruby>有<rt>ㄧㄡˇ</rt></ruby><ruby>豐<rt>ㄈㄥ</rt></ruby><ruby>富<rt>ㄈㄨˋ</rt></ruby><ruby>的<rt>ㄉㄜ˙</rt></ruby><ruby>醣<rt>ㄊㄤˊ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby><ruby>和<rt>ㄏㄢˋ</rt></ruby><ruby>維<rt>ㄨㄟˊ</rt></ruby><ruby>生<rt>ㄕㄥ</rt></ruby><ruby>素<rt>ㄙㄨˋ</rt></ruby>"
    },
    {
        question: "<ruby>哪<rt>ㄋㄚˇ</rt></ruby><ruby>個<rt>ㄍㄜ˙</rt></ruby><ruby>不<rt>ㄅㄨˋ</rt></ruby><ruby>是<rt>ㄕˋ</rt></ruby><ruby>營<rt>ㄧㄥˊ</rt></ruby><ruby>養<rt>ㄧㄤˇ</rt></ruby><ruby>素<rt>ㄙㄨˋ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？",
        options: ["<ruby>醣<rt>ㄊㄤˊ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>", "<ruby>酒<rt>ㄐㄧㄡˇ</rt></ruby><ruby>精<rt>ㄐㄧㄥ</rt></ruby>", "<ruby>蛋<rt>ㄉㄢˋ</rt></ruby><ruby>白<rt>ㄅㄞˊ</rt></ruby><ruby>質<rt>ㄓˊ</rt></ruby>", "<ruby>脂<rt>ㄓ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>"],
        answer: "<ruby>酒<rt>ㄐㄧㄡˇ</rt></ruby><ruby>精<rt>ㄐㄧㄥ</rt></ruby>",
        explain: "<ruby>營<rt>ㄧㄥˊ</rt></ruby><ruby>養<rt>ㄧㄤˇ</rt></ruby><ruby>素<rt>ㄙㄨˋ</rt></ruby><ruby>主<rt>ㄓㄨˇ</rt></ruby><ruby>要<rt>ㄧㄠˋ</rt></ruby><ruby>有<rt>ㄧㄡˇ</rt></ruby><ruby>醣<rt>ㄊㄤˊ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>、<ruby>蛋<rt>ㄉㄢˋ</rt></ruby><ruby>白<rt>ㄅㄞˊ</rt></ruby><ruby>質<rt>ㄓˊ</rt></ruby>、<ruby>脂<rt>ㄓ</rt></ruby><ruby>肪<rt>ㄈㄤˊ</rt></ruby>、<ruby>維<rt>ㄨㄟˊ</rt></ruby><ruby>生<rt>ㄕㄥ</rt></ruby><ruby>素<rt>ㄙㄨˋ</rt></ruby>，<ruby>而<rt>ㄦˊ</rt></ruby><ruby>酒<rt>ㄐㄧㄡˇ</rt></ruby><ruby>精<rt>ㄐㄧㄥ</rt></ruby><ruby>不<rt>ㄅㄨˋ</rt></ruby><ruby>是<rt>ㄕˋ</rt></ruby><ruby>營<rt>ㄧㄥˊ</rt></ruby><ruby>養<rt>ㄧㄤˇ</rt></ruby><ruby>素<rt>ㄙㄨˋ</rt></ruby>"
    },
    {
        question: "<ruby>每<rt>ㄇㄟˇ</rt></ruby><ruby>一<rt>ㄧ</rt></ruby><ruby>餐<rt>ㄘㄢ</rt></ruby><ruby>要<rt>ㄧㄠˋ</rt></ruby><ruby>怎<rt>ㄗㄣˇ</rt></ruby><ruby>麼<rt>ㄇㄜ˙</rt></ruby><ruby>吃<rt>ㄔ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？",
        options: ["<ruby>每<rt>ㄇㄟˇ</rt></ruby><ruby>餐<rt>ㄘㄢ</rt></ruby><ruby>一<rt>ㄧ</rt></ruby><ruby>碗<rt>ㄨㄢˇ</rt></ruby><ruby>飯<rt>ㄈㄢˋ</rt></ruby>", "<ruby>每<rt>ㄇㄟˇ</rt></ruby><ruby>餐<rt>ㄘㄢ</rt></ruby><ruby>一<rt>ㄧ</rt></ruby><ruby>湯<rt>ㄊㄤ</rt></ruby><ruby>匙<rt>ㄕˊ</rt></ruby><ruby>的<rt>ㄉㄜ˙</rt></ruby><ruby>肉<rt>ㄖㄡˋ</rt></ruby>", "<ruby>每<rt>ㄇㄟˇ</rt></ruby><ruby>餐<rt>ㄘㄢ</rt></ruby><ruby>一<rt>ㄧ</rt></ruby><ruby>掌<rt>ㄓㄤˇ</rt></ruby><ruby>心<rt>ㄒㄧㄣ</rt></ruby><ruby>的<rt>ㄉㄜ˙</rt></ruby><ruby>蔬<rt>ㄕㄨ</rt></ruby><ruby>菜<rt>ㄘㄞˋ</rt></ruby>", "<ruby>每<rt>ㄇㄟˇ</rt></ruby><ruby>餐<rt>ㄘㄢ</rt></ruby><ruby>兩<rt>ㄌㄧㄤˇ</rt></ruby><ruby>杯<rt>ㄅㄟ</rt></ruby><ruby>牛<rt>ㄋㄧㄡˊ</rt></ruby><ruby>奶<rt>ㄋㄞˇ</rt></ruby>"],
        answer: "<ruby>每<rt>ㄇㄟˇ</rt></ruby><ruby>餐<rt>ㄘㄢ</rt></ruby><ruby>一<rt>ㄧ</rt></ruby><ruby>碗<rt>ㄨㄢˇ</rt></ruby><ruby>飯<rt>ㄈㄢˋ</rt></ruby>",
        explain: "<ruby>每<rt>ㄇㄟˇ</rt></ruby><ruby>餐<rt>ㄘㄢ</rt></ruby><ruby>須<rt>ㄒㄩ</rt></ruby><ruby>吃<rt>ㄔ</rt></ruby><ruby>一<rt>ㄧ</rt></ruby><ruby>碗<rt>ㄨㄢˇ</rt></ruby><ruby>飯<rt>ㄈㄢˋ</rt></ruby>、<ruby>一<rt>ㄧ</rt></ruby><ruby>掌<rt>ㄓㄤˇ</rt></ruby><ruby>心<rt>ㄒㄧㄣ</rt></ruby><ruby>的<rt>ㄉㄜ˙</rt></ruby><ruby>肉<rt>ㄖㄡˋ</rt></ruby>、<ruby>半<rt>ㄅㄢˋ</rt></ruby><ruby>碗<rt>ㄨㄢˇ</rt></ruby><ruby>到<rt>ㄉㄠˋ</rt></ruby><ruby>一<rt>ㄧ</rt></ruby><ruby>碗<rt>ㄨㄢˇ</rt></ruby><ruby>的<rt>ㄉㄜ˙</rt></ruby><ruby>蔬<rt>ㄕㄨ</rt></ruby><ruby>菜<rt>ㄘㄞˋ</rt></ruby><ruby>和<rt>ㄏㄢˋ</rt></ruby><ruby>一<rt>ㄧ</rt></ruby><ruby>杯<rt>ㄅㄟ</rt></ruby><ruby>牛<rt>ㄋㄧㄡˊ</rt></ruby><ruby>奶<rt>ㄋㄞˇ</rt></ruby>"
    },
    {
        question: "<ruby>吃<rt>ㄔ</rt></ruby><ruby>哪<rt>ㄋㄚˇ</rt></ruby><ruby>種<rt>ㄓㄨㄥˇ</rt></ruby><ruby>六<rt>ㄌㄧㄡˋ</rt></ruby><ruby>大<rt>ㄉㄚˋ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby><ruby>食<rt>ㄕˊ</rt></ruby><ruby>物<rt>ㄨˋ</rt></ruby><ruby>可<rt>ㄎㄜˇ</rt></ruby><ruby>以<rt>ㄧˇ</rt></ruby><ruby>提<rt>ㄊㄧˊ</rt></ruby><ruby>供<rt>ㄍㄨㄥ</rt></ruby><ruby>身<rt>ㄕㄣ</rt></ruby><ruby>體<rt>ㄊㄧˇ</rt></ruby><ruby>鈣<rt>ㄍㄞˋ</rt></ruby><ruby>質<rt>ㄓˊ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？",
        options: ["<ruby>蔬<rt>ㄕㄨ</rt></ruby><ruby>菜<rt>ㄘㄞˋ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>", "<ruby>乳<rt>ㄖㄨˇ</rt></ruby><ruby>品<rt>ㄆㄧㄣˇ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>", "<ruby>油<rt>ㄧㄡˊ</rt></ruby><ruby>脂<rt>ㄓ</rt></ruby><ruby>與<rt>ㄩˇ</rt></ruby><ruby>堅<rt>ㄐㄧㄢ</rt></ruby><ruby>果<rt>ㄍㄨㄛˇ</rt></ruby><ruby>種<rt>ㄓㄨㄥˇ</rt></ruby><ruby>子<rt>ㄗˇ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>", "<ruby>五<rt>ㄨˇ</rt></ruby><ruby>穀<rt>ㄍㄨˇ</rt></ruby><ruby>雜<rt>ㄗㄚˊ</rt></ruby><ruby>糧<rt>ㄌㄧㄤˊ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>"],
        answer: "<ruby>乳<rt>ㄖㄨˇ</rt></ruby><ruby>品<rt>ㄆㄧㄣˇ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby>",
        explain: "<ruby>乳<rt>ㄖㄨˇ</rt></ruby><ruby>品<rt>ㄆㄧㄣˇ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby><ruby>像<rt>ㄒㄧㄤˋ</rt></ruby><ruby>牛<rt>ㄋㄧㄡˊ</rt></ruby><ruby>奶<rt>ㄋㄞˇ</rt></ruby><ruby>和<rt>ㄏㄢˋ</rt></ruby><ruby>起<rt>ㄑㄧˇ</rt></ruby><ruby>司<rt>ㄙ</rt></ruby><ruby>有<rt>ㄧㄡˇ</rt></ruby><ruby>豐<rt>ㄈㄥ</rt></ruby><ruby>富<rt>ㄈㄨˋ</rt></ruby><ruby>的<rt>ㄉㄜ˙</rt></ruby><ruby>鈣<rt>ㄍㄞˋ</rt></ruby><ruby>質<rt>ㄓˊ</rt></ruby>"
    },
    {
        question: "<ruby>水<rt>ㄕㄨㄟˇ</rt></ruby><ruby>果<rt>ㄍㄨㄛˇ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby><ruby>每<rt>ㄇㄟˇ</rt></ruby><ruby>餐<rt>ㄘㄢ</rt></ruby><ruby>要<rt>ㄧㄠˋ</rt></ruby><ruby>吃<rt>ㄔ</rt></ruby><ruby>多<rt>ㄉㄨㄛ</rt></ruby><ruby>少<rt>ㄕㄠˇ</rt></ruby><ruby>份<rt>ㄈㄣˋ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？",
        options: ["<ruby>一<rt>ㄧ</rt></ruby><ruby>個<rt>ㄍㄜ˙</rt></ruby><ruby>拳<rt>ㄑㄩㄢˊ</rt></ruby><ruby>頭<rt>ㄊㄡˊ</rt></ruby><ruby>大<rt>ㄉㄚˋ</rt></ruby><ruby>小<rt>ㄒㄧㄠˇ</rt></ruby>", "<ruby>一<rt>ㄧ</rt></ruby><ruby>個<rt>ㄍㄜ˙</rt></ruby><ruby>掌<rt>ㄓㄤˇ</rt></ruby><ruby>心<rt>ㄒㄧㄣ</rt></ruby><ruby>大<rt>ㄉㄚˋ</rt></ruby><ruby>小<rt>ㄒㄧㄠˇ</rt></ruby>", "<ruby>一<rt>ㄧ</rt></ruby><ruby>湯<rt>ㄊㄤ</rt></ruby><ruby>匙<rt>ㄕˊ</rt></ruby>", "<ruby>不<rt>ㄅㄨˋ</rt></ruby><ruby>用<rt>ㄩㄥˋ</rt></ruby><ruby>吃<rt>ㄔ</rt></ruby><ruby>水<rt>ㄕㄨㄟˇ</rt></ruby><ruby>果<rt>ㄍㄨㄛˇ</rt></ruby>"],
        answer: "<ruby>一<rt>ㄧ</rt></ruby><ruby>個<rt>ㄍㄜ˙</rt></ruby><ruby>拳<rt>ㄑㄩㄢˊ</rt></ruby><ruby>頭<rt>ㄊㄡˊ</rt></ruby><ruby>大<rt>ㄉㄚˋ</rt></ruby><ruby>小<rt>ㄒㄧㄠˇ</rt></ruby>",
        explain: "<ruby>水<rt>ㄕㄨㄟˇ</rt></ruby><ruby>果<rt>ㄍㄨㄛˇ</rt></ruby><ruby>類<rt>ㄌㄟˋ</rt></ruby><ruby>要<rt>ㄧㄠˋ</rt></ruby><ruby>吃<rt>ㄔ</rt></ruby><ruby>一<rt>ㄧ</rt></ruby><ruby>個<rt>ㄍㄜ˙</rt></ruby><ruby>拳<rt>ㄑㄩㄢˊ</rt></ruby><ruby>頭<rt>ㄊㄡˊ</rt></ruby><ruby>大<rt>ㄉㄚˋ</rt></ruby><ruby>小<rt>ㄒㄧㄠˇ</rt></ruby><ruby>才<rt>ㄘㄞˊ</rt></ruby><ruby>能<rt>ㄋㄥˊ</rt></ruby><ruby>得<rt>ㄉㄜˊ</rt></ruby><ruby>到<rt>ㄉㄠˋ</rt></ruby><ruby>充<rt>ㄔㄨㄥ</rt></ruby><ruby>足<rt>ㄗㄨˊ</rt></ruby><ruby>維<rt>ㄨㄟˊ</rt></ruby><ruby>生<rt>ㄕㄥ</rt></ruby><ruby>素<rt>ㄙㄨˋ</rt></ruby>"
    },
    {
        question: "<ruby>要<rt>ㄧㄠˋ</rt></ruby><ruby>怎<rt>ㄗㄣˇ</rt></ruby><ruby>麼<rt>ㄇㄜ˙</rt></ruby><ruby>樣<rt>ㄧㄤˋ</rt></ruby><ruby>吃<rt>ㄔ</rt></ruby><ruby>才<rt>ㄘㄞˊ</rt></ruby><ruby>最<rt>ㄗㄨㄟˋ</rt></ruby><ruby>健<rt>ㄐㄧㄢˋ</rt></ruby><ruby>康<rt>ㄎㄤ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？",
        options: ["<ruby>吃<rt>ㄔ</rt></ruby><ruby>水<rt>ㄕㄨㄟˇ</rt></ruby><ruby>果<rt>ㄍㄨㄛˇ</rt></ruby><ruby>前<rt>ㄑㄧㄢˊ</rt></ruby><ruby>沒<rt>ㄇㄟˊ</rt></ruby><ruby>有<rt>ㄧㄡˇ</rt></ruby><ruby>洗<rt>ㄒㄧˇ</rt></ruby><ruby>水<rt>ㄕㄨㄟˇ</rt></ruby><ruby>果<rt>ㄍㄨㄛˇ</rt></ruby>", "<ruby>吃<rt>ㄔ</rt></ruby><ruby>加<rt>ㄐㄧㄚ</rt></ruby><ruby>工<rt>ㄍㄨㄥ</rt></ruby><ruby>食<rt>ㄕˊ</rt></ruby><ruby>物<rt>ㄨˋ</rt></ruby><ruby>像<rt>ㄒㄧㄤˋ</rt></ruby><ruby>香<rt>ㄒㄧㄤ</rt></ruby><ruby>腸<rt>ㄔㄤˊ</rt></ruby>", "<ruby>吃<rt>ㄔ</rt></ruby><ruby>油<rt>ㄧㄡˊ</rt></ruby><ruby>炸<rt>ㄓㄚˊ</rt></ruby><ruby>食<rt>ㄕˊ</rt></ruby><ruby>物<rt>ㄨˋ</rt></ruby><ruby>像<rt>ㄒㄧㄤˋ</rt></ruby><ruby>炸<rt>ㄓㄚˊ</rt></ruby><ruby>雞<rt>ㄐㄧ</rt></ruby><ruby>薯<rt>ㄕㄨˇ</rt></ruby><ruby>條<rt>ㄊㄧㄠˊ</rt></ruby>", "<ruby>均<rt>ㄐㄩㄣ</rt></ruby><ruby>衡<rt>ㄏㄥˊ</rt></ruby><ruby>飲<rt>ㄧㄣˇ</rt></ruby><ruby>食<rt>ㄕˊ</rt></ruby><ruby>而<rt>ㄦˊ</rt></ruby><ruby>且<rt>ㄑㄧㄝˇ</rt></ruby><ruby>不<rt>ㄅㄨˋ</rt></ruby><ruby>挑<rt>ㄊㄧㄠ</rt></ruby><ruby>食<rt>ㄕˊ</rt></ruby>"],
        answer: "<ruby>均<rt>ㄐㄩㄣ</rt></ruby><ruby>衡<rt>ㄏㄥˊ</rt></ruby><ruby>飲<rt>ㄧㄣˇ</rt></ruby><ruby>食<rt>ㄕˊ</rt></ruby><ruby>而<rt>ㄦˊ</rt></ruby><ruby>且<rt>ㄑㄧㄝˇ</rt></ruby><ruby>不<rt>ㄅㄨˋ</rt></ruby><ruby>挑<rt>ㄊㄧㄠ</rt></ruby><ruby>食<rt>ㄕˊ</rt></ruby>",
        explain: "<ruby>均<rt>ㄐㄩㄣ</rt></ruby><ruby>衡<rt>ㄏㄥˊ</rt></ruby><ruby>飲<rt>ㄧㄣˇ</rt></ruby><ruby>食<rt>ㄕˊ</rt></ruby><ruby>而<rt>ㄦˊ</rt></ruby><ruby>且<rt>ㄑㄧㄝˇ</rt></ruby><ruby>不<rt>ㄅㄨˋ</rt></ruby><ruby>挑<rt>ㄊㄧㄠ</rt></ruby><ruby>食<rt>ㄕˊ</rt></ruby><ruby>才<rt>ㄘㄞˊ</rt></ruby><ruby>最<rt>ㄗㄨㄟˋ</rt></ruby><ruby>健<rt>ㄐㄧㄢˋ</rt></ruby><ruby>康<rt>ㄎㄤ</rt></ruby>"
    },
    {
        question: "<ruby>人<rt>ㄖㄣˊ</rt></ruby><ruby>在<rt>ㄗㄞˋ</rt></ruby><ruby>休<rt>ㄒㄧㄡ</rt></ruby><ruby>息<rt>ㄒㄧˊ</rt></ruby><ruby>時<rt>ㄕˊ</rt></ruby><ruby>身<rt>ㄕㄣ</rt></ruby><ruby>體<rt>ㄊㄧˇ</rt></ruby><ruby>還<rt>ㄏㄞˊ</rt></ruby><ruby>會<rt>ㄏㄨㄟˋ</rt></ruby><ruby>消<rt>ㄒㄧㄠ</rt></ruby><ruby>耗<rt>ㄏㄠˋ</rt></ruby><ruby>熱<rt>ㄖㄜˋ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby><ruby>嗎<rt>ㄇㄚ˙</rt></ruby>？",
        options: ["<ruby>不<rt>ㄅㄨˋ</rt></ruby><ruby>會<rt>ㄏㄨㄟˋ</rt></ruby>", "<ruby>會<rt>ㄏㄨㄟˋ</rt></ruby>", "<ruby>只<rt>ㄓˇ</rt></ruby><ruby>有<rt>ㄧㄡˇ</rt></ruby><ruby>睡<rt>ㄕㄨㄟˋ</rt></ruby><ruby>覺<rt>ㄐㄧㄠˋ</rt></ruby><ruby>才<rt>ㄘㄞˊ</rt></ruby><ruby>會<rt>ㄏㄨㄟˋ</rt></ruby>", "<ruby>只<rt>ㄓˇ</rt></ruby><ruby>有<rt>ㄧㄡˇ</rt></ruby><ruby>運<rt>ㄩㄣˋ</rt></ruby><ruby>動<rt>ㄉㄨㄥˋ</rt></ruby><ruby>才<rt>ㄘㄞˊ</rt></ruby><ruby>會<rt>ㄏㄨㄟˋ</rt></ruby>"],
        answer: "<ruby>會<rt>ㄏㄨㄟˋ</rt></ruby>",
        explain: "<ruby>休<rt>ㄒㄧㄡ</rt></ruby><ruby>息<rt>ㄒㄧˊ</rt></ruby><ruby>時<rt>ㄕˊ</rt></ruby><ruby>身<rt>ㄕㄣ</rt></ruby><ruby>體<rt>ㄊㄧˇ</rt></ruby><ruby>還<rt>ㄏㄞˊ</rt></ruby><ruby>需<rt>ㄒㄩ</rt></ruby><ruby>要<rt>ㄧㄠˋ</rt></ruby><ruby>熱<rt>ㄖㄜˋ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby><ruby>維<rt>ㄨㄟˊ</rt></ruby><ruby>持<rt>ㄔˊ</rt></ruby><ruby>呼<rt>ㄏㄨ</rt></ruby><ruby>吸<rt>ㄒㄧ</rt></ruby><ruby>和<rt>ㄏㄢˋ</rt></ruby><ruby>心<rt>ㄒㄧㄣ</rt></ruby><ruby>跳<rt>ㄊㄧㄠˋ</rt></ruby>"
    },
    {
        question: "<ruby>每<rt>ㄇㄟˇ</rt></ruby><ruby>天<rt>ㄊㄧㄢ</rt></ruby><ruby>吃<rt>ㄔ</rt></ruby><ruby>進<rt>ㄐㄧㄣˋ</rt></ruby><ruby>去<rt>ㄑㄩˋ</rt></ruby><ruby>熱<rt>ㄖㄜˋ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby><ruby>比<rt>ㄅㄧˇ</rt></ruby><ruby>消<rt>ㄒㄧㄠ</rt></ruby><ruby>耗<rt>ㄏㄠˋ</rt></ruby><ruby>多<rt>ㄉㄨㄛ</rt></ruby><ruby>會<rt>ㄏㄨㄟˋ</rt></ruby><ruby>怎<rt>ㄗㄣˇ</rt></ruby><ruby>樣<rt>ㄧㄤˋ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？",
        options: ["<ruby>體<rt>ㄊㄧˇ</rt></ruby><ruby>重<rt>ㄓㄨㄥˋ</rt></ruby><ruby>增<rt>ㄗㄥ</rt></ruby><ruby>加<rt>ㄐㄧㄚ</rt></ruby>", "<ruby>體<rt>ㄊㄧˇ</rt></ruby><ruby>重<rt>ㄓㄨㄥˋ</rt></ruby><ruby>減<rt>ㄐㄧㄢˇ</rt></ruby><ruby>少<rt>ㄕㄠˇ</rt></ruby>", "<ruby>長<rt>ㄓㄤˇ</rt></ruby><ruby>不<rt>ㄅㄨˋ</rt></ruby><ruby>高<rt>ㄍㄠ</rt></ruby>", "<ruby>不<rt>ㄅㄨˋ</rt></ruby><ruby>會<rt>ㄏㄨㄟˋ</rt></ruby><ruby>改<rt>ㄍㄞˇ</rt></ruby><ruby>變<rt>ㄅㄧㄢˋ</rt></ruby>"],
        answer: "<ruby>體<rt>ㄊㄧˇ</rt></ruby><ruby>重<rt>ㄓㄨㄥˋ</rt></ruby><ruby>增<rt>ㄗㄥ</rt></ruby><ruby>加<rt>ㄐㄧㄚ</rt></ruby>",
        explain: "<ruby>多<rt>ㄉㄨㄛ</rt></ruby><ruby>餘<rt>ㄩˊ</rt></ruby><ruby>熱<rt>ㄖㄜˋ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby><ruby>會<rt>ㄏㄨㄟˋ</rt></ruby><ruby>存<rt>ㄘㄨㄣˊ</rt></ruby><ruby>起<rt>ㄑㄧˇ</rt></ruby><ruby>來<rt>ㄌㄞˊ</rt></ruby><ruby>變<rt>ㄅㄧㄢˋ</rt></ruby><ruby>成<rt>ㄔㄥˊ</rt></ruby><ruby>脂<rt>ㄓ</rt></ruby><ruby>肪<rt>ㄈㄤˊ</rt></ruby>"
    },
    {
        question: "<ruby>哪<rt>ㄋㄚˇ</rt></ruby><ruby>一<rt>ㄧ</rt></ruby><ruby>個<rt>ㄍㄜ˙</rt></ruby><ruby>活<rt>ㄏㄨㄛˊ</rt></ruby><ruby>動<rt>ㄉㄨㄥˋ</rt></ruby><ruby>消<rt>ㄒㄧㄠ</rt></ruby><ruby>耗<rt>ㄏㄠˋ</rt></ruby><ruby>熱<rt>ㄖㄜˋ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby><ruby>最<rt>ㄗㄨㄟˋ</rt></ruby><ruby>多<rt>ㄉㄨㄛ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？",
        options: ["<ruby>坐<rt>ㄗㄨㄛˋ</rt></ruby><ruby>著<rt>ㄓㄜ˙</rt></ruby><ruby>看<rt>ㄎㄢˋ</rt></ruby><ruby>電<rt>ㄉㄧㄢˋ</rt></ruby><ruby>視<rt>ㄕˋ</rt></ruby>", "<ruby>慢<rt>ㄇㄢˋ</rt></ruby><ruby>慢<rt>ㄇㄢˋ</rt></ruby><ruby>走<rt>ㄗㄡˇ</rt></ruby><ruby>路<rt>ㄌㄨˋ</rt></ruby>", "<ruby>快<rt>ㄎㄨㄞˋ</rt></ruby><ruby>走<rt>ㄗㄡˇ</rt></ruby>", "<ruby>慢<rt>ㄇㄢˋ</rt></ruby><ruby>跑<rt>ㄆㄠˇ</rt></ruby>"],
        answer: "<ruby>慢<rt>ㄇㄢˋ</rt></ruby><ruby>跑<rt>ㄆㄠˇ</rt></ruby>",
        explain: "<ruby>慢<rt>ㄇㄢˋ</rt></ruby><ruby>跑<rt>ㄆㄠˇ</rt></ruby><ruby>比<rt>ㄅㄧˇ</rt></ruby><ruby>快<rt>ㄎㄨㄞˋ</rt></ruby><ruby>走<rt>ㄗㄡˇ</rt></ruby><ruby>和<rt>ㄏㄢˋ</rt></ruby><ruby>慢<rt>ㄇㄢˋ</rt></ruby><ruby>走<rt>ㄗㄡˇ</rt></ruby><ruby>消<rt>ㄒㄧㄠ</rt></ruby><ruby>耗<rt>ㄏㄠˋ</rt></ruby><ruby>更<rt>ㄍㄥˋ</rt></ruby><ruby>多<rt>ㄉㄨㄛ</rt></ruby><ruby>熱<rt>ㄖㄜˋ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby>"
    },
    {
        question: "<ruby>哪<rt>ㄋㄚˇ</rt></ruby><ruby>一<rt>ㄧ</rt></ruby><ruby>種<rt>ㄓㄨㄥˇ</rt></ruby><ruby>營<rt>ㄧㄥˊ</rt></ruby><ruby>養<rt>ㄧㄤˇ</rt></ruby><ruby>最<rt>ㄗㄨㄟˋ</rt></ruby><ruby>能<rt>ㄋㄥˊ</rt></ruby><ruby>幫<rt>ㄅㄤ</rt></ruby><ruby>助<rt>ㄓㄨˋ</rt></ruby><ruby>長<rt>ㄓㄤˇ</rt></ruby><ruby>肌<rt>ㄐㄧ</rt></ruby><ruby>肉<rt>ㄖㄡˋ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？",
        options: ["<ruby>蛋<rt>ㄉㄢˋ</rt></ruby><ruby>白<rt>ㄅㄞˊ</rt></ruby><ruby>質<rt>ㄓˊ</rt></ruby>", "<ruby>糖<rt>ㄊㄤˊ</rt></ruby>", "<ruby>油<rt>ㄧㄡˊ</rt></ruby>", "<ruby>鹽<rt>ㄧㄢˊ</rt></ruby><ruby>巴<rt>ㄅㄚ</rt></ruby>"],
        answer: "<ruby>蛋<rt>ㄉㄢˋ</rt></ruby><ruby>白<rt>ㄅㄞˊ</rt></ruby><ruby>質<rt>ㄓˊ</rt></ruby>",
        explain: "<ruby>蛋<rt>ㄉㄢˋ</rt></ruby><ruby>白<rt>ㄅㄞˊ</rt></ruby><ruby>質<rt>ㄓˊ</rt></ruby><ruby>可<rt>ㄎㄜˇ</rt></ruby><ruby>以<rt>ㄧˇ</rt></ruby><ruby>幫<rt>ㄅㄤ</rt></ruby><ruby>助<rt>ㄓㄨˋ</rt></ruby><ruby>身<rt>ㄕㄣ</rt></ruby><ruby>體<rt>ㄊㄧˇ</rt></ruby><ruby>修<rt>ㄒㄧㄡ</rt></ruby><ruby>復<rt>ㄈㄨˋ</rt></ruby><ruby>和<rt>ㄏㄢˋ</rt></ruby><ruby>長<rt>ㄓㄤˇ</rt></ruby><ruby>肌<rt>ㄐㄧ</rt></ruby><ruby>肉<rt>ㄖㄡˋ</rt></ruby>"
    },
    {
        question: "<ruby>哪<rt>ㄋㄚˇ</rt></ruby><ruby>一<rt>ㄧ</rt></ruby><ruby>個<rt>ㄍㄜ˙</rt></ruby><ruby>東<rt>ㄉㄨㄥ</rt></ruby><ruby>西<rt>ㄒㄧ</rt></ruby><ruby>熱<rt>ㄖㄜˋ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby><ruby>最<rt>ㄗㄨㄟˋ</rt></ruby><ruby>高<rt>ㄍㄠ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？",
        options: ["<ruby>蛋<rt>ㄉㄢˋ</rt></ruby><ruby>白<rt>ㄅㄞˊ</rt></ruby><ruby>質<rt>ㄓˊ</rt></ruby>", "<ruby>澱<rt>ㄉㄧㄢˋ</rt></ruby><ruby>粉<rt>ㄈㄣˇ</rt></ruby>", "<ruby>脂<rt>ㄓ</rt></ruby><ruby>肪<rt>ㄈㄤˊ</rt></ruby>", "<ruby>水<rt>ㄕㄨㄟˇ</rt></ruby>"],
        answer: "<ruby>脂<rt>ㄓ</rt></ruby><ruby>肪<rt>ㄈㄤˊ</rt></ruby>",
        explain: "<ruby>脂<rt>ㄓ</rt></ruby><ruby>肪<rt>ㄈㄤˊ</rt></ruby><ruby>熱<rt>ㄖㄜˋ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby><ruby>比<rt>ㄅㄧˇ</rt></ruby><ruby>蛋<rt>ㄉㄢˋ</rt></ruby><ruby>白<rt>ㄅㄞˊ</rt></ruby><ruby>質<rt>ㄓˊ</rt></ruby><ruby>和<rt>ㄏㄢˋ</rt></ruby><ruby>澱<rt>ㄉㄧㄢˋ</rt></ruby><ruby>粉<rt>ㄈㄣˇ</rt></ruby><ruby>高<rt>ㄍㄠ</rt></ruby>"
    },
    {
        question: "<ruby>肌<rt>ㄐㄧ</rt></ruby><ruby>肉<rt>ㄖㄡˋ</rt></ruby><ruby>比<rt>ㄅㄧˇ</rt></ruby><ruby>較<rt>ㄐㄧㄠˋ</rt></ruby><ruby>多<rt>ㄉㄨㄛ</rt></ruby><ruby>的<rt>ㄉㄜ˙</rt></ruby><ruby>人<rt>ㄖㄣˊ</rt></ruby><ruby>通<rt>ㄊㄨㄥ</rt></ruby><ruby>常<rt>ㄔㄤˊ</rt></ruby><ruby>會<rt>ㄏㄨㄟˋ</rt></ruby><ruby>怎<rt>ㄗㄣˇ</rt></ruby><ruby>樣<rt>ㄧㄤˋ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？",
        options: [
            "<ruby>比<rt>ㄅㄧˇ</rt></ruby><ruby>較<rt>ㄐㄧㄠˋ</rt></ruby><ruby>容<rt>ㄖㄨㄥˊ</rt></ruby><ruby>易<rt>ㄧˋ</rt></ruby><ruby>消<rt>ㄒㄧㄠ</rt></ruby><ruby>耗<rt>ㄏㄠˋ</rt></ruby><ruby>熱<rt>ㄖㄜˋ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby>",
            "<ruby>完<rt>ㄨㄢˊ</rt></ruby><ruby>全<rt>ㄑㄩㄢˊ</rt></ruby><ruby>不<rt>ㄅㄨˋ</rt></ruby><ruby>會<rt>ㄏㄨㄟˋ</rt></ruby><ruby>累<rt>ㄌㄟˋ</rt></ruby>",
            "<ruby>不<rt>ㄅㄨˋ</rt></ruby><ruby>需<rt>ㄒㄩ</rt></ruby><ruby>要<rt>ㄧㄠˋ</rt></ruby><ruby>吃<rt>ㄔ</rt></ruby><ruby>飯<rt>ㄈㄢˋ</rt></ruby>",
            "<ruby>不<rt>ㄅㄨˋ</rt></ruby><ruby>會<rt>ㄏㄨㄟˋ</rt></ruby><ruby>流<rt>ㄌㄧㄡˊ</rt></ruby><ruby>汗<rt>ㄏㄢˋ</rt></ruby>"
        ],
        answer: "<ruby>比<rt>ㄅㄧˇ</rt></ruby><ruby>較<rt>ㄐㄧㄠˋ</rt></ruby><ruby>容<rt>ㄖㄨㄥˊ</rt></ruby><ruby>易<rt>ㄧˋ</rt></ruby><ruby>消<rt>ㄒㄧㄠ</rt></ruby><ruby>耗<rt>ㄏㄠˋ</rt></ruby><ruby>熱<rt>ㄖㄜˋ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby>",
        explain: "<ruby>肌<rt>ㄐㄧ</rt></ruby><ruby>肉<rt>ㄖㄡˋ</rt></ruby><ruby>越<rt>ㄩㄝˋ</rt></ruby><ruby>多<rt>ㄉㄨㄛ</rt></ruby><ruby>消<rt>ㄒㄧㄠ</rt></ruby><ruby>耗<rt>ㄏㄠˋ</rt></ruby><ruby>能<rt>ㄋㄥˊ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby><ruby>越<rt>ㄩㄝˋ</rt></ruby><ruby>多<rt>ㄉㄨㄛ</rt></ruby>"
    },
    {
        question: "<ruby>哪<rt>ㄋㄚˇ</rt></ruby><ruby>一<rt>ㄧ</rt></ruby><ruby>個<rt>ㄍㄜ˙</rt></ruby><ruby>習<rt>ㄒㄧˊ</rt></ruby><ruby>慣<rt>ㄍㄨㄢˋ</rt></ruby><ruby>最<rt>ㄗㄨㄟˋ</rt></ruby><ruby>健<rt>ㄐㄧㄢˋ</rt></ruby><ruby>康<rt>ㄎㄤ</rt></ruby><ruby>呢<rt>ㄋㄜ</rt></ruby>？",
        options: [
            "<ruby>每<rt>ㄇㄟˇ</rt></ruby><ruby>天<rt>ㄊㄧㄢ</rt></ruby><ruby>只<rt>ㄓˇ</rt></ruby><ruby>喝<rt>ㄏㄜ</rt></ruby><ruby>飲<rt>ㄧㄣˇ</rt></ruby><ruby>料<rt>ㄌㄧㄠˋ</rt></ruby>",
            "<ruby>都<rt>ㄉㄡ</rt></ruby><ruby>不<rt>ㄅㄨˋ</rt></ruby><ruby>運<rt>ㄩㄣˋ</rt></ruby><ruby>動<rt>ㄉㄨㄥˋ</rt></ruby>",
            "<ruby>適<rt>ㄕˋ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby><ruby>運<rt>ㄩㄣˋ</rt></ruby><ruby>動<rt>ㄉㄨㄥˋ</rt></ruby><ruby>並<rt>ㄅㄧㄥˋ</rt></ruby><ruby>均<rt>ㄐㄩㄣ</rt></ruby><ruby>衡<rt>ㄏㄥˊ</rt></ruby><ruby>吃<rt>ㄔ</rt></ruby><ruby>東<rt>ㄉㄨㄥ</rt></ruby><ruby>西<rt>ㄒㄧ</rt></ruby>",
            "<ruby>每<rt>ㄇㄟˇ</rt></ruby><ruby>天<rt>ㄊㄧㄢ</rt></ruby><ruby>只<rt>ㄓˇ</rt></ruby><ruby>吃<rt>ㄔ</rt></ruby><ruby>糖<rt>ㄊㄤˊ</rt></ruby><ruby>果<rt>ㄍㄨㄛˇ</rt></ruby>"
        ],
        answer: "<ruby>適<rt>ㄕˋ</rt></ruby><ruby>量<rt>ㄌㄧㄤˋ</rt></ruby><ruby>運<rt>ㄩㄣˋ</rt></ruby><ruby>動<rt>ㄉㄨㄥˋ</rt></ruby><ruby>並<rt>ㄅㄧㄥˋ</rt></ruby><ruby>均<rt>ㄐㄩㄣ</rt></ruby><ruby>衡<rt>ㄏㄥˊ</rt></ruby><ruby>吃<rt>ㄔ</rt></ruby><ruby>東<rt>ㄉㄨㄥ</rt></ruby><ruby>西<rt>ㄒㄧ</rt></ruby>",
        explain: "<ruby>健<rt>ㄐㄧㄢˋ</rt></ruby><ruby>康<rt>ㄎㄤ</rt></ruby><ruby>生<rt>ㄕㄥ</rt></ruby><ruby>活<rt>ㄏㄨㄛˊ</rt></ruby><ruby>需<rt>ㄒㄩ</rt></ruby><ruby>要<rt>ㄧㄠˋ</rt></ruby><ruby>運<rt>ㄩㄣˋ</rt></ruby><ruby>動<rt>ㄉㄨㄥˋ</rt></ruby>、<ruby>睡<rt>ㄕㄨㄟˋ</rt></ruby><ruby>眠<rt>ㄇㄧㄢˊ</rt></ruby><ruby>和<rt>ㄏㄢˋ</rt></ruby><ruby>均<rt>ㄐㄩㄣ</rt></ruby><ruby>衡<rt>ㄏㄥˊ</rt></ruby><ruby>飲<rt>ㄧㄣˇ</rt></ruby><ruby>食<rt>ㄕˊ</rt></ruby>"
    }
];

function loadBingoBoard(){
    let board=document.getElementById("bingoBoard");
    let completed=JSON.parse(localStorage.getItem("done"))||[];

    document.getElementById("completed").innerText=completed.length;
    board.innerHTML="";

    questions.forEach((q,index)=>{
        let btn=document.createElement("button");
        btn.innerText=index+1;
        btn.className="bingo-btn";

        if(completed.includes(index)){
            btn.classList.add("done");
        }

        btn.onclick=()=>{
            localStorage.setItem("currentQuestion",index);
            window.location.href="question.html";
        };

        board.appendChild(btn);
    });
}

function loadQuestion(){
    let index=parseInt(localStorage.getItem("currentQuestion"));
    let q=questions[index];

    document.getElementById("questionBox").innerHTML=`<h2>${q.question}</h2>`;

    let html="";

    q.options.forEach(option=>{
        html+=`
        <button class="option-btn" onclick="selectAnswer('${option}')">
        ${option}
        </button>`;
    });

    document.getElementById("optionsBox").innerHTML=html;
}

function selectAnswer(choice){
    localStorage.setItem("selectedAnswer",choice);
    window.location.href="answer.html";
}

function loadAnswer(){
    let index=parseInt(localStorage.getItem("currentQuestion"));
    let q=questions[index];
    let selected=localStorage.getItem("selectedAnswer");

    let completed=JSON.parse(localStorage.getItem("done"))||[];

    if(selected===q.answer && !completed.includes(index)){
        completed.push(index);
        localStorage.setItem("done",JSON.stringify(completed));
    }

    document.getElementById("answerBox").innerHTML=`
    <h2>${selected===q.answer ? "答對了！" : "答錯了！"}</h2>
    <p>正確答案：${q.answer}</p>
    <p>詳解：${q.explain}</p>
    `;
}

function goHome(){
    window.location.href="index.html";
}