/* Generates password of set length with set qualities: 
numbers, words, special signs, big letters etc. */

class PasswordGenerator {
    
    constructor(passwordLen){
        this.passwordLen = passwordLen;
    }
    
    charPool(smallLetters, bigLetters, specialSigns, numbers) {
        var pool = '';
        const charLetters = 'abcdefghijklmnopqrstuvwxyz'; 
        const charSpecial = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'; 
        const charNumbers = '0123456789';    
        
        if (smallLetters === true) {
            pool = pool + charLetters;
        } 
        
        if (bigLetters === true) {
            pool = pool + charLetters.toUpperCase();
        } 
        
        if (specialSigns === true) {
            pool = pool + charSpecial;
        }
        
        if (numbers === true){
            pool = pool + charNumbers;
        }
        return pool;
    }
    
    randomChar(charSet) {
        var randomCharacter = '';
        
    	if (typeof charSet === "string") {                                                         // select random character from set
        	randomCharacter = charSet.charAt(Math.floor(Math.random() * charSet.length));
        	return randomCharacter;
        }	else if ( Array.isArray(charSet) ) {
        	randomCharacter = charSet[Math.floor(Math.random() * charSet.length)];
        	return randomCharacter;
        }	else {
        	throw 'error';
        }
    }
    
    capitalizeFirst(stringToModify, howMany) {
	var outcome = stringToModify;
    var prefixString = outcome.substr(0,howMany);
    prefixString = prefixString.toUpperCase();
    outcome = outcome.substr(howMany);
    outcome = prefixString + outcome;
	return outcome;
}	

    totallyRandom(howMany, pool) {           // generates string of specified length with selected additional signs
    var outcome = '';
        for (var i = 0; i < howMany; i++) {
            outcome += this.randomChar(pool);                                                // randomChar chooses random character from character pool
        }
    return outcome;
    }
    
    addNumbers(stringToModify, howMany) {
	var suffixString = this.totallyRandom(howMany, this.charPool(false,false,false,true));
    stringToModify += suffixString;

    return stringToModify;
}

    mixed() {                  //operations on arrays are easier
        
        const vowels = ['a','e','u','i','o'];                 
        var pool = this.charPool(true, false, false, false);
        var poolArray = [];
        var mixed_password = '';
        for (var i=0; i<pool.length; i++) {                     //making pools of characters into array
            poolArray[i] = pool.charAt(i);
        }
        
        for (var j=0; j<vowels.length; j++) {                       //deleting vowels from pool
            let index = poolArray.indexOf(vowels[j]);
            poolArray.splice(index,1);
        }
        
        for (var k=0; k<this.passwordLen; k++) {                //password is created from non-vovel and vowel one after another
            if (k%2===0) {
                mixed_password += this.randomChar(poolArray);
    
            } else {
                mixed_password += this.randomChar(vowels);
            }
        }
        
        return mixed_password;
    }
    
