#### Amazon rekognition

find objects, people, text, scenes in images and videos using ml

facial analysis and facial search to do user verification, people counting

create a database of familiar faces or compare against celebrities

use cases:

- labeling

- content moderation

- text detection

- face detection and analysis

- face search and verification

- celebrity recognition

- pathing

#### Amazon rekognition - content moderation

detect content that is inappropriate, unwanted or offensive (image and videos)

used in social media, broadcast media, advertising and e-commerce situations to create a safer user experience

set a minimum confidence threshold for items that will be flagged

flag sensitive content for manual review in amazon augmented ai (a2i)

help comply with regulations

#### Amazon transcribe

automatically convert speech to text

uses deep learning process called automatic speech recognition (asr) to convert speech to text quickly and accurately

automatically remove personally identifable information (pii) using redaction

supports automatic language identification for multi-lingual audio

use cases:

- transcribe customer service calls

- automate closed captioning and subtitling

- generate metadata for media assets to create a fully searchable archive

#### Amazon polly

turns text into lifelike speech using deep learning

allowing you to create applications that talk

#### Amazon polly - lexicon & ssml

customize the pronunciation of words with pronunciation lexicons

- styleized words: st3ph4ne => stephane

- acronyms: aws => amazon web service

uoload the lexicons and use them in the synthesizespeech operation

generate speech from plain text or from documents marked up with speech synthesis markup language (ssml) - enables more customization

- emphasizing specific words or phrases

- using phonetic pronunciation

- including breathing sounds, whispering

- using the newscaster speaking style

#### Amazon translate

natural and accurate language translation

amazon translate allows you to localize content - such as websites and applications - for international users, and to easily translate large volumes of text efficiently

#### Amazon lex & connect

amazon lex: (same technology that powers alexa)

- automatic speech recognition (asr) to convert speech to text

- natural language understanding to recognize the intent to text, callers

- helps build chatbots, call center bots

amazon connect:

- receive calls, create contact flows, cloud-based virtual contact center

- can integrate with other crm systems or aws

- no upfront payments, 80% cheaper than traditional contact center solutions

#### Amazon comprehend

for natural language processing - nlp

fully managed and serverless service

uses machine learning to find insights and relationships in text

- language of the text

- extracts key phrases, places, people, brands, or events

- understands how positive or negative the text is

- analyzes text using tokenization and parts of speech

- automatically organizes a collection of text files by topic

sample use cases:

- analyze customer interactions (emails) to find what leads to a positive or negative experience

- create and groups articles by topics that comprehend will uncover

#### Amazon comprehend medical

amazon comprehend medical detects and returns useful information in unstructured clinical text:

- physician's notes

- discharge summaries

- test results

- case notes

uses nlp to detect protected health information (phi) - detechphi api

store your documents in amazon s3, analyze real-time data with kinesis data firehose, or use amazon transcribe to transcribe patient narratives into text that can be analyzed by amazon comprehend medical

#### Amazon sagemaker

fully managed service for developers/data scientists to build ml models

typically difficult to do all the processes in one place + provision servers

machine learning process (simplified): predicting your exam score

label historical data, build a ml model, then train and tune

apply model on new data and makes a prediction

#### Amazon forecast

fully managed service that uses ml to deliver highly accurate forecasts

example: predict the future sales of a raincoat

50% more accurate than looking at the data itself

reduce forecasting time from months to hours

use cases: product demand planning, financial planning, resource planning, ...

#### Amazon kendra

fully managed document search service powered by machine learning

extract answers from within a document (text, pdf, html, powerpoint, ms word, faqs, ...)

natural language search capabilities

learn from user interactions/feedback to promote preferred results (incremental learning)

ability to manually fine-tune search results (importance of data, freshness, ...)

#### Amazon personalize

fully managed ml-service to build apps with real-time personalized recommendations

example: personalized product recommendations/re-ranking, customized direct marketing

- example: user bought gardening tools, provide recommendations on the next one to buy

same technology used by amazon.com

integrates into existing websites, applications, sms, email marketing systems, ...

implment in days, not months (dont need to build, train, and deploy ml solutions)

use cases: retail stores, media and entertainment...

#### Amazon textract

automatically extracts text, handwriting, and data from any scanned documents using ai and ml

extract data from forms and tables

read and process any type of document (pdfs, image)

use cases:

- financial services (eg. invoices, financial reports)

- healthcare (eg. medical records, insurance claims)

- public sector (eg. tax forms, id documents, passports)

#### AWS machine learning - summary

rekognition: face detection, labeling, celebrity recognition

transcribe: audio to text

polly: text to audio

translate: translations

lex: build conversational bots

connect: cloud contact center

comprehend: natural language processing

sagemaker: machine learning for every dev and data scientist

forecast: build highly accurate forecasts

kendra: ml-powered search engine

personalize: real-time personalized recommendations


