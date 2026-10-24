import { ActionLink, ContentDialog } from './Shared'
import { asset } from './design'

export function FounderStory() {
  return (
    <div className="mb-founder-story">
      <img src={asset('gordon-zhang.jpeg')} alt="Gordon Zhang, founder of Meridian Bridge" width="800" height="800" loading="lazy" />
      <p>In 2023, I went to China for what I thought was a routine trip. While I was there, I decided to get a full-body diagnostic checkup, mostly out of curiosity, since care was fast and easy to book. What came back wasn’t routine. The scans found chronic health issues I’d been carrying for years without knowing it, the kind that don’t announce themselves until it’s much harder to do anything about them. That one appointment changed how I take care of myself, permanently.</p>
      <p>It also left me with a strange realization. I’d spent years assuming good healthcare just meant waiting, for a referral, for an opening, for a specialist with a six-month backlog. In China, I walked in and had real answers within days. I couldn’t stop thinking about how many people back home were stuck in that same wait, not because the care wasn’t out there, but because no one had built an easy way to reach it.</p>
      <p>I tried to build that bridge once already, with a partner based in Shenzhen. That partnership didn’t work out. But the idea never let go of me. It brought together too much of what I actually care about: healthcare, my own connection to China, and the simple relief of getting a real answer instead of carrying a question mark around. So I kept going, on my own.</p>
      <p>Meridian Bridge isn’t me trying to convince you that China is the answer. It’s me offering you the same thing that appointment gave me: clarity, through hospitals I’ve personally vetted, from someone who has sat in that scanner himself. If you’re on a wait list with no end in sight, or putting off a checkup because the cost back home doesn’t add up, I want you to have what I got: a real answer and the peace of mind that comes with it.</p>
      <p className="mb-founder-signature">Gordon Zhang, Founder</p>
    </div>
  )
}

export function MeetGordon({ question = false }: { question?: boolean }) {
  return (
    <>
      {question && <p className="mb-meet-question">Who will I be speaking to?</p>}
      <h3>Meet Gordon</h3>
      <ContentDialog title="Gordon, the Founder" label="Read Gordon’s story" icon="e1e40.svg">
        <FounderStory />
        <ActionLink>Book a Free Consultation</ActionLink>
      </ContentDialog>
    </>
  )
}
