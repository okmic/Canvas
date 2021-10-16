import React, { useEffect, useState } from "react";
import PreloaderContainer from "../common/Preloader/PreloaderContainer";
import s from './Basket.module.css'

let Basket = (props) => {
    const [loading, setLoading] = useState(undefined)
    const [completed, setCompleted] = useState(undefined)

    useEffect(() => {
    setTimeout(
        () => {
            setLoading(true)
            setTimeout(
                () => {
                   setCompleted(true)
                }, 500)
        }, 1000)
}, [loading])

    return(
        !completed ? <PreloaderContainer />
        : <div className={s.basket__container}>
            <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione eaque sint facilis facere praesentium rem fuga architecto nesciunt ipsa, in corporis sit, ducimus non repellat eveniet ad officiis illum?
            Ex aspernatur, tempora fuga velit saepe vero, voluptatum nobis labore incidunt temporibus soluta expedita aut veritatis aperiam unde harum! Dignissimos corporis esse nisi sint similique. Pariatur soluta quae doloribus id.
            Similique nisi deserunt non eligendi laudantium impedit exercitationem maiores cupiditate veniam tenetur deleniti repudiandae ducimus voluptatibus natus commodi cumque ipsa dolor magni quia, sunt quisquam! Ratione iste animi nostrum illum.
            Magni, vero nesciunt. Voluptatem iste molestiae modi nobis vitae amet facere aliquam fugiat rerum nesciunt illo aut optio in cum laudantium architecto minus eaque non accusamus, assumenda beatae, veniam repellat!
            Sed molestiae reprehenderit dignissimos! Rem suscipit, harum ipsum libero hic illum voluptatem ipsa molestias totam nobis esse cum. Mollitia deleniti natus voluptatibus, corrupti laudantium tempore voluptatem voluptas illum molestiae dolorum!
            Nihil debitis aliquam hic consequuntur dolorum veniam unde voluptas quisquam perferendis incidunt consequatur nesciunt aperiam eligendi velit obcaecati dolore tempora commodi, dignissimos nostrum, animi quasi! Consequuntur et id laborum ullam!
            Fugiat sed ipsa tempore magnam? Vel quos, saepe facilis obcaecati odio error similique laborum minus amet, repellendus aliquam perferendis distinctio architecto facere, ex nemo eaque unde aliquid recusandae. Hic, officia?
            Libero, provident fuga. Dignissimos, reiciendis iste perspiciatis, quos, consequatur natus amet quis corporis alias rerum eveniet labore! Earum quisquam voluptatibus magni eligendi omnis culpa placeat, quis dolores a rerum doloribus?
            Debitis, dolore modi! Consequatur labore qui quod dolorum optio? Quos fugiat ut dolore necessitatibus, aliquam beatae facere eos omnis nemo laborum veritatis rem eaque doloremque ex inventore doloribus nam voluptate.
            Vitae consequuntur vel architecto, alias ullam eligendi autem perferendis incidunt veritatis, et ut dignissimos porro cupiditate facere placeat, tenetur distinctio quibusdam beatae. Praesentium ducimus consequuntur accusamus vel reiciendis, earum expedita.
            Corrupti quas, eveniet optio at debitis commodi id suscipit vitae dignissimos est neque veritatis? Dolorem ad numquam dolorum reprehenderit aliquid, soluta, nemo voluptatum quasi odit doloribus maiores, recusandae minus nulla.
            At architecto porro commodi sunt consectetur perferendis, asperiores odio officiis enim, nesciunt est corrupti adipisci accusantium iusto perspiciatis ea qui ab quia culpa blanditiis quibusdam numquam dolores repudiandae quo! Aliquid.
            Reprehenderit assumenda unde nisi quis sequi minima dignissimos, magnam doloribus officia. Fuga earum adipisci cupiditate sed facere asperiores quaerat dolorum. Fugit ut accusamus hic dolores quibusdam quasi doloremque optio maiores.
            Tenetur dolorum inventore, quisquam aspernatur blanditiis officiis voluptate repellendus facere aliquid libero dolore at, quas eveniet vel. Enim, aliquid laudantium? Vitae voluptates inventore aut ullam asperiores quo dolorum, dolor molestias.
            Est tempore fugiat quibusdam expedita, sunt labore earum cum ullam porro excepturi, ipsa enim iusto? Ex magnam mollitia, facilis debitis ab porro itaque alias ducimus optio! Amet iure ullam officiis!
            Neque, qui! Quis blanditiis enim tempore repudiandae minus optio accusantium asperiores, deserunt dolores reiciendis voluptas est explicabo nobis fugiat odit quia iure aliquam perferendis vel amet cumque. Vero, atque enim.
            Excepturi, labore unde nostrum molestias dignissimos libero amet quam facilis nulla, eligendi, ex pariatur qui ea earum quae odio hic adipisci! Odit quisquam laborum dolores sunt dolorum voluptatibus blanditiis vero!
            Commodi dolore asperiores dignissimos quis eius temporibus, tempora corrupti labore corporis rerum ea in eum atque sed eligendi libero iste magni ipsam sit ratione recusandae nobis dicta! Quas, porro omnis.
            Adipisci tempore officia dolorem, tempora, autem dolorum ut vero cumque itaque, corporis iste quibusdam modi labore atque recusandae sint fugit minima sequi explicabo consectetur. Molestiae aspernatur fugiat quia corrupti obcaecati.
            Ullam dolore soluta laborum ut tempora totam aut eum modi. Eius rem doloremque aliquam saepe enim, officiis ipsa architecto neque hic modi esse mollitia excepturi harum, et corrupti sint iste!
            Veritatis vitae nobis alias adipisci sequi accusamus exercitationem voluptas iusto laboriosam saepe culpa suscipit, voluptatibus tempora assumenda accusantium cumque placeat ea provident, itaque ipsam atque amet! Expedita dignissimos ipsa accusantium?
            Eligendi consectetur sed sapiente iure perspiciatis dignissimos quasi culpa molestiae officia vero excepturi, itaque ex nostrum minus tenetur. Ipsam, dolor? Odio ipsum blanditiis architecto dolore placeat vitae quidem facere delectus.
            Tenetur iure et reprehenderit consequatur, aliquid officia vero pariatur adipisci atque veritatis temporibus illum sunt ratione non deleniti. Voluptatem praesentium impedit quis ratione iusto quasi laudantium id commodi earum autem.
            Deserunt ad tempore porro non inventore quisquam molestias ipsa dolorum maxime pariatur incidunt, reiciendis ipsum blanditiis rerum corrupti eos a unde libero aut doloremque est at voluptate quo quibusdam? Possimus!
            Repellendus magnam optio aut assumenda iste nemo, odit nobis rem inventore quasi blanditiis alias laborum quae minima consequuntur eaque ducimus velit debitis ad maiores enim! Eius, corrupti. Ad, voluptate minus?
            Velit qui labore minus pariatur dolores incidunt. Dolor quidem numquam sequi porro fugiat est aspernatur eaque incidunt earum sit! Quisquam fugiat officia consectetur esse laboriosam ad, veniam voluptas exercitationem ullam!
            Nesciunt, ex praesentium ullam, at debitis voluptatum maxime eveniet commodi ipsa quis iusto id odio tempora assumenda nisi doloribus magni quod fuga numquam sunt adipisci eos eius laborum saepe. Odit.
            Deserunt recusandae, cum commodi atque consequatur et dolore iste ipsum. Ratione, incidunt natus! Itaque voluptatum delectus, cum maiores porro voluptas sint tempora alias, eveniet ab rerum, praesentium dolore dolorem voluptates!
            Ab eius neque dicta hic recusandae labore commodi laudantium cupiditate illum incidunt ex doloribus voluptatem nesciunt, dolor vero iure, ipsum et. Esse rerum odio, tempora fugit minus sapiente voluptas quasi?
            Suscipit quas repellat libero consequatur. Assumenda nesciunt, nostrum labore aspernatur consequatur inventore quae impedit magni, accusantium provident earum modi enim mollitia at voluptatum tempora expedita reiciendis vel repellendus aliquam porro.
            Error minus accusantium quasi numquam, veritatis modi doloremque fugiat ullam enim? Sit aspernatur iure excepturi deleniti. Illo delectus est natus deserunt dolor distinctio ipsam quibusdam eveniet consequatur incidunt! Voluptate, aperiam.
            Distinctio at, unde, aspernatur magnam facilis debitis voluptates laboriosam quae rem enim est exercitationem adipisci necessitatibus nulla atque. Modi accusamus sapiente quaerat aliquam ipsum aut illo at quod culpa voluptatem!
            Nesciunt at veniam doloremque similique suscipit eaque ab mollitia quia cupiditate dolor expedita, provident eligendi quis natus, id delectus magni quasi! Corporis eius harum eos culpa vel, vitae cumque voluptatem.
            Earum sequi officiis animi, maxime veniam aliquid dolores nostrum, delectus aperiam cum repudiandae suscipit error consectetur exercitationem! Quaerat ea non voluptate iusto reiciendis sint earum nisi, fugiat possimus harum iure.
            Excepturi enim, temporibus aut fugiat quo, nobis sapiente ullam doloribus nostrum sint aspernatur porro. Deserunt labore quae et illo accusantium cum quia, hic aliquam, excepturi ipsam totam sed suscipit deleniti!
            Autem alias odit vitae nemo praesentium ab, quo, consequuntur, illum officiis enim ea! Ratione eaque, odio beatae reiciendis sequi voluptatum recusandae iste blanditiis explicabo porro eum sapiente magnam autem distinctio.
            Illum vel quisquam ad sint optio impedit, saepe mollitia, at ratione enim sit assumenda qui quam dolorum neque iste error maiores omnis? Necessitatibus a nam quo officiis, ex possimus soluta?
            Ea commodi odio suscipit non, asperiores voluptatibus modi amet dolores cumque qui architecto voluptatem facere quae nesciunt blanditiis praesentium cum nisi, accusamus facilis sed unde quis impedit! Amet, corrupti velit?
            Totam, officiis in. Porro, laborum blanditiis quasi deleniti veniam eveniet unde quos ad esse fugiat, laboriosam vel delectus doloribus rem maxime exercitationem eius quis corrupti dolorem quibusdam dolores architecto aut.
            Modi, fuga unde! Aliquid voluptatibus atque facere libero provident accusantium animi dolorum, blanditiis a laboriosam totam sint accusamus nesciunt nostrum quasi quibusdam sed, amet explicabo veritatis reiciendis similique nisi quas?
            Corrupti, illo dolores aspernatur quo minima soluta! Eligendi corporis, vitae nostrum qui laboriosam eaque quia, quam ipsa exercitationem illum vero enim deserunt, fugit in porro quaerat. Nam beatae id placeat?
            Sit voluptatibus qui esse incidunt ex molestiae provident similique dolorum quibusdam eius quas quae saepe, laboriosam nisi velit culpa illo, neque et sequi molestias doloremque consequuntur, dolores possimus! In, sapiente.
            Tempore dolorum mollitia ipsam corrupti, ex non architecto ut fugiat voluptatum cumque consequuntur, error tenetur facilis explicabo exercitationem id accusamus neque consectetur! Ratione, nulla! Atque minus rem libero in minima.
            Aut quod placeat perspiciatis quidem dolor dolore adipisci officiis impedit qui, ut corrupti fuga fugit pariatur, illum labore culpa optio excepturi suscipit? Sint eligendi illum exercitationem praesentium itaque, molestiae expedita.
            Dolorum inventore accusantium ipsum repudiandae temporibus quas ipsa, nemo, eligendi voluptatem dolore, eius aliquid fugit molestiae nam quibusdam sint magni impedit ratione. Error, ducimus ab temporibus quia tempore doloribus aliquid?
            Nisi exercitationem perspiciatis quas eveniet molestias repudiandae necessitatibus, itaque laboriosam perferendis doloremque earum iure maxime ipsum! Deleniti mollitia vitae eaque reiciendis aut est aspernatur dolorem, velit laborum. Est, illo tempore?
            Odio et quisquam sed eveniet deserunt, laudantium veritatis in aliquam! Suscipit esse inventore deserunt molestiae totam eum impedit minima aliquam. Dolorum, delectus eveniet fugit tenetur at ea corporis cumque alias.
            Quas omnis animi in labore rem, excepturi, minus ducimus, ex illo ab facere. Vitae reprehenderit fugiat, expedita non consequatur nesciunt error qui vel commodi corrupti, ea distinctio impedit sit dolorem?
            Reprehenderit officia corrupti laboriosam facilis rerum fugiat iusto dolorem voluptatum atque odit est cumque excepturi nulla in impedit, nostrum et sint earum esse dolor voluptas fuga ab ipsum possimus. Itaque.
            Labore, fugiat quibusdam nam quod placeat autem aliquid, repudiandae tempora vitae saepe illo delectus temporibus deleniti optio porro harum? Itaque molestiae eum veniam, labore et eaque sint! Dolor, distinctio dolorem.
            </span>
        </div>
    )
} 

export default Basket