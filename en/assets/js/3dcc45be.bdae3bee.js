"use strict";(self.webpackChunkhd_docs=self.webpackChunkhd_docs||[]).push([[644],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),h=l,c=m["".concat(s,".").concat(h)]||m[h]||d[h]||r;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4473:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const r={slug:"script-field"},i="Calculated Field (Script)",o={unversionedId:"forms/script-field",id:"forms/script-field",title:"Calculated Field (Script)",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/forms/31-script-field.md",sourceDirName:"forms",slug:"/forms/script-field",permalink:"/docs/en/forms/script-field",draft:!1,editUrl:"https://github.com/hashdata-org/docs/tree/master/docs/forms/31-script-field.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{slug:"script-field"},sidebar:"tutorialSidebar",previous:{title:"Elements (Data Input)",permalink:"/docs/en/forms/input-elements"},next:{title:"Elements (View)",permalink:"/docs/en/forms/visualization-elements"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Creating a simple formula",id:"creating-a-simple-formula",level:2},{value:"General attributes of responses",id:"general-attributes-of-responses",level:2},{value:"name",id:"name",level:3},{value:"tags",id:"tags",level:3},{value:"Response-specific attributes",id:"response-specific-attributes",level:2},{value:"text",id:"text",level:3},{value:"label",id:"label",level:3},{value:"number",id:"number",level:3},{value:"dateStr",id:"datestr",level:3},{value:"lat",id:"lat",level:3},{value:"lon",id:"lon",level:3},{value:"items",id:"items",level:3},{value:"Available functions",id:"available-functions",level:2},{value:"all",id:"all",level:3},{value:"findByTag",id:"findbytag",level:3},{value:"avgByTag",id:"avgbytag",level:3},{value:"sumByTag",id:"sumbytag",level:3},{value:"countByTag",id:"countbytag",level:3},{value:"maxByTag",id:"maxbytag",level:3},{value:"minByTag",id:"minbytag",level:3},{value:"hasContent",id:"hascontent",level:3},{value:"isEmpty",id:"isempty",level:3},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Predefined mathematical functions",id:"predefined-mathematical-functions",level:2},{value:"Predefined mathematical constants",id:"predefined-mathematical-constants",level:2}],p={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"calculated-field-script"},"Calculated Field (Script)"),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Calculated fields allow the creation of mathematical formulas that use values associated with responses to calculate\ndifferent values, such as averages, maximum values, minimum values, standard deviations, etc."),(0,l.kt)("p",null,"To build a formula you can use any type of field/response that has a numeric value assigned."),(0,l.kt)("p",null,"See below the list of questions that have, or may have, associated numerical values and can be used in a formula:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Numerical questions (Integers, decimals and quantity using Emojis)"),(0,l.kt)("li",{parentName:"ul"},"Single Selection Questions (Dropdown Menu, Radio and Buttons)"),(0,l.kt)("li",{parentName:"ul"},"Multiple selection questions (Check Boxes and Buttons)"),(0,l.kt)("li",{parentName:"ul"},"Date and time issues"),(0,l.kt)("li",{parentName:"ul"},"Assessment questions (Facial expressions and Emojis)"),(0,l.kt)("li",{parentName:"ul"},"File upload issues (number of files uploaded)")),(0,l.kt)("h2",{id:"creating-a-simple-formula"},"Creating a simple formula"),(0,l.kt)("p",null,"Imagine that you want to create a formula that calculates the average weight of a series of samples of a certain product.\nSo, imagine that the form has the following questions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sample weight 1"),(0,l.kt)("li",{parentName:"ul"},"Sample weight 2"),(0,l.kt)("li",{parentName:"ul"},"Sample weight 3")),(0,l.kt)("p",null,"In this case, each question must be configured with a unique field name, for example,\n",(0,l.kt)("inlineCode",{parentName:"p"},"sample_weight_1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_weight_2")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_weight_3"),".\n// TODO: Add images"),(0,l.kt)("p",null,"To do this, you must create a calculated field and then add the desired formula:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function calculateValue() {\n    return (resp.sample_weight_1.number\n          + resp.sample_weight_2.number\n          + resp.sample_weight_3.number) / 3;\n}\n")),(0,l.kt)("p",null,"Let's analyze each part of the formula:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"function calculateValue()")," is the function that will be executed to calculate the value of the calculated field.\nThis function cannot be renamed, it must always have this name, cannot receive parameters and must return a numeric value or ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," (null/empty)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resp")," is an object that contains all ",(0,l.kt)("strong",{parentName:"li"},"responses")," of the form."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resp.peso_amostra_1")," is a structure that contains the data associated with the answer to the question ",(0,l.kt)("inlineCode",{parentName:"li"},"peso_amostra_1"),", such as:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"number")," is the numeric value of the response"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," is the name of the question field, e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"peso_amostra_1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tags")," is a list of ",(0,l.kt)("inlineCode",{parentName:"li"},"tags")," associated with the question"))),(0,l.kt)("li",{parentName:"ul"},"Finally, the formula calculates the arithmetic mean of the response values, adding ",(0,l.kt)("inlineCode",{parentName:"li"},"sample_weight_1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"sample_weight_2"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"sample_weight_3")," and dividing by 3.")),(0,l.kt)("admonition",{title:"Variable names",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can use any name for the variables, but it is recommended that you use names that make sense for your form.")),(0,l.kt)("admonition",{title:"Autocomplete",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+Space")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+Space")," keys to activate autocomplete manually.")),(0,l.kt)("h2",{id:"general-attributes-of-responses"},"General attributes of responses"),(0,l.kt)("p",null,"All answers have at least three attributes: ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tags")," and one or more specific attributes\nof the answer type, for example, ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," for numeric questions, ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," for text questions, etc."),(0,l.kt)("h3",{id:"name"},"name"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"name: string")),(0,l.kt)("p",null,"Question name. Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_weight_1")),(0,l.kt)("h3",{id:"tags"},"tags"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tags: string[];")),(0,l.kt)("p",null,"List of question tags, example: ",(0,l.kt)("inlineCode",{parentName:"p"},"['weight', 'sample']")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Tags")," are used to group questions and facilitate the creation of formulas.\nFor example, to calculate the average weights of multiple samples, simply place a\ntag on each weight question, for example, ",(0,l.kt)("inlineCode",{parentName:"p"},"#weight"),", and use that tag in the formula:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function calculateValue() {\n    return avgByTag('#weight');\n}\n")),(0,l.kt)("p",null,"Where ",(0,l.kt)("inlineCode",{parentName:"p"},"avgByTag"),' means: "average by tag", that is, "average per tag".'),(0,l.kt)("h2",{id:"response-specific-attributes"},"Response-specific attributes"),(0,l.kt)("p",null,"See below the list of specific attributes available for each response type:"),(0,l.kt)("h3",{id:"text"},"text"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"text?: string;")),(0,l.kt)("p",null,"Textual content of the answer, available for questions like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"One line text"),(0,l.kt)("li",{parentName:"ul"},"Multi-line text"),(0,l.kt)("li",{parentName:"ul"},"Email")),(0,l.kt)("admonition",{title:'Character "?"',type:"tip"},(0,l.kt)("p",{parentName:"admonition"},'The "?" indicates that the attribute is optional, that is, it may or may not exist.\nIf the user answers the question the attribute will exist, otherwise it will not exist.')),(0,l.kt)("h3",{id:"label"},"label"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"label?: string;")),(0,l.kt)("p",null,"Label or Text linked to the selected option, available for questions such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Single selection"),(0,l.kt)("li",{parentName:"ul"},"Multiple selection"),(0,l.kt)("li",{parentName:"ul"},"Facial expressions")),(0,l.kt)("h3",{id:"number"},"number"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"number?: number;")),(0,l.kt)("p",null,"Numeric content of the response, either the user-supplied content or the numeric content\nlinked to the selected option.\nAvailable for questions like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Integer numbers"),(0,l.kt)("li",{parentName:"ul"},"Decimal numbers"),(0,l.kt)("li",{parentName:"ul"},"Quantity using Emojis"),(0,l.kt)("li",{parentName:"ul"},"Mathematical formula"),(0,l.kt)("li",{parentName:"ul"},"Single/simple selection"),(0,l.kt)("li",{parentName:"ul"},"Facial expressions"),(0,l.kt)("li",{parentName:"ul"},"Time/Time")),(0,l.kt)("h3",{id:"datestr"},"dateStr"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dateStr?: string;")),(0,l.kt)("p",null,"Date in text form (string).\nFormat: ",(0,l.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:MM:SSZ"),", ex: 2030-12-31T23:59:59Z"),(0,l.kt)("p",null,"Available for questions like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Date"),(0,l.kt)("li",{parentName:"ul"},"Date and time")),(0,l.kt)("h3",{id:"lat"},"lat"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lat?: number;")),(0,l.kt)("p",null,"Latitude of the geographic coordinate reported in the response"),(0,l.kt)("h3",{id:"lon"},"lon"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lon?: number;")),(0,l.kt)("p",null,"Longitude of the geographic coordinate reported in the response"),(0,l.kt)("h3",{id:"items"},"items"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"items?: ISelectedItem[];")),(0,l.kt)("p",null,"List of selected items, available for questions such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Multiple selection"),(0,l.kt)("li",{parentName:"ul"},"Ordering")),(0,l.kt)("p",null,"Each item in the ",(0,l.kt)("inlineCode",{parentName:"p"},"items")," list has the following attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"label: string"),": Label or Text linked to the selected option."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"number?: number"),": Numeric content of the selected option."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"position?: number"),": Number that represents the order chosen by the user for the selected item.\nAvailable only in ",(0,l.kt)("inlineCode",{parentName:"li"},"Ordering")," type questions")),(0,l.kt)("h2",{id:"available-functions"},"Available functions"),(0,l.kt)("p",null,"The functions below are tools that assist in creating formulas, allowing you to perform\ncomplex calculations on dozens or hundreds of answers with just one line of code."),(0,l.kt)("h3",{id:"all"},"all"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"function all(): IResponse[];")),(0,l.kt)("p",null,"Returns a list (array) with all existing answers until the moment the code is executed, that is,\nthe answers to the questions that appear before this element."),(0,l.kt)("admonition",{title:"Attention",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This warning applies to all functions that return a list of responses.")),(0,l.kt)("h3",{id:"findbytag"},"findByTag"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"function findByTag(oneOrMoreTagNames: string | string[]): IResponse[];")),(0,l.kt)("p",null,"Returns a list (array) with responses that have the specified tags. ",(0,l.kt)("br",null),"\nOnly questions that appear before this element will be analyzed."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,"The function below returns the number of responses that have the ",(0,l.kt)("inlineCode",{parentName:"p"},"#weight")," tag, that is,\nthe number of samples filled in by the user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function calculateValue() {\n    const qntSamples = findByTag('#peso').filter(r => hasContent(r.number)).length;\n    return qntSamples;\n}\n")),(0,l.kt)("h3",{id:"avgbytag"},"avgByTag"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"function avgByTag(...oneOrMoreTagNames: string[]): number;")),(0,l.kt)("p",null,"Calculates the average of the numeric values of responses that have the specified tags."),(0,l.kt)("p",null,"Answers that do not have a numerical value are ignored."),(0,l.kt)("p",null,"Only questions that appear before this element will be analyzed."),(0,l.kt)("admonition",{title:"Tip",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Ex.: If you use the following formula to calculate the average of 3 weights: ",(0,l.kt)("inlineCode",{parentName:"p"},"(weight1 + weight2 + weight3) / 3"),", the result\nwill only be correct if all 3 samples are filled. Otherwise, the result will be incorrect."),(0,l.kt)("p",{parentName:"admonition"},"Image that the user filled in only 2 samples, that is, ",(0,l.kt)("inlineCode",{parentName:"p"},"peso1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"peso2"),", and left the third sample blank,\nin this case, the result of the formula will be: ",(0,l.kt)("inlineCode",{parentName:"p"},"(peso1 + peso2) / 3 "),", which is different from the correct result: ",(0,l.kt)("inlineCode",{parentName:"p"},"(weight1 + weight2) / 2"),"."),(0,l.kt)("p",{parentName:"admonition"},"To avoid this type of situation, it is recommended to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"avgByTag")," function to calculate the average,\nas it appropriately handles blank answers, that is, the result will always be correct.")),(0,l.kt)("h3",{id:"sumbytag"},"sumByTag"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"function sumByTag(...oneOrMoreTagNames: string[]): number;")),(0,l.kt)("p",null,"Calculates the sum of the numerical values of the responses that have the specified tags."),(0,l.kt)("p",null,"Only questions that appear before this element will be analyzed."),(0,l.kt)("h3",{id:"countbytag"},"countByTag"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"function countByTag(...oneOrMoreTagNames: string[]): number;")),(0,l.kt)("p",null,"Returns the number of responses that have the specified tags."),(0,l.kt)("p",null,"Only questions that appear before this element will be analyzed."),(0,l.kt)("h3",{id:"maxbytag"},"maxByTag"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"function maxByTag(...oneOrMoreTagNames: string[]): number | undefined;")),(0,l.kt)("p",null,"Returns the largest numeric value in responses that have the specified tags or 'undefined' if no value is found."),(0,l.kt)("p",null,"Answers that do not have a numerical value are ignored."),(0,l.kt)("p",null,"Only questions that appear before this element will be analyzed."),(0,l.kt)("h3",{id:"minbytag"},"minByTag"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"function minByTag(...oneOrMoreTagNames: string[]): number | undefined;")),(0,l.kt)("p",null,"Returns the smallest numeric value in responses that have the specified tags or 'undefined' if no value is found."),(0,l.kt)("p",null,"Answers that do not have a numerical value are ignored."),(0,l.kt)("p",null,"Only questions that appear before this element will be analyzed."),(0,l.kt)("h3",{id:"hascontent"},"hasContent"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"declare function hasContent(value: any): boolean;")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the value entered is different from ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," or an empty string (",(0,l.kt)("inlineCode",{parentName:"p"},"''"),")."),(0,l.kt)("h3",{id:"isempty"},"isEmpty"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"declare function isEmpty(value: any): boolean;")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the value entered is ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," or an empty string (",(0,l.kt)("inlineCode",{parentName:"p"},"''"),")."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("p",null,"In this example we will show how to calculate the values of the Bhaskara Formula.\nThe purpose of this example is to show how to store partial values in variables\nand how to use these values to perform more complex calculations."),(0,l.kt)("p",null,"In this example we will also see how to use pre-defined mathematical functions, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"Math.sqrt")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Math.pow"),"."),(0,l.kt)("p",null,"Definition of Bhaskara formula:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"F\xf3rmula de Bhaskara",src:a(7187).Z,width:"200",height:"132"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function calculateValue() {\n    let a = resp.a.number;\n    let b = resp.b.number;\n    let c = resp.c.number;\n    \n    let delta = Math.pow(b, 2) - 4 * a * c;\n    \n    let x1 = (-b + Math.sqrt(delta)) / (2 * a);\n    let x2 = (-b - Math.sqrt(delta)) / (2 * a);\n    return x1; // or x2\n}\n")),(0,l.kt)("p",null,"Where:\n",(0,l.kt)("inlineCode",{parentName:"p"},"Math.pow(b, 2)")," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"b\xb2")," ",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Math.sqrt(delta)")," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"\u221adelta")),(0,l.kt)("h3",{id:"example-2"},"Example 2"),(0,l.kt)("p",null,"In this example we will see how to calculate the Fibonacci sequence.\nThe objective of this example is to show that it is possible to define and use different functions, including recursive functions,\nthus allowing the creation of more complex calculations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function calculateValue() {\n    const n = resp.any_question_answer.number;\n    return fibonacci(n);\n}\n\nfunction fibonacci(n: number): number {\n    if (n <= 1) {\n        return n;\n    }\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\n")),(0,l.kt)("h2",{id:"predefined-mathematical-functions"},"Predefined mathematical functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"abs(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the absolute value of x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"acos(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the arc cosine of x, in radians")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"acosh(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the hyperbolic arc cosine of x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"asin(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the arcsine of x, in radians")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"asinh(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the hyperbolic arcsine of x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"atan(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"atan2(y, x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the arctangent of the quotient of its arguments")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"atanh(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the hyperbolic arctangent of x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cbrt(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the cube root of x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ceil(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns x, rounded up to the nearest integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clz32(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the number of leading zeros in a 32-bit binary representation of x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cos(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the cosine of x (x is in radians)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cosh(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the hyperbolic cosine of x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exp(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the value of Ex")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expm1(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the value of Ex minus 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"floor(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns x, rounded down to the nearest integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bottom(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the closest float representation (32-bit single precision) of a number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the natural logarithm of x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log10(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the base 10 logarithm of x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log1p(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the natural logarithm of 1 + x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log2(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the base 2 logarithm of x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max(x1,x2,..)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the number with the highest value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min(x1,x2,..)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the number with the smallest value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pow(x, y)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the value of x raised to y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"random()"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a random number between 0 and 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"round(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Round x to the nearest integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sign(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the sign of a number (checks whether it is positive, negative or zero)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sin(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the sine of x (x is in radians)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sinh(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the hyperbolic sine of x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sqrt(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the square root of x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tan(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the tangent of an angle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tanh(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the hyperbolic tangent of a number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trunc(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the integer part of a number (x)")))),(0,l.kt)("h2",{id:"predefined-mathematical-constants"},"Predefined mathematical constants"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Math.E"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the Euler number (approx. 2.718)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Math.PI"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns PI (approx. 3.14)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Math.SQRT2"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the square root of 2 (approx. 1.414)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Math.SQRT1_2"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the square root of 1/2 (approx. 0.707)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Math.LN2"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the natural logarithm of 2 (approx. 0.693)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Math.LN10"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the natural logarithm of 10 (approx. 2.302)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Math.LOG2E"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the base 2 logarithm of E (approx. 1.442)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Math.LOG10E"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the base 10 logarithm of E (approx. 0.434)")))))}d.isMDXComponent=!0},7187:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bhaskara-f455c2079f0bb90d6fdfba92ef9a7d8b.png"}}]);