    wordsPassword() {
        var words_pass = '';
        const words = [ [ 'a', 'I' ],
                      [ 'as',
                        'at',
                        'be',
                        'by',
                        'do',
                        'go',
                        'he',
                        'if',
                        'in',
                        'no',
                        'of',
                        'on',
                        'or',
                        'so',
                        'to',
                        'up' ],
                      [ 'act',
                        'air',
                        'all',
                        'and',
                        'ant',
                        'any',
                        'arm',
                        'art',
                        'bad',
                        'bag',
                        'bed',
                        'bee',
                        'bit',
                        'box',
                        'boy',
                        'but',
                        'cat',
                        'cow',
                        'cry',
                        'cup',
                        'cup',
                        'day',
                        'dog',
                        'dry',
                        'ear',
                        'egg',
                        'end',
                        'eye',
                        'far',
                        'fat',
                        'fly',
                        'for',
                        'get',
                        'gun',
                        'hat',
                        'how',
                        'ice',
                        'ill',
                        'ink',
                        'key',
                        'law',
                        'leg',
                        'let',
                        'lip',
                        'low',
                        'man',
                        'map',
                        'may',
                        'net',
                        'new',
                        'not',
                        'now',
                        'nut',
                        'off',
                        'oil',
                        'old',
                        'out',
                        'pen',
                        'pig',
                        'pin',
                        'pot',
                        'put',
                        'rat',
                        'ray',
                        'red',
                        'rod',
                        'rub',
                        'run',
                        'sad',
                        'say',
                        'sea',
                        'see',
                        'sex',
                        'sky',
                        'son',
                        'sun',
                        'tax',
                        'the',
                        'tin',
                        'toe',
                        'top',
                        'use',
                        'war',
                        'wax',
                        'way',
                        'wet',
                        'who',
                        'why',
                        'yes',
                        'you' ],
                      [ 'able',
                        'acid',
                        'arch',
                        'army',
                        'baby',
                        'back',
                        'ball',
                        'band',
                        'base',
                        'bath',
                        'bell',
                        'bent',
                        'bird',
                        'bite',
                        'blow',
                        'blue',
                        'boat',
                        'body',
                        'bone',
                        'book',
                        'boot',
                        'bulb',
                        'burn',
                        'cake',
                        'card',
                        'care',
                        'cart',
                        'chin',
                        'coal',
                        'coat',
                        'cold',
                        'comb',
                        'come',
                        'cook',
                        'copy',
                        'cord',
                        'cork',
                        'dark',
                        'dead',
                        'dear',
                        'debt',
                        'deep',
                        'door',
                        'down',
                        'drop',
                        'dust',
                        'east',
                        'edge',
                        'even',
                        'ever',
                        'face',
                        'fact',
                        'fall',
                        'farm',
                        'fear',
                        'fire',
                        'fish',
                        'flag',
                        'flat',
                        'fold',
                        'food',
                        'foot',
                        'fork',
                        'form',
                        'fowl',
                        'free',
                        'from',
                        'full',
                        'girl',
                        'give',
                        'goat',
                        'gold',
                        'good',
                        'grey',
                        'grip',
                        'hair',
                        'hand',
                        'hard',
                        'hate',
                        'have',
                        'head',
                        'hear',
                        'heat',
                        'help',
                        'high',
                        'hole',
                        'hook',
                        'hope',
                        'horn',
                        'hour',
                        'idea',
                        'iron',
                        'join',
                        'jump',
                        'keep',
                        'kick',
                        'kind',
                        'kiss',
                        'knee',
                        'knot'],
                      [ 'about',
                        'after',
                        'again',
                        'among',
                        'angle',
                        'angry',
                        'apple',
                        'awake',
                        'basin',
                        'berry',
                        'birth',
                        'black',
                        'blade',
                        'blood',
                        'board',
                        'brain',
                        'brake',
                        'brass',
                        'bread',
                        'brick',
                        'brown',
                        'brush',
                        'burst',
                        'cause',
                        'chain',
                        'chalk',
                        'cheap',
                        'chest',
                        'chief',
                        'clean',
                        'clear',
                        'clock',
                        'cloth',
                        'cloud',
                        'cough',
                        'cover',
                        'crack',
                        'crime',
                        'cruel',
                        'crush',
                        'curve',
                        'death',
                        'dirty',
                        'doubt',
                        'drain',
                        'dress',
                        'drink',
                        'early',
                        'earth',
                        'equal',
                        'error',
                        'event',
                        'every',
                        'false',
                        'field',
                        'fight',
                        'first',
                        'fixed',
                        'flame',
                        'floor',
                        'force',
                        'frame',
                        'front',
                        'fruit',
                        'glass',
                        'glove',
                        'grain',
                        'grass',
                        'great',
                        'green',
                        'group',
                        'guide',
                        'happy',
                        'heart',
                        'horse',
                        'house',
                        'jelly',
                        'jewel',
                        'judge',
                        'knife',
                        'laugh',
                        'level',
                        'light',
                        'limit',
                        'linen',
                        'loose',
                        'match',
                        'metal',
                        'mixed',
                        'money',
                        'month',
                        'mouth',
                        'music',
                        'nerve',
                        'night',
                        'noise',
                        'north',
                        'offer',
                        'order',
                        'other'],
                      [ 'across',
                        'almost',
                        'amount',
                        'animal',
                        'answer',
                        'attack',
                        'basket',
                        'before',
                        'belief',
                        'bitter',
                        'bottle',
                        'branch',
                        'breath',
                        'bridge',
                        'bright',
                        'broken',
                        'bucket',
                        'butter',
                        'button',
                        'camera',
                        'canvas',
                        'chance',
                        'change',
                        'cheese',
                        'church',
                        'circle',
                        'collar',
                        'colour',
                        'common',
                        'copper',
                        'cotton',
                        'credit',
                        'damage',
                        'danger',
                        'degree',
                        'design',
                        'desire',
                        'detail',
                        'drawer',
                        'effect',
                        'engine',
                        'enough',
                        'expert',
                        'family',
                        'father',
                        'feeble',
                        'female',
                        'finger',
                        'flight',
                        'flower',
                        'friend',
                        'future',
                        'garden',
                        'growth',
                        'hammer',
                        'hollow',
                        'humour',
                        'insect',
                        'island',
                        'kettle',
                        'letter',
                        'liquid',
                        'little',
                        'living',
                        'market',
                        'memory',
                        'middle',
                        'minute',
                        'monkey',
                        'mother',
                        'motion',
                        'muscle',
                        'narrow',
                        'nation',
                        'needle',
                        'normal',
                        'number',
                        'office',
                        'orange',
                        'parcel',
                        'pencil',
                        'person',
                        'please',
                        'plough',
                        'pocket',
                        'poison',
                        'polish',
                        'porter',
                        'potato',
                        'powder',
                        'prison',
                        'profit',
                        'public',
                        'reason',
                        'record',
                        'regret',
                        'reward',
                        'rhythm',
                        'school',
                        'second'],
                      [ 'account',
                        'against',
                        'attempt',
                        'balance',
                        'because',
                        'between',
                        'boiling',
                        'brother',
                        'certain',
                        'comfort',
                        'company',
                        'complex',
                        'control',
                        'country',
                        'current',
                        'curtain',
                        'cushion',
                        'disease',
                        'disgust',
                        'driving',
                        'elastic',
                        'example',
                        'feather',
                        'feeling',
                        'fertile',
                        'fiction',
                        'foolish',
                        'forward',
                        'general',
                        'hanging',
                        'harbour',
                        'harmony',
                        'healthy',
                        'hearing',
                        'history',
                        'impulse',
                        'journey',
                        'leather',
                        'library',
                        'machine',
                        'manager',
                        'married',
                        'measure',
                        'medical',
                        'meeting',
                        'morning',
                        'natural',
                        'opinion',
                        'payment',
                        'picture',
                        'present',
                        'private',
                        'process',
                        'produce',
                        'protest',
                        'purpose',
                        'quality',
                        'reading',
                        'receipt',
                        'regular',
                        'request',
                        'respect',
                        'science',
                        'serious',
                        'servant',
                        'society',
                        'special',
                        'station',
                        'stomach',
                        'strange',
                        'stretch',
                        'support',
                        'thought',
                        'through',
                        'through',
                        'thunder',
                        'trouble',
                        'violent',
                        'waiting',
                        'weather',
                        'whistle',
                        'writing' ],
                      [ 'addition',
                        'approval',
                        'argument',
                        'building',
                        'business',
                        'carriage',
                        'chemical',
                        'complete',
                        'daughter',
                        'decision',
                        'delicate',
                        'distance',
                        'division',
                        'electric',
                        'exchange',
                        'frequent',
                        'hospital',
                        'increase',
                        'industry',
                        'interest',
                        'language',
                        'learning',
                        'material',
                        'military',
                        'mountain',
                        'opposite',
                        'ornament',
                        'parallel',
                        'physical',
                        'pleasure',
                        'position',
                        'possible',
                        'probable',
                        'property',
                        'question',
                        'reaction',
                        'relation',
                        'religion',
                        'scissors',
                        'separate',
                        'stocking',
                        'straight',
                        'surprise',
                        'teaching',
                        'tendency',
                        'together',
                        'tomorrow',
                        'trousers',
                        'umbrella' ],
                      [ 'agreement',
                        'amusement',
                        'apparatus',
                        'attention',
                        'authority',
                        'automatic',
                        'beautiful',
                        'behaviour',
                        'committee',
                        'condition',
                        'conscious',
                        'dependent',
                        'different',
                        'digestion',
                        'direction',
                        'discovery',
                        'education',
                        'existence',
                        'expansion',
                        'important',
                        'insurance',
                        'invention',
                        'knowledge',
                        'necessary',
                        'operation',
                        'political',
                        'secretary',
                        'selection',
                        'statement',
                        'structure',
                        'substance',
                        'transport',
                        'yesterday' ],
                      [ 'adjustment',
                        'attraction',
                        'comparison',
                        'connection',
                        'discussion',
                        'experience',
                        'government',
                        'instrument',
                        'punishment',
                        'suggestion' ],
                      [ 'competition',
                        'destruction',
                        'development',
                        'observation',
                        'responsible' ],
                      [ 'distribution', 'organization' ],
                      [ 'advertisement' ],
                      [ 'representative' ] ];
                      
            while (words_pass.length < this.passwordLen) {
                var rest = this.passwordLen - words_pass.length;                // checking how many characters are left to fill
                if (rest == 1) {
                    break;
                } else {
                    var choppedWordsList = words.slice(1,rest);                     // slicing array of words so it won't try to add word longer than it needs to be
                    var wordsOfSameLength = this.randomChar(choppedWordsList);     // return array of words of the same length
                    var temp = this.randomChar(wordsOfSameLength);                // pick random word
                    temp = this.capitalizeFirst(temp,1);
                    words_pass += temp;
                }
            }
        return words_pass;
    }
    
    another(){
        var x=this.wordsPassword();
        if (x.length!=this.passwordLen) {
            return this.another();
        } else {
            return x;
        }
    }
}

let uno = new PasswordGenerator(30);

uno.password=uno.totallyRandom(uno.passwordLen, uno.charPool(true,true,true,true));
console.log(uno.password);

uno.passwordPin = uno.addNumbers('',uno.passwordLen);
console.log(uno.passwordPin);

uno.passwordTwo = uno.mixed();
console.log(uno.passwordTwo);

uno.passwordThree = uno.wordsPassword();
console.log(uno.passwordThree);

uno.passwordFour = uno.another();
console.log(uno.passwordFour);

console.log('\n');



