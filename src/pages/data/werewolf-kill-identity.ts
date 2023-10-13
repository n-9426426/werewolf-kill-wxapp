import { formatMassage } from "@/util/stringUtils"

const werewolfKillIdentities = [
  /* ---------------------------------- 农民 --------------------------------- */
  {
    name: formatMassage({id: 'data.werewolf-kill.identities.peasant.name'}),
    code: 'peasant',
    identity: 'peasant',
    skill: formatMassage({id: 'data.werewolf-kill.identities.peasant.skill'})
  },
  /* ----------------------------------- 预言家 ---------------------------------- */
  {
    name: formatMassage({id: 'data.werewolf-kill.identities.proohet.name'}),
    code: 'proohet',
    identity: 'god',
    skill: formatMassage({id: 'data.werewolf-kill.identities.proohet.skill'})
  },
  /* ----------------------------------- 女巫 ----------------------------------- */
  {
    name: formatMassage({id: 'data.werewolf-kill.identities.witch.name'}),
    code: 'witch',
    identity: 'god',
    skill: formatMassage({id: 'data.werewolf-kill.identities.witch.skill'})
  },
  {
    name: formatMassage({id: 'data.werewolf-kill.identities.wolf.name'}),
    code: 'wolf',
    identity: 'wolf',
    skill: formatMassage({id: 'data.werewolf-kill.identities.wolf.skill'})
  },
]

export default werewolfKillIdentities