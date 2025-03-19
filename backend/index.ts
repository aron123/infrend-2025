import express from 'express';

const greetings: Record<string, string> = {
    'en': 'Hello',
    'hu': 'Szia'
};

const app = express();

app.use(express.json());

app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/api/greet/:name', (req, res) => {
    // e.g. /api/greet/Béla
    const name = req.params.name;

    // e.g. /api/greet/Béla?lang=en
    const lang = req.query['lang'] as string || 'en';

    if (!Object.keys(greetings).includes(lang)) {
        res.status(404).json({ error: 'Language is not exists.' });
        return;
    }

    res.json({ message: greetings[lang] + ' ' + name });
});

app.post('/api/greet', (req, res) => {
    // request body: { "lang": "it", "greet": "Ciao" }
    const body = req.body;

    if (!body.lang || !body.greet) {
        res.status(400).json({ error: 'Language and greeting must be defined.' });
        return;
    }

    if (Object.keys(greetings).includes(body.lang)) {
        res.status(409).json({ error: 'Language is already exists.' });
        return;
    }

    greetings[body.lang] = body.greet;
    res.send();
});

app.listen(3000, (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Listening on port 3000 ...');
});