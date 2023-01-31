import natural from 'natural';
const classifier = new natural.BayesClassifier();

classifier.addDocument('turn on the lights', 'lightsOn');
classifier.addDocument('turn off the lights', 'lightsOff');
classifier.addDocument('increase brightness', 'increaseBrightness');
classifier.addDocument('decrease brightness', 'decreaseBrightness');

classifier.train();



export default function command_controller(req, res) {
    const classifiedResult = classifier.getClassifications(req.body.text, true);
    const { label, confidence } = classifiedResult;
    console.log(classifiedResult);
    res.send({ label, confidence});
}
