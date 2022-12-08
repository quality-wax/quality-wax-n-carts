import { Deserializable } from './deserializable'

export class Brand implements Deserializable {
  name: string
  id: string
  photo: string
  description: string
  fullDescription: string
  comments: string[]

  deserialize(input: any): this {
    Object.assign(this, input)
    return this
  }
}

export enum Brands {
  brassKnuckles = 'brass-knuckles',
  cobra = 'cobra-extracts',
  dankVapes = 'dank-vapes',
  exoticCart = 'exotic-carts',
  kingpen = 'kingpen',
  rove = 'rove',
  stiiizy = 'stiiizy',
  muhaMed = 'muha-meds',
  wax = 'wax-and-concentrates',
  big_chief = 'big-chief',
  kurvana = 'kurvana-ASCND',
  raw_garden = 'raw-garden',
}

export enum Categories {
  cartridge = 'cartridge',
  fullGram = 'full-gram-cartridge',
  halfGram = 'half-gram-cartridge',
  flashSales = 'flash-sales',
  strain = 'strain',
  concentrate = 'concentrate',
  edible = 'edible',
  // vapePen = 'vape-pen',
  // battery = 'battery',
  preRoll = 'pre-roll',
}

export enum Types {
  resin = 'live_resin',
  sauce = 'live_sauce',
  single = 'single',
  collection = 'collection',
}
export const CategoriesMap: Map<string, string> = new Map()
  .set(Categories.cartridge, 'Cartridge')
  .set(Categories.fullGram, 'Full Gram Cartridge')
  .set(Categories.halfGram, 'Half Gram Cartridge')
  .set(Categories.flashSales, 'Flash Sales')
  .set(Categories.strain, 'Strain')
  .set(Categories.concentrate, 'Concentrate')
  .set(Categories.edible, 'Edible')
  //      .set(Categories.vapePen, 'Vape pen')
  //      .set(Categories.battery, "Battery")
  .set(Categories.preRoll, 'Pre Roll')

