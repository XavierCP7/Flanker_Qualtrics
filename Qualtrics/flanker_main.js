  var repo_site = "https://cdn.jsdelivr.net/gh/XavierCP7/Flanker_Qualtrics/Qualtrics/"  
    
  /* experiment parameters */
  var reps_per_trial_type_p = 1;
  var reps_per_trial_type_t = 1;

  /*set up welcome block*/
  var welcome = {
    type: "html-keyboard-response",
    stimulus: "Flanker"
     
  };



  /*defining stimuli*/
  var test_stimuli_p = [
    {
      stimulus: "img/con1.png",
      data: { stim_type: 'congruent', direction: 'left'}
    },
    {
      stimulus: "img/con2.png",
      data: { stim_type: 'congruent', direction: 'right'}
    },
    {
      stimulus: "img/inc1.png",
      data: { stim_type: 'incongruent', direction: 'right'}
    },
    {
      stimulus: "img/inc2.png",
      data: { stim_type: 'incongruent', direction: 'left'}
    }
  ];
/*defining stimuli*/
  var test_stimuli_t = [
      {
      stimulus: "img/con1.png",
      data: { stim_type: 'congruent', direction: 'left'}
    },
    {
      stimulus: "img/con1.png",
      data: { stim_type: 'congruent', direction: 'left'}
    },
    {
      stimulus: "img/con1.png",
      data: { stim_type: 'congruent', direction: 'left'}
    },
    {
      stimulus: "img/con1.png",
      data: { stim_type: 'congruent', direction: 'left'}
    },
    {
      stimulus: "img/con1.png",
      data: { stim_type: 'congruent', direction: 'left'}
    },
    {
      stimulus: "img/con1.png",
      data: { stim_type: 'congruent', direction: 'left'}
    },
    {
      stimulus: "img/con1.png",
      data: { stim_type: 'congruent', direction: 'left'}
    },
    {
      stimulus: "img/con1.png",
      data: { stim_type: 'congruent', direction: 'left'}
    },
    {
      stimulus: "img/con2.png",
      data: { stim_type: 'congruent', direction: 'right'}
    },
    {
      stimulus: "img/con2.png",
      data: { stim_type: 'congruent', direction: 'right'}
    },
    {
      stimulus: "img/con2.png",
      data: { stim_type: 'congruent', direction: 'right'}
    },
    {
      stimulus: "img/con2.png",
      data: { stim_type: 'congruent', direction: 'right'}
    },
    {
      stimulus: "img/con2.png",
      data: { stim_type: 'congruent', direction: 'right'}
    },
    {
      stimulus: "img/con2.png",
      data: { stim_type: 'congruent', direction: 'right'}
    },
    {
      stimulus: "img/con2.png",
      data: { stim_type: 'congruent', direction: 'right'}
    },
    {
      stimulus: "img/con2.png",
      data: { stim_type: 'congruent', direction: 'right'}
    },
    {
      stimulus: "img/inc1.png",
      data: { stim_type: 'incongruent', direction: 'right'}
    },
     {
      stimulus: "img/inc1.png",
      data: { stim_type: 'incongruent', direction: 'right'}
    },
     {
      stimulus: "img/inc1.png",
      data: { stim_type: 'incongruent', direction: 'right'}
    },
     {
      stimulus: "img/inc1.png",
      data: { stim_type: 'incongruent', direction: 'right'}
    },
    {
      stimulus: "img/inc2.png",
      data: { stim_type: 'incongruent', direction: 'left'}
    },
    {
      stimulus: "img/inc2.png",
      data: { stim_type: 'incongruent', direction: 'left'}
    },
    {
      stimulus: "img/inc2.png",
      data: { stim_type: 'incongruent', direction: 'left'}
    },
    {
      stimulus: "img/inc2.png",
      data: { stim_type: 'incongruent', direction: 'left'}
    },
    {
      stimulus: "img/inc2.png",
      data: { stim_type: 'incongruent', direction: 'left'}
    }
  ];
/*set up instructionsP block*/
  var instructionsP = {
    type: "html-keyboard-response",
    stimulus: "<p>Dans cette tâche, tu verras apparaitre cinq flèches à l’écran. Exactement comme l’exemple que tu viens d’avoir.</p>" +
      "<img src='img/inc1.png'></img>" +
      "<p>Appui sur la flèche gauche de ton clavier si la flèche à l’écran pointe à gauche. (<)</p>" +
      "<p>Appui sur la flèche droite de ton clavier si la flèche à l’écran pointe à droite. (>)</p>" +
      "<p>Lorsque tu es prêt, appui sur n’importe quelle touche de ton clavier pour commencer un essai de pratique.</p>",
    post_trial_gap: 1000
  };
