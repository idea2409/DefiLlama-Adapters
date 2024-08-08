const { cexExports } = require("../helper/cex");

const config = {
  ethereum: {
    owners: [
      "0x182e1259ef6ee45dc811132ef4ba5871f1536822",
      "0x48ec5560bfd59b95859965cce48cc244cfdf6b0c",
      "0xee9fb7a615cb76b46d26be6ebc9114a627a81c5b",
      "0x08dd6f4d6dce88f11f964fe811e55f301ad30ddf",
      "0x379825f8da776b573a63404a5c499c8a379a131f",
      "0x7cf32ff080efdf4066263202048a36f752232bf6",
      "0xa3f74537f048b893d726c173cb322fd21a28b18a",
      "0xee7c0bf91f9ac8117b490c8e028714acbcb41364",
      "0xdd7fe457f4dec4afec5d7f3284276db8c5c6dd6b",
      "0xe1576685451986e3f93c2fb87cca3aec5b5d45d0",
      "0x559e7711e4041da2e2efefe1097d9ab3c8eecf2a",
      "0xa07b07e4542bea95f38c54f39ec25750ffc3dfcd",
      "0x31c84a968736fcfe02a9ba274e0fa515a4a6659c",
      "0x88a4df73aac310484c60c4c0ac4904cab938c20b",
      "0x4c0907f7ad337635a7fd414a0c7a938e0d64bf4d",
      "0x6130611f7a65deb930bd0c0825af88078fcced43",
      "0xab09b0c5c112999bee4f45e323c4ad2b59638603",
      "0x58eaa8177d4309a8bb83205e49a8468cfa799d7e",
      "0x1f7b76ab2d5c0893d0a7c3df03698b19d2a179ac",
      "0x896dfee1afeb6336e86911bd5a341c1264e5611a",
      "0xee10d544bf3deff395679f3ca43fd06163841717",
      "0xa8cfe8de6aebc9024d180f306793730f7c425a95",
      "0xc5b611f502a0dcf6c3188fd494061ae29b2baa4f",
      "0xb66410ae75317faf13dba869b6df7b30892d1e46",
      "0xd02744b3b05aea06373a7e0cde443039c6596468",
      "0x4c766def136f59f6494f0969b1355882080cf8e0",
      "0x1522900b6dafac587d499a862861c0869be6e428",
      "0x593aebee9117eea447279e5973f64c68d8e977a0",
      "0x333c100ae1a2743a1e55d73913cac6d95deb7f62",
      "0xd4fcc07a8da7d55599167991d4ab47f976d0a306",
      "0x772396dd44ce3d347838bfec437cb32f534963f2",
      "0xc20b79cff9d2c89ba8aeb9abf4bfef0314ca7bd2",
      "0x9fec89e34efaa4fc9f19c02f474c71373e6effe7",
      "0xab7bb7959332888e44d795c6f28ee876a8469eaa",
      "0xbcddeba6a9672c1f76a8b8edd3190bdfe6d4ef11",
      "0x7e677cacaae0d465cfd336869f1f575a48bf012a",
      "0x16a798dbd8fa626143bb4f06fa4724d4145d4e6e",
      "0x6778c14331251bbbee71414eda389dcef4bd81b8",
      "0x9a9bed3eb03e386d66f8a29dc67dc29bbb1ccb72",
      "0xe5cd446e0e4df139db80f38840bb617d5cd0d5f8",
      "0xcddf488f1c826160ee832d4f1492f00cf8557ff6",
      "0xfcfebdd956a9babd9c687f9cf599774b7a01a7d3",
      "0xc304bd0f391f1ed6d6b3f2845f8e42c550a5ed5b",
      "0xd46914c273443505563d346f98d41f6a40dff36c",
      "0xfbb23038fe6cfa16aa898d7dbca7c3269bdaf258",
      "0x059799f2261d37b829c2850cee67b5b975432271",
      "0x7e9ca63e3f1c26fc8fd4aee1cfcc065b9a107d7a",
      "0x858c83a0c97a3a710fd3b9167a0248d76d3b036f",
      "0x8366dcab4cc14c826fc9d51bd4c16567bd07b02a",
      "0x9dcce8fffc06163f2a754a996262c6414db0116b",
      "0x0a4ac8b30bb0e477c301135ff9566b2b9d7d9244",
      "0xb8e73ba7c6c0b50a0cd94fe9f6622762b0401c02",
      "0xd2ab693e92148b8d3e73c72ff71bd28101ac1d68",
      "0x1667574d6fa214aa5810535e3351f3047d8925a5",
      "0x4cc61daed7824ff8b5081f204e16bea330c2eeab",
      "0x518b82370bc31ebb96922ec257d92517d7387615",
      "0x5fe562fce21b136b20936aa4903a95af4a4a7d36",
      "0x30792c8b2a252efa66878b175a1af1e6eaf97b6d"
    ],
  },
  bitcoin: {
    owners: [
      "3HXo1ez8mbfTkVKGcarHEeGNsurTLwsuXH",
      "bc1q5u42awdp09sj67shdxzvcvjhjy5pwf9fz77gw3zghsgl6wrgxvdspp6xgg",
      "3Ee3Cft7X4DbRzMoBdaKWrCZ4AqriA5sbF",
      "bc1q990xdskw5q7h820grr4fru4ntytenrggjqpc0g04hfrlc47hu66qeh3f7x",
      "3QTCJEYBR7XFEwcpio7GJgqEpGruX33ojm",
      "3MF4BwuPuasoK6v4a3iarDgSFVjmXxLG6j",
      "39emsnF1cY5djp3kmrdR5H9ghdjDwVwjiP",
      "bc1qcea4vxps9dwpn8suytmma4ksln2h0vddhzdvulp5tsfsh8m5j0uqu9un9x",
      "36Ge1JYchtdkvYScTdo4N1jCspkwqHd9Ff",
      "bc1qr8t4agyvjc3wtwu6wrup2cawzrvnkkfkx5x8hk7u5xv8rhzw05rqjsed6w",
      "bc1qywt6zyx7zzewa70nguum7hklyd0vmnm3z6qts40wlhzxaj05axfsf5qz2a",
      "bc1qrv5nhx3gmyxtkf8zu6yq9p8rsgmg7le32mts385jcurhjfnzhg5smtwhvc",
      "bc1qyuan8kg2xx2h46wmrqkp7a7787c8uwy97k2qdpx2ajssjkck3yjsfpfyjk",
      "3DgJ7MPGS4fAb9aaGwtsPrVgoceM41aMu2",
      "bc1qllgvgtdmszgjjwcugx8ea4u3vnmnfsjyc9txahd8c0pl24mfzehs0fcpnx",
      "bc1q9uurrfmdqfjghn7rny73a3vcq2jg60d3wjuegzua43mgxfjutk5qmkdy6z",
      "31hsam8EVqBubkP9Ph4RNfEYr69VVB3mTu",
      "bc1qz8j8d7turgfml80fm4gdlh2zv6dfct798suynm9gjwex9h6sy0ssvm9gzr",
      "bc1q2wx2hpjn036mu6qg2zwsqrm0g8h9gtm4egj4cymjtvyaapsz09usep66v9",
      "bc1q40sd4nfynlamhpfvcy5t506vl8d2zwyeufhzupnz7vfx3gs3cjfshlkdlk",
      "bc1qh824az3v5fhxuc0k07xc8kzf2dmf67dfpmjewakany34vyhgmkjsry0cm9",
      "bc1qmrsmmk4ezlcl546mcxwahym7u6q0nv5x0nn22uw7cd256mgz9f3q8hczr2",
      "bc1qvv40knxv9rcyw0c5vwzrq50x7zks9jpeyf3nhagrycq4yd6trm9qtmeear",
      "35MynuEPTZJd8Y7QhEsUiKKt18TrF9UgJQ",
      "bc1qwj7zwn3p4y8grutk9zxxn09vm0cs9g0mledte5kqxsm43w08u6pqp8p82q",
      "bc1q3anumarec8zlzs7nt4waljuhg2ueel6m0z5s3v7vg6cnfu66m83spupgm6",
      "bc1q5094926zt42j83ea7ds8v3yyksz24fgzzmyqw723dsajkr4quw0szze4kd",
      "bc1qzyptk5guyzfv3dsu8qmred7hy2r9wmla6rjkuzy4f5cld4z6zuhqdmtsfq",
      "bc1q0guw5chrlr2ca50x3ce9ptpcxf6fuz0zjxf6fzr6nq759n7mmn3qgdk3dt",
      "bc1qgn63a8xeg5dg4uc7jktc99ujftnf4dzx3nd8875xukjvp3uv2a7qnafuqa",
      "3Hi5VHVgmYZYfAPc9aNvQoNXyEv5rYvJQN",
      "bc1qu22qs0un63e0xzn642lgn5zjwzm75k59rx2kxdau3uq4g6rjekxs7xln4x",
      "bc1qylffvfh2a6pl6nz49uc6hm6pwp24mg03wte6ud4t598y3pahks4sl7zw4r",
      "bc1qckj933afq7ultlp4nrqhqk3shkaxt6j8y39htyn0umglr233m6wqfv7ay8",
      "bc1qany0allcwhuewg0wewnapt985vs4lq0jffyupkg5xkq52cwqrf4q8uzq6q",
      "bc1qugr8udpmpcu9edg9f90zqs2hkcqek528nt30klhm6eharygczw5set6a78",
      "bc1qjz2y6sx0h63nvxt72j42rjjap0zpursvuxn7ezhjegpfnwpv4y5sc7v8rj",
      "bc1qj0xc7sf880llyjt0dg9d6nmh045cjshzz3udzmkq7ws3ph9yr57stt72zv",
      "bc1ql2aveuauhett4au3eekd77asmqedctkaxdynmktj27huu62t9w0sfwhcfm",
      "bc1q9smt7qjhlkv9r3ds4r2n2u7jhxms0ns60jdqvaz4kuxj8uglvuyszxj8h2",
      "bc1qfa25ekdmau8pwe2kgnmpq4h27c8xrhk5acsw2jrgjlu9ut97phsqlhzjau",
      "bc1q5zlr6tqscu4va8r935z84zlfzlywvn3sg8psxrl59yy58n90hauqc7gcvn",
      "bc1qpx8ws376tje3v6llfnxvyjjergz4zpmldtv9wlgr9rxe9q3uv78q64y7xx",
      "bc1qfh0enm3gt5ctwykh39n4w3769lafmwwcw9murpm37x0ga5g2us7sy8dqck",
      "33t9PxtMC3yUpT5gvjVaA4PDwaMT8xCbpu",
      "bc1q3xrf5yh85zfgegj28563yvf646vuap7uz4ylut955s9e94rta9eqa06ynk",
      "bc1qa9v2dxhxsj75mcczwlssparhhnzcmkudg3tswtdcfrr0eussva9qxwzpdl",
      "bc1qeeujz9hg8lautsd8y3yv4mkgzff95yhgrwvlw9kkenr5uqupry8qjjaltz",
      "3Jc5hrY64F1C9rfrXJrrKR73bhGj3Um3Eq",
      "bc1qgvwrzlmteud92sa8twzkpelv6pe6s35z9a94zrvvh5rdvzs0n3ps3g29zv",
      "bc1qc9kg9knfu7m99c4mnaqmlzr7kx8lwad5g5nkg4gazfe7uptcs88qh83xz5",
      "bc1q2yjfzcl44sjd2jf9hmzre9dr9wydpnvtz6qqr8kxt96ey9yg7zlswa8ptn",
      "bc1q66v58wlm63wt9a0hphc6xlxzu4ydt0tut3exmxufyenpx62spvvqnzld8h",
      "bc1qygcnzafa52ghna3gw5yuh7yjpqpmy0vda89fsun2jk6u6877nvgqe4tndx",
      "bc1qdkmdeu2awyla77crpswk34f7nd0wh597m5yglgwj4hlj6jh9q95scavwge",
      "bc1qxdv33kz4339w4g9krc4dn9w9zkhs8pzfng3yr23m7az74urjxg7qdkghls",
      "bc1q508ncrv9k5327k43pq7wjq9a303kg8get4drk4qal7kq82yqcyssz00kyj",
      "bc1qecc3md6lccjh4wkkyh8jjrrca5j6zcnhgfllg77fazjy8rfddzqqjmx4y4",
      "bc1qjsq73k97hvqpf7th4t6k5ry5epatadhymyuu66gvl4dsh6g8getsm7jvxh",
      "bc1q7n96fy8jqt442pp43ag2z9re0dw95z9tyz3t2hz358xe5tx5akrq6gl6vp",
      "bc1qvudg5q68cuut2c4klc2pl8yq0cxpwm2ytz5sp9pct08d0pygw67qfwevr2",
      "bc1qfl638mvlzv5rt28p58vn89v2u0tpnpa2pajtx67mp6v3xcyxmycqepnff9",
      "bc1qdlg992c8m3v8arvlvcs3zs9sgejcv8nk0dg3ceg8rhygt6cym5jqvl7c2y",
      "bc1qxzaqdtx8xenrxwhhuuptk9p76m6jqg50wky2wlamhzxmj9576wmqhealnz",
      "bc1qy0lrrdzw6ammn6wr8s9ywud0gg87e7ypv0ccut6f3cw4fhf2yh4qxylryt",
      "bc1qq3s6jlsf90k7yssg7zntcws89kjsc2tdvydjzk6akddkafw99gss7pcnmy",
      "bc1q6t2uuzsx2f07zhe9xnumv0yjmuchacd6wq78phgf0fq5nt2mknrqg67y0d",
      "bc1qm3q35an2q08pxjvt4cepfcrcerdfqz9nthau5xjavdy24e8wnhws7hz9ds",
      "bc1q3tt0yzedrvlccftvedr54rq2yu47yr9pl29czenscf5yxunthflqkvxszz",
      "bc1q2w47h0s50wzuzv5v287tzazk8ph4na5ndm2sejmjmuy5l58t7gxq9ytgdf",
      "bc1q7dg4q2lsryndtxar6ner3j4c20fsfknnqkr5mzc3j8q8upjd5ysq99k6jr",
      "bc1qn0nnrcflsfsu3ytyd902tl86d589jg04lmlxu6zy7x2c6dke2xnqyzl68f",
      "3EmcYExbPqbdXHv5t36hjrAgZJoQUMjJ2p",
      "bc1q2tqsq67t3w09qlxjna4834d8p0get7x75ztc27awp4fuyn0jud8sksmc90",
      "bc1q5csapeundkkgwaw6mg4e89xeklhhg53cl4x853evype4tj2hr7cqvq4e2k",
      "bc1qclm7ufxfkctrym5ylj7wu3ztyec2tesqtsq9q8h8jum2s5nr5q2suj8trm",
      "bc1q69x54qdwjryjqqas8x2dzsxrv86d4f6fzjnmjehxl75um8666zmqdaupu5",
      "bc1q9ppqatggglvvc4fy5xwgd6987e9k9f5aj3amda4t9se3knjdpdesu5z93z",
      "bc1qqw2mzuzpy2g5h5eqmtwlhkeunl5vkdnva8uh7n0n0jg8qj38aufq978ccl",
      "bc1q6xaf29uq4p0smacnwkkfwpqhzc2dyrdyqfds8tv8spaslx94ajvssknu9w",
      "bc1qm0lf34sy33en4n847v3mefp9ug6u4qhtmnh50cqu9rg5fwckxayq3kpm0c",
      "bc1q8ydpjsakfdaj0gtpprcjz2e676pmwgp4jkt5p2r2p77pc6ucycpql9k384",
      "bc1qmlrdlux5vy6n9cgvc4xptqehp6zch39kagp9ly24qsktvvg2s2eqwv0464",
      "bc1qu7jjgj4k3l4dvxpfcw68xu5ax8ey65vusdms666xxr7wdnu0mh3sk2sjhf",
      "bc1q6j8cpspexxjkvavszl7cf0rsa8jxhkkn3few8cj9yztql72624hsw8x7hx",
      "bc1qsm9stprpj0f2wugft76usyknjwz6x0t9skttp864clfj5ea49mkshkctpz",
      "bc1qt4rsuptcqy0rfpnyqd66hu84z3rh2a653jfm7kcyq42dtjqs5eqqd7sth6",
      "bc1qtj8jff2pyjgdhlaxvcux25mzx0kted7y7arhmda7hwzty45fatqsatm4mv",
      "3R2AHeAdtsr7cmDdsD9TCSzRA9uruQf5Si",
      "bc1q5r6svlv9dcrrvn6jrpsw7e95efk0tcurnlflyg5wwrcatnm87jms0g4sfj",
      "bc1qu9pfft03wmfj3hc468zku7jju7sve0fuwtk87w2c6kh6cmzkkwasyzva4f",
      "bc1qvyg8ftctqqszvnd8kzr8x9zy6g58x4gha5q286df76p8fheq746qqv5udv",
      "bc1qg7ah54n9m7g43hf3kda74gj4nx5jvmypgc3lwx3qdf7pmd250trq7v6zsy",
      "bc1qrlz2smvvw6wh796z5rqts09mh2vuw7qzyhkmf4txqas3z3xhg7uq7r9jqa",
      "bc1qu6fcjugaq8nkxnpkxnt0w6l08f4ptkuhthfl2wejp6atfslg6a2sma7tvh",
      "bc1qvll04lemznae7qwdc5h2l66nmgla9y62rddmz7sna5vletejx2ts5x9v6q",
      "bc1qjsd8g23fvjeqejel295nteszpmwrfudwwdcp5tpcwzanseed0dlsxxcuqv",
      "bc1qswexuuxeav7nps2xgtpraka85xd32yt6ffguv8kfn9dge9eewnjsddu268",
      "bc1q36xemg4j7zr7s8gcqtev4x05lxyrmngqpp0pgcja4pd6vcswy6hqdrgxjg",
      "bc1q68j3fvunhumc990f9zesz9j853mgp0dq7hq7v4myjsrqmemc5l8qyh4z8y",
      "3JuPfeK7N4hTgXp3ULx6a4zr5fFwoBmdFU",
      "bc1qgvc6wewukj2ncav8zu9pru3hyn5e2tc8tc5pq3zz3jwrp0r9e5csfyzd6j",
      "bc1qjjksugl9m577hqkx5024y4n7he3qyeq0v322m5qyflmt3thpkycsqupa7r",
      "bc1qnudsthrkaxcf84grje6hqqr2ep2la3vn25pszq0j02pvy07kxmhs4fwu68",
      "bc1qqq22y6fk63htdk9l69ftelmgnamkf29mts68ax9w7wmn9awr7drqrda8zq",
      "bc1q64q05wy4djkl6ua3rn02j3q8fuw8ja6hd3zhts0le227frcw3d0ql3cjjj",
      "bc1qfw27hzd3wlmyg6lycc7k9rnmtpvnmayxuhk9u8a3al90k2m4ujaqkzqhtv",
      "bc1qvdfl8e6ydhyylzwhat28vaq28rrf8y0f978830qhmp8vxnq26cdqaw36nk",
      "bc1quk67hcwup6rv232jzu6esdkupvd72yy8mfnuw9x98qvk0443rm0q6y8hyc",
      "bc1qpxk2k8jjptrsymt9jk2v3tg3al73q4g55p3kvre6dssca25rjrespsnqht",
      "bc1qgwjxuu06p2tpx9c39a3q96gy3jq0sl5fwe628d3pck4uen8657cqv0xjk3",
      "bc1q25nnk9ymgz2wdch2cp0dv552u9fper6eghwewugl520dsw25ntaqk829ds",
      "bc1qpwdg9zxjdpvnk22pyf3pw9skq6zr4lm8eghwrgpfh98h9qvht50ssp5psa",
      "bc1q6v6u0n2050rgvj6hg8wzesekf3hra3rnk22q2wcefmt548pzs6es4xe377",
      "bc1q8eh667mvm7hqtah6wmm267aypnqd8wjy86633fh4rankzssks9ysxqlkp2",
      "bc1qlxga5tkwwsyf87sfsc3f00t9832y7fqatpk0lae3ulvqs7p50anqxuc0hd",
      "bc1ql2cf6x0y4qrzj66h6q96dcypuqnj3wuhgwv6zd9tc868lfncxqhqzwqx5g",
      "bc1qn307vllfyzpu7tc0wcg83r2c4qwvhjrlggzthmav33uke2r2uhqsjdyfkk",
      "bc1q7k8jka4k50c3ku5kck544dyv7anuzrw6kltz8655f9wdmtffl5yq78gj28",
      "bc1q9x3u7ejm8nzgd6f4rf08p3acpwnl67zg2mre9982lcmwe396s7fs07xcp8",
      "bc1qamlk7aexpmgfjhl2lc68vgr03u6pkpwxx95ueqrhlfrgmm45qe3sheqgu8",
      "bc1qw5tg0p4eml8yz7rn3aq9x6xxs24dns2m7v03yaf4hwvwy6rca3cq8cjf4z",
      "bc1q5qrqs8w99c8sv2x9d0fnzr6fedglulj4q9u5xpfkgf9uuj0g4x4stre65x",
      "bc1q92sr30tvtppn98a2q94mgfw2h7l9n6eff4tdlz3v6pp8lw58ersqp73eup",
      "bc1q5rk3m5afaxm08q4mdd9cr79mxrue884vkjfpx98fd604j59xvxzqqz9n0v",
      "bc1qtjxe4cqycprjvypl7cutnwhw5pccrlyctylg7mlkmynzh7fmfncsugvafp",
      "bc1q2jfkjf2as7rzgu96ph6uqj8kmzky9t5mzv97ajldjmjwyyd5xlnqe8j03j",
      "bc1qty828us6hwk27akswk2jqlqsmtjcpmnl5ydj54dyus2s4aagyqyq8qhl0j",
      "bc1q0sjx50elp20dxv9xwz0cxzg0lz9nsuauh3ftkrwym7ykznmrzgzq86t0he",
      "bc1qj7v4zyg2s3eqg4tw7rf9ll4hlyegecvfxj688u29hdnqsa8gx5esw93ham",
      "3MiAhu93R5PNLbsSDDa8Mx9bzJ1p5h8mJV",
      "bc1q24pz8s3xved68yfjkn7pwqqg06326hnq6wuuf70chgz96nrgq55s2hf4l4",
      "bc1q9h576pc36efmgg9rukzgjtpt8v5gnvnkqlpzfds22ge06d94fylqn38h2m",
      "bc1qq3skjfz04m5uugkt6upm3826aw9epgdx9a53026zjg0f5pt6nrdqxx5sxv",
      "bc1qzyqngswkj5k3fkdmqp3d2rckhtng6sjnhwc4ke6xfw90q09606usp94r2e",
      "bc1q4smhz9urpkm38zar0x9adtl0ry44xrd4hnl3rgwsuvw5q3j6lras7u44tv",
      "bc1qzteedl90xqhn5df7dpjx849ryu6k0j8fr5kxrqh827zkw93e9c0qpx56em",
      "bc1qxa786w23cmwz7j3rdd80efyu2v6j0j9ts9g98chv3t6afhxvne5qdutqts",
      "bc1qey328570qay9rsh8tyldmpur4e0vgcxvlyrdnuptw062dv5jh7rq8pxzdd",
      "bc1qgxcntq072tt35mgm56fznlxuk8dcv805j5erjakl2j2tgl78djnqjx8ffd",
      "bc1qx4gamh6xe889jahz34rasp8adqtutajec4vs3xgdy23jex6y4e3sm6a9dk",
      "3L5TXDJvpn8ZuVMxRNqsxXod68eLgnQcJv",
      "bc1qglr465a0qqurhq2h5ywv0dm2u85lgz2jhx9wy8qxr09hzcfthkgqtn8f6n",
      "bc1qhvzp3vkq6nduu9xnkrn594fsh5r7f9xy6kz8fckenuuumpqz7twsww9kdt",
      "bc1qvd8p4dlk0lpl3e5hdf9np9hjemwhnqqky4u4kjwh75trjgs6z56qt5w8uq",
      "bc1qmh369aeu3sydpsyrpcmj27tz99zdr2m5rwx9gpgyn2nck0ltyepqe3tyhv",
      "bc1qfhhxvffnf7xg4ljgqf7dzw9585mp7qdfg0jw5a55yxnmmh58xudszeltff",
      "36NSBe6tr6rAYnKrj5tHnTGNLUdJ7wFd7q",
      "bc1q6qf896wlull9zd4vzhtwj2ezdey6j6nclrx4g3ss7s8dumxrhutqduezef",
      "bc1qjmh40jm2uuzg7t340th7a4psawdh0yn9e33lg9zsnt9w2hzrztcqak3dhq",
      "bc1qudsy5xpf473t7gufua8pv9vjzmtk657eead24lsmkagetyvmpa5q6la3g0",
      "bc1qj3fkyxu3uchcf3mcat60rwru8nyejmqrz4jd6nlxjxccr7rs2l8sm7x3sp",
      "bc1qhsgl73x4exf9xxvq9ssdw5vcqvng73keawjdsdnpj0txsenxuezqzul3ju",
      "bc1q7rmd9pjnackkdzml99rux93hck0jwtn8974tt04fh6wmquat0gys8ph7fq",
      "bc1q4y53pluuegyjwxahjeyt6sgj8w64ajwzzmc7waftn7fvg0q89qmsgpqe65",
      "bc1q363axxlu7n5nr7ppmkzws304fvd043g9dv73dchern9gv2qetzuqmu0sgq",
      "bc1q0m8y3s9xye5tzm6l0pkyhw5dm0quekehshxp6lyjhe0622u92qpqdknhzs",
      "bc1q8pu37vmcz745ssf0cc902j7ff0npkyt4ud2r9jnptvv57wq2ta8qpxnku2",
      "bc1qsqvppheug2f09we2exaccu4t68630nl23kj45v2e432rss36xp6sv76jn7",
      "3FPR61t9Xg9onKRjEzY3WjiB62Ss8rDuPG",
      "bc1q6sa2f4u8yx50hhrflsl00h5w3rzujull5a8phf0he5aeq3sp4jds9xrecr",
      "bc1qmulsa5cl9fg4e4utafz0jjagzhzwzcazxmcf307fleuhhmytf45szdhrm4",
      "bc1qrw2fgsxrwfumtlerg0gw9fejqsycwnvtrvmyeuxnzyz2zz0l90rqz0z28n",
      "bc1qd4ldj3vxv3cy9efxnprh7xxh5jsdzvzfgah8gkpcphpg58rcxnxs2gxtdx",
      "bc1q0um5gc4h4ne3qlhtqcsvaqv59sa7juvf2tscdru2ff7lv90mv8hqyxjzdd",
      "bc1qufvtm8wwjqppqhp8jetw9slssp345tgkjwq0wta20gj5q0lalmvsxa39aw",
      "bc1qam9r0jd0qdxp2003t4g8e508ezjhpzj00r6d2ufjjsqzdcf3trjqzx3uyx",
      "bc1qjwmkz8yd8w706qp9naa9qs7gdycgt65l7ff97u2g3jhcae5jrsdsdfnxyc",
      "bc1q9keeaul4ymdqx8pjcn8ut2kws2rfdn4leg66d739usn3jpcm7n4qmp6jw8",
    ],
  },
  ripple: {
    owners: [
      "rnuDDzvYWTPqXTDVvwE9oLGLgxzV7Rpnpe",
      "rafKN5p8iQsRP13LZXXoV8SCw2b9ugvjy1",
      "rGNCoeUNqBzQnEiK2X7EYDzSpJ7PtKQSBb",
      "rEXmdJZRfjXN3XGVdz99dGSZpQyJqUeirE",
      "r3rVXDv8HDUBcrckfda9YsnBkX2E62WLyK",
      "rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv",
      "rp8Ygdyi2u7DZuMbchpFKBpsgSeg4LXDFQ",
      "r3KfqsuMjp85ddhNN2xNAAbmrNKUgFbcpk",
      "rG2bzZ2Q9JcpPeCyqXTQts6jHSYsX21G6a",
      "rnTdkgZXF9AsEV8crG8KtngiD4nDC8Dkc2",
      "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
      "rHHrmqpzuDSkpcRK2PFm7P5Mo5zf927ina",
    ],
  },
  solana: {
    owners: [
      'DTNnXBh7JcKTzfWbqcuNYaYBQXS2fWWoXEdJ5iyNwvFX',
      'ETZY5TjMKdV2KdHVmUNTN56pWhMc8TyjrXtQ7YexDCmG',
      'i57ExrKB2i4mSgjSuq2xz617mQXmu33WG2WEYypmdvX',
      'HBxZShcE86UMmF93KUM8eWJKqeEXi5cqWCLYLMMhqMYm',
      'E1EfU3iKUS16mB2vdgj6mi3ssV32dm2Pxh7W74XxKuYu',
    ],
  },
  avax: {
    owners: [
      '0xa3fb85c3a2c50d8c0e1dd7fa7746f97c9e1d9591',
      '0xc0ac2f4a3cf22fd504d8835b07f5acccfa9b27f9',
      '0x162af7b6e0303bbddc5044b8bece12012fbcbe20',
      '0x1f69d824c3b4f906ac3fc8826e2391bcb9330e02',
      '0x3f3e23249f38d35a4cdaf44edfd99eeb4325b401'
    ],
  },
  cardano: {
    owners: [
      "addr1q9w7x0secwr3uz397nl3zw4wc7w9su22rlc7v54p5q425xjauvlpnsu8rc9zta8lzya2a3uutpc558l3uef2rgp24gdqhcgfgs",
      "addr1q9frvl4a0wgmk4e28gu4asyqrd6ezd3wn3e2wdq4h3hn73zjxelt67u3hdtj5w3etmqgqxm4jymza8rj5u6pt0r08azq3pf2u9",
      "addr1qysvm626pgxcwgy2w7fk2ulmw0mc6v3twzes3arns64hk5eqeh545zsdsusg5aunv4elkulh35ezku9npr688p4t0dfsw7ur3u",
    ],
  },
  near: {
    owners: [
      "992e069ce45717059abba021058759968fb0f61f048c09ac95b7a68a70b65ab1",
      "7206287337fd1c74c3df9a04cecd8471a0ba8de3eb63bba3a1e49778f8538899",
      "0df4207b35f21783f743f10b82dac228c9f11339aa1bc359f568b52efb6c46df",
      "5362a3510eaf41f139d760ec375a425b95d4f86fe596f8d5e29351481a0a4941",
      "452b94b0072819f60c0d757f6927155f12d6376409b0e6eac42d04946cd4c6eb",
    ],
  },
  /*
  stellar: {
    owners: [
      'GCMDM2J4UH3CY5CUVNAKN3ALJ6VW7QVOV5WYBNC6XSJ4JCFTYPRLWG4C',
      'GB4274MD64QUXIZK35W5T6CHJBR6HDFELUFWSOCVWZPGD6OR33KTDZV2',
      'GB26QFVS5MMZLAY6ZOQJINFEYMYFWCL3P4EBIM7VRZOLBMZMBBD3BD4S',
      'GBR3K7R7WWMRIH32LSC2KWRUPY7OJIYXGQBPL2IRRYTECBI6CCPRVMDM',
      'GCC7ASAR7YFLV5SRIVAHMSBUWHSFJ6UEI2IN6YDUSNS7OCMQ4OZRBE3Q',
      'GB2ABH667FCKODV2YDXOLBLUUB7PDVJS65Q3MRG5YTCNQYKQNWWJQLI6',
      'GDNLCQTHJLNEUHD7OFS2SRK4VZUAAUBHNZSHY5LO3VWPVGVMCDFWAI7I',
      'GA3NTBDIKQVDDM6ZDKJLGXJFESWJ636AGRIW34RH5WL24LUMX3YASKX2',
      'GAWTWG5FZBWAZ6UZB2N7CNHB3ZWSPTVGU6SOQPN5N2TZQ5LDSJIPFEBK',
      'GDFHYZ7VDCVWKSMYAQH5XUO6CQQFFD5PQD6BEPVARNGNK5WLCNSECNFG'
    ],
  },
  */
  algorand: {
    owners: [
      'QLMX7FEKGZIKACSIH7FIFV3BNHXP77YZ5PTLTN5TKWWXBKL6HD6MO44FFQ',
      '6ITEMKNE36NXKWWDL3WBYDHK3T77UY3QDCMBYBC5QMGVDFWEP626JX6CXY',
      'HTXFD4TB53EW35PF2S44DSE7PM77CKJ3QB3RRCR2FUOL4TTY6VYVUYWZGA',
      'IBFD3A43F3A63OCMV766BWQ3XHOXPJD5A67TPCTDG33FV6CVAGQ2AV6JMM',
      'VTPBTLUKFHKAZPXB2F43G3WXXD6I7URQS74BFYOUPD5GAQTWJY4UIOCXWI',
      '6LNHIKUNADNB3SWPBSEJWDYLI2LPU5MQIV3Q4CF6FUPSIGURGG2JG6LRWI',
      'M7DNNAMT74T56D5BXJZ74IGD3TMZTIWQPIH4ZXTSILDOX7KXHOSX7LVYRY',
      'OINGC6GTRT5PWHZLKXHCZIKDE5K7WGURBHGHWT334RD3IRZDYCQPBJZ4YA',
      'IZV3NPANUZNG4FINAZZY6FF2QX6RVNG2ES7H5GYW5XQMYCLB4GBNZ6JTAA',
      'U5HSJ2K5RTWM5GUGPKZJP7S7KLT7ZJO5TEC2DEMYYFVQA6FHZ4LV72PO3U',
      '3SMUH6GNY5WN677EM7WQZQU4T7V74WGPQOZXZJVNWYQXU4VJWJQSFOLRFY',
      'QHY5JVMIM6Z4F2P2W5FWLWHQTPPDTJXIEG4LDHZU6SRAJ7JN3HAMY5OX3I',
      '6F3LATDIIVENDETF656572KILJAJ436F7JKWKQJEZAMQ6M4AEDFYNDGHFQ',
      'SGZUETZ7URTHFAYQDBP2ULJE6TQP5EVH3VCA27XPAI3LC7VH5HPHI4LFPE',
      'T42RUEO2MI4ORTX7733QECAYQ7ADS555J32NKHANHON5VIXBTRN4SOTAQQ'
    ],
  },
  sui: {
    owners: [
      '0x5e74a105e60dcd2518706123953169ce7e0a000228c059d819c399f8e5d3dc18',
      '0x5d9e6694ce659e907e10570c9fe7e71bc6eb5c99b6bdbd988c01575336ffa926',
      '0xf52c6bef1b471531d3ef807811cfd28dee8f6ea97c7f9807d66caf81a82eacf2',
    ],
  },
  litecoin: {
    owners: [
      'MCCdPVEndTqpfNaUGQKoGqjYhnbnL4GsQR',
      'MVuBroau9tv99iUgLYp1sYbiPWtaZVBVwj',
      'MBTYopzaj3Pj5stq3XHLVvnWgiiTmNxrPf',
      'MGgwJ89huWE9zWahG8BW15TnM9AiME3mUo',
      'MNmoU5hxCbtXnNNo2nzcMsJZsBozfjt4F6',
      'MW5LnTpBEsAaT2TTyizzrwu9TVeKQXV9sR',
      'MHrmoW9rYSfvhaUgchoLEs1bjFzQ7NYwAf',
      'MQk45oaSMWsVmHBqoR1nZf5QukYcVmicWG',
      'MKY3d5NRvPE1mt9UmncQdS3DHGJpi3eTLc',
      'MFzqtyZRyw3zArZNUqAmEoRepZZ3UZiQFR',
      'MLyNpaG81sbYKz9Q8eVPioMCAsbEx8tjSS',
      'MTkDRqPnFzciriAWKxkPAYokGQpNbSaZMk',
      'MB7razLmn9RP1QkAyp5fhKYRXQXDoMfou8',
      'MJdcFiZPi6odqB3ixfHzFArgDKYkk72n26',
      'MCushifeh4zqaMi9dACwk9HGGFWQR7GM6Q',
      'MFdvNPxZGxSvVTQ9YTLCFhYPDVdqZzbM6W',
      'MW3CL1cGohXpd12qbvmNgQCqkQQiefuHHB',
      'MPNgSTzW5pmmnkr15RD6tXjWKaBq7kFi6t',
      'ML8aaX5RCGoMoJhC6EDiJBoe4eUAdidbK2',
      'MARwVoM1Nw62map35HMQRZGEZRC5CVCr4p',
      'MKtrjJwaU6rRm6y4w84gmYUTpuHcqw3B71',
      'MCWWG5pAQT31UQHLAhReeczFoQSCnzYkGt',
      'M83TvqQ8nWWdKTq6BdJ9gwJ9RqtqKESmJV',
      'MChEk9B4oDoGRPEHtye9aD9yjginJdT8G2',
      'MQrpVnx26vEAa3Mg2MQYwGdgFz4wSLFEiK',
      'MLv3eAWkkJqD9BBu1anvwm7hDf5hcvXvAS',
      'MStyLttcvux71LzoSnzBrr6bBEesYXoJME',
      'MJ4boTwV4d3iZWjuALZQJAYZRCfLUZmyiQ',
      'MUoeTyvGbxSyBLhuM5igjNV1pNtajZd7N5',
      'MNHyBmCs8BFAnMaampeB9GYycWC93wPsp6',
      'MQspNzustkQpanzvDob8PSR1CpnL714q2Q',
      'MKFmcjUWauE4oKg7C8YVySYf4VRQB8NZm1',
      'MCT8RZ6GmtYY7S9Sp9GWpV2y4wSwKDT7q8',
      'MBvoh2jBPrhcxdxeW17AvGixDjxnmDX96D',
      'MRR6a9n56yiABMRt9M14mE3SRm2gfkWBoi',
      'MQopYayjCVJRz23zJv9cD4pc35sdamDiez',
      'MP4zbwY1BPkdWG818do8B1kHc2976kwbW7',
      'MSMRRic2iPbGNuLZpfpSYjRVRdmn7m9H9u',
      'MRDW39X8mAbp7NXubpgbTGDrAn6dBNpnaS',
      'MS74cGiGME4Ghvr5REnCPo7KyqF13CQgUp',
      'MHnChtxbzCEdbmxVr897KjdEto8FsUDTaJ',
      'ME3cFeGyAWY6JqNAquEPNwxTpFNaMEzCom',
      'MECQWviAf7D9yZLRFC1XxeV2YLsVmsZGDA',
      'MMGW9R7wGdgi542yxn7drHcrwGzbPip7YB',
      'MR4o5A1GNwp16kepviArDAhBStowX3HWpB',
      'MQN8VMFxUSSNptJQd11xWJKora4TzcUWTX',
      'MSEacqJaABy84jEZU1tCARjNUyPkYYXyF4',
      'MAXXLxninTeh1wYQ6nVwY5kDKxuadVpPkQ',
      'MTdkASZFEHut7wAevUrDkK4ExCS5xccskg',
      'MBa5bozs9mGuqSpTmCxvjEcTRFpqVxfwxJ',
      'MTzJnrDEGvbPx76DAbRsMFf381e4D4JtvY',
      'MNxMb9gYu49k58Uhj3HeUBq8VQLic73SAv',
      'MHSFnosEGtAiu1AGyzSSVGSNAZaGHccNtS',
      'MBiApf5uVdj8kf6T8BEaYupXrReeZkxyj7',
      'MQksdQkafz3xhi5M7TpEEod73rCxoDdd6j',
      'MMAihs8bxAZPrXqc1wH23zFm3QFBoLqjCN',
      'ML6wKWcZrTz8JW49one627CoyuAutae29B',
      'MLSkwqjRxJsqYQsz23JTmDsPVG6L4g8YXq',
      'MKmvDX9rHPeqDsstgVYkaqXA3FkBJKX1NP',
      'MRJkrVxQy7CmwLSuXSxEUJV2RmdpdK31Sg',
      'MQsUPLNiiENZ7rW7L4bmvfchV4V4yuTBiH',
      'MUZjr75r5LDNUQ5Kxib8pxM4mx6j83AVAr',
      'MKZKMr49AnAjfFTaU2PtniYtCxk9oWEMko',
      'MCn7NaXw4oiUtQTDywUZB8SHvG6aj3U86m',
      'MHyyn6QcHzTBaVsUAymKAQkr7Tj4qnEjzN',
      'MADJo5apdb39a8uENhspT9osr7Qc6dwBWd',
      'MM7j9WiEP8VnV8Bs2sh5svrr5Da633FzEe',
      'MLK71sPBJzt2gXggAQpWpZ177zDiSbnyaa',
      'MV3176sptKx4W1pPJAz3Ty22J4j5JYCBjV',
      'MK78ACpK6CYRBudZbMhjs3XLPVrTRqXEwf',
      'MC9Jtp9bLL6YRh42obVTqzavvigHgK97Bm',
      'MWkZD4BuH9YTkKqidjFVKgEWEiRrcPnjnU',
      'MJ844ockZqTR6hiFV9tJaLy1wNnYt5F1aV',
      'MU9KDuz1B38tsGiRzC5hW5zWCazQPRSfza',
      'MS1tfawWKcXjG3k715ixy5Euf8aNjrUfPH',
      'MRJGL6M9quKsmwmkpK9r7QzSSXLnKDg3Cy',
      'MF3kCFYtnBUDoZRekSYQsytG6huxDPncR6',
      'MQDMjpZqc2qiAXnquT2E4cg4e81Kjrpiir',
      'MBg8quT4yw6jDMS4f9sXM4V8UU1gM6YBEX',
      'MGkumZM7EhMvaaNgZrMArJTJrftfVeeMZ5',
      'MNHiuHydXpWgxk8nZELRoZCE1vB2SWzJZH',
      'MArcGPBHNYjY5gGUdSz4k9LQoC23AKaBJ9',
      'MFJw1K2XDz5jmqNdEAsjFFEgVGyf1rG7sg',
      'M9hF4w47naAvTRhrxzAJAqRu5LncUrBXjP',
      'MGUCCLzphy71PK9XpvVeP9V9F8QRYnrQ67',
      'M8BoMtMbPdstujGHFXnbBVwDKY3P1qp36r',
      'MJt5SFbtYx3TRANdP1anA8Cq9GwYBp67sf',
      'MDK6bRjna44CTToSxUokYCE6bhLUTba5K7',
      'MTC8jiKhpNBNKS1f8Bx1nuEDUE2pXNeKeo',
      'MGT6XdigiRQSxUaZJDdexHGZiRdfs5kTwc',
      'MVAbWRSN7JWwK4nZ2TJk3acF8vprCMvEMH',
      'MLquwFoWqQY7BDvMMyrBbDawX7PXFmkZPQ',
      'MSULJbAKZwDCxFDAnKZSQGWnExtkQrB9Fo',
      'M816JPe3XbujpUQe4E24XGKq6m1Azviooy',
      'MNU3N26EWgP7AnwUj3owtmQK6VcnZcvBVm',
      'MHFAu1pPv2pDoxZGgXLVGXJByiQYKBaPHq',
      'MNzHV8vgBKDvJD9Cd5i35f1zMjtzLqoNv7',
      'MBtAcFuHWDhTkNWf4X28DtxRHc7x3xSedQ',
      'MJLZKsvpFp8c9LNk6ZCMApo3C5fq27c7Du',
      'MHnWzMcfqR8twkaLqxGYd5KRxMTCjq8rTT',
      'MJpU1cEFUYgD9tyUydwRX1U6vij5hYxFr4',
      'MDDMKZgiyCZLKHZPidW67c25UCQk8d1Qbq',
      'MV5UhTa4wvy9iuExNGJeeVu6f3C64xoGoc',
      'MHkMRkmrrYx1cprn62YFC9LcpidmPPjJdd',
      'MAgUB1Np8VnePm4wAfN3PF1nshoJiTqyrs',
      'MSFNPnkS7hM1yqF5U25rDhwdXWKrBBiwbL',
      'MR9wCB9rAeZsTesxURVsvubYA3WnBqK6Kv',
      'MQTwvMkCf1fkb6gayogUbtfLhCdAnb3aHL',
      'MADgny8erjzWxeU9xQB95wY9emxGFYNNMf',
      'MUcR16vjth9qqkHYDqfRFneuffk4mrFEP1',
      'MBG7pCv3eqKDUK7u1qaFZJRZ9CaK2Fwm2f',
      'MVNjiy399cNaHhEdBk5oqmn2RQj4XZ7M5h',
      'MGLfAxFnSpdFsqijPhrRFTyqxVgj1h21C1',
      'MQ8yAwgH8Kfruh3uF8EGg1GE2tGA4mHdPL',
      'MSHbNAAz84j1NXbuuUpBAhG9k5gpXPbjsB',
      'MLf7WwukRFsAYVhEtbxkEpQhHewoXaKEym',
      'MNWkx5CWqd83HR4MWVfeEuUNYk4ZgehXVx',
      'MUckCpvUjkAsetKwHpxrVXFq8BmiSYtJ3i',
      'MMGRuY6AbuqCxHvn4PEboVzQxTpfw2LXNb',
      'MDg6Uxukmcou8ZfRdpoXYzhJGJy52cnb1g',
      'MFViYJjMCsmDNzLK2JNzpEJFaUoqU6fxY2',
      'MWciPQLSRYzmzq59jUdwuXwSMh7viCHWSh',
      'MEDZ1jzxpgzxcAMULoWLgeAEUVCNgZoc58',
      'MUsWJrTkQaq88Y7PzxyJgcics35MZUcihq',
      'MJ4ADyMSMHMVvNVvy1y22AeZd19xckcsnP',
      'MH1x7vW7gTCJPV3gBe7EZDJPiMfSdozVDG',
      'MGxv2m7BcfEkoFLRxWMX1DgHQF46FDrRSU',
      'MSiLHBGLjeYBayjF3tSDJhrUxLwuHSF8Tw',
      'MQvDDWc2JF3aKsaMj9XQVi58eRsX5XQUHz',
      'MD64yoKxEcRqvhfFHPZ3TpSWpF2xNaCtxS',
      'MLADqj2Dk5uLkscjRwSoXWBzC73jQ5qaJ1',
      'MEBHGWxZ1YLBbFFTHQcEpah2Ns1uMYx9JH',
      'MAQBFztghZSLuk8xaaWY5yhsM4tZdr8Hus',
      'MTJBX7FWKq9TBXRbqmJz7ib81Ri5xeSvvz',
      'MVU8ekQmE9xNgJSSDwwSuRgTa4wL7rRHFk',
      'MF2JvKQM7F7JSm4cJ1ytKPBoLB3GuqtZS5',
      'MP95gZj56ytfb6K3mPNLmN8NKQgURtgCMK',
      'M9K67PRA41R7HhZW7ox54BjUgEpp6g2avY',
      'MUph6usZJPeE9PAgbnd5XNoGrMXnA3Y12V',
      'MBRgYVvqwzhKFie5NjVkdhL4zbzraAtEpB',
      'MCEXrNou3Ry5i3DsP2YnWRotLmKdsuByqx',
      'MKrHnSYqMnyrD7EXrpYhLXxNoB14KGsnBh',
      'MVgkRx9SUegmfSCVZYuo7CzN6AMjt4m4fz',
      'MQQAQaMqj6Q4SZf5feC9FLgXKDv3cGzUDM',
      'MJN5ak3g2XDCLkHCZAVEhEue9m27LGCsPE',
      'M85TWZuiv4xLZoffdLfQzqDtSdzqR9FLvh',
      'MFz59sSyCNQCLdCuacDk3uL79GgsZf2Stt',
      'MLE5MCwyh6oZ91DWXM2EykFQysZUwcsVj5',
      'MDmMUDZemobFEP1Jj2RmC1tH2a6rA817mj',
      'MPF5NFk2QXYd56XsgCh1QeHkHdRM6ZhyHM',
      'MQr6tpazFhE5W7KypjgFcmmSwn3F3NQCkE'
    ],
  },
};

module.exports = cexExports(config);
