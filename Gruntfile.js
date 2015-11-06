module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      'public/theWholeLib.js': [  'public/bower_components/*'],
      'public/theWholeClient.js':['public/client/*.js']
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    uglify: {
      my_target: {
        files: {
          'public/dist/theWholeLib.min.js': 'public/theWholeLib.js',
          'public/dist/theWholeClient.min.js': 'public/theWholeClient.js',
        }
      }
    },

    jshint: {
      files: [
      'server.js',

      ],
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
          'public/lib/**/*.js',
          'public/dist/**/*.js'
        ]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'public',
          src: ['*.css', '!*.min.css'],
          dest: 'public/dist',
          ext: '.min.css'
        }]
      }
    },

    watch: {
      scripts: {
        files: [
          'public/client/**/*.js',
          'public/lib/**/*.js',
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'public/*.css',
        tasks: ['cssmin']
      }
    },
    shell: {
        options: {
            stderr: true
        },
        target: {
            command: 'npm install && bower install'
        }
    },
    gitadd: {
      task: {
        options: {
          verbose: true,
          all: true
        }
      }
    },
    gitcommit: {
      task: {
        options: {
          message: grunt.option('message')
        }
      }
    },
    gitpush: {
      task: {
        options: {
          remote: 'azure'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'mochaTest'
  ]);


  grunt.registerTask('initproject', [
    'shell'
  ]);

  grunt.registerTask('devbuild', [
    'jshint',
    'test',
    'concat',
    'uglify',
    'cssmin',
    'server-dev'
  ]);

  grunt.registerTask('build', [
    'jshint',
    'test',
    'concat',
    'uglify',
    'cssmin',
    'upload'
  ]);

  grunt.registerTask('upload', function(n) {
    if(grunt.option('prod')) {
      // add your production server task here
      grunt.task.run([ 'shell' ]);
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  //var commitMessage = grunt.option('message') || 'Automatic commit';
  grunt.registerTask('deploy', [
    'build'
  ]);


};