/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MutatingWebhookConfigurationV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#id MutatingWebhookConfigurationV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#metadata MutatingWebhookConfigurationV1#metadata}
  */
  readonly metadata: MutatingWebhookConfigurationV1Metadata;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#webhook MutatingWebhookConfigurationV1#webhook}
  */
  readonly webhook: MutatingWebhookConfigurationV1Webhook[] | cdktf.IResolvable;
}
export interface MutatingWebhookConfigurationV1Metadata {
  /**
  * An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#annotations MutatingWebhookConfigurationV1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#generate_name MutatingWebhookConfigurationV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#labels MutatingWebhookConfigurationV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#name MutatingWebhookConfigurationV1#name}
  */
  readonly name?: string;
}

export function mutatingWebhookConfigurationV1MetadataToTerraform(struct?: MutatingWebhookConfigurationV1MetadataOutputReference | MutatingWebhookConfigurationV1Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function mutatingWebhookConfigurationV1MetadataToHclTerraform(struct?: MutatingWebhookConfigurationV1MetadataOutputReference | MutatingWebhookConfigurationV1Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    generate_name: {
      value: cdktf.stringToHclTerraform(struct!.generateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutatingWebhookConfigurationV1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutatingWebhookConfigurationV1Metadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutatingWebhookConfigurationV1Metadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface MutatingWebhookConfigurationV1WebhookClientConfigService {
  /**
  * `name` is the name of the service. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#name MutatingWebhookConfigurationV1#name}
  */
  readonly name: string;
  /**
  * `namespace` is the namespace of the service. Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#namespace MutatingWebhookConfigurationV1#namespace}
  */
  readonly namespace: string;
  /**
  * `path` is an optional URL path which will be sent in any request to this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#path MutatingWebhookConfigurationV1#path}
  */
  readonly path?: string;
  /**
  * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#port MutatingWebhookConfigurationV1#port}
  */
  readonly port?: number;
}

export function mutatingWebhookConfigurationV1WebhookClientConfigServiceToTerraform(struct?: MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference | MutatingWebhookConfigurationV1WebhookClientConfigService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function mutatingWebhookConfigurationV1WebhookClientConfigServiceToHclTerraform(struct?: MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference | MutatingWebhookConfigurationV1WebhookClientConfigService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutatingWebhookConfigurationV1WebhookClientConfigService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutatingWebhookConfigurationV1WebhookClientConfigService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._path = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._path = value.path;
      this._port = value.port;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface MutatingWebhookConfigurationV1WebhookClientConfig {
  /**
  * `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#ca_bundle MutatingWebhookConfigurationV1#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.
  * 
  * The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.
  * 
  * Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.
  * 
  * The scheme must be "https"; the URL must begin with "https://".
  * 
  * A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.
  * 
  * Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#url MutatingWebhookConfigurationV1#url}
  */
  readonly url?: string;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#service MutatingWebhookConfigurationV1#service}
  */
  readonly service?: MutatingWebhookConfigurationV1WebhookClientConfigService;
}

export function mutatingWebhookConfigurationV1WebhookClientConfigToTerraform(struct?: MutatingWebhookConfigurationV1WebhookClientConfigOutputReference | MutatingWebhookConfigurationV1WebhookClientConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    url: cdktf.stringToTerraform(struct!.url),
    service: mutatingWebhookConfigurationV1WebhookClientConfigServiceToTerraform(struct!.service),
  }
}


export function mutatingWebhookConfigurationV1WebhookClientConfigToHclTerraform(struct?: MutatingWebhookConfigurationV1WebhookClientConfigOutputReference | MutatingWebhookConfigurationV1WebhookClientConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_bundle: {
      value: cdktf.stringToHclTerraform(struct!.caBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: mutatingWebhookConfigurationV1WebhookClientConfigServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "MutatingWebhookConfigurationV1WebhookClientConfigServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutatingWebhookConfigurationV1WebhookClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutatingWebhookConfigurationV1WebhookClientConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.caBundle = this._caBundle;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutatingWebhookConfigurationV1WebhookClientConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caBundle = undefined;
      this._url = undefined;
      this._service.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caBundle = value.caBundle;
      this._url = value.url;
      this._service.internalValue = value.service;
    }
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // service - computed: false, optional: true, required: false
  private _service = new MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: MutatingWebhookConfigurationV1WebhookClientConfigService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}
export interface MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#key MutatingWebhookConfigurationV1#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#operator MutatingWebhookConfigurationV1#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#values MutatingWebhookConfigurationV1#values}
  */
  readonly values?: string[];
}

export function mutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsToTerraform(struct?: MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function mutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsToHclTerraform(struct?: MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference {
    return new MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MutatingWebhookConfigurationV1WebhookNamespaceSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#match_labels MutatingWebhookConfigurationV1#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#match_expressions MutatingWebhookConfigurationV1#match_expressions}
  */
  readonly matchExpressions?: MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function mutatingWebhookConfigurationV1WebhookNamespaceSelectorToTerraform(struct?: MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference | MutatingWebhookConfigurationV1WebhookNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(mutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function mutatingWebhookConfigurationV1WebhookNamespaceSelectorToHclTerraform(struct?: MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference | MutatingWebhookConfigurationV1WebhookNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(mutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutatingWebhookConfigurationV1WebhookNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutatingWebhookConfigurationV1WebhookNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#key MutatingWebhookConfigurationV1#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#operator MutatingWebhookConfigurationV1#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#values MutatingWebhookConfigurationV1#values}
  */
  readonly values?: string[];
}

export function mutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsToTerraform(struct?: MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function mutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsToHclTerraform(struct?: MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference {
    return new MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MutatingWebhookConfigurationV1WebhookObjectSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#match_labels MutatingWebhookConfigurationV1#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#match_expressions MutatingWebhookConfigurationV1#match_expressions}
  */
  readonly matchExpressions?: MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function mutatingWebhookConfigurationV1WebhookObjectSelectorToTerraform(struct?: MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference | MutatingWebhookConfigurationV1WebhookObjectSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(mutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function mutatingWebhookConfigurationV1WebhookObjectSelectorToHclTerraform(struct?: MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference | MutatingWebhookConfigurationV1WebhookObjectSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(mutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutatingWebhookConfigurationV1WebhookObjectSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutatingWebhookConfigurationV1WebhookObjectSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface MutatingWebhookConfigurationV1WebhookRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#api_groups MutatingWebhookConfigurationV1#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#api_versions MutatingWebhookConfigurationV1#api_versions}
  */
  readonly apiVersions: string[];
  /**
  * Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#operations MutatingWebhookConfigurationV1#operations}
  */
  readonly operations: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#resources MutatingWebhookConfigurationV1#resources}
  */
  readonly resources: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#scope MutatingWebhookConfigurationV1#scope}
  */
  readonly scope?: string;
}

export function mutatingWebhookConfigurationV1WebhookRuleToTerraform(struct?: MutatingWebhookConfigurationV1WebhookRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    api_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiVersions),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function mutatingWebhookConfigurationV1WebhookRuleToHclTerraform(struct?: MutatingWebhookConfigurationV1WebhookRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    api_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutatingWebhookConfigurationV1WebhookRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MutatingWebhookConfigurationV1WebhookRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._apiVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersions = this._apiVersions;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutatingWebhookConfigurationV1WebhookRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._apiVersions = undefined;
      this._operations = undefined;
      this._resources = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._apiVersions = value.apiVersions;
      this._operations = value.operations;
      this._resources = value.resources;
      this._scope = value.scope;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // api_versions - computed: false, optional: false, required: true
  private _apiVersions?: string[]; 
  public get apiVersions() {
    return this.getListAttribute('api_versions');
  }
  public set apiVersions(value: string[]) {
    this._apiVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionsInput() {
    return this._apiVersions;
  }

  // operations - computed: false, optional: false, required: true
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class MutatingWebhookConfigurationV1WebhookRuleList extends cdktf.ComplexList {
  public internalValue? : MutatingWebhookConfigurationV1WebhookRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MutatingWebhookConfigurationV1WebhookRuleOutputReference {
    return new MutatingWebhookConfigurationV1WebhookRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MutatingWebhookConfigurationV1Webhook {
  /**
  * AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#admission_review_versions MutatingWebhookConfigurationV1#admission_review_versions}
  */
  readonly admissionReviewVersions?: string[];
  /**
  * FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#failure_policy MutatingWebhookConfigurationV1#failure_policy}
  */
  readonly failurePolicy?: string;
  /**
  * matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".
  * 
  * - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
  * 
  * - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.
  * 
  * Defaults to "Equivalent"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#match_policy MutatingWebhookConfigurationV1#match_policy}
  */
  readonly matchPolicy?: string;
  /**
  * The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#name MutatingWebhookConfigurationV1#name}
  */
  readonly name: string;
  /**
  * reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".
  * 
  * Never: the webhook will not be called more than once in a single admission evaluation.
  * 
  * IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.
  * 
  * Defaults to "Never".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#reinvocation_policy MutatingWebhookConfigurationV1#reinvocation_policy}
  */
  readonly reinvocationPolicy?: string;
  /**
  * SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#side_effects MutatingWebhookConfigurationV1#side_effects}
  */
  readonly sideEffects?: string;
  /**
  * TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#timeout_seconds MutatingWebhookConfigurationV1#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * client_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#client_config MutatingWebhookConfigurationV1#client_config}
  */
  readonly clientConfig: MutatingWebhookConfigurationV1WebhookClientConfig;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#namespace_selector MutatingWebhookConfigurationV1#namespace_selector}
  */
  readonly namespaceSelector?: MutatingWebhookConfigurationV1WebhookNamespaceSelector;
  /**
  * object_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#object_selector MutatingWebhookConfigurationV1#object_selector}
  */
  readonly objectSelector?: MutatingWebhookConfigurationV1WebhookObjectSelector;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#rule MutatingWebhookConfigurationV1#rule}
  */
  readonly rule?: MutatingWebhookConfigurationV1WebhookRule[] | cdktf.IResolvable;
}

export function mutatingWebhookConfigurationV1WebhookToTerraform(struct?: MutatingWebhookConfigurationV1Webhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admission_review_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.admissionReviewVersions),
    failure_policy: cdktf.stringToTerraform(struct!.failurePolicy),
    match_policy: cdktf.stringToTerraform(struct!.matchPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    reinvocation_policy: cdktf.stringToTerraform(struct!.reinvocationPolicy),
    side_effects: cdktf.stringToTerraform(struct!.sideEffects),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    client_config: mutatingWebhookConfigurationV1WebhookClientConfigToTerraform(struct!.clientConfig),
    namespace_selector: mutatingWebhookConfigurationV1WebhookNamespaceSelectorToTerraform(struct!.namespaceSelector),
    object_selector: mutatingWebhookConfigurationV1WebhookObjectSelectorToTerraform(struct!.objectSelector),
    rule: cdktf.listMapper(mutatingWebhookConfigurationV1WebhookRuleToTerraform, true)(struct!.rule),
  }
}


export function mutatingWebhookConfigurationV1WebhookToHclTerraform(struct?: MutatingWebhookConfigurationV1Webhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admission_review_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.admissionReviewVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    failure_policy: {
      value: cdktf.stringToHclTerraform(struct!.failurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_policy: {
      value: cdktf.stringToHclTerraform(struct!.matchPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reinvocation_policy: {
      value: cdktf.stringToHclTerraform(struct!.reinvocationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    side_effects: {
      value: cdktf.stringToHclTerraform(struct!.sideEffects),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_config: {
      value: mutatingWebhookConfigurationV1WebhookClientConfigToHclTerraform(struct!.clientConfig),
      isBlock: true,
      type: "list",
      storageClassType: "MutatingWebhookConfigurationV1WebhookClientConfigList",
    },
    namespace_selector: {
      value: mutatingWebhookConfigurationV1WebhookNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "MutatingWebhookConfigurationV1WebhookNamespaceSelectorList",
    },
    object_selector: {
      value: mutatingWebhookConfigurationV1WebhookObjectSelectorToHclTerraform(struct!.objectSelector),
      isBlock: true,
      type: "list",
      storageClassType: "MutatingWebhookConfigurationV1WebhookObjectSelectorList",
    },
    rule: {
      value: cdktf.listMapperHcl(mutatingWebhookConfigurationV1WebhookRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "MutatingWebhookConfigurationV1WebhookRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutatingWebhookConfigurationV1WebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MutatingWebhookConfigurationV1Webhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admissionReviewVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.admissionReviewVersions = this._admissionReviewVersions;
    }
    if (this._failurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.failurePolicy = this._failurePolicy;
    }
    if (this._matchPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPolicy = this._matchPolicy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reinvocationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.reinvocationPolicy = this._reinvocationPolicy;
    }
    if (this._sideEffects !== undefined) {
      hasAnyValues = true;
      internalValueResult.sideEffects = this._sideEffects;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._clientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConfig = this._clientConfig?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._objectSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectSelector = this._objectSelector?.internalValue;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutatingWebhookConfigurationV1Webhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admissionReviewVersions = undefined;
      this._failurePolicy = undefined;
      this._matchPolicy = undefined;
      this._name = undefined;
      this._reinvocationPolicy = undefined;
      this._sideEffects = undefined;
      this._timeoutSeconds = undefined;
      this._clientConfig.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._objectSelector.internalValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admissionReviewVersions = value.admissionReviewVersions;
      this._failurePolicy = value.failurePolicy;
      this._matchPolicy = value.matchPolicy;
      this._name = value.name;
      this._reinvocationPolicy = value.reinvocationPolicy;
      this._sideEffects = value.sideEffects;
      this._timeoutSeconds = value.timeoutSeconds;
      this._clientConfig.internalValue = value.clientConfig;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._objectSelector.internalValue = value.objectSelector;
      this._rule.internalValue = value.rule;
    }
  }

  // admission_review_versions - computed: false, optional: true, required: false
  private _admissionReviewVersions?: string[]; 
  public get admissionReviewVersions() {
    return this.getListAttribute('admission_review_versions');
  }
  public set admissionReviewVersions(value: string[]) {
    this._admissionReviewVersions = value;
  }
  public resetAdmissionReviewVersions() {
    this._admissionReviewVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionReviewVersionsInput() {
    return this._admissionReviewVersions;
  }

  // failure_policy - computed: false, optional: true, required: false
  private _failurePolicy?: string; 
  public get failurePolicy() {
    return this.getStringAttribute('failure_policy');
  }
  public set failurePolicy(value: string) {
    this._failurePolicy = value;
  }
  public resetFailurePolicy() {
    this._failurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePolicyInput() {
    return this._failurePolicy;
  }

  // match_policy - computed: false, optional: true, required: false
  private _matchPolicy?: string; 
  public get matchPolicy() {
    return this.getStringAttribute('match_policy');
  }
  public set matchPolicy(value: string) {
    this._matchPolicy = value;
  }
  public resetMatchPolicy() {
    this._matchPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPolicyInput() {
    return this._matchPolicy;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // reinvocation_policy - computed: false, optional: true, required: false
  private _reinvocationPolicy?: string; 
  public get reinvocationPolicy() {
    return this.getStringAttribute('reinvocation_policy');
  }
  public set reinvocationPolicy(value: string) {
    this._reinvocationPolicy = value;
  }
  public resetReinvocationPolicy() {
    this._reinvocationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reinvocationPolicyInput() {
    return this._reinvocationPolicy;
  }

  // side_effects - computed: false, optional: true, required: false
  private _sideEffects?: string; 
  public get sideEffects() {
    return this.getStringAttribute('side_effects');
  }
  public set sideEffects(value: string) {
    this._sideEffects = value;
  }
  public resetSideEffects() {
    this._sideEffects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sideEffectsInput() {
    return this._sideEffects;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // client_config - computed: false, optional: false, required: true
  private _clientConfig = new MutatingWebhookConfigurationV1WebhookClientConfigOutputReference(this, "client_config");
  public get clientConfig() {
    return this._clientConfig;
  }
  public putClientConfig(value: MutatingWebhookConfigurationV1WebhookClientConfig) {
    this._clientConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigInput() {
    return this._clientConfig.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: MutatingWebhookConfigurationV1WebhookNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // object_selector - computed: false, optional: true, required: false
  private _objectSelector = new MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference(this, "object_selector");
  public get objectSelector() {
    return this._objectSelector;
  }
  public putObjectSelector(value: MutatingWebhookConfigurationV1WebhookObjectSelector) {
    this._objectSelector.internalValue = value;
  }
  public resetObjectSelector() {
    this._objectSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectSelectorInput() {
    return this._objectSelector.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new MutatingWebhookConfigurationV1WebhookRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: MutatingWebhookConfigurationV1WebhookRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class MutatingWebhookConfigurationV1WebhookList extends cdktf.ComplexList {
  public internalValue? : MutatingWebhookConfigurationV1Webhook[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MutatingWebhookConfigurationV1WebhookOutputReference {
    return new MutatingWebhookConfigurationV1WebhookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1 kubernetes_mutating_webhook_configuration_v1}
*/
export class MutatingWebhookConfigurationV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_mutating_webhook_configuration_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MutatingWebhookConfigurationV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MutatingWebhookConfigurationV1 to import
  * @param importFromId The id of the existing MutatingWebhookConfigurationV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MutatingWebhookConfigurationV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kubernetes_mutating_webhook_configuration_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/mutating_webhook_configuration_v1 kubernetes_mutating_webhook_configuration_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MutatingWebhookConfigurationV1Config
  */
  public constructor(scope: Construct, id: string, config: MutatingWebhookConfigurationV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_mutating_webhook_configuration_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.27.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._metadata.internalValue = config.metadata;
    this._webhook.internalValue = config.webhook;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new MutatingWebhookConfigurationV1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: MutatingWebhookConfigurationV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // webhook - computed: false, optional: false, required: true
  private _webhook = new MutatingWebhookConfigurationV1WebhookList(this, "webhook", false);
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: MutatingWebhookConfigurationV1Webhook[] | cdktf.IResolvable) {
    this._webhook.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metadata: mutatingWebhookConfigurationV1MetadataToTerraform(this._metadata.internalValue),
      webhook: cdktf.listMapper(mutatingWebhookConfigurationV1WebhookToTerraform, true)(this._webhook.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: mutatingWebhookConfigurationV1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MutatingWebhookConfigurationV1MetadataList",
      },
      webhook: {
        value: cdktf.listMapperHcl(mutatingWebhookConfigurationV1WebhookToHclTerraform, true)(this._webhook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MutatingWebhookConfigurationV1WebhookList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
