# `kubernetes_mutating_webhook_configuration_v1`

Refer to the Terraform Registory for docs: [`kubernetes_mutating_webhook_configuration_v1`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1).

# `mutatingWebhookConfigurationV1` Submodule <a name="`mutatingWebhookConfigurationV1` Submodule" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MutatingWebhookConfigurationV1 <a name="MutatingWebhookConfigurationV1" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1 kubernetes_mutating_webhook_configuration_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1(scope: Construct, id: string, config: MutatingWebhookConfigurationV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config">MutatingWebhookConfigurationV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config">MutatingWebhookConfigurationV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putWebhook">putWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putMetadata"></a>

```typescript
public putMetadata(value: MutatingWebhookConfigurationV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a>

---

##### `putWebhook` <a name="putWebhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putWebhook"></a>

```typescript
public putWebhook(value: IResolvable | MutatingWebhookConfigurationV1Webhook[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.putWebhook.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isConstruct"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformElement"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformResource"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference">MutatingWebhookConfigurationV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList">MutatingWebhookConfigurationV1WebhookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.webhookInput">webhookInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.metadata"></a>

```typescript
public readonly metadata: MutatingWebhookConfigurationV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference">MutatingWebhookConfigurationV1MetadataOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.webhook"></a>

```typescript
public readonly webhook: MutatingWebhookConfigurationV1WebhookList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList">MutatingWebhookConfigurationV1WebhookList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: MutatingWebhookConfigurationV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a>

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.webhookInput"></a>

```typescript
public readonly webhookInput: IResolvable | MutatingWebhookConfigurationV1Webhook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MutatingWebhookConfigurationV1Config <a name="MutatingWebhookConfigurationV1Config" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationV1Config: mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.webhook">webhook</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>[]</code> | webhook block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#id MutatingWebhookConfigurationV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.metadata"></a>

```typescript
public readonly metadata: MutatingWebhookConfigurationV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#metadata MutatingWebhookConfigurationV1#metadata}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.webhook"></a>

```typescript
public readonly webhook: IResolvable | MutatingWebhookConfigurationV1Webhook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>[]

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#webhook MutatingWebhookConfigurationV1#webhook}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#id MutatingWebhookConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### MutatingWebhookConfigurationV1Metadata <a name="MutatingWebhookConfigurationV1Metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationV1Metadata: mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.name">name</a></code> | <code>string</code> | Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#annotations MutatingWebhookConfigurationV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#generate_name MutatingWebhookConfigurationV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#labels MutatingWebhookConfigurationV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#name MutatingWebhookConfigurationV1#name}

---

### MutatingWebhookConfigurationV1Webhook <a name="MutatingWebhookConfigurationV1Webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationV1Webhook: mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.clientConfig">clientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig">MutatingWebhookConfigurationV1WebhookClientConfig</a></code> | client_config block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.name">name</a></code> | <code>string</code> | The name of the admission webhook. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.admissionReviewVersions">admissionReviewVersions</a></code> | <code>string[]</code> | AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.failurePolicy">failurePolicy</a></code> | <code>string</code> | FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.matchPolicy">matchPolicy</a></code> | <code>string</code> | matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent". |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector">MutatingWebhookConfigurationV1WebhookNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.objectSelector">objectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector">MutatingWebhookConfigurationV1WebhookObjectSelector</a></code> | object_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.reinvocationPolicy">reinvocationPolicy</a></code> | <code>string</code> | reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.sideEffects">sideEffects</a></code> | <code>string</code> | SideEffects states whether this webhook has side effects. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | TimeoutSeconds specifies the timeout for this webhook. |

---

##### `clientConfig`<sup>Required</sup> <a name="clientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.clientConfig"></a>

```typescript
public readonly clientConfig: MutatingWebhookConfigurationV1WebhookClientConfig;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig">MutatingWebhookConfigurationV1WebhookClientConfig</a>

client_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#client_config MutatingWebhookConfigurationV1#client_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the admission webhook.

Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#name MutatingWebhookConfigurationV1#name}

---

##### `admissionReviewVersions`<sup>Optional</sup> <a name="admissionReviewVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.admissionReviewVersions"></a>

```typescript
public readonly admissionReviewVersions: string[];
```

- *Type:* string[]

AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects.

API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#admission_review_versions MutatingWebhookConfigurationV1#admission_review_versions}

---

##### `failurePolicy`<sup>Optional</sup> <a name="failurePolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.failurePolicy"></a>

```typescript
public readonly failurePolicy: string;
```

- *Type:* string

FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail.

Defaults to Fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#failure_policy MutatingWebhookConfigurationV1#failure_policy}

---

##### `matchPolicy`<sup>Optional</sup> <a name="matchPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.matchPolicy"></a>

```typescript
public readonly matchPolicy: string;
```

- *Type:* string

matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.

- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#match_policy MutatingWebhookConfigurationV1#match_policy}

---

##### `namespaceSelector`<sup>Optional</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.namespaceSelector"></a>

```typescript
public readonly namespaceSelector: MutatingWebhookConfigurationV1WebhookNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector">MutatingWebhookConfigurationV1WebhookNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#namespace_selector MutatingWebhookConfigurationV1#namespace_selector}

---

##### `objectSelector`<sup>Optional</sup> <a name="objectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.objectSelector"></a>

```typescript
public readonly objectSelector: MutatingWebhookConfigurationV1WebhookObjectSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector">MutatingWebhookConfigurationV1WebhookObjectSelector</a>

object_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#object_selector MutatingWebhookConfigurationV1#object_selector}

---

##### `reinvocationPolicy`<sup>Optional</sup> <a name="reinvocationPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.reinvocationPolicy"></a>

```typescript
public readonly reinvocationPolicy: string;
```

- *Type:* string

reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation.

Allowed values are "Never" and "IfNeeded".

Never: the webhook will not be called more than once in a single admission evaluation.

IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.

Defaults to "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#reinvocation_policy MutatingWebhookConfigurationV1#reinvocation_policy}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.rule"></a>

```typescript
public readonly rule: IResolvable | MutatingWebhookConfigurationV1WebhookRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#rule MutatingWebhookConfigurationV1#rule}

---

##### `sideEffects`<sup>Optional</sup> <a name="sideEffects" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.sideEffects"></a>

```typescript
public readonly sideEffects: string;
```

- *Type:* string

SideEffects states whether this webhook has side effects.

Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#side_effects MutatingWebhookConfigurationV1#side_effects}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

TimeoutSeconds specifies the timeout for this webhook.

After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#timeout_seconds MutatingWebhookConfigurationV1#timeout_seconds}

---

### MutatingWebhookConfigurationV1WebhookClientConfig <a name="MutatingWebhookConfigurationV1WebhookClientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationV1WebhookClientConfig: mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.property.caBundle">caBundle</a></code> | <code>string</code> | `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a></code> | service block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.property.url">url</a></code> | <code>string</code> | `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). |

---

##### `caBundle`<sup>Optional</sup> <a name="caBundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.property.caBundle"></a>

```typescript
public readonly caBundle: string;
```

- *Type:* string

`caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate.

If unspecified, system trust roots on the apiserver are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#ca_bundle MutatingWebhookConfigurationV1#ca_bundle}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.property.service"></a>

```typescript
public readonly service: MutatingWebhookConfigurationV1WebhookClientConfigService;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#service MutatingWebhookConfigurationV1#service}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

`url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`).

Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#url MutatingWebhookConfigurationV1#url}

---

### MutatingWebhookConfigurationV1WebhookClientConfigService <a name="MutatingWebhookConfigurationV1WebhookClientConfigService" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationV1WebhookClientConfigService: mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.name">name</a></code> | <code>string</code> | `name` is the name of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.namespace">namespace</a></code> | <code>string</code> | `namespace` is the namespace of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.path">path</a></code> | <code>string</code> | `path` is an optional URL path which will be sent in any request to this service. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.port">port</a></code> | <code>number</code> | If specified, the port on the service that hosting webhook. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

`name` is the name of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#name MutatingWebhookConfigurationV1#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

`namespace` is the namespace of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#namespace MutatingWebhookConfigurationV1#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

`path` is an optional URL path which will be sent in any request to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#path MutatingWebhookConfigurationV1#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

If specified, the port on the service that hosting webhook.

Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#port MutatingWebhookConfigurationV1#port}

---

### MutatingWebhookConfigurationV1WebhookNamespaceSelector <a name="MutatingWebhookConfigurationV1WebhookNamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationV1WebhookNamespaceSelector: mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#match_expressions MutatingWebhookConfigurationV1#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#match_labels MutatingWebhookConfigurationV1#match_labels}

---

### MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions <a name="MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions: mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#key MutatingWebhookConfigurationV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#operator MutatingWebhookConfigurationV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#values MutatingWebhookConfigurationV1#values}

---

### MutatingWebhookConfigurationV1WebhookObjectSelector <a name="MutatingWebhookConfigurationV1WebhookObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationV1WebhookObjectSelector: mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#match_expressions MutatingWebhookConfigurationV1#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#match_labels MutatingWebhookConfigurationV1#match_labels}

---

### MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions <a name="MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions: mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#key MutatingWebhookConfigurationV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#operator MutatingWebhookConfigurationV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#values MutatingWebhookConfigurationV1#values}

---

### MutatingWebhookConfigurationV1WebhookRule <a name="MutatingWebhookConfigurationV1WebhookRule" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationV1WebhookRule: mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.apiGroups">apiGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#api_groups MutatingWebhookConfigurationV1#api_groups}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.apiVersions">apiVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#api_versions MutatingWebhookConfigurationV1#api_versions}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.operations">operations</a></code> | <code>string[]</code> | Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#resources MutatingWebhookConfigurationV1#resources}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#scope MutatingWebhookConfigurationV1#scope}. |

---

##### `apiGroups`<sup>Required</sup> <a name="apiGroups" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.apiGroups"></a>

```typescript
public readonly apiGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#api_groups MutatingWebhookConfigurationV1#api_groups}.

---

##### `apiVersions`<sup>Required</sup> <a name="apiVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.apiVersions"></a>

```typescript
public readonly apiVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#api_versions MutatingWebhookConfigurationV1#api_versions}.

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.operations"></a>

```typescript
public readonly operations: string[];
```

- *Type:* string[]

Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added.

If '*' is present, the length of the slice must be one. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#operations MutatingWebhookConfigurationV1#operations}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#resources MutatingWebhookConfigurationV1#resources}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/mutating_webhook_configuration_v1#scope MutatingWebhookConfigurationV1#scope}.

---

## Classes <a name="Classes" id="Classes"></a>

### MutatingWebhookConfigurationV1MetadataOutputReference <a name="MutatingWebhookConfigurationV1MetadataOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Metadata">MutatingWebhookConfigurationV1Metadata</a>

---


### MutatingWebhookConfigurationV1WebhookClientConfigOutputReference <a name="MutatingWebhookConfigurationV1WebhookClientConfigOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.putService">putService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetCaBundle">resetCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putService` <a name="putService" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.putService"></a>

```typescript
public putService(value: MutatingWebhookConfigurationV1WebhookClientConfigService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.putService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a>

---

##### `resetCaBundle` <a name="resetCaBundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetCaBundle"></a>

```typescript
public resetCaBundle(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference">MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundleInput">caBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundle">caBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig">MutatingWebhookConfigurationV1WebhookClientConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.service"></a>

```typescript
public readonly service: MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference">MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference</a>

---

##### `caBundleInput`<sup>Optional</sup> <a name="caBundleInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundleInput"></a>

```typescript
public readonly caBundleInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: MutatingWebhookConfigurationV1WebhookClientConfigService;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `caBundle`<sup>Required</sup> <a name="caBundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.caBundle"></a>

```typescript
public readonly caBundle: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationV1WebhookClientConfig;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig">MutatingWebhookConfigurationV1WebhookClientConfig</a>

---


### MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference <a name="MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationV1WebhookClientConfigService;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigService">MutatingWebhookConfigurationV1WebhookClientConfigService</a>

---


### MutatingWebhookConfigurationV1WebhookList <a name="MutatingWebhookConfigurationV1WebhookList" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.get"></a>

```typescript
public get(index: number): MutatingWebhookConfigurationV1WebhookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MutatingWebhookConfigurationV1Webhook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a>[]

---


### MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList <a name="MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>[]

---


### MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference <a name="MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a> | cdktf.IResolvable

---


### MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference <a name="MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector">MutatingWebhookConfigurationV1WebhookNamespaceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationV1WebhookNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector">MutatingWebhookConfigurationV1WebhookNamespaceSelector</a>

---


### MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList <a name="MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>[]

---


### MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference <a name="MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a> | cdktf.IResolvable

---


### MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference <a name="MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector">MutatingWebhookConfigurationV1WebhookObjectSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationV1WebhookObjectSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector">MutatingWebhookConfigurationV1WebhookObjectSelector</a>

---


### MutatingWebhookConfigurationV1WebhookOutputReference <a name="MutatingWebhookConfigurationV1WebhookOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putClientConfig">putClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putNamespaceSelector">putNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putObjectSelector">putObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetAdmissionReviewVersions">resetAdmissionReviewVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetFailurePolicy">resetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetMatchPolicy">resetMatchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetNamespaceSelector">resetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetObjectSelector">resetObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetReinvocationPolicy">resetReinvocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetSideEffects">resetSideEffects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientConfig` <a name="putClientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putClientConfig"></a>

```typescript
public putClientConfig(value: MutatingWebhookConfigurationV1WebhookClientConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putClientConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig">MutatingWebhookConfigurationV1WebhookClientConfig</a>

---

##### `putNamespaceSelector` <a name="putNamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putNamespaceSelector"></a>

```typescript
public putNamespaceSelector(value: MutatingWebhookConfigurationV1WebhookNamespaceSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector">MutatingWebhookConfigurationV1WebhookNamespaceSelector</a>

---

##### `putObjectSelector` <a name="putObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putObjectSelector"></a>

```typescript
public putObjectSelector(value: MutatingWebhookConfigurationV1WebhookObjectSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putObjectSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector">MutatingWebhookConfigurationV1WebhookObjectSelector</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | MutatingWebhookConfigurationV1WebhookRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>[]

---

##### `resetAdmissionReviewVersions` <a name="resetAdmissionReviewVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetAdmissionReviewVersions"></a>

```typescript
public resetAdmissionReviewVersions(): void
```

##### `resetFailurePolicy` <a name="resetFailurePolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetFailurePolicy"></a>

```typescript
public resetFailurePolicy(): void
```

##### `resetMatchPolicy` <a name="resetMatchPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetMatchPolicy"></a>

```typescript
public resetMatchPolicy(): void
```

##### `resetNamespaceSelector` <a name="resetNamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetNamespaceSelector"></a>

```typescript
public resetNamespaceSelector(): void
```

##### `resetObjectSelector` <a name="resetObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetObjectSelector"></a>

```typescript
public resetObjectSelector(): void
```

##### `resetReinvocationPolicy` <a name="resetReinvocationPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetReinvocationPolicy"></a>

```typescript
public resetReinvocationPolicy(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetRule"></a>

```typescript
public resetRule(): void
```

##### `resetSideEffects` <a name="resetSideEffects" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetSideEffects"></a>

```typescript
public resetSideEffects(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.clientConfig">clientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference">MutatingWebhookConfigurationV1WebhookClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference">MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.objectSelector">objectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference">MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList">MutatingWebhookConfigurationV1WebhookRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersionsInput">admissionReviewVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.clientConfigInput">clientConfigInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig">MutatingWebhookConfigurationV1WebhookClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicyInput">failurePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicyInput">matchPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelectorInput">namespaceSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector">MutatingWebhookConfigurationV1WebhookNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.objectSelectorInput">objectSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector">MutatingWebhookConfigurationV1WebhookObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.reinvocationPolicyInput">reinvocationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.sideEffectsInput">sideEffectsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersions">admissionReviewVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicy">failurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicy">matchPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.reinvocationPolicy">reinvocationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.sideEffects">sideEffects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientConfig`<sup>Required</sup> <a name="clientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.clientConfig"></a>

```typescript
public readonly clientConfig: MutatingWebhookConfigurationV1WebhookClientConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfigOutputReference">MutatingWebhookConfigurationV1WebhookClientConfigOutputReference</a>

---

##### `namespaceSelector`<sup>Required</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelector"></a>

```typescript
public readonly namespaceSelector: MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference">MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference</a>

---

##### `objectSelector`<sup>Required</sup> <a name="objectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.objectSelector"></a>

```typescript
public readonly objectSelector: MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference">MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.rule"></a>

```typescript
public readonly rule: MutatingWebhookConfigurationV1WebhookRuleList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList">MutatingWebhookConfigurationV1WebhookRuleList</a>

---

##### `admissionReviewVersionsInput`<sup>Optional</sup> <a name="admissionReviewVersionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersionsInput"></a>

```typescript
public readonly admissionReviewVersionsInput: string[];
```

- *Type:* string[]

---

##### `clientConfigInput`<sup>Optional</sup> <a name="clientConfigInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.clientConfigInput"></a>

```typescript
public readonly clientConfigInput: MutatingWebhookConfigurationV1WebhookClientConfig;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookClientConfig">MutatingWebhookConfigurationV1WebhookClientConfig</a>

---

##### `failurePolicyInput`<sup>Optional</sup> <a name="failurePolicyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicyInput"></a>

```typescript
public readonly failurePolicyInput: string;
```

- *Type:* string

---

##### `matchPolicyInput`<sup>Optional</sup> <a name="matchPolicyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicyInput"></a>

```typescript
public readonly matchPolicyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceSelectorInput`<sup>Optional</sup> <a name="namespaceSelectorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.namespaceSelectorInput"></a>

```typescript
public readonly namespaceSelectorInput: MutatingWebhookConfigurationV1WebhookNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookNamespaceSelector">MutatingWebhookConfigurationV1WebhookNamespaceSelector</a>

---

##### `objectSelectorInput`<sup>Optional</sup> <a name="objectSelectorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.objectSelectorInput"></a>

```typescript
public readonly objectSelectorInput: MutatingWebhookConfigurationV1WebhookObjectSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookObjectSelector">MutatingWebhookConfigurationV1WebhookObjectSelector</a>

---

##### `reinvocationPolicyInput`<sup>Optional</sup> <a name="reinvocationPolicyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.reinvocationPolicyInput"></a>

```typescript
public readonly reinvocationPolicyInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | MutatingWebhookConfigurationV1WebhookRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>[]

---

##### `sideEffectsInput`<sup>Optional</sup> <a name="sideEffectsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.sideEffectsInput"></a>

```typescript
public readonly sideEffectsInput: string;
```

- *Type:* string

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `admissionReviewVersions`<sup>Required</sup> <a name="admissionReviewVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.admissionReviewVersions"></a>

```typescript
public readonly admissionReviewVersions: string[];
```

- *Type:* string[]

---

##### `failurePolicy`<sup>Required</sup> <a name="failurePolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.failurePolicy"></a>

```typescript
public readonly failurePolicy: string;
```

- *Type:* string

---

##### `matchPolicy`<sup>Required</sup> <a name="matchPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.matchPolicy"></a>

```typescript
public readonly matchPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reinvocationPolicy`<sup>Required</sup> <a name="reinvocationPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.reinvocationPolicy"></a>

```typescript
public readonly reinvocationPolicy: string;
```

- *Type:* string

---

##### `sideEffects`<sup>Required</sup> <a name="sideEffects" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.sideEffects"></a>

```typescript
public readonly sideEffects: string;
```

- *Type:* string

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationV1Webhook | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1Webhook">MutatingWebhookConfigurationV1Webhook</a> | cdktf.IResolvable

---


### MutatingWebhookConfigurationV1WebhookRuleList <a name="MutatingWebhookConfigurationV1WebhookRuleList" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.get"></a>

```typescript
public get(index: number): MutatingWebhookConfigurationV1WebhookRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MutatingWebhookConfigurationV1WebhookRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a>[]

---


### MutatingWebhookConfigurationV1WebhookRuleOutputReference <a name="MutatingWebhookConfigurationV1WebhookRuleOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfigurationV1 } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroupsInput">apiGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersionsInput">apiVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.operationsInput">operationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroups">apiGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersions">apiVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.operations">operations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiGroupsInput`<sup>Optional</sup> <a name="apiGroupsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroupsInput"></a>

```typescript
public readonly apiGroupsInput: string[];
```

- *Type:* string[]

---

##### `apiVersionsInput`<sup>Optional</sup> <a name="apiVersionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersionsInput"></a>

```typescript
public readonly apiVersionsInput: string[];
```

- *Type:* string[]

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.operationsInput"></a>

```typescript
public readonly operationsInput: string[];
```

- *Type:* string[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `apiGroups`<sup>Required</sup> <a name="apiGroups" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiGroups"></a>

```typescript
public readonly apiGroups: string[];
```

- *Type:* string[]

---

##### `apiVersions`<sup>Required</sup> <a name="apiVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.apiVersions"></a>

```typescript
public readonly apiVersions: string[];
```

- *Type:* string[]

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.operations"></a>

```typescript
public readonly operations: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationV1WebhookRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfigurationV1.MutatingWebhookConfigurationV1WebhookRule">MutatingWebhookConfigurationV1WebhookRule</a> | cdktf.IResolvable

---



