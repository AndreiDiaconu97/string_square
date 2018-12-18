# string_square
Exam simulation

git clone XXXXXXXXXXXXXXXXXXXXXXX

npm init -y     (init with default params)

check dependencies in package.json
npm i

check Procfile

check .travis.yml
"
    language: node_js
    node_js:
    - "8"	
    before_script:
    - npm start &
    env:
    global:
        - PORT=3000
"

