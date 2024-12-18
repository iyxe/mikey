import React from "react";

const Terms = () => {
  return (
    <div className="px-4 pb-20">
      <div className="middle mt-10 flex flex-col gap-5">
        {/* top title */}
        <div className="flex select-none flex-col gap-2">
          <div className="text-sm font-semibold tracking-widest text-brandGray opacity-40">
            TOS
          </div>
          <div className="flex flex-col text-4xl font-semibold sm:text-[55px] sm:leading-[68px]">
            <span>{`Terms & Conditions`}</span>
          </div>
          <div className="flex w-full flex-row items-center">
            <div className="h-[1px] w-full bg-muted-foreground/40"></div>
            <div className="mx-2 min-w-max text-sm">{`Last Updated : 04-05-2024`}</div>
            <div className="h-[1px] w-[20px] bg-muted-foreground/40"></div>
          </div>
        </div>
        {/* content stats here */}
        <Container>
          <Paragraph>
            {`By utilizing our services or products, or engaging in any purchase, you are acknowledging your consent to adhere to the stipulations outlined in these Terms of Service. We strongly advise a thorough review of these terms for your understanding.`}
          </Paragraph>
        </Container>
        <Container>
          <SubHeading>Our Commitments</SubHeading>
          <Points>
            {`The delivery will be promptly completed within a timeframe of 1-48 hours, barring any technical complications that may arise on our end`}
          </Points>
          <Points>
            {`We strictly adhere to legal requirements and do not retain any information beyond what is mandated by law.`}
          </Points>
          <Points>
            {`Our services guarantee compliance with legal standards, ensuring that your usage does not entail any risk of bans. We affirm the legality of our offerings, completely free from glitches or hacks.`}
          </Points>
        </Container>
        <Container>
          <SubHeading>Server Boosting</SubHeading>
          <Points>
            {`Boosts labeled as '3 Month' will endure for a duration of 85-91 days, and those labeled as '1 Month' will endure for a duration of 25-31 days.`}
          </Points>
          <Points>
            {`Be sure to disable any anti-raid system and/or bot prior to purchasing boosts, as it may kick the accounts.`}
          </Points>
          <Points>
            {`If the boosting accounts are kicked/banned from a user and/or a bot, no refund/replacement will be issued.`}
          </Points>
          <Points>
            {`We cannot transfer boosts from one server to another.`}
          </Points>
          <Points>
            {`if Discord revokes the nitro from our Discord accounts and/or terminates them, we will not replace the boosts for you as it is out of our control.`}
          </Points>
        </Container>
        <Container>
          <SubHeading>Nitro Tokens</SubHeading>
          <Points>
            {`All tokens are checked for validity prior to restocking and therefore have no warranty for being invalid.`}
          </Points>
          <Points>
            {`While we do check our tokens to confirm there is no captcha on them, we cannot guarantee them as no captcha, no one can.`}
          </Points>
          <Points>
            {`Do not use leaked tools or manually login. These are used for boosting servers with a boost bot and/or boost tool. These are not to be used as a main account, they are not full access.`}
          </Points>
          <Points>
            {`If Discord terms them, no replacements or refunds will be given. This is due to it being completely out of my control. However, we do used aged tokens in which is extremely rare for them to be terminated. Additionally, they have survived multiple term-waves.`}
          </Points>
          <Points>
            {`Tokens labeled '1 Month' will have a duration of 25-31 days.`}
          </Points>
        </Container>

        <Container>
          <SubHeading>Tools & Bots</SubHeading>
          <Points>
            {`If any of our tools and/or bot get patched, we will try our very best to provide an update. In the event that we cannot provide an update, a refund nor replacement will be given.`}
          </Points>
          <Points>
            {`We try our best to keep the sources of our tools and bots secure, but in the event that one gets leaked, no refunds/replacements will be provided.`}
          </Points>
          <Points>
            {`We maintain the authority to conclude a project at our discretion, without offering refunds. The term "lifetime" signifies the duration of service availability as long as our platform is operational.`}
          </Points>
          <Points>
            {`You may not resell your license without explicit permission from our business. Any unauthorized resale of our software or tools will result in immediate license revocation without refund.`}
          </Points>
        </Container>

        <Container>
          <SubHeading>Privacy Policy</SubHeading>
          <Points>
            {`Our business only logs the information required by Sellix.io and Keyauth.win to manage license activation and deactivation. We do not log any other information.`}
          </Points>
        </Container>

        <Container>
          <SubHeading>{`Refund & Replacements Policy`}</SubHeading>
          <Points>
            {`Refunds are exclusively provided in instances where there is an error on our part or if the delivery of the product is not successfully completed.`}
          </Points>
          <Points>
            {`In the event that the order is not fulfilled within the anticipated timeframe, a refund will be offered to the customer.`}
          </Points>
          <Points>
            {`Attempting to reverse a payment after the product has been delivered without contacting us first for assistance will lead to your Discord and/or Sellix account being blacklisted from our shop, meaning you will lose the ability to buy from us ever again. We will also invalidate your purchased product.`}
          </Points>
          <Paragraph>
            {`Disclaimer: This website is in no way affiliated with, authorized, maintained, sponsored or endorsed by Discord Inc. (discord.com) or any of its affiliates or subsidiaries.`}
          </Paragraph>
        </Container>
      </div>
    </div>
  );
};

export default Terms;

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-xl">{children}</div>;
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-base text-muted-foreground/80">{children}</div>;
};

const Points = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ml-5 flex flex-row items-start gap-2">
      <div className="h-2 w-2 min-h-2 min-w-2 max-h-2 max-w-2 rounded-full brand_gradient my-2" />
      <div className="text-base text-muted-foreground">{children}</div>
    </div>
  );
};

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-4xl font-semibold">{children}</div>;
};

const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-2xl font-semibold">{children}</div>;
};
