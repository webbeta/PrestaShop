<?php
/**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

namespace PrestaShop\PrestaShop\Adapter\Webservice\QueryHandler;

use PrestaShop\PrestaShop\Core\Domain\Webservice\Exception\WebserviceKeyNotFoundException;
use PrestaShop\PrestaShop\Core\Domain\Webservice\Query\GetWebserviceKeyForEditing;
use PrestaShop\PrestaShop\Core\Domain\Webservice\QueryHandler\GetWebserviceKeyForEditingHandlerInterface;
use PrestaShop\PrestaShop\Core\Domain\Webservice\QueryResult\EditableWebserviceKey;
use PrestaShop\PrestaShop\Core\Domain\Webservice\ValueObject\WebserviceKeyId;
use WebserviceKey;

/**
 * Handles command that gets webservice key data for editing
 *
 * @internal
 */
final class GetWebserviceKeyForEditingHandler implements GetWebserviceKeyForEditingHandlerInterface
{
    /**
     * {@inheritdoc}
     */
    public function handle(GetWebserviceKeyForEditing $query)
    {
        $webserviceKey = $this->getLegacyWebserviceKeyObject($query->getWebserviceKeyId());

        return new EditableWebserviceKey(
            $query->getWebserviceKeyId(),
            $webserviceKey->key,
            $webserviceKey->description,
            $webserviceKey->active,
            WebserviceKey::getPermissionForAccount($webserviceKey->key),
            $webserviceKey->getAssociatedShops()
        );
    }

    /**
     * @param WebserviceKeyId $webserviceKeyId
     *
     * @return WebserviceKey
     */
    private function getLegacyWebserviceKeyObject(WebserviceKeyId $webserviceKeyId)
    {
        $webserviceKey = new WebserviceKey($webserviceKeyId->getValue());

        if ($webserviceKey->id !== $webserviceKeyId->getValue()) {
            throw new WebserviceKeyNotFoundException(
                sprintf('Webservice key with id "%s" was not found', $webserviceKeyId)
            );
        }

        return $webserviceKey;
    }
}
