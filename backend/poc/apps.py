from django.apps import AppConfig
from oct2py import octave


class PocConfig(AppConfig):
    name = 'poc'

    def ready(self):
        octave.addpath('/usr/local/src/poc/')
