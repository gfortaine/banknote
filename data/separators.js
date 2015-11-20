'use strict';

var separators = {};

separators['af'] = 
separators['af-NA'] = 
separators['be'] = 
separators['bg'] = 
separators['cs'] = 
separators['de-AT'] = 
separators['en-FI'] = 
separators['en-SE'] = 
separators['en-ZA'] = 
separators['es-CR'] = 
separators['et'] = 
separators['fi'] = 
separators['fr'] = 
separators['fr-BF'] = 
separators['fr-BI'] = 
separators['fr-BJ'] = 
separators['fr-BL'] = 
separators['fr-CA'] = 
separators['fr-CD'] = 
separators['fr-CF'] = 
separators['fr-CG'] = 
separators['fr-CI'] = 
separators['fr-CM'] = 
separators['fr-DJ'] = 
separators['fr-DZ'] = 
separators['fr-GA'] = 
separators['fr-GF'] = 
separators['fr-GN'] = 
separators['fr-GP'] = 
separators['fr-GQ'] = 
separators['fr-HT'] = 
separators['fr-KM'] = 
separators['fr-MC'] = 
separators['fr-MF'] = 
separators['fr-MG'] = 
separators['fr-ML'] = 
separators['fr-MQ'] = 
separators['fr-MR'] = 
separators['fr-MU'] = 
separators['fr-NC'] = 
separators['fr-NE'] = 
separators['fr-PF'] = 
separators['fr-PM'] = 
separators['fr-RE'] = 
separators['fr-RW'] = 
separators['fr-SC'] = 
separators['fr-SN'] = 
separators['fr-SY'] = 
separators['fr-TD'] = 
separators['fr-TG'] = 
separators['fr-TN'] = 
separators['fr-VU'] = 
separators['fr-WF'] = 
separators['fr-YT'] = 
separators['hu'] = 
separators['ka'] = 
separators['kk'] = 
separators['ky'] = 
separators['lt'] = 
separators['lv'] = 
separators['nb'] = 
separators['nb-SJ'] = 
separators['pl'] = 
separators['pt-AO'] = 
separators['pt-CV'] = 
separators['pt-GW'] = 
separators['pt-MO'] = 
separators['pt-MZ'] = 
separators['pt-PT'] = 
separators['pt-ST'] = 
separators['pt-TL'] = 
separators['ru'] = 
separators['ru-BY'] = 
separators['ru-KG'] = 
separators['ru-KZ'] = 
separators['ru-MD'] = 
separators['ru-UA'] = 
separators['sk'] = 
separators['sq'] = 
separators['sq-MK'] = 
separators['sq-XK'] = 
separators['sv'] = 
separators['sv-AX'] = 
separators['sv-FI'] = 
separators['uk'] = 
separators['uz'] = 
separators['uz-Latn'] = ', ';