/* defining testP timeline */
var testP = {
    timeline: [{
      type: 'image-keyboard-response',
      choices: [37, 39],
      trial_duration: 1500,
      stimulus: jsPsych.timelineVariable('stimulus'),
      data: jsPsych.timelineVariable('data'),
      on_finish: function (data) {
        var correct = false;
        if (data.direction == 'left' && data.key_press == 37 && data.rt > -1) {
          correct = true;
        } else if (data.direction == 'right' && data.key_press == 39 && data.rt > -1) {
          correct = true;
        }
        data.correct = correct;
      },
      post_trial_gap: function () {
        return Math.floor(Math.random() * 1500) + 500;
      }
    }],
    timeline_variables: test_stimuli_p,
    sample: {
      type: 'fixed-repetitions',
      size: reps_per_trial_type_p
    }
  };

  /*set up instructions1 block*/
  var instructions1 = {
    type: "html-keyboard-response",
    stimulus: "<p>Dans cette tâche, tu verras apparaitre cinq flèches à l’écran. Exactement comme l’exemple que tu viens d’avoir.</p>" +
      "<img src='img/inc1.png'></img>" +
      "<p>Appui sur la flèche gauche de ton clavier si la flèche à l’écran pointe à gauche. (<)</p>" +
      "<p>Appui sur la flèche droite de ton clavier si la flèche à l’écran pointe à droite. (>)</p>" +
      "<p>Appui sur n’importe quelle touche de ton clavier lorsque tu es prêt à commencer le vrai test.</p>",
    post_trial_gap: 1000
  };

  /* defining test1 timeline */
  var test1 = {
    timeline: [{
      type: 'image-keyboard-response',
      choices: [37, 39],
      trial_duration: 1500,
      stimulus: jsPsych.timelineVariable('stimulus'),
      data: jsPsych.timelineVariable('data'),
      on_finish: function (data) {
        var correct = false;
        if (data.direction == 'left' && data.key_press == 37 && data.rt > -1) {
          correct = true;
        } else if (data.direction == 'right' && data.key_press == 39 && data.rt > -1) {
          correct = true;
        }
        data.correct = correct;
      },
      post_trial_gap: function () {
        return Math.floor(Math.random() * 1500) + 500;
      }
    }],
    timeline_variables: test_stimuli_t,
    sample: {
      type: 'fixed-repetitions',
      size: reps_per_trial_type_t
    }
  };

  /*set up instructions2 block*/
  var instructions2 = {
    type: "html-keyboard-response",
    stimulus: "<p>Maintenant, refait la même chose une 2e fois!</p>" +
      "<img src='img/inc1.png'></img>" +
      "<p>Appui sur la flèche gauche de ton clavier si la flèche à l’écran pointe à gauche. (<)</p>" +
      "<p>Appui sur la flèche droite de ton clavier si la flèche à l’écran pointe à droite. (>)</p>" +
      "<p>Appui sur n’importe quelle touche de ton clavier lorsque tu es prêt à commencer.</p>",
    post_trial_gap: 1000
  };

 /* defining test2 timeline */
  var test2 = {
    timeline: [{
      type: 'image-keyboard-response',
      choices: [37, 39],
      trial_duration: 1500,
      stimulus: jsPsych.timelineVariable('stimulus'),
      data: jsPsych.timelineVariable('data'),
      on_finish: function (data) {
        var correct = false;
        if (data.direction == 'left' && data.key_press == 37 && data.rt > -1) {
          correct = true;
        } else if (data.direction == 'right' && data.key_press == 39 && data.rt > -1) {
          correct = true;
        }
        data.correct = correct;
      },
      post_trial_gap: function () {
        return Math.floor(Math.random() * 1500) + 500;
      }
    }],
    timeline_variables: test_stimuli_t,
    sample: {
      type: 'fixed-repetitions',
      size: reps_per_trial_type_t
    }
  };

  /*defining debriefing block*/
  var debrief = {
    type: "html-keyboard-response",
    stimulus: function () {
      var total_trials = jsPsych.data.get().ignore('testP').filter({
        trial_type: 'image-keyboard-response'
      }).count();
      var accuracy = Math.round(jsPsych.data.get().ignore('testP').filter({
        correct: true
      }).count() / total_trials * 100);
      var congruent_rt = Math.round(jsPsych.data.get().ignore('testP').filter({
        correct: true,
        stim_type: 'congruent'
      }).select('rt').mean());
      var incongruent_rt = Math.round(jsPsych.data.get().ignore('testP').filter({
        correct: true,
        stim_type: 'incongruent'
      }).select('rt').mean());
      return "<p>You responded correctly on <strong>" + accuracy + "%</strong> of the trials.</p> " +
        "<p>Your average response time for congruent trials was <strong>" + congruent_rt + "ms</strong>.</p>" +
        "<p>Your average response time for incongruent trials was <strong>" + incongruent_rt + "ms</strong>.</p>" +
        "<p>Press any key to complete the experiment. Thank you!</p>";
    }
  };

  /*set up experiment structure*/
  var timeline = [];
  timeline.push(welcome);
  timeline.push(instructionsP);
  timeline.push(testP);
  timeline.push(instructions1);
  timeline.push(test1);
  timeline.push(instructions2);
  timeline.push(test2);
  timeline.push(debrief);
