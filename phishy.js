const OpenAI = require('openai');

const apiKey = '';
const fineTunedModelId = 'ft:gpt-3.5-turbo-0613';
const openai = new OpenAI({
  apiKey: apiKey,
  
});

async function main() {
  const params = {
    messages: [
      { role: 'user', content: 'Büyük bir firmanın siber güvenlik biriminde analist olarak çalışıyorsun. Senin tek görevin gelen e-postaların oltalama saldırısı olma ihtimalini değerlendirmen. Şimdi aşağıdaki e-posta için bir risk skoru oluştur. Yüz üzerinden skorlama yap, en yüksek risk 100 puan olacak. Örnek bir analiz olarak aşağıdaki çıktıyı referans alabilirsin  bana kesin cevap vermeni istiyorum  ve aynı formatta istiyorumsana bunun gibi sorular soracağım: 1. İletinin içeriği:\n\n2. İletinin kaynağı:\n\n3. İletideki bağlantı:\n\n4. İletinin talepleri: bu 4 başlığa verdiğin puanın aritmatik ortalamasını almanı istiyorum ve kesin tek cevaplar vermeni istiyorum sana sık sık böyle sorular soracağım.' 
    },
      { role: 'assistant', content: 'aı cevabı:' },
      { role: 'user', content: `modele atılan mail kontrol ettirme kısmı` }
    ],
    model: 'ft:gpt-3.5-turbo-0613',
  };
  try {
    const chatCompletion = await openai.chat.completions.create(params);
    console.log(chatCompletion['choices'][0]['message']['content']);
  } catch (error) {
    console.error('Error:', error);
  }
}



main();