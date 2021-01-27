FROM mtmiller/octave

RUN pip3 install oct2py Django djangorestframework django-cors-headers

WORKDIR /usr/local/src
