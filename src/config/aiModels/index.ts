import { AiFullModelCard, LobeDefaultAiModelListItem } from '@/types/aiModel';

import { default as ai21 } from './ai21';
import { default as ai360 } from './ai360';
import { default as anthropic } from './anthropic';
import { default as azure } from './azure';
import { default as baichuan } from './baichuan';
import { default as bedrock } from './bedrock';
import { default as cloudflare } from './cloudflare';
import { default as deepseek } from './deepseek';
import { default as doubao } from './doubao';
import { default as fireworksai } from './fireworksai';
import { default as giteeai } from './giteeai';
import { default as github } from './github';
import { default as google } from './google';
import { default as groq } from './groq';
import { default as higress } from './higress';
import { default as huggingface } from './huggingface';
import { default as hunyuan } from './hunyuan';
import { default as internlm } from './internlm';
import { default as lmstudio } from './lmstudio';
import { default as minimax } from './minimax';
import { default as mistral } from './mistral';
import { default as moonshot } from './moonshot';
import { default as novita } from './novita';
import { default as ollama } from './ollama';
import { default as openai } from './openai';
import { default as openrouter } from './openrouter';
import { default as perplexity } from './perplexity';
import { default as qwen } from './qwen';
import { default as sensenova } from './sensenova';
import { default as siliconcloud } from './siliconcloud';
import { default as spark } from './spark';
import { default as stepfun } from './stepfun';
import { default as taichu } from './taichu';
import { default as togetherai } from './togetherai';
import { default as upstage } from './upstage';
import { default as wenxin } from './wenxin';
import { default as xai } from './xai';
import { default as zeroone } from './zeroone';
import { default as zhipu } from './zhipu';

type ModelsMap = Record<string, AiFullModelCard[]>;

const buildDefaultModelList = (map: ModelsMap): LobeDefaultAiModelListItem[] => {
  let models: LobeDefaultAiModelListItem[] = [];

  Object.entries(map).forEach(([provider, providerModels]) => {
    const newModels = providerModels.map((model) => ({
      ...model,
      abilities: model.abilities ?? {},
      enabled: model.enabled || false,
      providerId: provider,
      source: 'builtin',
    }));
    models = models.concat(newModels);
  });

  return models;
};

export const LOBE_DEFAULT_MODEL_LIST = buildDefaultModelList({
  ai21,
  ai360,
  anthropic,
  azure,
  baichuan,
  bedrock,
  cloudflare,
  deepseek,
  doubao,
  fireworksai,
  giteeai,
  github,
  google,
  groq,
  higress,
  huggingface,
  hunyuan,
  internlm,
  lmstudio,
  minimax,
  mistral,
  moonshot,
  novita,
  ollama,
  openai,
  openrouter,
  perplexity,
  qwen,
  sensenova,
  siliconcloud,
  spark,
  stepfun,
  taichu,
  togetherai,
  upstage,
  wenxin,
  xai,
  zeroone,
  zhipu,
});

export { default as ai21 } from './ai21';
export { default as ai360 } from './ai360';
export { default as anthropic } from './anthropic';
export { default as azure } from './azure';
export { default as baichuan } from './baichuan';
export { default as bedrock } from './bedrock';
export { default as cloudflare } from './cloudflare';
export { default as deepseek } from './deepseek';
export { default as doubao } from './doubao';
export { default as fireworksai } from './fireworksai';
export { default as giteeai } from './giteeai';
export { default as github } from './github';
export { default as google } from './google';
export { default as groq } from './groq';
export { default as higress } from './higress';
export { default as huggingface } from './huggingface';
export { default as hunyuan } from './hunyuan';
export { default as internlm } from './internlm';
export { default as lmstudio } from './lmstudio';
export { default as minimax } from './minimax';
export { default as mistral } from './mistral';
export { default as moonshot } from './moonshot';
export { default as novita } from './novita';
export { default as ollama } from './ollama';
export { default as openai } from './openai';
export { default as openrouter } from './openrouter';
export { default as perplexity } from './perplexity';
export { default as qwen } from './qwen';
export { default as sensenova } from './sensenova';
export { default as siliconcloud } from './siliconcloud';
export { default as spark } from './spark';
export { default as stepfun } from './stepfun';
export { default as taichu } from './taichu';
export { default as togetherai } from './togetherai';
export { default as upstage } from './upstage';
export { default as wenxin } from './wenxin';
export { default as xai } from './xai';
export { default as zeroone } from './zeroone';
export { default as zhipu } from './zhipu';