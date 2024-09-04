const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Brasho_Kish,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function LEGACY_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Brasho_Kish = Brasho_Kish({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Brasho_Kish.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Brasho_Kish.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Brasho_Kish.ev.on('creds.update', saveCreds)
            Pair_Code_By_Brasho_Kish.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Brasho_Kish.sendMessage(Pair_Code_By_Brasho_Kish.user.id, { text: '' + b64data });

               let LEGACY_MD_TEXT = `
*𝑺𝑬𝑺𝑺𝑰𝑶𝑵 𝑪𝑶𝑵𝑵𝑬𝑪𝑻𝑬𝑫*

||||||||||||||||||||||||||||||||||||||||||||||||||||||

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
*Follow our channel for bot updates*
_https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F_

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
*Follow our chat group for bot updates*
_https://chat.whatsapp.com/CQvUnqaDK4fBjgMXvFEAsI

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
*Subscribe to our YouTube channel *
_https://www.youtube.com/@Beltahtech2024_

❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒
*For help,contact Beltah Tech 254 🇰🇪*
_https://wa.link/0ab2wx_

> *POWERED BY BELTAH HACKING TEAM🎭*`

 await Pair_Code_By_Brasho_Kish.sendMessage(Pair_Code_By_Brasho_Kish.user.id,{text:LEGACY_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Brasho_Kish.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    LEGACY_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Currently Unavailable"});
         }
        }
    }
    return await LEGACY_MD_PAIR_CODE()
});
module.exports = router
