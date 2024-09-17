const select = document.querySelector('select');
const allLang = ['ru', 'en'];
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#'+lang;
    location.reload();

}
function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location, pathname + '#en';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['unit'][hash]
    document.querySelector('.lng-login').innerHTML = langArr['login'][hash]
    document.querySelector('.lng-register').innerHTML = langArr['register'][hash]
    document.querySelector('.lng-book').innerHTML = langArr['book'][hash]
    document.querySelector('.lng-logo').innerHTML = langArr['logo'][hash]
    document.querySelector('.lng-home').innerHTML = langArr['home'][hash]
    document.querySelector('.lng-about').innerHTML = langArr['about'][hash]
    document.querySelector('.lng-pages').innerHTML = langArr['pages'][hash]
    document.querySelector('.lng-contact').innerHTML = langArr['contact'][hash]
    document.querySelector('.lng-call').innerHTML = langArr['call'][hash]
    document.querySelector('.lng-mail').innerHTML = langArr['mail'][hash]
    document.querySelector('.lng-were').innerHTML = langArr['were'][hash]
    document.querySelector('.lng-wehave').innerHTML = langArr['wehave'][hash]
    document.querySelector('.lng-getin').innerHTML = langArr['getin'][hash]
    document.querySelector('.lng-submit').innerHTML = langArr['submit'][hash]
    document.querySelector('.lng-sucl').innerHTML = langArr['sucl'][hash]
    document.querySelector('.lng-sucr').innerHTML = langArr['sucr'][hash]
    document.querySelector('.lng-login1').innerHTML = langArr['login1'][hash]
    document.querySelector('.lng-register1').innerHTML = langArr['register1'][hash]
    document.querySelector('.lng-submit1').innerHTML = langArr['submit1'][hash]
    document.querySelector('.lng-book1').innerHTML = langArr['book1'][hash]
    document.querySelector('.lng-brian').innerHTML = langArr['brian'][hash]
    document.querySelector('.lng-martha').innerHTML = langArr['martha'][hash]
    document.querySelector('.lng-john').innerHTML = langArr['john'][hash]
    document.querySelector('.lng-bookza').innerHTML = langArr['bookza'][hash]
    document.querySelector('.lng-contact1').innerHTML = langArr['contact1'][hash]
    document.querySelector('.lng-welcome').innerHTML = langArr['welcome'][hash]
    document.querySelector('.lng-law').innerHTML = langArr['law'][hash]
    document.querySelector('.lng-although').innerHTML = langArr['although'][hash]
    document.querySelector('.lng-peter').innerHTML = langArr['peter'][hash]
    document.querySelector('.lng-case').innerHTML = langArr['case'][hash]
    document.querySelector('.lng-years').innerHTML = langArr['years'][hash]
    document.querySelector('.lng-exp').innerHTML = langArr['exp'][hash]
    document.querySelector('.lng-explore').innerHTML = langArr['explore'][hash]
    document.querySelector('.lng-our').innerHTML = langArr['our'][hash]
    document.querySelector('.lng-weare').innerHTML = langArr['weare'][hash]
    document.querySelector('.lng-business').innerHTML = langArr['business'][hash]
    document.querySelector('.lng-advanced').innerHTML = langArr['advanced'][hash]
    document.querySelector('.lng-view1').innerHTML = langArr['view1'][hash]
    document.querySelector('.lng-construction').innerHTML = langArr['construction'][hash]
    document.querySelector('.lng-cloud').innerHTML = langArr['cloud'][hash]
    document.querySelector('.lng-view2').innerHTML = langArr['view2'][hash]
    document.querySelector('.lng-car').innerHTML = langArr['car'][hash]
    document.querySelector('.lng-ai').innerHTML = langArr['ai'][hash]
    document.querySelector('.lng-view3').innerHTML = langArr['view3'][hash]
    document.querySelector('.lng-wrongful').innerHTML = langArr['wrongful'][hash]
    document.querySelector('.lng-secure').innerHTML = langArr['secure'][hash]
    document.querySelector('.lng-view4').innerHTML = langArr['view4'][hash]
    document.querySelector('.lng-criminal').innerHTML = langArr['criminal'][hash]
    document.querySelector('.lng-scalable').innerHTML = langArr['scalable'][hash]
    document.querySelector('.lng-view5').innerHTML = langArr['view5'][hash]
    document.querySelector('.lng-family').innerHTML = langArr['family'][hash]
    document.querySelector('.lng-support').innerHTML = langArr['support'][hash]
    document.querySelector('.lng-view6').innerHTML = langArr['view6'][hash]
    document.querySelector('.lng-advanced1').innerHTML = langArr['advanced1'][hash]
    document.querySelector('.lng-our1').innerHTML = langArr['our1'][hash]
    document.querySelector('.lng-cloud1').innerHTML = langArr['cloud1'][hash]
    document.querySelector('.lng-seamlessly').innerHTML = langArr['seamlessly'][hash]
    document.querySelector('.lng-ai1').innerHTML = langArr['ai1'][hash]
    document.querySelector('.lng-leverage').innerHTML = langArr['leverage'][hash]
    document.querySelector('.lng-secure1').innerHTML = langArr['secure1'][hash]
    document.querySelector('.lng-protect').innerHTML = langArr['protect'][hash]
    document.querySelector('.lng-scalable1').innerHTML = langArr['scalable1'][hash]
    document.querySelector('.lng-our2').innerHTML = langArr['our2'][hash]
    document.querySelector('.lng-support1').innerHTML = langArr['support1'][hash]
    document.querySelector('.lng-our3').innerHTML = langArr['our3'][hash]
    document.querySelector('.lng-fighting').innerHTML = langArr['fighting'][hash]
    document.querySelector('.lng-our4').innerHTML = langArr['our4'][hash]
    document.querySelector('.lng-timely').innerHTML = langArr['timely'][hash]
    document.querySelector('.lng-trusted').innerHTML = langArr['trusted'][hash]
    document.querySelector('.lng-number').innerHTML = langArr['number'][hash]
    document.querySelector('.lng-succ').innerHTML = langArr['succ'][hash]
    document.querySelector('.lng-largest').innerHTML = langArr['largest'][hash]
    document.querySelector('.lng-criminal1').innerHTML = langArr['criminal1'][hash]
    document.querySelector('.lng-case1').innerHTML = langArr['case1'][hash]
    document.querySelector('.lng-trusted1').innerHTML = langArr['trusted1'][hash]
    document.querySelector('.lng-number1').innerHTML = langArr['number1'][hash]
    document.querySelector('.lng-succ1').innerHTML = langArr['succ1'][hash]
    document.querySelector('.lng-largest1').innerHTML = langArr['largest1'][hash]
    document.querySelector('.lng-criminal2').innerHTML = langArr['criminal2'][hash]
    document.querySelector('.lng-case2').innerHTML = langArr['case2'][hash]
    document.querySelector('.lng-meet').innerHTML = langArr['meet'][hash]
    document.querySelector('.lng-client').innerHTML = langArr['client'][hash]
    document.querySelector('.lng-natasha').innerHTML = langArr['natasha'][hash]
    document.querySelector('.lng-private').innerHTML = langArr['private'][hash]
    document.querySelector('.lng-hannah').innerHTML = langArr['hannah'][hash]
    document.querySelector('.lng-business1').innerHTML = langArr['business1'][hash]
    document.querySelector('.lng-phillip').innerHTML = langArr['phillip'][hash]
    document.querySelector('.lng-bus').innerHTML = langArr['bus'][hash]
    document.querySelector('.lng-joshua').innerHTML = langArr['joshua'][hash]
    document.querySelector('.lng-private1').innerHTML = langArr['private1'][hash]
    document.querySelector('.lng-logo1').innerHTML = langArr['logo1'][hash]
    document.querySelector('.lng-to').innerHTML = langArr['to'][hash]
    document.querySelector('.lng-our5').innerHTML = langArr['our5'][hash]
    document.querySelector('.lng-were1').innerHTML = langArr['were1'][hash]
    document.querySelector('.lng-contact2').innerHTML = langArr['contact2'][hash]
    document.querySelector('.lng-get').innerHTML = langArr['get'][hash]
    document.querySelector('.lng-you1').innerHTML = langArr['you1'][hash]
    document.querySelector('.lng-call1').innerHTML = langArr['call1'][hash]
    document.querySelector('.lng-get1').innerHTML = langArr['get1'][hash]
    document.querySelector('.lng-please').innerHTML = langArr['please'][hash]
    document.querySelector('.lng-full').innerHTML = langArr['full'][hash]
    document.querySelector('.lng-mail1').innerHTML = langArr['mail1'][hash]
    document.querySelector('.lng-phone').innerHTML = langArr['phone'][hash]
    document.querySelector('.lng-subject').innerHTML = langArr['subject'][hash]
    document.querySelector('.lng-your').innerHTML = langArr['your'][hash]
    document.querySelector('.lng-getan').innerHTML = langArr['getan'][hash]
    document.querySelector('.lng-corporate').innerHTML = langArr['corporate'][hash]
    document.querySelector('.lng-friday').innerHTML = langArr['friday'][hash]
    document.querySelector('.lng-empowering').innerHTML = langArr['empowering'][hash]
    document.querySelector('.lng-weare1').innerHTML = langArr['weare1'][hash]
    document.querySelector('.lng-learn').innerHTML = langArr['learn'][hash]
    document.querySelector('.lng-additional').innerHTML = langArr['additional'][hash]
    document.querySelector('.lng-here').innerHTML = langArr['here'][hash]
    document.querySelector('.lng-corporate1').innerHTML = langArr['corporate1'][hash]
    document.querySelector('.lng-capitalize').innerHTML = langArr['capitalize'][hash]
    document.querySelector('.lng-view7').innerHTML = langArr['view7'][hash]
    document.querySelector('.lng-corporate2').innerHTML = langArr['corporate2'][hash]
    document.querySelector('.lng-capitalize1').innerHTML = langArr['capitalize1'][hash]
    document.querySelector('.lng-legal').innerHTML = langArr['legal'][hash]
    document.querySelector('.lng-strategies').innerHTML = langArr['strategies'][hash]
    document.querySelector('.lng-view8').innerHTML = langArr['view8'][hash]
    document.querySelector('.lng-legal1').innerHTML = langArr['legal1'][hash]
    document.querySelector('.lng-strategies1').innerHTML = langArr['strategies1'][hash]
    document.querySelector('.lng-social').innerHTML = langArr['social'][hash]
    document.querySelector('.lng-collaborative').innerHTML = langArr['collaborative'][hash]
    document.querySelector('.lng-view9').innerHTML = langArr['view9'][hash]
    document.querySelector('.lng-social1').innerHTML = langArr['social1'][hash]
    document.querySelector('.lng-collaborative1').innerHTML = langArr['collaborative1'][hash]
    document.querySelector('.lng-corporate3').innerHTML = langArr['corporate3'][hash]
    document.querySelector('.lng-podcasting').innerHTML = langArr['podcasting'][hash]
    document.querySelector('.lng-view10').innerHTML = langArr['view10'][hash]
    document.querySelector('.lng-corporate4').innerHTML = langArr['corporate4'][hash]
    document.querySelector('.lng-podcasting1').innerHTML = langArr['podcasting1'][hash]
    document.querySelector('.lng-legal2').innerHTML = langArr['legal2'][hash]
    document.querySelector('.lng-efficiently').innerHTML = langArr['efficiently'][hash]
    document.querySelector('.lng-view11').innerHTML = langArr['view11'][hash]
    document.querySelector('.lng-legal3').innerHTML = langArr['legal3'][hash]
    document.querySelector('.lng-efficiently1').innerHTML = langArr['efficiently1'][hash]
    document.querySelector('.lng-social2').innerHTML = langArr['social2'][hash]
    document.querySelector('.lng-objectively').innerHTML = langArr['objectively'][hash]
    document.querySelector('.lng-view12').innerHTML = langArr['view12'][hash]
    document.querySelector('.lng-social3').innerHTML = langArr['social3'][hash]
    document.querySelector('.lng-objectively1').innerHTML = langArr['objectively1'][hash]
    document.querySelector('.lng-attorneyster').innerHTML = langArr['attorneyster'][hash]
    document.querySelector('.lng-home1').innerHTML = langArr['home1'][hash]
    document.querySelector('.lng-about1').innerHTML = langArr['about1'][hash]
    document.querySelector('.lng-pricing').innerHTML = langArr['pricing'][hash]
    document.querySelector('.lng-test').innerHTML = langArr['test'][hash]
    document.querySelector('.lng-contact3').innerHTML = langArr['contact3'][hash]
    document.querySelector('.lng-utility').innerHTML = langArr['utility'][hash]
    document.querySelector('.lng-style').innerHTML = langArr['style'][hash]
    document.querySelector('.lng-licenses').innerHTML = langArr['licenses'][hash]
    document.querySelector('.lng-protected').innerHTML = langArr['protected'][hash]
    document.querySelector('.lng-change').innerHTML = langArr['change'][hash]
    document.querySelector('.lng-error').innerHTML = langArr['error'][hash]
    document.querySelector('.lng-practice').innerHTML = langArr['practice'][hash]
    document.querySelector('.lng-business2').innerHTML = langArr['business2'][hash]
    document.querySelector('.lng-construction1').innerHTML = langArr['construction1'][hash]
    document.querySelector('.lng-car1').innerHTML = langArr['car1'][hash]
    document.querySelector('.lng-criminal3').innerHTML = langArr['criminal3'][hash]
    document.querySelector('.lng-family1').innerHTML = langArr['family1'][hash]
    document.querySelector('.lng-attorney').innerHTML = langArr['attorney'][hash]
    document.querySelector('.lng-phone1').innerHTML = langArr['phone1'][hash]
    document.querySelector('.lng-mail2').innerHTML = langArr['mail2'][hash]
    document.querySelector('.lng-copy').innerHTML = langArr['copy'][hash]
    document.querySelector('.lng-victor').innerHTML = langArr['victor'][hash]
    document.querySelector('.lng-web').innerHTML = langArr['web'][hash]
    document.querySelector('.lng-folow').innerHTML = langArr['folow'][hash]





}
changeLanguage();

