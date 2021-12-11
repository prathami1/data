import os
import requests

TMDB_API_KEY = os.environ.get('TMDB_API_KEY', None)

class APIKeyMissingError(Exception):
    pass

if TMDB_API_KEY is None:
    raise APIKeyMissingError(
        "All methods require an API key. See "
        "how to retrieve an authentication token"
    )
session = requests.Session()
session.params = {}
session.params['api_key'] = TMDB_API_KEY

from .tv import data

from __future__ import print_function
from tmdbwrapper import TV

popular = data.popular()

#pseudo code
#for number, show in enumerate(popular['results'], start=1):
#    print("{num}. {name} - {pop}".format(num=number,
#                                         name=show['name'], pop=show['popularity']))