export const ALLBRANDS = [
  // {
  //     name: "Brass Knuckles",
  //     id: Brands.brassKnuckles,
  //     description: `Established in Los Angeles, California, Brass Knuckles absolutely deliver when it comes to providing you with top shelf product and ending prohibition. Renowned for fire grams and oil cartridges that are known for flavor and potency, Brass Knuckles OG is the industry leader in Super Premium cannabis oil products. Our aim is to speak to true concentrate connoisseurs by mastering the art of extraction, exclusively using top-shelf cannabis strains. All of our products are lab tested to ensure delivery of the highest-quality products to patients. Brass Knuckles OG cartridges provide you with ONE full gram of super premium concentrate for the ultimate flavor experience at hand. Our carts connect with 510 thread batteries and are made with superior Quartz. — Available in Indica, Sativa, and Hybrid cartridges, we work exclusively with top strains including: Skywalker OG, Gelato, GG4, GSC, Strawberry Cough, Sour Diesel, and more. Our cartridges are in a class of their own.`,
  //     fullDescription: `<h2>Brass Knuckles Cartridges</h2> <p><img src="https://www.qualitywaxandcarts.com/assets/images/brands/brass-knuckles.jpg" width="640" height="800" /></p> <p><strong>Renowned for fire grams and oil cartridges that are known for flavor and potency,&nbsp;Brass Knuckles OG is the&nbsp;industry leader in Super Premium cannabis oil products.&nbsp; </strong></p> <p><strong>Brass Knuckles&nbsp;OG&nbsp;</strong>cartridges provide you with&nbsp;<strong>ONE&nbsp;full gram</strong>&nbsp;of super premium concentrate for the ultimate flavor experience at hand. Our carts connect with 510 thread batteries and are made with superior Quartz. &mdash;&nbsp;Available in Indica, Sativa, and Hybrid cartridges, we work exclusively with top strains including: Skywalker OG, Gelato, GG4, GSC, Strawberry Cough, Sour Diesel, and more.&nbsp;Our cartridges are in a class of their own.</p> <p>Brass Knuckles vape cartridges are sleek and stylish, to say the least. They are slim and compact, meaning that they are incredibly light and portable. And perhaps more importantly for some, the cartridges are also discreet, so if you need to dose while on the go, you won&rsquo;t need to advertise it to the world!</p> <p>The cartridges themselves have a metallic sheen and are embossed with the Brass Knuckles logo. The designers have paid close attention to everything from the packaging to the batteries, and it shows. Much like Xzibit&rsquo;s ride, we think this product looks pretty pimped!</p> <p>Find Authentic&nbsp;<strong>Brass Knuckles&nbsp;OG&trade;</strong>&nbsp;<strong>at <a href="https://www.qualitywaxandcarts.com">qualitywaxandcarts</a></strong>. &mdash;&nbsp;<strong>Empowering the People! Real Grams, Real Fire, No Gimmicks, No Nonsense, Knuckle Up!</strong></p> <p>So if you have been wondering which brand of vape to try next, then you&rsquo;ve come to the right place. Just sit back, chill, and check out our complete review of Brass Knuckles vape cartridges.</p> <p>&nbsp;</p> <h2>Brass Knuckles Flavors</h2> <p>The vape cartridges are available in indica, sativa, and hybrid varieties and there are also several limited editions from which to choose. For those who prefer a sweeter taste, Brass Knuckles vape cartridges are also available in several candy flavors.</p> <p>Some of the brand&rsquo;s most popular strains include:<br /><strong>Indica</strong></p> <ul style="list-style-type: disc;"> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/blueberry">Blueberry</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/do-si-dos">Do-Si-Dos</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/grape-god">Grape God</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/skywalker-og">Skywalker OG</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/sfv-og">SFV OG</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/tahoe-og">Tahoe OG</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/napalm-og">Napalm OG</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/los-angeles-kush">Los Angeles Kush</a></li> </ul> <p><strong>Sativa</strong></p> <ul style="list-style-type: disc;"> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/blue-dream">Blue Dream</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/jack-h">Jack Herer</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/maui">Maui Wowie</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/sour-diesel">Sour Diesel</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/strawberry-cough">Strawberry Cough</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/tangie">Tangie</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/sour-apple">Sour Apple</a></li> </ul> <p><strong>Hybrid</strong></p> <ul style="list-style-type: disc;"> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/banana-og">Banana OG</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/forbidden-fruit">Forbidden Fruit</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/gelato">Gelato</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/gg4">Gorilla Glue #4</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/gsc">Girl Scout Cookies</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/gushers">Gushers by Connected</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/brass-woods">Brass Woods</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/brass-knuckles/product/abracadabra">Abracadabra</a></li> </ul> <p>Each pre-filled cartridge contains a full 1g of cannabis concentrate, enough for around 200 hits. One of our favorite features of the Brass Knuckles vape is that it uses up every last drop of concentrate, unlike some other brands which leave a frustrating amount of residue in the cartridge.</p> <h2>Buy Brass Knuckles Cartridges</h2> <p>There are several stores that sell Brass Knuckles cartriges and some of them can be found online. The best online store that sells Brass Knuckles products worldwide including Canada and Australia is <a href="https://www.qualitywaxandcarts.com">qualitywaxandcarts</a>. At qualitywaxandcarts you can buy any type of vape products worldwide and we provide discreet shipping options to our clients.</p>`,
  //     comments: [
  //         "If authentic, Brass Knuckles is by far dependably potent. Only with Brass Knuckles do I have to actually gauge how much I smoke. I have tried numerous other brands. Sure, Kurvana is up there, but cost at least 20 more dollars to buy. So, thank you Brass Knuckles, you have been ever so kind to me. Have I had bad Brass carts? Yes I have. Overall, they have been my go to for potency. I tried flavors, Forbidden Fruit, Tangie, sour apple, blue dream, and various others. I’d say in potency Brass is number one. In taste they are top 5. I recommend Brass Knuckles to all. Keep doing you Brass, you Rock!",
  //         "No other brand out there has the flavor variety and they are consistent",
  //         "I've been smoking this brand for 2 years now and i love it",
  //         "Love the product. Great flavor and potency. Packaging is dope too.",
  //         "First off I love brass Knuckles because it gets me lite and doesn't smell like weed. Second, I read a review online... my brass broke a few months ago and they give you free replacements if they break. Your clinic may not know this, mine didn't so they called with them and confirmed. You may want to call them and let them know this. (Also... tell brass themselves about it and they can confirm) good luck!",

  //     ],
  //     photo: "assets/images/brands/brass-knuckles.jpg"

  // } as Brand,

  {
    name: 'Muha Meds',
    id: Brands.muhaMed,
    description:
      'MuhaMeds  (Muha Meds) is becoming one of the most recognized vaping brands in the world today. Their high quality products are what make the MuhaMeds brand so appealing to customers. Muha meds cartriges also known as MuhaCarts are Vapes  that come in both 500mg and 1g cartridges, which last ~150 and ~300 puffs each. Once finished, simply disconnect from the battery unit and dispose. Each 4-second activation yields ~3.5mg of cannabis oil.',
    fullDescription: `<h2>What is Muha Meds (MuhaMeds)</h2> <p><img src="https://www.qualitywaxandcarts.com/assets/images/muha-meds.jpeg" width="661" height="661" /></p> <p>MuhaMeds&nbsp; (Muha Meds) is becoming one of the most recognized vaping brands in the world today. Their high quality products are what make the MuhaMeds brand so appealing to customers. .</p> <p>In order to protect their customers and Muha&rsquo;eds&rsquo;s image as a high quality brand, they have developed methods that allow you to verify your purchased products. Verifying your product will ensure that you have purchased a genuine MuhaMeds product.</p> <p>On the back of every MuhaMeds box is a unique security code. By entering the code on our website, customers can make sure that that they have purchased an original product. We recommend that you visit the website and confirm that you have a genuine MuhaMeds product before using it.</p> <h2>Muha Meds Cartridges also known as MuhaCarts</h2> <p>Muha meds cartriges also known as MuhaCarts are Vapes&nbsp; that come in both 500mg and 1g cartridges, which last ~150 and ~300 puffs each. Once finished, simply disconnect from the battery unit and dispose. Each 4-second activation yields ~3.5mg of cannabis oil.&nbsp;</p> <p>Muha Meds vape oil is a 100% solvent-free cannabis concentrate, unmatched in its potency, purity, and flavor. Muha Meds is a translucent vape oil, anywhere from 75%-98% THC, and is activated by our specially-developed process to make it effective in oral and trans-dermal applications. Extraordinary tasting hits with a higher evaluation of lucidity. Never weakened or blended with any contaminants, propylene glycol, particulates or unsafe smoke poisons</p> <h3>Muha Meds Flavors</h3> <p>Muha Meds vape cartridges (MuhaCarts) have the following flavors</p> <ul> <li> <p><a href="https://www.qualitywaxandcarts.com/shop/brand/muha-meds/product/watermelon">Watermelon</a></p> </li> <li>Green Crack</li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/muha-meds/product/mogito">Mogito</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/muha-meds/product/cool-aid">Kool Aid</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/muha-meds/product/muha-meds-carts">Live Resin</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/muha-meds/product/nesquik">Nesquik</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/muha-meds/product/orange-bang">Orange Bang</a></li> <li>Gods Gift</li> <li>Sunset Sherbet</li> <li>Cherry Pie</li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/muha-meds/product/wifi-og">Wifi OG</a></li> <li>Train Wreck</li> <li>Sunday Driver</li> <li>Wedding Cake</li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/muha-meds/product/pina-colada">Pina Colada</a></li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/muha-meds/product/starburst">Starburst</a></li> <li>Agent Orange</li> <li>SFV</li> <li>King Louis XIII</li> <li>Blue Dream</li> <li>Orange Cookies</li> <li>Ice Cream Cookies</li> <li>Strawberry Shortcake</li> <li><a href="https://www.qualitywaxandcarts.com/shop/brand/muha-meds/product/strawberry-cough">Strawberry Cough</a></li> <li>NOLA Huricane</li> <li>Pineapple Express</li> <li>Fire OG</li> <li>Forbidden Fruit</li> <li>Cherry Limeade</li> <li>Blue Raspberry</li> <li>Northern Lights</li> </ul> <p>&nbsp;</p> <h2>Muha Med Pods (MuhaMini)</h2> <p>Muha Med also produce vape cartridges as pod which are aknow as MuhaMini.&nbsp; Though these are exclusive new products under the brand, a good number of flavors are already emerging and are highly appreciated by the vaping community.&nbsp;</p> <h3>Muha Med Pod (MuhaMini) flavors</h3> <ul> <li>Watermelon</li> <li>Grand Daddy Purp</li> <li>Agent Orange</li> <li>Orange Cookie</li> <li>Cherry Pie</li> <li>King Louis XIII</li> <li>Fire OG</li> <li>Pineapple Express</li> <li>Nola</li> <li>Green Crack</li> </ul> <h2>Buy Muha Meds</h2> <p>There are several store that sell Muha Meds cartriges and some of them can be found online. The best online store that sells Muha Meds products worldwide including Canada and Australia is <a href="https://www.qualitywaxandcarts.com">qualitywaxandcarts</a>. At qualitywaxandcarts you can buy any type of vape products worldwide and we provide discreet shipping options to our clients.</p>`,
    comments: [
      "I've personally never had any problems, and I live in Northern California, where you can get dispensaries to deliver you them without any hassle. The oil in mine seems extremely high quality and potency, more so than most other cartridges I've tried in the area, and I've never had any bad symptoms such as headaches. Also, to note, the carts I get you can't take the top off, they're completely sealed full grams",
      'Stealthy, unobtrusive and perfectly sized for your pocket. This pen has a gentle vapor fragrance that does not smell like marijuana and can easily be stored away.',
      'Great tasting hits with a higher grade of clarity. Never diluted or mixed with any contaminants, propylene glycol, particulates or harmful smoke toxins',
      'Solid and well-hitting, this vaporizer delivers a strong pull accompanied by a great taste and fantastic airflow that does not thicken or clot.',
      'A cost-effective vapor pen that is equipped with fast charging. It’s safe, clean and ready to use; excellent for on-the-go vaping.',
    ],
    photo: 'assets/images/brands/muha-meds.jpeg',
  } as Brand,

  // {
  //     name: "Exotic Carts",
  //     id: Brands.exoticCart,
  //     description: "Exotic Carts are a THC oil cartridge that are sold in a range of flavors with a claimed THC potency of 80%-85% that has been “tested” but these tests aren’t certified. These test results turned out to be true which was revealed after someone tried to verify from the lab. They have taken over Instagram, snapchats, and many actual legal dispensaries. There is a giant selection of Exotic carts flavors the overall issue with these Carts is that there is a limited amount of information on the company, making the information on the back of the packaging being the only piece of information on what the cart truely contains. There is no exotic carts official website but only seems to be advertised on social media or forums. However exortic carts are in the market for about 5 years now and people still continue to buy them.",
  //     fullDescription: `<h2>Exotic Carts</h2>
  //     <p><img src="https://www.qualitywaxandcarts.com/assets/images/brands/exotic-carts.jpg" alt="Dankwoods" width="640" height="640" /></p>
  //     <div class="question active">
  //     <div class="answer">
  //     <h2>What are Exotic Carts Cartridges?</h2>
  //     <p><strong>Exotic Carts THC Cartridges</strong>&nbsp;are viewed as one of the most well known prefilled THC oil cartridges. They are 80-88% THC ALL NATURAL Extract&nbsp;Vape Cartridges&nbsp;. The &ldquo;<strong>exotic carts</strong>&rdquo; has been rendered illicit in certain states because of&nbsp;cannabis laws. Be that as it may, we at&nbsp;vaporivape.com&nbsp;offers lab tested, all normal exotic carts thc cartridges with NO PG/PEG/VG. We transport overall independent of the laws administering&nbsp;cannabis usage&nbsp;in many nations.</p>
  //     <h2><a href="https://www.qualitywaxandcarts.com/shop/brand/exotic-carts/products">Where can I Buy Exotic Carts ?</a></h2>
  //     <p>Do you love&nbsp;<strong>exotic carts</strong>&nbsp;and wonder where you can actually buy exotic carts even after been labeled illegal in many states? Real Exotic Carts are now available for sale at&nbsp;Vaporivape.com. You can now easily get your preferred exotic carts flavor online with no hassles. Get to know more about Exotic Carts flavors and strains below .</p>
  //     <h2>Exotic Carts Flavor</h2>
  //     <p>Our premuim&nbsp;<strong>exotic carts</strong>&nbsp;thc cartridges are extracted utilizing c02 refining procedure to guarantee quality and best vaping background. The following are a couple of exotic cart flavors you can pick from on our prefilled&nbsp;<a href="https://www.qualitywaxandcarts.com/shop/brand/exotic-carts/products"><strong>thc vape cartridges</strong></a></p>
  //     <p><strong>INDICA</strong></p>
  //     <p>Yoda OG cartridge : 91.74% THC,<br />Wedding Cake cartridge : 93.75% THC, I<br />Tropical cartridge : 93.14% THC,<br />Mars OG cartridge : 92.31% THC,<br />Kosher Kush cartridge : 91.21% THC,<br />Forbidden Fruit cartridge : 94.55% THC<br />Do Si Do cartridge : 91.22% THC,</p>
  //     <p><strong>SATIVA<br /></strong><br />Apple Fritter : 91.48% THC,<br />Durban Poison : 90.55% THC,<br />Pineapple Express : 93.57% THC,<br />Strawnana : 96.12% THC,</p>
  //     <p><strong>HYBRID</strong></p>
  //     <p>Gelato : 92.23% THC,<br />Gorilla Glue : 89.34% THC,<br />Girl Scout Cookies : 92.65% THC,<br />Grape Pie : 87.67%</p>
  //     </div>
  //     </div>`,
  //     comments: [
  //         "Have heard they are shit but I tried a friends and it seemed fairly legit. The oil wasn't runny so that was a plus and the flavor was way more oily than I was expecting, also a plus imo. That said I know these things aren't legit.",
  //         "Exotic carts are of vastly superior quality to most carts for sale on the east coast. However, they are 20% lower thc than advertised",
  //         "I'm been buying carts here in the east coast for about a year now. I have tried pretty much every brand in the market here. I can say that about 99% of Exortic carts I've bought are good",
  //         "I've tried traditional methods for thc, i really didn't like smoking out of bowl or any other ways. A friend got me the gorilla glue flavor. I have to say, it's really smooth, and in lower wattage 3 or 4 hits, it does the job."

  //     ],
  //     photo: "assets/images/brands/exotic-carts.jpg"

  // } as Brand,

  {
    name: '710 Kingpen',
    id: Brands.kingpen,
    description:
      'The world most awarded cannabis vape. Kingpen oil is made in our own state-of-the-art manufacturing lab. It is distilled 5 times producing a high quality product that passes strict qualitative and quantitative tests. No PG, VG, PEG or other additives. Just the highest quality vape cartridges for the highest quality high. KINGPEN BATTERIES AND CARTRIDGES Our hardware maintains some of the lowest failure rates in the industry and our cartridges are engineered for smooth and consistent airflow. In addition, our pens have multiple voltage levels so you can control your heat settings (low, medium and hot) and feature a pre-heat mode that allows you to heat the oil before you hit.',
    fullDescription: `<h2>710 Kingpen Cartridges</h2>
        <p><img src="https://www.qualitywaxandcarts.com/assets/images/brands/kingpen.jpg" alt="710 Kingpen" width="640" height="640" /></p>
        <p>&ldquo;<strong>710 Kingpen cartridge</strong>&rdquo; not at all like some other&nbsp;<strong>king pen cartridges</strong>, has a nice,clean plan and feel. Every thc vape cartridge is outfitted with 0.5 ml just as 1ml lab tried, dissolved free&nbsp;<strong>THC vape oil</strong>. The oil used in&nbsp;<strong>710 Kingpen cartridges</strong>&nbsp;is of the most elevated quality, motivation behind why it right now sits as the most granted thc vape cartridge in the market. This top notch cart is incredibly rare and very much looked for after.&nbsp;Vapori Vape&nbsp;is among a bunch of sites which offer the accessible thc vape carts.</p>
        <blockquote>
        <p>Kingpen oil is made in our own state-of-the-art manufacturing lab. It is distilled 5 times producing a high quality product that passes strict qualitative and quantitative tests. No PG, VG, PEG or other additives. Just the highest quality vape cartridges for the highest quality high</p>
        </blockquote>
        <p>In the ever-changing, ever-evolving world of cannabis, it&rsquo;s damn good to know that some things remain as is. Like the most awarded Vape Pen Cartridge in the history of the High Times Cannabis Cup&hellip; Kingpen.</p>
        <h2 class="woodmart-title-container title woodmart-font-weight-">MOST POPULAR 710 KINGPEN CARTRIDGES</h2>
        <p>There are just a couple of things you have to think around 710 King Pen. The KingPen like <a href="https://www.qualitywaxandcarts.com/shop/brand/rove">Rove Cartridges</a><strong>&nbsp;and Stiiizy Carts </strong>have been known for it&rsquo;s astonishing cannabis oil quality and vaping background. They are the most elevated quality, smash hit and most profoundly enlivened vaporizer available. They are delivered in California, situated in Los Angeles, and they are one of the market heads starting at the present moment.</p>
        <h2>710 Kingpen Flavors</h2>
        <p>710 King Pen have won various honors, including winning the vape items class at the High Times Cannabis Cup in both LA and Denver. All things considered, you can have confidence in these immensely unrivaled, lab-tried items. Get 1g vape cartridges presently, investigate the strains and flavors underneath</p>
        <ul>
        <li>Blue Dream Vape Cartridge</li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/kingpen/product/cali-o"><span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&nbsp;</span></span></span>Cali-O Vape Cartridge</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/kingpen/product/gelato">Gelato Vape Cartridge</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/kingpen/product/jack-herer">Jack Herer Vape Cartridge</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/kingpen/product/jillybean'">Jillybean Vape Cartridge</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/kingpen/product/banana-sherbet">Banana Sherbet Vape Cartridge</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/kingpen/product/king-louis-og">King Louis OG Vape Cartridge</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/kingpen/product/romulan-grapefruit">Romulan Grapefruit Vape Cartridge</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/kingpen/product/skywalker-og">Skywalker OG Vape Cartridge</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/kingpen/product/super-lemon-haze">Super Lemon Haze Vape Cartridge</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/kingpen/product/three-kings">Three Kings Vape Cartridge</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/kingpen/product/trainwreck">Trainwreck Vape Cartridge</a></li>
        </ul>
        <div class="et_pb_row et_pb_row_13">
        <div class="et_pb_column et_pb_column_1_3 et_pb_column_21    et_pb_css_mix_blend_mode_passthrough">
        <div class="et_pb_module et_pb_text et_pb_text_1 et_pb_bg_layout_light  et_pb_text_align_left">
        <div class="et_pb_text_inner">
        <div class="question">
        <div class="title">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        </div>`,
    comments: [
      'Love the kingpen cartridges. ordered mine through 420 oil carts. I like the jack herer and purple punch definetley a fan',
      'The jillybean cartridge by kingpen tastes amazing and has a good flavor to it that I like. I personally like trying different cartridge brands and flavors and had no problem with this brand. I will definetely be trying more of the flavors of kingpen brand cartridges in the future.',
      'Love the gelato cartridges by kingpen! Definitely fire!!!',
      "Tried the king louis cartridge through 420 Oil Carts and have to say I'm definetely amazed with the cartridge taste and flavor. Worked great on my new lo key battery that i bought over the weekend from a local smokeshop",
      'Most of the people on here crying about Kingpens flavor is because they are smoking fake Kingpens and bullshit knockoffs. Fake pens are an epidemic right now. Kingpen is the most faked pen on the market because their oil is quality. You know how to spot a fake Kingpen??? Their seal isn’t perforated!! You have to rip the whole box to open. If they are selling Kingpens for less than $60 they are fake. You can thank alibaba dot com for that!! They sell all the knockoffs for Brass knuckles, Kingpen and Smart Carts. Their pens have been leaking though and that is a real problem',
    ],
    photo: 'assets/images/brands/kingpen.jpg',
  } as Brand,

  {
    name: 'Wax and Concentrates',
    id: Brands.wax,
    description: '',
    comments: [],
    photo: '',
  } as Brand,
  // {
  //     name: "Rove",
  //     id: Brands.rove,
  //     description: "Rove built the foundation of their company on honesty, simplicity, and transparency. Their mission is to provide customers with great tasting vape cartridges and reliable and dependable vape pens. Rove proudly stands opposed to the trend of exaggerated quality and misinformation within product test results. Rove wants their customers to know they have their best interests in mind with every single step they take. They strive for excellence and are dedicated to improvement. Welcome to Rove, where the best is always getting better. The enthusiasts behind Rove noticed the cannabis industry’s growing interest in vape pens and cartridges. Already established in various arenas within the marijuana industry, they looked amongst their peers and individually came to the same conclusion: “we could do a lot better with more transparency.” In 2015, they quickly banded together to combine their wealth of cultivation, extraction, and laboratory experience to create Rove.",
  //     fullDescription: `<h2>Rove Vape Cartridges (Carts)</h2>
  //     <p>Rove built the foundation of their company on honesty, simplicity, and transparency. Their mission is to provide customers with great tasting vape cartridges and reliable and dependable vape pens. Rove proudly stands opposed to the trend of exaggerated quality and misinformation within product test results. Rove wants their customers to know they have their best interests in mind with every single step they take. They strive for excellence and are dedicated to improvement.</p>
  //     <p><img src="https://media.merryjane.com/eyJidWNrZXQiOiJmaWxlcy5tZXJyeWphbmUuY29tIiwia2V5IjoidXBsb2Fkcy9nZW5lcmljLzE1NzM4NTI0MzA2NDVfZ3JvcTh0ZTJ1bHoxMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjowLCJmaXQiOiJjb3ZlciJ9fX0=" alt="1573852430645_groq8te2ulz11.jpg" /></p>
  //     <h3>Welcome to Rove, where the best is always getting better.</h3>
  //     <p>The enthusiasts behind Rove noticed the cannabis industry&rsquo;s growing interest in vape pens and cartridges. Already established in various arenas within the marijuana industry, they looked amongst their peers and individually came to the same conclusion: &ldquo;we could do a lot better with more transparency.&rdquo; In 2015, they quickly banded together to combine their wealth of cultivation, extraction, and laboratory experience to create Rove. Their tremendous growth started on day one. Initially working with a small number of outlets, their products were met with an uncommon enthusiasm. Each week saw Rove opening new dispensary relationships with more and more demand for their products. Today, Rove products can be found in over 50 shops and deliveries throughout California.</p>
  //     <p>Rove takes great pride in using a true solventless CO2 extraction method. While many other manufacturers boast about using a refined CO2 process, they still end up using solvents after the extraction process. Rove doesn&rsquo;t. Rove&rsquo;s CO2 extracts using liquid carbon dioxide which they then refine utilizing only heat and pressure. Although this process can be painstakingly time-consuming, the end result of producing a thinner and cleaner oil for their patients is more than worth the effort.</p>
  //     <p>Rove is renowned for their simple, tasty, and dependable vape cartridges. Portable and discreet, the aim of their cartridges is to provide ultimate convenience no matter where you are or what you&rsquo;re doing. Each oil is mixed with natural terpenes to provide authentic and pure flavors with each inhale and exhale.</p>
  //     <p>Believing that dependability is the fundamental cornerstone with vapes, Rove uses a high-quality stainless steel and pyrex cartridge equipped with a sure-fire dual coil atomizer. They use a Top Flow air channel system which allows more air to enter the chamber and for more oil to be vaporized, making for a better, easier hit each and every time. Their top flow cartridges also make for longer lasting batteries and minimal oil leakage.</p>
  //     <p>Rove proudly tests their products with SC Labs. They test for all cannabinoid potency, ensuring the levels of THC and CBD in each cartridge. They don&rsquo;t test for solvents, because&hellip;well&hellip;.they don&rsquo;t use any.</p>
  //     <p>Since entering the cannabis scene in 2015, Rove has continued to grow exponentially, collaborating and building relationships with like-minded cannabis devotees. Each of their products is made using 100% California grown cannabis, working closely with growers and farm collectives. Their products can be found throughout all of California, including South Coast Safe Access, Orange County Cannabis Club, Downtown Patient Collective, and Green Tree Remedy.</p>
  //     <div class="et_pb_row et_pb_row_13">
  //     <div class="et_pb_column et_pb_column_1_3 et_pb_column_21    et_pb_css_mix_blend_mode_passthrough">
  //     <div class="et_pb_module et_pb_text et_pb_text_1 et_pb_bg_layout_light  et_pb_text_align_left">
  //     <div class="et_pb_text_inner">
  //     <h3><strong>1. </strong><strong>SIMPLE</strong></h3>
  //     <p>Rove is a practical and honest cannabis product that anyone can enjoy.Portable and discreet, it combines convenience and quality providing relief wherever, whenever.</p>
  //     <h3><strong>2. </strong><strong>TASTY</strong></h3>
  //     <p>Our premium oil is derived from all organically grown flowers and extracted using the cleanest technology available, liquid carbon dioxide.&nbsp;Coupled with our strong commitment to incorporate customer feedback in product development and strict quality control standards, this process ensures a great tasting and consistent product.</p>
  //     <h3><strong>3. </strong><strong>DEPENDABLE</strong></h3>
  //     <p>Rove uses a high quality stainless steel &amp; pyrex glass cartridge&nbsp;equipped with a sure-fire ceramic atomizer and a VCT bottom flow, pass-through air channel system. This unique chamber ensures excellent taste and flow, while minimizing any possible leakage. Paired with its long lasting 400mAh battery, Rove is always the best choice.</p>
  //     <h2>Rove carts flavors</h2>
  //     <p><strong>BLACK BOX(INDICA, SATIVA, HYBRID)</strong></p>
  //     <p>INDICA</p>
  //     <ul>
  //     <li><a href="https://www.qualitywaxandcarts.com/shop/brand/rove/product/ape">Ape</a></li>
  //     <li><a href="https://www.qualitywaxandcarts.com/shop/brand/rove/product/kush">Kush</a></li>
  //     <li><a href="https://www.qualitywaxandcarts.com/shop/brand/rove/product/og">OG</a></li>
  //     <li><a href="https://www.qualitywaxandcarts.com/shop/brand/rove/product/skywalker">Skywalker</a></li>
  //     </ul>
  //     <p>SATIVA</p>
  //     <ul>
  //     <li>Punch</li>
  //     <li><a href="https://www.qualitywaxandcarts.com/shop/brand/rove/product/tangie">Tangie</a></li>
  //     <li><a href="https://www.qualitywaxandcarts.com/shop/brand/rove/product/haze">Haze</a></li>
  //     <li><a href="https://www.qualitywaxandcarts.com/shop/brand/rove/product/waui">Waui</a></li>
  //     </ul>
  //     <p>HYBRID</p>
  //     <ul>
  //     <li><a href="https://www.qualitywaxandcarts.com/shop/brand/rove/product/cookies">Cookies</a></li>
  //     <li><a href="https://www.qualitywaxandcarts.com/shop/brand/rove/product/dream">Dream</a></li>
  //     <li><a href="https://www.qualitywaxandcarts.com/shop/brand/rove/product/glue">Glue</a></li>
  //     <li><a href="https://www.qualitywaxandcarts.com/shop/brand/rove/product/sherbet">Sherbet</a></li>
  //     </ul>
  //     <p>&nbsp;</p>
  //     <h2><em><strong>Real Vs Fake Rove Carts</strong></em></h2>
  //     <h3><em><strong>Real Rove Vape Carts Come with a Lab Data Sticker</strong></em></h3>
  //     <p>All state-legal cannabis products should include a sticker with lab data results somewhere in or on the packaging. With Rove carts, the sticker can be found directly on the cart itself.&nbsp;</p>
  //     <p>Legit vape brands will never print things like THC content directly onto the packaging. That&rsquo;s because every cannabis product batch has varying levels of cannabinoids and terpenes, and the values won&rsquo;t be identical among different batches. That&rsquo;s why you want to locate that sticker, for peace of mind.</p>
  //     <p>However&hellip;</p>
  //     <p><img src="https://media.merryjane.com/eyJidWNrZXQiOiJmaWxlcy5tZXJyeWphbmUuY29tIiwia2V5IjoidXBsb2Fkcy9nZW5lcmljLzE1NzM4NTI2MzkzODFfcm92ZS1jYXJ0cy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjowLCJmaXQiOiJjb3ZlciJ9fX0=" alt="1573852639381_rove-carts.jpg" /></p>
  //     <p><em>These are fake</em></p>
  //     <h3><em><strong>Fake Rove Vape Carts Are Coming with Stickers Now, Unfortunately</strong></em></h3>
  //     <p>It was just a matter of time before the underground producers realized that not having lab data stickers was a dead giveaway for their counterfeits. Some fake Rove vape carts now have stickers that look just like the official California ones, so the sticker check isn&rsquo;t fool-proof.</p>
  //     <p>&nbsp;</p>
  //     <p><img src="https://media.merryjane.com/eyJidWNrZXQiOiJmaWxlcy5tZXJyeWphbmUuY29tIiwia2V5IjoidXBsb2Fkcy9nZW5lcmljLzE1NzM4NTI4NDY5NDZfU2NyZWVuU2hvdDIwMTktMTEtMTVhdDEuMjAuMjJQTS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjowLCJmaXQiOiJjb3ZlciJ9fX0=" alt="1573852846946_ScreenShot2019-11-15at1.20.22PM.png" /></p>
  //     <h3><em><strong>Real Rove Vape Carts Come with QR Code Stickers, Too</strong></em></h3>
  //     <p>Since some of the knock-offs are almost indistinguishable from the real thing, Rove began including a QR code sticker on all of its vape products in August 2019. If you&rsquo;re concerned that you have a fake Rove cart, contact the company and provide them with the QR code. If it&rsquo;s real, they&rsquo;ll verify the code on their end.</p>
  //     </div>
  //     </div>
  //     </div>
  //     </div>`,
  //     comments: [
  //         "I'm coming to the end of my 2nd OG 1grm cartridge.. definitely will be getting another today..my favorite one so far. The OG is tasty AF!! 2 rips off this and ur straight. Its a clean & powerfull vape oil-if your looking for something on the heavy side definitely try ROVE OG. I've only had the OG. but I dont doubt tht the other ones are gd...if you've had Raw Gardens, Alpine or Select it's in that same group but I prefer the Rove OG to those though, those are really good vape cartridges as well..The OG Rove tastes is bomb n worth the money",
  //         "First time trying a ROVE cartridge and I’m never going back to the other brands. Rove is on the top of the totem pole! No doubt. That shit fire",
  //         "Tried 8-9 other brands... nothing impressed me (potency/purity/flavor/smoothness) ....then my brother in law said ROVE ...he said he's tried every company out and now he only Vapes Rove....I bought 3 carts. ..... fell in love. thanks Rove for not compromising Ur product for bigger profit margins",
  //         "It’s my first time buying Rove, so I went cheap and bought a half gram. After a few hit I realized I fucked up and should’ve bought a full gram. This product is good af, and my wife loves it too",
  //         "Rove is consistently the best of the best when it comes to the premium cart game...Idk why I ever stray away from them, because I’m always disappointed by other companies when I do. 100% loyal to ROVE, given they continue their tract record of excellence. Keep up the stellar work, I love you guys!!",
  //         "Ever since the first time I tried Rove about 2 years ago. I have been a advocate of all things Rove Brand. Absolutely love the way they taste and they definitely do the job for me.",
  //         "I have my preference, but I haven't had a single cart or flavor that I didn't like. Everything from the packaging, the cart, and especially the oil itself is superb. They clearly strive to make a premium product and it shows. I have not experienced the leaking and clogging problems with the new cartridges.",
  //         "Everything from the CBD line to Feature Farms you can’t go wrong with any flavor."
  //     ],
  //     photo: "assets/images/brands/rove.jpg"

  // } as Brand,

  {
    name: 'Stiiizy',
    id: Brands.stiiizy,
    description:
      'Introducing the new generation of modern THC delivery systems. STIIIZY is revolutionizing the cannabis industry by creating a product that offers a discreet experience built for portability and convenience. Our premium quality concentrates uphold a high level of potency and purity. STIIIZY is setting the industry standard to influence and inspire through our innovative methods.',
    fullDescription: `<h2>STIIIZY</h2>
        <p>Introducing the new generation of modern THC delivery systems. STIIIZY is revolutionizing the<br />cannabis industry by creating a product that offers a discreet experience built for portability and<br />convenience. Our premium quality concentrates uphold a high level of potency and purity.<br />STIIIZY is setting the industry standard to influence and inspire through our innovative methods.</p>

        <h3><span id="Stiiizy_The_Highlights" class="ez-toc-section">Stiiizy: The Highlights</span></h3>
        <ul>
        <li>Stiiizy produces a leak-free, user-friendly vaping experience.</li>
        <li>The company&rsquo;s THC vape pods are appreciated by both novice and veteran cannabis users.</li>
        <li>Stiiizy&rsquo;s vape pen is slim, which makes it perfect for discreet use.</li>
        <li>Even though the vape pen&rsquo;s battery is slim, a single charge can last for a few days, depending on how often you use it.</li>
        <li>Stiiizy offers a wide variety of flavors, so you&rsquo;re bound to find something that suits your taste.</li>
        </ul>
        <h2><span id="What_Is_Stiiizy" class="ez-toc-section">What Is Stiiizy?</span></h2>
        <p>Stiiizy is a revolutionary new brand in the cannabis industry that offers a whole new leak-free, user-friendly vaping experience. They have created products that offer users a discreet experience without sacrificing the purity and strength of their concentrates.</p>
        <p>Their new modern&nbsp;THC&nbsp;vape pod delivery systems have revolutionized the cannabis industry and have really improved the vaping experience.</p>
        <p>If you are a regular cannabis user and you find that a chunky box mod is not the best option for you, you should definitely check out Stiiizy&rsquo;s vape pod systems.</p>
        <h2><span id="What_Are_Stiiizy_Pods" class="ez-toc-section">What Are Stiiizy Pods or Stiiizy Carts?</span></h2>
        <p>The pod system is an easy and relatively new&nbsp;vaping kit&nbsp;that is perfect for people who are just starting out on their vaping journey and those who are not new to vaping but want to have a nice, small backup device to carry with them.</p>
        <p>The Stiiizy pod (cart) systems are vaping devices that try to remove as much of the complexity from vaping&nbsp;and make the whole process easier on the consumers.</p>
        <p>They come with small batteries and small interchangeable pods that come in many different flavors. Now, before we talk about their flavors and blends let&rsquo;s have a closer look at Stiiizy&rsquo;s product line and learn more about their vape pods.</p>
        <h2><span id="The_Stiiizy_Product_Line" class="ez-toc-section">The Stiiizy Product Line</span></h2>
        <p>Stiiizy&rsquo;s vape pods are some of the easiest to use pod kits on the market. Stiiizy pods are available throughout California. They are portable, prefilled with distillate and come in multiple different blends and flavors.</p>
        <h3><span id="Stiiizy_Pen" class="ez-toc-section">Stiiizy Pen</span></h3>
        <p><img class="aligncenter size-full wp-image-9661" src="https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM.png" sizes="(max-width: 332px) 100vw, 332px" srcset="https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM.png 332w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-280x271.png 280w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-65x63.png 65w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-220x213.png 220w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-103x100.png 103w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-300x290.png 300w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-310x300.png 310w" alt="Stiiizy Vape Pen" width="332" height="321" /></p>
        <p>Stiiizy&rsquo;s&nbsp;<a href="https://farma.health/cbd-vape-pen/">vape pens</a>&nbsp;use top-shelf quality concentrates and cannabis-derived terpenes. They are available in .5 and 1 gram options for $30.00 or $55.00.</p>
        <p>They come in many different flavors and are available in&nbsp;<a href="https://farma.health/cannabis-sativa/">Sativa</a>, Indica, Hybrid and 1:1 CBD flavors and blends.</p>
        <p>When it comes to convenience and stealth Stiiizy&rsquo;s pens have got your back. Stiiizy makes tons of pre-filled cartridges that come in numerous different flavors. They are super easy to use, you just snap them onto the battery and you&rsquo;re good to go.</p>
        <p>The whole pen is small enough to fit in your pocket or purse, which makes it quite discreet and perfect for daily use.</p>
        <h3><span id="Stiiizy_Battery" class="ez-toc-section">Stiiizy Battery</span></h3>
        <p>The Stiiizy battery is small, portable and long-lasting. It activates automatically when you puff and it can last for days on a full charge, depending on how frequently you&rsquo;re using your vape pod.</p>
        <p>The battery charges via a USB charging port and it&rsquo;s sold separately. Depending on the edition, Stiiizy&rsquo;s batteries cost either $20.00 or $25.00.</p>
        <h3><span id="Stiiizy_Starter_Kit" class="ez-toc-section">Stiiizy Starter Kit</span></h3>
        <p>Stiiizy&rsquo;s starter kit includes a 210mAh rechargeable Stiiizy battery and a USB cable. The pods are sold separately. The Stiiizy starter kits are available in black, blue, rose and red edition.</p>
        <h2><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Pod Flavors and Blends</a></h2>
        <p>Stiiizy&rsquo;s cartridges are quite potent and come in unique flavors. You have a choice between Sativa, Indica, Hybrids or&nbsp;<a href="https://farma.health/cbd/">CBD</a>&nbsp;blends depending on your individual needs and your taste.</p>
        <p>The average THC levels of Stiiizy&rsquo;s pods are usually around 85%, but they also have a CBD 1:1 blend that has the same ratio of CBD and THC in it.</p>
        <p>Stiiizy&rsquo;s pods are generally much stronger than other popular brands on the market. They have a very potent and clean taste and are available in the following flavors.</p>
        <h3><span id="Stiiizy_Pod_Sativa_Flavors" class="ez-toc-section">Stiiizy Pod Sativa Flavors</span></h3>
        <p>Currently, Stiiizy&rsquo;s Sativa strain pods are available in 4 flavors:</p>
        <ul>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/strawberry-cough-pod">Strawberry Cough</a> has a fruity, sweet vanilla flavor and boosts your energy and creativity.</li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/blue-dream-pod">Blue Dream</a> also has a fruity, vanilla flavor with hints of berry and herbs. It will help uplift your spirits and make you feel happy, relaxed and alive.</li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/premium-jack-pod">Premium Jack</a> has a piney and earthy flavor and is perfect for stress, depression, fatigue, pain and loss of appetite.</li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/sour-diesel-pod">Sour Diesel</a> tastes like orange, citrus and a bit like diesel since it&rsquo;s a cross between Sour Deisel and Tangie. This strain is great for dealing with pain and as a general mood enhancer.</li>
        </ul>
        <h3><span id="Stiiizy_Pod_Indica_Flavors" class="ez-toc-section">Stiiizy Pod Indica Flavors</span></h3>
        <p>When it comes to their Indica flavors, currently there are 5 different ones available, including:</p>
        <ul>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biscotti-pod">Biscotti</a> has a sweet citrusy taste and is great for insomnia, stress, and depression.</li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/harcore-og-pod">Hardcore OG</a> also has a citrusy taste with a touch of pine. This strain is great for stress relief, pain and other ailments.</li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/sfv-og-pod">SFV OG</a> tastes like lemon and pine and has a relaxing yet euphoric effect on the user.</li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/sky-walker-og-pod">Skywalker OG</a> has a sweet and fruity taste and is perfect for managing physical pain.</li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/og-kush-pod">OG Kush</a> has a woody, pine taste with a hint of lemon, and is suitable for alleviating stress, pain and battling depression.</li>
        </ul>
        <h3><span id="Stiiizy_Pod_Hybrid_and_CBD_Blends" class="ez-toc-section">Stiiizy Pod Hybrid and CBD Blends</span></h3>
        <p><img class="aligncenter size-medium wp-image-9663" src="https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-416x400.png" sizes="(max-width: 416px) 100vw, 416px" srcset="https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-416x400.png 416w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-280x269.png 280w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-65x63.png 65w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-220x212.png 220w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-104x100.png 104w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-300x289.png 300w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-312x300.png 312w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM.png 452w" alt="Stiiizy Vape Cartridge" width="416" height="400" /></p>
        <p>The company also offers hybrid and CBD blends.</p>
        <ul>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/do-si-dos-pod">Do-si-dos</a> has a lime and pine taste with spicy notes and it leads to a high that melts down and totally relaxes the body.</li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/gelato-pod">Gelato</a> has a sweet berry flavor with a hint of lavender. This strain is a bit stronger than the others and is recommended for people with a higher cannabis tolerance.</li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/grand-daddy-purp-pod">Grandaddy Purp</a> has a sweet fruity taste and delivers feelings of happiness and euphoria.</li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/pineapple-express-pod">Pineapple Express</a> has a tropical, citrus and pine taste. It&rsquo;s energizing and it helps people focus.</li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/strawnana-pod">Strawnana</a> also has a tropical taste in combination with the sweet taste of strawberries and represents the perfect balance between Indica and Sativa.</li>
        </ul>
        <h2><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Liiit</a></h2>
        <p>Stiiizy Liiit are premium cannabis buds produced and provided by the Stiiizy brand. They come packaged as either pre-rolls known as Stiiizy Liiit pre-rolls or as 3.5g buds know as Stiiizy Liiit buds.</p>
        <h3><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Liiit Pre-rolls Flavors</a></h3>
        <ul>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/hi-jack-pre-roll">Hi Jack Liiit pre-roll</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/king-kong-pre-roll">King Kong Liiit pre-roll</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/mochilato-pre-roll">Mochilato Liiit pre-roll</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/og-pre-roll">OG Liiit pre-roll</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/orange-cream-pre-roll">Orange Cream Liiit pre-roll</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/purple-punch-pre-roll">Purple Punch Liiit pre-roll</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/strawnana-pre-roll">Strawnana Liiit pre-roll</a></li>
        </ul>
        <div class="et_pb_row et_pb_row_13">
        <div class="et_pb_column et_pb_column_1_3 et_pb_column_21    et_pb_css_mix_blend_mode_passthrough">
        <div class="et_pb_module et_pb_text et_pb_text_1 et_pb_bg_layout_light  et_pb_text_align_left">
        <div class="et_pb_text_inner">
        <div class="question">
        <div class="title">
        <h3><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Liiit buds Flavors</a></h3>
        <ul>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-berry-nice">Berry Nice Liiit Bud</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-grape-sorbet">Grape Sorbet Liiit Bud</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-hi-jack">Hi Jack Liiit Bud</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-kilo-og">Kilo OG Liiit Bud</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-king-kong">King Kong Liiit Bud</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-mochilato">Mochilato Liiit Bud</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-orange-cream">Orange Cream Liiit Bud</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-purple-punch">Purple Punch Liiit Bud</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-rainbow-sherbet">Rainbow Sherbet Liiit Bud</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-stiiizy-cake">Stiiizy Cake Liiit Bud</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-stiiizy-og">OG Liiit Bud</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-strawnana">Strawnana Liiit Bud</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-white-walker">White Walker Liiit Bud</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-widow-maker">Widow Maker Liiit Bud</a></li>
        </ul>
        <h2><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Biiit</a></h2>
        <p>Stiiizy Biiit&nbsp; are edible gummies which are bursting with flavor, precisely dosed, and low in calories. Ideal for micro dosing. Relax and unwind one piece at a time.</p>
        <h3><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Biiit Flavors</a></h3>
        <ul>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-assorted-flavors-edibles">Assorted Flavors Biiit edibles</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-black-cherry-edibles">Black Cherry Biiit edibles</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-blue-raspberry-edibles">Blue Raspberry Biiit edibles</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-green-apple-edibles">Green Apple Biiit edibles</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-orange-edibles">Orange Biiit edibles</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-strawberry-edibles">Strawberry Biiit edibles</a></li>
        <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-watermelon-edibles">Watermelon Biiit edibles</a></li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>`,
    comments: [
      'I switched over to Stiizy two years ago, it’s the best vape product I have ever used. The batteries last forever, still have the original two from two years ago, the flavors are great, the high amazing, and it hits like a heavyweight. If you are looking for the best delivery system available, you’ve found it.',
      "I've tried every expensive brand of cartridges and have now moved on to the pod format. I even tried an older pod by Paris and G-Pen as well, so I'm not new to pods but primarily preferred pen carts before Stiiizy. Stiiizy has provided me high quality consistently without having to worry about faulty pens or leaking carts. The quality of the extract keeps me coming back, I'm a heavy Indica user, so I have tried all of the Indica Stiiizy pods and keep going back to Skywalker OG!!",
      'I love this company the high , the quality and the hit it produces and i just got a matching lanyard with my pink stiiizy battery',
      'Always stocked up with great products and good weed',
      'STIIIZYS ARE LIFE !! Really hoping they create new flavors in all strains !',
      'Simething about this device keeps bringing me back. The wax always looks and tastes clean and free of toxins',
    ],
    photo: 'assets/images/brands/stiiizy.jpg',
  } as Brand,

  {
    name: 'Big Chief',
    id: Brands.big_chief,
    description:
      'Introducing the new generation of modern THC delivery systems. STIIIZY is revolutionizing the cannabis industry by creating a product that offers a discreet experience built for portability and convenience. Our premium quality concentrates uphold a high level of potency and purity. STIIIZY is setting the industry standard to influence and inspire through our innovative methods.',
    fullDescription: `<h2>STIIIZY</h2>
      <p>Introducing the new generation of modern THC delivery systems. STIIIZY is revolutionizing the<br />cannabis industry by creating a product that offers a discreet experience built for portability and<br />convenience. Our premium quality concentrates uphold a high level of potency and purity.<br />STIIIZY is setting the industry standard to influence and inspire through our innovative methods.</p>

      <h3><span id="Stiiizy_The_Highlights" class="ez-toc-section">Stiiizy: The Highlights</span></h3>
      <ul>
      <li>Stiiizy produces a leak-free, user-friendly vaping experience.</li>
      <li>The company&rsquo;s THC vape pods are appreciated by both novice and veteran cannabis users.</li>
      <li>Stiiizy&rsquo;s vape pen is slim, which makes it perfect for discreet use.</li>
      <li>Even though the vape pen&rsquo;s battery is slim, a single charge can last for a few days, depending on how often you use it.</li>
      <li>Stiiizy offers a wide variety of flavors, so you&rsquo;re bound to find something that suits your taste.</li>
      </ul>
      <h2><span id="What_Is_Stiiizy" class="ez-toc-section">What Is Stiiizy?</span></h2>
      <p>Stiiizy is a revolutionary new brand in the cannabis industry that offers a whole new leak-free, user-friendly vaping experience. They have created products that offer users a discreet experience without sacrificing the purity and strength of their concentrates.</p>
      <p>Their new modern&nbsp;THC&nbsp;vape pod delivery systems have revolutionized the cannabis industry and have really improved the vaping experience.</p>
      <p>If you are a regular cannabis user and you find that a chunky box mod is not the best option for you, you should definitely check out Stiiizy&rsquo;s vape pod systems.</p>
      <h2><span id="What_Are_Stiiizy_Pods" class="ez-toc-section">What Are Stiiizy Pods or Stiiizy Carts?</span></h2>
      <p>The pod system is an easy and relatively new&nbsp;vaping kit&nbsp;that is perfect for people who are just starting out on their vaping journey and those who are not new to vaping but want to have a nice, small backup device to carry with them.</p>
      <p>The Stiiizy pod (cart) systems are vaping devices that try to remove as much of the complexity from vaping&nbsp;and make the whole process easier on the consumers.</p>
      <p>They come with small batteries and small interchangeable pods that come in many different flavors. Now, before we talk about their flavors and blends let&rsquo;s have a closer look at Stiiizy&rsquo;s product line and learn more about their vape pods.</p>
      <h2><span id="The_Stiiizy_Product_Line" class="ez-toc-section">The Stiiizy Product Line</span></h2>
      <p>Stiiizy&rsquo;s vape pods are some of the easiest to use pod kits on the market. Stiiizy pods are available throughout California. They are portable, prefilled with distillate and come in multiple different blends and flavors.</p>
      <h3><span id="Stiiizy_Pen" class="ez-toc-section">Stiiizy Pen</span></h3>
      <p><img class="aligncenter size-full wp-image-9661" src="https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM.png" sizes="(max-width: 332px) 100vw, 332px" srcset="https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM.png 332w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-280x271.png 280w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-65x63.png 65w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-220x213.png 220w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-103x100.png 103w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-300x290.png 300w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-310x300.png 310w" alt="Stiiizy Vape Pen" width="332" height="321" /></p>
      <p>Stiiizy&rsquo;s&nbsp;<a href="https://farma.health/cbd-vape-pen/">vape pens</a>&nbsp;use top-shelf quality concentrates and cannabis-derived terpenes. They are available in .5 and 1 gram options for $30.00 or $55.00.</p>
      <p>They come in many different flavors and are available in&nbsp;<a href="https://farma.health/cannabis-sativa/">Sativa</a>, Indica, Hybrid and 1:1 CBD flavors and blends.</p>
      <p>When it comes to convenience and stealth Stiiizy&rsquo;s pens have got your back. Stiiizy makes tons of pre-filled cartridges that come in numerous different flavors. They are super easy to use, you just snap them onto the battery and you&rsquo;re good to go.</p>
      <p>The whole pen is small enough to fit in your pocket or purse, which makes it quite discreet and perfect for daily use.</p>
      <h3><span id="Stiiizy_Battery" class="ez-toc-section">Stiiizy Battery</span></h3>
      <p>The Stiiizy battery is small, portable and long-lasting. It activates automatically when you puff and it can last for days on a full charge, depending on how frequently you&rsquo;re using your vape pod.</p>
      <p>The battery charges via a USB charging port and it&rsquo;s sold separately. Depending on the edition, Stiiizy&rsquo;s batteries cost either $20.00 or $25.00.</p>
      <h3><span id="Stiiizy_Starter_Kit" class="ez-toc-section">Stiiizy Starter Kit</span></h3>
      <p>Stiiizy&rsquo;s starter kit includes a 210mAh rechargeable Stiiizy battery and a USB cable. The pods are sold separately. The Stiiizy starter kits are available in black, blue, rose and red edition.</p>
      <h2><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Pod Flavors and Blends</a></h2>
      <p>Stiiizy&rsquo;s cartridges are quite potent and come in unique flavors. You have a choice between Sativa, Indica, Hybrids or&nbsp;<a href="https://farma.health/cbd/">CBD</a>&nbsp;blends depending on your individual needs and your taste.</p>
      <p>The average THC levels of Stiiizy&rsquo;s pods are usually around 85%, but they also have a CBD 1:1 blend that has the same ratio of CBD and THC in it.</p>
      <p>Stiiizy&rsquo;s pods are generally much stronger than other popular brands on the market. They have a very potent and clean taste and are available in the following flavors.</p>
      <h3><span id="Stiiizy_Pod_Sativa_Flavors" class="ez-toc-section">Stiiizy Pod Sativa Flavors</span></h3>
      <p>Currently, Stiiizy&rsquo;s Sativa strain pods are available in 4 flavors:</p>
      <ul>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/strawberry-cough-pod">Strawberry Cough</a> has a fruity, sweet vanilla flavor and boosts your energy and creativity.</li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/blue-dream-pod">Blue Dream</a> also has a fruity, vanilla flavor with hints of berry and herbs. It will help uplift your spirits and make you feel happy, relaxed and alive.</li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/premium-jack-pod">Premium Jack</a> has a piney and earthy flavor and is perfect for stress, depression, fatigue, pain and loss of appetite.</li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/sour-diesel-pod">Sour Diesel</a> tastes like orange, citrus and a bit like diesel since it&rsquo;s a cross between Sour Deisel and Tangie. This strain is great for dealing with pain and as a general mood enhancer.</li>
      </ul>
      <h3><span id="Stiiizy_Pod_Indica_Flavors" class="ez-toc-section">Stiiizy Pod Indica Flavors</span></h3>
      <p>When it comes to their Indica flavors, currently there are 5 different ones available, including:</p>
      <ul>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biscotti-pod">Biscotti</a> has a sweet citrusy taste and is great for insomnia, stress, and depression.</li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/harcore-og-pod">Hardcore OG</a> also has a citrusy taste with a touch of pine. This strain is great for stress relief, pain and other ailments.</li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/sfv-og-pod">SFV OG</a> tastes like lemon and pine and has a relaxing yet euphoric effect on the user.</li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/sky-walker-og-pod">Skywalker OG</a> has a sweet and fruity taste and is perfect for managing physical pain.</li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/og-kush-pod">OG Kush</a> has a woody, pine taste with a hint of lemon, and is suitable for alleviating stress, pain and battling depression.</li>
      </ul>
      <h3><span id="Stiiizy_Pod_Hybrid_and_CBD_Blends" class="ez-toc-section">Stiiizy Pod Hybrid and CBD Blends</span></h3>
      <p><img class="aligncenter size-medium wp-image-9663" src="https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-416x400.png" sizes="(max-width: 416px) 100vw, 416px" srcset="https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-416x400.png 416w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-280x269.png 280w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-65x63.png 65w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-220x212.png 220w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-104x100.png 104w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-300x289.png 300w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-312x300.png 312w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM.png 452w" alt="Stiiizy Vape Cartridge" width="416" height="400" /></p>
      <p>The company also offers hybrid and CBD blends.</p>
      <ul>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/do-si-dos-pod">Do-si-dos</a> has a lime and pine taste with spicy notes and it leads to a high that melts down and totally relaxes the body.</li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/gelato-pod">Gelato</a> has a sweet berry flavor with a hint of lavender. This strain is a bit stronger than the others and is recommended for people with a higher cannabis tolerance.</li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/grand-daddy-purp-pod">Grandaddy Purp</a> has a sweet fruity taste and delivers feelings of happiness and euphoria.</li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/pineapple-express-pod">Pineapple Express</a> has a tropical, citrus and pine taste. It&rsquo;s energizing and it helps people focus.</li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/strawnana-pod">Strawnana</a> also has a tropical taste in combination with the sweet taste of strawberries and represents the perfect balance between Indica and Sativa.</li>
      </ul>
      <h2><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Liiit</a></h2>
      <p>Stiiizy Liiit are premium cannabis buds produced and provided by the Stiiizy brand. They come packaged as either pre-rolls known as Stiiizy Liiit pre-rolls or as 3.5g buds know as Stiiizy Liiit buds.</p>
      <h3><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Liiit Pre-rolls Flavors</a></h3>
      <ul>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/hi-jack-pre-roll">Hi Jack Liiit pre-roll</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/king-kong-pre-roll">King Kong Liiit pre-roll</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/mochilato-pre-roll">Mochilato Liiit pre-roll</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/og-pre-roll">OG Liiit pre-roll</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/orange-cream-pre-roll">Orange Cream Liiit pre-roll</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/purple-punch-pre-roll">Purple Punch Liiit pre-roll</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/strawnana-pre-roll">Strawnana Liiit pre-roll</a></li>
      </ul>
      <div class="et_pb_row et_pb_row_13">
      <div class="et_pb_column et_pb_column_1_3 et_pb_column_21    et_pb_css_mix_blend_mode_passthrough">
      <div class="et_pb_module et_pb_text et_pb_text_1 et_pb_bg_layout_light  et_pb_text_align_left">
      <div class="et_pb_text_inner">
      <div class="question">
      <div class="title">
      <h3><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Liiit buds Flavors</a></h3>
      <ul>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-berry-nice">Berry Nice Liiit Bud</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-grape-sorbet">Grape Sorbet Liiit Bud</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-hi-jack">Hi Jack Liiit Bud</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-kilo-og">Kilo OG Liiit Bud</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-king-kong">King Kong Liiit Bud</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-mochilato">Mochilato Liiit Bud</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-orange-cream">Orange Cream Liiit Bud</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-purple-punch">Purple Punch Liiit Bud</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-rainbow-sherbet">Rainbow Sherbet Liiit Bud</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-stiiizy-cake">Stiiizy Cake Liiit Bud</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-stiiizy-og">OG Liiit Bud</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-strawnana">Strawnana Liiit Bud</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-white-walker">White Walker Liiit Bud</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-widow-maker">Widow Maker Liiit Bud</a></li>
      </ul>
      <h2><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Biiit</a></h2>
      <p>Stiiizy Biiit&nbsp; are edible gummies which are bursting with flavor, precisely dosed, and low in calories. Ideal for micro dosing. Relax and unwind one piece at a time.</p>
      <h3><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Biiit Flavors</a></h3>
      <ul>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-assorted-flavors-edibles">Assorted Flavors Biiit edibles</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-black-cherry-edibles">Black Cherry Biiit edibles</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-blue-raspberry-edibles">Blue Raspberry Biiit edibles</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-green-apple-edibles">Green Apple Biiit edibles</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-orange-edibles">Orange Biiit edibles</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-strawberry-edibles">Strawberry Biiit edibles</a></li>
      <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-watermelon-edibles">Watermelon Biiit edibles</a></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>`,
    comments: [
      "Have heard they are shit but I tried a friends and it seemed fairly legit. The oil wasn't runny so that was a plus and the flavor was way more oily than I was expecting, also a plus imo. That said I know these things aren't legit.",
      'Big Chief carts are of vastly superior quality to most carts for sale on the east coast. However, they are 20% lower thc than advertised',
      "I'm been buying carts here in the east coast for about a year now. I have tried pretty much every brand in the market here. I can say that about 99% of Exortic carts I've bought are good",
      "I've tried traditional methods for thc, i really didn't like smoking out of bowl or any other ways. A friend got me the gorilla glue flavor. I have to say, it's really smooth, and in lower wattage 3 or 4 hits, it does the job.",
    ],
    photo: 'assets/images/brands/stiiizy.jpg',
  } as Brand,

  {
    name: 'Kurvana ASCND',
    id: Brands.kurvana,
    description:
      'Introducing the new generation of modern THC delivery systems. STIIIZY is revolutionizing the cannabis industry by creating a product that offers a discreet experience built for portability and convenience. Our premium quality concentrates uphold a high level of potency and purity. STIIIZY is setting the industry standard to influence and inspire through our innovative methods.',
    fullDescription: `<h2>STIIIZY</h2>
    <p>Introducing the new generation of modern THC delivery systems. STIIIZY is revolutionizing the<br />cannabis industry by creating a product that offers a discreet experience built for portability and<br />convenience. Our premium quality concentrates uphold a high level of potency and purity.<br />STIIIZY is setting the industry standard to influence and inspire through our innovative methods.</p>

    <h3><span id="Stiiizy_The_Highlights" class="ez-toc-section">Stiiizy: The Highlights</span></h3>
    <ul>
    <li>Stiiizy produces a leak-free, user-friendly vaping experience.</li>
    <li>The company&rsquo;s THC vape pods are appreciated by both novice and veteran cannabis users.</li>
    <li>Stiiizy&rsquo;s vape pen is slim, which makes it perfect for discreet use.</li>
    <li>Even though the vape pen&rsquo;s battery is slim, a single charge can last for a few days, depending on how often you use it.</li>
    <li>Stiiizy offers a wide variety of flavors, so you&rsquo;re bound to find something that suits your taste.</li>
    </ul>
    <h2><span id="What_Is_Stiiizy" class="ez-toc-section">What Is Stiiizy?</span></h2>
    <p>Stiiizy is a revolutionary new brand in the cannabis industry that offers a whole new leak-free, user-friendly vaping experience. They have created products that offer users a discreet experience without sacrificing the purity and strength of their concentrates.</p>
    <p>Their new modern&nbsp;THC&nbsp;vape pod delivery systems have revolutionized the cannabis industry and have really improved the vaping experience.</p>
    <p>If you are a regular cannabis user and you find that a chunky box mod is not the best option for you, you should definitely check out Stiiizy&rsquo;s vape pod systems.</p>
    <h2><span id="What_Are_Stiiizy_Pods" class="ez-toc-section">What Are Stiiizy Pods or Stiiizy Carts?</span></h2>
    <p>The pod system is an easy and relatively new&nbsp;vaping kit&nbsp;that is perfect for people who are just starting out on their vaping journey and those who are not new to vaping but want to have a nice, small backup device to carry with them.</p>
    <p>The Stiiizy pod (cart) systems are vaping devices that try to remove as much of the complexity from vaping&nbsp;and make the whole process easier on the consumers.</p>
    <p>They come with small batteries and small interchangeable pods that come in many different flavors. Now, before we talk about their flavors and blends let&rsquo;s have a closer look at Stiiizy&rsquo;s product line and learn more about their vape pods.</p>
    <h2><span id="The_Stiiizy_Product_Line" class="ez-toc-section">The Stiiizy Product Line</span></h2>
    <p>Stiiizy&rsquo;s vape pods are some of the easiest to use pod kits on the market. Stiiizy pods are available throughout California. They are portable, prefilled with distillate and come in multiple different blends and flavors.</p>
    <h3><span id="Stiiizy_Pen" class="ez-toc-section">Stiiizy Pen</span></h3>
    <p><img class="aligncenter size-full wp-image-9661" src="https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM.png" sizes="(max-width: 332px) 100vw, 332px" srcset="https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM.png 332w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-280x271.png 280w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-65x63.png 65w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-220x213.png 220w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-103x100.png 103w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-300x290.png 300w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.37.35-PM-310x300.png 310w" alt="Stiiizy Vape Pen" width="332" height="321" /></p>
    <p>Stiiizy&rsquo;s&nbsp;<a href="https://farma.health/cbd-vape-pen/">vape pens</a>&nbsp;use top-shelf quality concentrates and cannabis-derived terpenes. They are available in .5 and 1 gram options for $30.00 or $55.00.</p>
    <p>They come in many different flavors and are available in&nbsp;<a href="https://farma.health/cannabis-sativa/">Sativa</a>, Indica, Hybrid and 1:1 CBD flavors and blends.</p>
    <p>When it comes to convenience and stealth Stiiizy&rsquo;s pens have got your back. Stiiizy makes tons of pre-filled cartridges that come in numerous different flavors. They are super easy to use, you just snap them onto the battery and you&rsquo;re good to go.</p>
    <p>The whole pen is small enough to fit in your pocket or purse, which makes it quite discreet and perfect for daily use.</p>
    <h3><span id="Stiiizy_Battery" class="ez-toc-section">Stiiizy Battery</span></h3>
    <p>The Stiiizy battery is small, portable and long-lasting. It activates automatically when you puff and it can last for days on a full charge, depending on how frequently you&rsquo;re using your vape pod.</p>
    <p>The battery charges via a USB charging port and it&rsquo;s sold separately. Depending on the edition, Stiiizy&rsquo;s batteries cost either $20.00 or $25.00.</p>
    <h3><span id="Stiiizy_Starter_Kit" class="ez-toc-section">Stiiizy Starter Kit</span></h3>
    <p>Stiiizy&rsquo;s starter kit includes a 210mAh rechargeable Stiiizy battery and a USB cable. The pods are sold separately. The Stiiizy starter kits are available in black, blue, rose and red edition.</p>
    <h2><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Pod Flavors and Blends</a></h2>
    <p>Stiiizy&rsquo;s cartridges are quite potent and come in unique flavors. You have a choice between Sativa, Indica, Hybrids or&nbsp;<a href="https://farma.health/cbd/">CBD</a>&nbsp;blends depending on your individual needs and your taste.</p>
    <p>The average THC levels of Stiiizy&rsquo;s pods are usually around 85%, but they also have a CBD 1:1 blend that has the same ratio of CBD and THC in it.</p>
    <p>Stiiizy&rsquo;s pods are generally much stronger than other popular brands on the market. They have a very potent and clean taste and are available in the following flavors.</p>
    <h3><span id="Stiiizy_Pod_Sativa_Flavors" class="ez-toc-section">Stiiizy Pod Sativa Flavors</span></h3>
    <p>Currently, Stiiizy&rsquo;s Sativa strain pods are available in 4 flavors:</p>
    <ul>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/strawberry-cough-pod">Strawberry Cough</a> has a fruity, sweet vanilla flavor and boosts your energy and creativity.</li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/blue-dream-pod">Blue Dream</a> also has a fruity, vanilla flavor with hints of berry and herbs. It will help uplift your spirits and make you feel happy, relaxed and alive.</li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/premium-jack-pod">Premium Jack</a> has a piney and earthy flavor and is perfect for stress, depression, fatigue, pain and loss of appetite.</li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/sour-diesel-pod">Sour Diesel</a> tastes like orange, citrus and a bit like diesel since it&rsquo;s a cross between Sour Deisel and Tangie. This strain is great for dealing with pain and as a general mood enhancer.</li>
    </ul>
    <h3><span id="Stiiizy_Pod_Indica_Flavors" class="ez-toc-section">Stiiizy Pod Indica Flavors</span></h3>
    <p>When it comes to their Indica flavors, currently there are 5 different ones available, including:</p>
    <ul>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biscotti-pod">Biscotti</a> has a sweet citrusy taste and is great for insomnia, stress, and depression.</li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/harcore-og-pod">Hardcore OG</a> also has a citrusy taste with a touch of pine. This strain is great for stress relief, pain and other ailments.</li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/sfv-og-pod">SFV OG</a> tastes like lemon and pine and has a relaxing yet euphoric effect on the user.</li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/sky-walker-og-pod">Skywalker OG</a> has a sweet and fruity taste and is perfect for managing physical pain.</li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/og-kush-pod">OG Kush</a> has a woody, pine taste with a hint of lemon, and is suitable for alleviating stress, pain and battling depression.</li>
    </ul>
    <h3><span id="Stiiizy_Pod_Hybrid_and_CBD_Blends" class="ez-toc-section">Stiiizy Pod Hybrid and CBD Blends</span></h3>
    <p><img class="aligncenter size-medium wp-image-9663" src="https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-416x400.png" sizes="(max-width: 416px) 100vw, 416px" srcset="https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-416x400.png 416w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-280x269.png 280w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-65x63.png 65w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-220x212.png 220w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-104x100.png 104w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-300x289.png 300w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM-312x300.png 312w, https://farma.health/wp-content/uploads/2018/11/Screen-Shot-2019-03-08-at-12.39.05-PM.png 452w" alt="Stiiizy Vape Cartridge" width="416" height="400" /></p>
    <p>The company also offers hybrid and CBD blends.</p>
    <ul>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/do-si-dos-pod">Do-si-dos</a> has a lime and pine taste with spicy notes and it leads to a high that melts down and totally relaxes the body.</li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/gelato-pod">Gelato</a> has a sweet berry flavor with a hint of lavender. This strain is a bit stronger than the others and is recommended for people with a higher cannabis tolerance.</li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/grand-daddy-purp-pod">Grandaddy Purp</a> has a sweet fruity taste and delivers feelings of happiness and euphoria.</li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/pineapple-express-pod">Pineapple Express</a> has a tropical, citrus and pine taste. It&rsquo;s energizing and it helps people focus.</li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/strawnana-pod">Strawnana</a> also has a tropical taste in combination with the sweet taste of strawberries and represents the perfect balance between Indica and Sativa.</li>
    </ul>
    <h2><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Liiit</a></h2>
    <p>Stiiizy Liiit are premium cannabis buds produced and provided by the Stiiizy brand. They come packaged as either pre-rolls known as Stiiizy Liiit pre-rolls or as 3.5g buds know as Stiiizy Liiit buds.</p>
    <h3><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Liiit Pre-rolls Flavors</a></h3>
    <ul>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/hi-jack-pre-roll">Hi Jack Liiit pre-roll</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/king-kong-pre-roll">King Kong Liiit pre-roll</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/mochilato-pre-roll">Mochilato Liiit pre-roll</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/og-pre-roll">OG Liiit pre-roll</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/orange-cream-pre-roll">Orange Cream Liiit pre-roll</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/purple-punch-pre-roll">Purple Punch Liiit pre-roll</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/strawnana-pre-roll">Strawnana Liiit pre-roll</a></li>
    </ul>
    <div class="et_pb_row et_pb_row_13">
    <div class="et_pb_column et_pb_column_1_3 et_pb_column_21    et_pb_css_mix_blend_mode_passthrough">
    <div class="et_pb_module et_pb_text et_pb_text_1 et_pb_bg_layout_light  et_pb_text_align_left">
    <div class="et_pb_text_inner">
    <div class="question">
    <div class="title">
    <h3><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Liiit buds Flavors</a></h3>
    <ul>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-berry-nice">Berry Nice Liiit Bud</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-grape-sorbet">Grape Sorbet Liiit Bud</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-hi-jack">Hi Jack Liiit Bud</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-kilo-og">Kilo OG Liiit Bud</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-king-kong">King Kong Liiit Bud</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-mochilato">Mochilato Liiit Bud</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-orange-cream">Orange Cream Liiit Bud</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-purple-punch">Purple Punch Liiit Bud</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-rainbow-sherbet">Rainbow Sherbet Liiit Bud</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-stiiizy-cake">Stiiizy Cake Liiit Bud</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-stiiizy-og">OG Liiit Bud</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-strawnana">Strawnana Liiit Bud</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-white-walker">White Walker Liiit Bud</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/liiit-widow-maker">Widow Maker Liiit Bud</a></li>
    </ul>
    <h2><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Biiit</a></h2>
    <p>Stiiizy Biiit&nbsp; are edible gummies which are bursting with flavor, precisely dosed, and low in calories. Ideal for micro dosing. Relax and unwind one piece at a time.</p>
    <h3><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products">Stiiizy Biiit Flavors</a></h3>
    <ul>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-assorted-flavors-edibles">Assorted Flavors Biiit edibles</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-black-cherry-edibles">Black Cherry Biiit edibles</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-blue-raspberry-edibles">Blue Raspberry Biiit edibles</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-green-apple-edibles">Green Apple Biiit edibles</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-orange-edibles">Orange Biiit edibles</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-strawberry-edibles">Strawberry Biiit edibles</a></li>
    <li><a href="https://www.qualitywaxandcarts.com/shop/brand/stiiizy/product/biiit-watermelon-edibles">Watermelon Biiit edibles</a></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>`,
    comments: [
      "Have heard they are shit but I tried a friends and it seemed fairly legit. The oil wasn't runny so that was a plus and the flavor was way more oily than I was expecting, also a plus imo. That said I know these things aren't legit.",
      "I've tried traditional methods for thc, i really didn't like smoking out of bowl or any other ways. A friend got me the gorilla glue flavor. I have to say, it's really smooth, and in lower wattage 3 or 4 hits, it does the job.",
    ],
    photo: 'assets/images/brands/stiiizy.jpg',
  } as Brand,

  {
    name: 'Raw Garden',
    id: Brands.raw_garden,
    description:
      'Introducing the new generation of modern THC delivery systems. STIIIZY is revolutionizing the cannabis industry by creating a product that offers a discreet experience built for portability and convenience. Our premium quality concentrates uphold a high level of potency and purity. STIIIZY is setting the industry standard to influence and inspire through our innovative methods.',
    fullDescription: `<h2>Raw Garden</h2>`,
    comments: [
      "Have heard they are shit but I tried a friends and it seemed fairly legit. The oil wasn't runny so that was a plus and the flavor was way more oily than I was expecting, also a plus imo. That said I know these things aren't legit.",
      "I've tried traditional methods for thc, i really didn't like smoking out of bowl or any other ways. A friend got me the gorilla glue flavor. I have to say, it's really smooth, and in lower wattage 3 or 4 hits, it does the job.",
    ],
    photo: 'assets/images/brands/stiiizy.jpg',
  } as Brand,
]