separators['am'] = 
separators['ar'] = 
separators['ar-AE'] = 
separators['ar-BH'] = 
separators['ar-DJ'] = 
separators['ar-EG'] = 
separators['ar-EH'] = 
separators['ar-ER'] = 
separators['ar-IL'] = 
separators['ar-IQ'] = 
separators['ar-JO'] = 
separators['ar-KM'] = 
separators['ar-KW'] = 
separators['ar-OM'] = 
separators['ar-PS'] = 
separators['ar-QA'] = 
separators['ar-SA'] = 
separators['ar-SD'] = 
separators['ar-SO'] = 
separators['ar-SS'] = 
separators['ar-SY'] = 
separators['ar-TD'] = 
separators['ar-YE'] = 
separators['bn'] = 
separators['bn-IN'] = 
separators['cy'] = 
separators['en'] = 
separators['en-001'] = 
separators['en-AG'] = 
separators['en-AI'] = 
separators['en-AS'] = 
separators['en-AU'] = 
separators['en-BB'] = 
separators['en-BI'] = 
separators['en-BM'] = 
separators['en-BS'] = 
separators['en-BW'] = 
separators['en-BZ'] = 
separators['en-CA'] = 
separators['en-CC'] = 
separators['en-CK'] = 
separators['en-CM'] = 
separators['en-CX'] = 
separators['en-CY'] = 
separators['en-DG'] = 
separators['en-DM'] = 
separators['en-ER'] = 
separators['en-FJ'] = 
separators['en-FK'] = 
separators['en-FM'] = 
separators['en-GB'] = 
separators['en-GD'] = 
separators['en-GG'] = 
separators['en-GH'] = 
separators['en-GI'] = 
separators['en-GM'] = 
separators['en-GU'] = 
separators['en-GY'] = 
separators['en-HK'] = 
separators['en-IE'] = 
separators['en-IL'] = 
separators['en-IM'] = 
separators['en-IN'] = 
separators['en-IO'] = 
separators['en-JE'] = 
separators['en-JM'] = 
separators['en-KE'] = 
separators['en-KI'] = 
separators['en-KN'] = 
separators['en-KY'] = 
separators['en-LC'] = 
separators['en-LR'] = 
separators['en-LS'] = 
separators['en-MG'] = 
separators['en-MH'] = 
separators['en-MO'] = 
separators['en-MP'] = 
separators['en-MS'] = 
separators['en-MT'] = 
separators['en-MU'] = 
separators['en-MW'] = 
separators['en-MY'] = 
separators['en-NA'] = 
separators['en-NF'] = 
separators['en-NG'] = 
separators['en-NR'] = 
separators['en-NU'] = 
separators['en-NZ'] = 
separators['en-PG'] = 
separators['en-PH'] = 
separators['en-PK'] = 
separators['en-PN'] = 
separators['en-PR'] = 
separators['en-PW'] = 
separators['en-RW'] = 
separators['en-SB'] = 
separators['en-SC'] = 
separators['en-SD'] = 
separators['en-SG'] = 
separators['en-SH'] = 
separators['en-SL'] = 
separators['en-SS'] = 
separators['en-SX'] = 
separators['en-SZ'] = 
separators['en-TC'] = 
separators['en-TK'] = 
separators['en-TO'] = 
separators['en-TT'] = 
separators['en-TV'] = 
separators['en-TZ'] = 
separators['en-UG'] = 
separators['en-UM'] = 
separators['en-US-POSIX'] = 
separators['en-VC'] = 
separators['en-VG'] = 
separators['en-VI'] = 
separators['en-VU'] = 
separators['en-WS'] = 
separators['en-ZM'] = 
separators['en-ZW'] = 
separators['es-419'] = 
separators['es-CU'] = 
separators['es-DO'] = 
separators['es-GT'] = 
separators['es-HN'] = 
separators['es-MX'] = 
separators['es-NI'] = 
separators['es-PA'] = 
separators['es-PE'] = 
separators['es-PR'] = 
separators['es-SV'] = 
separators['es-US'] = 
separators['fa'] = 
separators['fa-AF'] = 
separators['fil'] = 
separators['ga'] = 
separators['gu'] = 
separators['he'] = 
separators['hi'] = 
separators['ja'] = 
separators['kn'] = 
separators['ko'] = 
separators['ko-KP'] = 
separators['ml'] = 
separators['mn'] = 
separators['mr'] = 
separators['ms'] = 
separators['ms-SG'] = 
separators['my'] = 
separators['ne'] = 
separators['ne-IN'] = 
separators['pa'] = 
separators['pa-Guru'] = 
separators['root'] = 
separators['si'] = 
separators['sw'] = 
separators['sw-KE'] = 
separators['sw-UG'] = 
separators['ta'] = 
separators['ta-LK'] = 
separators['ta-MY'] = 
separators['ta-SG'] = 
separators['te'] = 
separators['th'] = 
separators['to'] = 
separators['ur'] = 
separators['ur-IN'] = 
separators['zh'] = 
separators['zh-Hans'] = 
separators['zh-Hans-HK'] = 
separators['zh-Hans-MO'] = 
separators['zh-Hans-SG'] = 
separators['zh-Hant'] = 
separators['zh-Hant-HK'] = 
separators['zh-Hant-MO'] = 
separators['zu'] = '.,';

separators['ar-DZ'] = 
separators['ar-LB'] = 
separators['ar-LY'] = 
separators['ar-MA'] = 
separators['ar-MR'] = 
separators['ar-TN'] = 
separators['az'] = 
separators['az-Latn'] = 
separators['bs'] = 
separators['bs-Latn'] = 
separators['ca'] = 
separators['ca-AD'] = 
separators['ca-ES-VALENCIA'] = 
separators['ca-FR'] = 
separators['ca-IT'] = 
separators['da'] = 
separators['da-GL'] = 
separators['de'] = 
separators['de-BE'] = 
separators['de-LU'] = 
separators['el'] = 
separators['el-CY'] = 
separators['en-150'] = 
separators['en-AT'] = 
separators['en-BE'] = 
separators['en-CH'] = 
separators['en-DE'] = 
separators['en-DK'] = 
separators['en-NL'] = 
separators['en-SI'] = 
separators['es'] = 
separators['es-AR'] = 
separators['es-BO'] = 
separators['es-CL'] = 
separators['es-CO'] = 
separators['es-EA'] = 
separators['es-EC'] = 
separators['es-GQ'] = 
separators['es-IC'] = 
separators['es-PH'] = 
separators['es-PY'] = 
separators['es-UY'] = 
separators['es-VE'] = 
separators['eu'] = 
separators['fo'] = 
separators['fo-DK'] = 
separators['fr-BE'] = 
separators['fr-LU'] = 
separators['fr-MA'] = 
separators['gl'] = 
separators['hr'] = 
separators['hr-BA'] = 
separators['hy'] = 
separators['id'] = 
separators['is'] = 
separators['it'] = 
separators['it-SM'] = 
separators['km'] = 
separators['lo'] = 
separators['mk'] = 
separators['ms-BN'] = 
separators['nl'] = 
separators['nl-AW'] = 
separators['nl-BE'] = 
separators['nl-BQ'] = 
separators['nl-CW'] = 
separators['nl-SR'] = 
separators['nl-SX'] = 
separators['pt'] = 
separators['ro'] = 
separators['ro-MD'] = 
separators['sl'] = 
separators['sr'] = 
separators['sr-Cyrl'] = 
separators['sr-Cyrl-BA'] = 
separators['sr-Cyrl-ME'] = 
separators['sr-Cyrl-XK'] = 
separators['sr-Latn'] = 
separators['sr-Latn-BA'] = 
separators['sr-Latn-ME'] = 
separators['sr-Latn-XK'] = 
separators['sw-CD'] = 
separators['tr'] = 
separators['tr-CY'] = 
separators['vi'] = ',.';

separators['de-CH'] = 
separators['de-LI'] = 
separators['it-CH'] = '.\'';

separators['fr-CH'] = '. ';

module.exports = separators;