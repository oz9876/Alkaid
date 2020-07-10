import { ConfigType } from '@/types/ConfigTypes';
import { CategoryType } from '@/types/CategoryTypes';
import { ComponentConfigType } from '@/types/ComponentConfigTypes';
// import * as Ants from 'antd/es';

/**
 * 设计面板iframe 模板
 */
const iframeSrcDoc = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0,user-scalable=no,viewport-fit=cover">
    <title>Alkaid</title>
</head>
<body>
<div style="height: 100%" id="h5-container">
</div>
</body>
</html>
`;

/**
 * 原始组件集
 */
// const OriginalComponents = {...Ants};



// const config: ConfigType={
//     OriginalComponents,
//     AllComponentConfigs,
//     CONTAINER_CATEGORY,
//     NON_CONTAINER_CATEGORY,
//     iframeSrcDoc
// }

const config: any={
    // OriginalComponents,
    iframeSrcDoc
}

export default config;