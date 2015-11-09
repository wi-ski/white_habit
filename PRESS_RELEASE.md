### Heading

Learn Https - The Fun Way

Sub-Heading

A tool to show developers how HTTPS works and why its awesome!

### Summary

HTTPS is often considered a magical process that is far to complicated/mystical for any sane person to understand.  This application aims
to show that this assumption is simply not true!  Through the lens of simple chat application, HTTPS - The Fun Way gives developers an environment
to tinker and learn 1. What asymmetric/symmetric encryption is. 2. What a digital signature is. 3.What an SSL certificate is 4. How/Why secure communication
over HTTP is a difficult thing to achieve.

### Problem

The problem that this app aims to alleviate is that many technically minded people develop applications that handle sensitive data and simply carry on with
the assumption that HTTPS makes their client-server communication secure without any knowledge of how it works.  This is dangerous because:

1. Developers are expected to understand the technical aspects of a project - including how/why an application is safe to handle sensitive information.
We wouldn't take our car to a mechanic that doesn't know how the engine works. Much in the same way a company wouldn't hire a developer that couldn't prove
the origin of a digital signature.

2. Its a series of simple concepts that, when understood, make a developer orders of magnitude more capable of addressing issues as they arise.
Is my SSL certificate legitimate? How do I prove that it is?  Is this document 'signed' by the right person?  How do I prove that she be?

The above basic issues can spiral out of control little imagination.  However - HTTPS the Fun Way aims to make such issues a thing of the past.  Just chat, tinker, and learn.

### Solution

The solution is a chat application.  In order for a given user to read the contents of the chat, the user must walk through the steps that any given HTTPS handshake would use
to build a secure connection.  Once the 'secure' connection has been established - the user can chat away with themselves/friends in a 'secure' manner.  This process requires the developer
to carry out:

1.  An initial reception of a 'Certificate' - a cuter/less expensive version of an SSL certificate.

2.  Confirming the authenticity of said 'Certificate' through parsing the accompanying digital signature. (Decrypting the SHA1 with a "Certificate Authority's" public key) <- ASYMMETRIC ENCRYPTION

3.  Establishing a less complicated/demanding manner of communication (via symmetric key encryption) using the other user's public key (Provided in the certificate that was signed by the authority as mentioned above) to pass said symmetric key back to the user.

4. Happy chat time - where any user can chat up with another user as long as the session has been established.

### Quote from You

"In our line of work, information is sacred - Make sure the people that are protecting it know what the hell they're doing."

### How to Get Started

Its easy, just open the chat application and follow the instructions!

### Customer Quote

"I was a complete idiot before using HTTPS The Fun Way.  Now I know how HTTPS works and I feel much more comfortable being responsible for my company's secure communications."

### Closing and Call to Action

HTTPS The Fun Way is easy. Just hop on and see what people are talking about!


