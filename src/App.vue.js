/* __placeholder__ */
import UnitCard from './components/UnitCard.vue';
import CourseCard from './components/CourseCard.vue';
import senaiArapiraca from './assets/senai_arapiraca.png';
import senaiBeneditoBentes from './assets/senai_benedito_bentes.png';
import senaiPoco from './assets/senai_poco.png';
export default (await import('vue')).defineComponent({
    components: {
        UnitCard,
        CourseCard,
    },
    data() {
        return {
            unidades: [
                {
                    imagePath: senaiArapiraca,
                    title: 'Senai Arapiraca',
                    description: 'As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta. ',
                },
                {
                    imagePath: senaiBeneditoBentes,
                    title: 'Senai Benedito Bentes',
                    description: 'As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta. ',
                },
                {
                    imagePath: senaiPoco,
                    title: 'Senai Poço',
                    description: 'As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta. ',
                },
            ],
        };
    },
});
;
export const __VLS_globalTypesStart = {};
export const __VLS_globalTypesEnd = {};
const __VLS_componentsOption = {
    UnitCard,
    CourseCard,
};
const __VLS_name = undefined;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    /* CSS variable injection */
    /* CSS variable injection end */
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_intrinsicElements.header;
    __VLS_intrinsicElements.header;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.img;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.button;
    __VLS_intrinsicElements.nav;
    __VLS_intrinsicElements.nav;
    __VLS_intrinsicElements.nav;
    __VLS_intrinsicElements.nav;
    __VLS_intrinsicElements.nav;
    __VLS_intrinsicElements.nav;
    __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.ul;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.li;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.a;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.div;
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.h1;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.p;
    __VLS_intrinsicElements.main;
    __VLS_intrinsicElements.main;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.h2;
    __VLS_intrinsicElements.br;
    __VLS_intrinsicElements.br;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_intrinsicElements.section;
    __VLS_components.UnitCard;
    __VLS_components.UnitCard;
    // @ts-ignore
    [UnitCard,];
    __VLS_components.CourseCard;
    __VLS_components.CourseCard;
    __VLS_components.CourseCard;
    __VLS_components.CourseCard;
    // @ts-ignore
    [CourseCard, CourseCard,];
    __VLS_intrinsicElements.aside;
    __VLS_intrinsicElements.aside;
    __VLS_intrinsicElements.footer;
    __VLS_intrinsicElements.footer;
    {
        const __VLS_0 = __VLS_intrinsicElements["header"];
        const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
        const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{}, }));
        {
            const __VLS_5 = __VLS_intrinsicElements["img"];
            const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
            const __VLS_7 = __VLS_6({ ...{}, src: ("./assets/logo-senai.png"), alt: ("Logo"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            ({}({ ...{}, src: ("./assets/logo-senai.png"), alt: ("Logo"), }));
            const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
        }
        {
            const __VLS_10 = __VLS_intrinsicElements["button"];
            const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
            const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            ({}({ ...{}, }));
            {
                const __VLS_15 = __VLS_intrinsicElements["img"];
                const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
                const __VLS_17 = __VLS_16({ ...{}, src: ("./assets/Nav menu.png"), alt: ("Menu"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
                ({}({ ...{}, src: ("./assets/Nav menu.png"), alt: ("Menu"), }));
                const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17);
            }
            (__VLS_13.slots).default;
            const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12);
        }
        {
            const __VLS_20 = __VLS_intrinsicElements["nav"];
            const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
            const __VLS_22 = __VLS_21({ ...{}, class: ("navigation"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            ({}({ ...{}, class: ("navigation"), }));
            {
                const __VLS_25 = __VLS_intrinsicElements["ul"];
                const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
                const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
                ({}({ ...{}, }));
                {
                    const __VLS_30 = __VLS_intrinsicElements["li"];
                    const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
                    const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                    ({}({ ...{}, }));
                    {
                        const __VLS_35 = __VLS_intrinsicElements["a"];
                        const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
                        const __VLS_37 = __VLS_36({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
                        ({}({ ...{}, href: ("#"), }));
                        (__VLS_38.slots).default;
                        const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37);
                    }
                    (__VLS_33.slots).default;
                    const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
                }
                {
                    const __VLS_40 = __VLS_intrinsicElements["li"];
                    const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
                    const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
                    ({}({ ...{}, }));
                    {
                        const __VLS_45 = __VLS_intrinsicElements["a"];
                        const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
                        const __VLS_47 = __VLS_46({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
                        ({}({ ...{}, href: ("#"), }));
                        (__VLS_48.slots).default;
                        const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
                    }
                    (__VLS_43.slots).default;
                    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
                }
                {
                    const __VLS_50 = __VLS_intrinsicElements["li"];
                    const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
                    const __VLS_52 = __VLS_51({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
                    ({}({ ...{}, }));
                    {
                        const __VLS_55 = __VLS_intrinsicElements["a"];
                        const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
                        const __VLS_57 = __VLS_56({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
                        ({}({ ...{}, href: ("#"), }));
                        (__VLS_58.slots).default;
                        const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57);
                    }
                    (__VLS_53.slots).default;
                    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
                }
                {
                    const __VLS_60 = __VLS_intrinsicElements["li"];
                    const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
                    const __VLS_62 = __VLS_61({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
                    ({}({ ...{}, }));
                    {
                        const __VLS_65 = __VLS_intrinsicElements["a"];
                        const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
                        const __VLS_67 = __VLS_66({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                        ({}({ ...{}, href: ("#"), }));
                        (__VLS_68.slots).default;
                        const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67);
                    }
                    (__VLS_63.slots).default;
                    const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
                }
                (__VLS_28.slots).default;
                const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27);
            }
            (__VLS_23.slots).default;
            const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
        }
        (__VLS_3.slots).default;
        const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    {
        const __VLS_70 = __VLS_intrinsicElements["div"];
        const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
        const __VLS_72 = __VLS_71({ ...{}, class: ("background-header"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
        ({}({ ...{}, class: ("background-header"), }));
        {
            const __VLS_75 = __VLS_intrinsicElements["img"];
            const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
            const __VLS_77 = __VLS_76({ ...{}, src: ("./assets/background-banner.jpeg"), alt: ("Banner"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
            ({}({ ...{}, src: ("./assets/background-banner.jpeg"), alt: ("Banner"), }));
            const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
        }
        {
            const __VLS_80 = __VLS_intrinsicElements["div"];
            const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
            const __VLS_82 = __VLS_81({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_81));
            ({}({ ...{}, }));
            {
                const __VLS_85 = __VLS_intrinsicElements["h1"];
                const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
                const __VLS_87 = __VLS_86({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
                ({}({ ...{}, }));
                (__VLS_88.slots).default;
                const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87);
            }
            {
                const __VLS_90 = __VLS_intrinsicElements["p"];
                const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
                const __VLS_92 = __VLS_91({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
                ({}({ ...{}, }));
                (__VLS_93.slots).default;
                const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
            }
            (__VLS_83.slots).default;
            const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
        }
        (__VLS_73.slots).default;
        const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
    }
    {
        const __VLS_95 = __VLS_intrinsicElements["main"];
        const __VLS_96 = __VLS_elementAsFunctionalComponent(__VLS_95);
        const __VLS_97 = __VLS_96({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_96));
        ({}({ ...{}, }));
        {
            const __VLS_100 = __VLS_intrinsicElements["div"];
            const __VLS_101 = __VLS_elementAsFunctionalComponent(__VLS_100);
            const __VLS_102 = __VLS_101({ ...{}, class: ("container"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
            ({}({ ...{}, class: ("container"), }));
            {
                const __VLS_105 = __VLS_intrinsicElements["h2"];
                const __VLS_106 = __VLS_elementAsFunctionalComponent(__VLS_105);
                const __VLS_107 = __VLS_106({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_106));
                ({}({ ...{}, }));
                (__VLS_108.slots).default;
                const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107);
            }
            {
                const __VLS_110 = __VLS_intrinsicElements["p"];
                const __VLS_111 = __VLS_elementAsFunctionalComponent(__VLS_110);
                const __VLS_112 = __VLS_111({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_111));
                ({}({ ...{}, }));
                {
                    const __VLS_115 = __VLS_intrinsicElements["br"];
                    const __VLS_116 = __VLS_elementAsFunctionalComponent(__VLS_115);
                    const __VLS_117 = __VLS_116({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_116));
                    ({}({ ...{}, }));
                    const __VLS_118 = __VLS_pickFunctionalComponentCtx(__VLS_115, __VLS_117);
                }
                {
                    const __VLS_120 = __VLS_intrinsicElements["br"];
                    const __VLS_121 = __VLS_elementAsFunctionalComponent(__VLS_120);
                    const __VLS_122 = __VLS_121({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_121));
                    ({}({ ...{}, }));
                    const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
                }
                (__VLS_113.slots).default;
                const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
            }
            {
                const __VLS_125 = __VLS_intrinsicElements["section"];
                const __VLS_126 = __VLS_elementAsFunctionalComponent(__VLS_125);
                const __VLS_127 = __VLS_126({ ...{}, class: ("units"), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
                ({}({ ...{}, class: ("units"), }));
                {
                    const __VLS_130 = __VLS_intrinsicElements["ul"];
                    const __VLS_131 = __VLS_elementAsFunctionalComponent(__VLS_130);
                    const __VLS_132 = __VLS_131({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_131));
                    ({}({ ...{}, }));
                    for (const [unidade, index] of __VLS_getVForSourceType((__VLS_ctx.unidades))) {
                        {
                            const __VLS_135 = __VLS_intrinsicElements["li"];
                            const __VLS_136 = __VLS_elementAsFunctionalComponent(__VLS_135);
                            const __VLS_137 = __VLS_136({ ...{}, key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_136));
                            ({}({ ...{}, key: ((index)), }));
                            {
                                const __VLS_140 = {}.UnitCard;
                                const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ ...{}, imagePath: ((unidade.imagePath)), title: ((unidade.title)), description: ((unidade.description)), }));
                                ({}.UnitCard);
                                const __VLS_142 = __VLS_141({ ...{}, imagePath: ((unidade.imagePath)), title: ((unidade.title)), description: ((unidade.description)), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
                                ({}({ ...{}, imagePath: ((unidade.imagePath)), title: ((unidade.title)), description: ((unidade.description)), }));
                                const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142);
                            }
                            (__VLS_138.slots).default;
                            const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137);
                        }
                        // @ts-ignore
                        [unidades,];
                    }
                    (__VLS_133.slots).default;
                    const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
                }
                (__VLS_128.slots).default;
                const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_125, __VLS_127);
            }
            {
                const __VLS_145 = __VLS_intrinsicElements["section"];
                const __VLS_146 = __VLS_elementAsFunctionalComponent(__VLS_145);
                const __VLS_147 = __VLS_146({ ...{}, class: ("courses"), }, ...__VLS_functionalComponentArgsRest(__VLS_146));
                ({}({ ...{}, class: ("courses"), }));
                {
                    const __VLS_150 = __VLS_intrinsicElements["ul"];
                    const __VLS_151 = __VLS_elementAsFunctionalComponent(__VLS_150);
                    const __VLS_152 = __VLS_151({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_151));
                    ({}({ ...{}, }));
                    {
                        const __VLS_155 = __VLS_intrinsicElements["li"];
                        const __VLS_156 = __VLS_elementAsFunctionalComponent(__VLS_155);
                        const __VLS_157 = __VLS_156({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_156));
                        ({}({ ...{}, }));
                        {
                            const __VLS_160 = {}.CourseCard;
                            const __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({ ...{}, }));
                            ({}.CourseCard);
                            const __VLS_162 = __VLS_161({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_161));
                            ({}({ ...{}, }));
                            const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162);
                        }
                        (__VLS_158.slots).default;
                        const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157);
                    }
                    {
                        const __VLS_165 = __VLS_intrinsicElements["li"];
                        const __VLS_166 = __VLS_elementAsFunctionalComponent(__VLS_165);
                        const __VLS_167 = __VLS_166({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_166));
                        ({}({ ...{}, }));
                        {
                            const __VLS_170 = {}.CourseCard;
                            const __VLS_171 = __VLS_asFunctionalComponent(__VLS_170, new __VLS_170({ ...{}, }));
                            ({}.CourseCard);
                            const __VLS_172 = __VLS_171({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_171));
                            ({}({ ...{}, }));
                            const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172);
                        }
                        (__VLS_168.slots).default;
                        const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167);
                    }
                    (__VLS_153.slots).default;
                    const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152);
                }
                (__VLS_148.slots).default;
                const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147);
            }
            (__VLS_103.slots).default;
            const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
        }
        {
            const __VLS_175 = __VLS_intrinsicElements["aside"];
            const __VLS_176 = __VLS_elementAsFunctionalComponent(__VLS_175);
            const __VLS_177 = __VLS_176({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_176));
            ({}({ ...{}, }));
            {
                const __VLS_180 = __VLS_intrinsicElements["section"];
                const __VLS_181 = __VLS_elementAsFunctionalComponent(__VLS_180);
                const __VLS_182 = __VLS_181({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_181));
                ({}({ ...{}, }));
                {
                    const __VLS_185 = __VLS_intrinsicElements["h2"];
                    const __VLS_186 = __VLS_elementAsFunctionalComponent(__VLS_185);
                    const __VLS_187 = __VLS_186({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_186));
                    ({}({ ...{}, }));
                    (__VLS_188.slots).default;
                    const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187);
                }
                {
                    const __VLS_190 = __VLS_intrinsicElements["nav"];
                    const __VLS_191 = __VLS_elementAsFunctionalComponent(__VLS_190);
                    const __VLS_192 = __VLS_191({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_191));
                    ({}({ ...{}, }));
                    {
                        const __VLS_195 = __VLS_intrinsicElements["li"];
                        const __VLS_196 = __VLS_elementAsFunctionalComponent(__VLS_195);
                        const __VLS_197 = __VLS_196({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_196));
                        ({}({ ...{}, }));
                        {
                            const __VLS_200 = __VLS_intrinsicElements["a"];
                            const __VLS_201 = __VLS_elementAsFunctionalComponent(__VLS_200);
                            const __VLS_202 = __VLS_201({ ...{}, href: ("#"), class: ("active"), }, ...__VLS_functionalComponentArgsRest(__VLS_201));
                            ({}({ ...{}, href: ("#"), class: ("active"), }));
                            (__VLS_203.slots).default;
                            const __VLS_203 = __VLS_pickFunctionalComponentCtx(__VLS_200, __VLS_202);
                        }
                        (__VLS_198.slots).default;
                        const __VLS_198 = __VLS_pickFunctionalComponentCtx(__VLS_195, __VLS_197);
                    }
                    {
                        const __VLS_205 = __VLS_intrinsicElements["li"];
                        const __VLS_206 = __VLS_elementAsFunctionalComponent(__VLS_205);
                        const __VLS_207 = __VLS_206({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_206));
                        ({}({ ...{}, }));
                        {
                            const __VLS_210 = __VLS_intrinsicElements["a"];
                            const __VLS_211 = __VLS_elementAsFunctionalComponent(__VLS_210);
                            const __VLS_212 = __VLS_211({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_211));
                            ({}({ ...{}, href: ("#"), }));
                            (__VLS_213.slots).default;
                            const __VLS_213 = __VLS_pickFunctionalComponentCtx(__VLS_210, __VLS_212);
                        }
                        (__VLS_208.slots).default;
                        const __VLS_208 = __VLS_pickFunctionalComponentCtx(__VLS_205, __VLS_207);
                    }
                    {
                        const __VLS_215 = __VLS_intrinsicElements["li"];
                        const __VLS_216 = __VLS_elementAsFunctionalComponent(__VLS_215);
                        const __VLS_217 = __VLS_216({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_216));
                        ({}({ ...{}, }));
                        {
                            const __VLS_220 = __VLS_intrinsicElements["a"];
                            const __VLS_221 = __VLS_elementAsFunctionalComponent(__VLS_220);
                            const __VLS_222 = __VLS_221({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_221));
                            ({}({ ...{}, href: ("#"), }));
                            (__VLS_223.slots).default;
                            const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222);
                        }
                        (__VLS_218.slots).default;
                        const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217);
                    }
                    {
                        const __VLS_225 = __VLS_intrinsicElements["li"];
                        const __VLS_226 = __VLS_elementAsFunctionalComponent(__VLS_225);
                        const __VLS_227 = __VLS_226({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_226));
                        ({}({ ...{}, }));
                        {
                            const __VLS_230 = __VLS_intrinsicElements["a"];
                            const __VLS_231 = __VLS_elementAsFunctionalComponent(__VLS_230);
                            const __VLS_232 = __VLS_231({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_231));
                            ({}({ ...{}, href: ("#"), }));
                            (__VLS_233.slots).default;
                            const __VLS_233 = __VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232);
                        }
                        (__VLS_228.slots).default;
                        const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_225, __VLS_227);
                    }
                    (__VLS_193.slots).default;
                    const __VLS_193 = __VLS_pickFunctionalComponentCtx(__VLS_190, __VLS_192);
                }
                (__VLS_183.slots).default;
                const __VLS_183 = __VLS_pickFunctionalComponentCtx(__VLS_180, __VLS_182);
            }
            {
                const __VLS_235 = __VLS_intrinsicElements["section"];
                const __VLS_236 = __VLS_elementAsFunctionalComponent(__VLS_235);
                const __VLS_237 = __VLS_236({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_236));
                ({}({ ...{}, }));
                {
                    const __VLS_240 = __VLS_intrinsicElements["h2"];
                    const __VLS_241 = __VLS_elementAsFunctionalComponent(__VLS_240);
                    const __VLS_242 = __VLS_241({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_241));
                    ({}({ ...{}, }));
                    (__VLS_243.slots).default;
                    const __VLS_243 = __VLS_pickFunctionalComponentCtx(__VLS_240, __VLS_242);
                }
                {
                    const __VLS_245 = __VLS_intrinsicElements["nav"];
                    const __VLS_246 = __VLS_elementAsFunctionalComponent(__VLS_245);
                    const __VLS_247 = __VLS_246({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_246));
                    ({}({ ...{}, }));
                    {
                        const __VLS_250 = __VLS_intrinsicElements["li"];
                        const __VLS_251 = __VLS_elementAsFunctionalComponent(__VLS_250);
                        const __VLS_252 = __VLS_251({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_251));
                        ({}({ ...{}, }));
                        {
                            const __VLS_255 = __VLS_intrinsicElements["a"];
                            const __VLS_256 = __VLS_elementAsFunctionalComponent(__VLS_255);
                            const __VLS_257 = __VLS_256({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_256));
                            ({}({ ...{}, href: ("#"), }));
                            (__VLS_258.slots).default;
                            const __VLS_258 = __VLS_pickFunctionalComponentCtx(__VLS_255, __VLS_257);
                        }
                        (__VLS_253.slots).default;
                        const __VLS_253 = __VLS_pickFunctionalComponentCtx(__VLS_250, __VLS_252);
                    }
                    {
                        const __VLS_260 = __VLS_intrinsicElements["li"];
                        const __VLS_261 = __VLS_elementAsFunctionalComponent(__VLS_260);
                        const __VLS_262 = __VLS_261({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_261));
                        ({}({ ...{}, }));
                        {
                            const __VLS_265 = __VLS_intrinsicElements["a"];
                            const __VLS_266 = __VLS_elementAsFunctionalComponent(__VLS_265);
                            const __VLS_267 = __VLS_266({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_266));
                            ({}({ ...{}, href: ("#"), }));
                            (__VLS_268.slots).default;
                            const __VLS_268 = __VLS_pickFunctionalComponentCtx(__VLS_265, __VLS_267);
                        }
                        (__VLS_263.slots).default;
                        const __VLS_263 = __VLS_pickFunctionalComponentCtx(__VLS_260, __VLS_262);
                    }
                    {
                        const __VLS_270 = __VLS_intrinsicElements["li"];
                        const __VLS_271 = __VLS_elementAsFunctionalComponent(__VLS_270);
                        const __VLS_272 = __VLS_271({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_271));
                        ({}({ ...{}, }));
                        {
                            const __VLS_275 = __VLS_intrinsicElements["a"];
                            const __VLS_276 = __VLS_elementAsFunctionalComponent(__VLS_275);
                            const __VLS_277 = __VLS_276({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_276));
                            ({}({ ...{}, href: ("#"), }));
                            (__VLS_278.slots).default;
                            const __VLS_278 = __VLS_pickFunctionalComponentCtx(__VLS_275, __VLS_277);
                        }
                        (__VLS_273.slots).default;
                        const __VLS_273 = __VLS_pickFunctionalComponentCtx(__VLS_270, __VLS_272);
                    }
                    {
                        const __VLS_280 = __VLS_intrinsicElements["li"];
                        const __VLS_281 = __VLS_elementAsFunctionalComponent(__VLS_280);
                        const __VLS_282 = __VLS_281({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_281));
                        ({}({ ...{}, }));
                        {
                            const __VLS_285 = __VLS_intrinsicElements["a"];
                            const __VLS_286 = __VLS_elementAsFunctionalComponent(__VLS_285);
                            const __VLS_287 = __VLS_286({ ...{}, href: ("#"), }, ...__VLS_functionalComponentArgsRest(__VLS_286));
                            ({}({ ...{}, href: ("#"), }));
                            (__VLS_288.slots).default;
                            const __VLS_288 = __VLS_pickFunctionalComponentCtx(__VLS_285, __VLS_287);
                        }
                        (__VLS_283.slots).default;
                        const __VLS_283 = __VLS_pickFunctionalComponentCtx(__VLS_280, __VLS_282);
                    }
                    (__VLS_248.slots).default;
                    const __VLS_248 = __VLS_pickFunctionalComponentCtx(__VLS_245, __VLS_247);
                }
                (__VLS_238.slots).default;
                const __VLS_238 = __VLS_pickFunctionalComponentCtx(__VLS_235, __VLS_237);
            }
            (__VLS_178.slots).default;
            const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177);
        }
        (__VLS_98.slots).default;
        const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97);
    }
    {
        const __VLS_290 = __VLS_intrinsicElements["img"];
        const __VLS_291 = __VLS_elementAsFunctionalComponent(__VLS_290);
        const __VLS_292 = __VLS_291({ ...{}, src: (""), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_291));
        ({}({ ...{}, src: (""), alt: (""), }));
        const __VLS_293 = __VLS_pickFunctionalComponentCtx(__VLS_290, __VLS_292);
    }
    {
        const __VLS_295 = __VLS_intrinsicElements["footer"];
        const __VLS_296 = __VLS_elementAsFunctionalComponent(__VLS_295);
        const __VLS_297 = __VLS_296({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_296));
        ({}({ ...{}, }));
        {
            const __VLS_300 = __VLS_intrinsicElements["img"];
            const __VLS_301 = __VLS_elementAsFunctionalComponent(__VLS_300);
            const __VLS_302 = __VLS_301({ ...{}, src: ("./assets/logo-senai-footer.png"), alt: ("Logo Senai"), }, ...__VLS_functionalComponentArgsRest(__VLS_301));
            ({}({ ...{}, src: ("./assets/logo-senai-footer.png"), alt: ("Logo Senai"), }));
            const __VLS_303 = __VLS_pickFunctionalComponentCtx(__VLS_300, __VLS_302);
        }
        (__VLS_298.slots).default;
        const __VLS_298 = __VLS_pickFunctionalComponentCtx(__VLS_295, __VLS_297);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
}
let __VLS_internalComponent;
