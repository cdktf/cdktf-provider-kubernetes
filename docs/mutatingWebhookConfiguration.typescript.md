# `kubernetes_mutating_webhook_configuration`

Refer to the Terraform Registory for docs: [`kubernetes_mutating_webhook_configuration`](https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration).

# `mutatingWebhookConfiguration` Submodule <a name="`mutatingWebhookConfiguration` Submodule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MutatingWebhookConfiguration <a name="MutatingWebhookConfiguration" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration kubernetes_mutating_webhook_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfiguration(scope: Construct, id: string, config: MutatingWebhookConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig">MutatingWebhookConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig">MutatingWebhookConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putWebhook">putWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putMetadata"></a>

```typescript
public putMetadata(value: MutatingWebhookConfigurationMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a>

---

##### `putWebhook` <a name="putWebhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putWebhook"></a>

```typescript
public putWebhook(value: IResolvable | MutatingWebhookConfigurationWebhook[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.putWebhook.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isConstruct"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

mutatingWebhookConfiguration.MutatingWebhookConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformElement"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformResource"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference">MutatingWebhookConfigurationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList">MutatingWebhookConfigurationWebhookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.webhookInput">webhookInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.metadata"></a>

```typescript
public readonly metadata: MutatingWebhookConfigurationMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference">MutatingWebhookConfigurationMetadataOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.webhook"></a>

```typescript
public readonly webhook: MutatingWebhookConfigurationWebhookList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList">MutatingWebhookConfigurationWebhookList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.metadataInput"></a>

```typescript
public readonly metadataInput: MutatingWebhookConfigurationMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a>

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.webhookInput"></a>

```typescript
public readonly webhookInput: IResolvable | MutatingWebhookConfigurationWebhook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MutatingWebhookConfigurationConfig <a name="MutatingWebhookConfigurationConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationConfig: mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.webhook">webhook</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>[]</code> | webhook block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#id MutatingWebhookConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.metadata"></a>

```typescript
public readonly metadata: MutatingWebhookConfigurationMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#metadata MutatingWebhookConfiguration#metadata}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.webhook"></a>

```typescript
public readonly webhook: IResolvable | MutatingWebhookConfigurationWebhook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>[]

webhook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#webhook MutatingWebhookConfiguration#webhook}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#id MutatingWebhookConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### MutatingWebhookConfigurationMetadata <a name="MutatingWebhookConfigurationMetadata" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationMetadata: mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.name">name</a></code> | <code>string</code> | Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#annotations MutatingWebhookConfiguration#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#generate_name MutatingWebhookConfiguration#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#labels MutatingWebhookConfiguration#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#name MutatingWebhookConfiguration#name}

---

### MutatingWebhookConfigurationWebhook <a name="MutatingWebhookConfigurationWebhook" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationWebhook: mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.clientConfig">clientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a></code> | client_config block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.name">name</a></code> | <code>string</code> | The name of the admission webhook. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.admissionReviewVersions">admissionReviewVersions</a></code> | <code>string[]</code> | AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.failurePolicy">failurePolicy</a></code> | <code>string</code> | FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.matchPolicy">matchPolicy</a></code> | <code>string</code> | matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent". |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.objectSelector">objectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a></code> | object_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.reinvocationPolicy">reinvocationPolicy</a></code> | <code>string</code> | reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.sideEffects">sideEffects</a></code> | <code>string</code> | SideEffects states whether this webhook has side effects. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | TimeoutSeconds specifies the timeout for this webhook. |

---

##### `clientConfig`<sup>Required</sup> <a name="clientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.clientConfig"></a>

```typescript
public readonly clientConfig: MutatingWebhookConfigurationWebhookClientConfig;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a>

client_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#client_config MutatingWebhookConfiguration#client_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the admission webhook.

Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#name MutatingWebhookConfiguration#name}

---

##### `admissionReviewVersions`<sup>Optional</sup> <a name="admissionReviewVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.admissionReviewVersions"></a>

```typescript
public readonly admissionReviewVersions: string[];
```

- *Type:* string[]

AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects.

API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#admission_review_versions MutatingWebhookConfiguration#admission_review_versions}

---

##### `failurePolicy`<sup>Optional</sup> <a name="failurePolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.failurePolicy"></a>

```typescript
public readonly failurePolicy: string;
```

- *Type:* string

FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail.

Defaults to Fail.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#failure_policy MutatingWebhookConfiguration#failure_policy}

---

##### `matchPolicy`<sup>Optional</sup> <a name="matchPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.matchPolicy"></a>

```typescript
public readonly matchPolicy: string;
```

- *Type:* string

matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.

- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#match_policy MutatingWebhookConfiguration#match_policy}

---

##### `namespaceSelector`<sup>Optional</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.namespaceSelector"></a>

```typescript
public readonly namespaceSelector: MutatingWebhookConfigurationWebhookNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#namespace_selector MutatingWebhookConfiguration#namespace_selector}

---

##### `objectSelector`<sup>Optional</sup> <a name="objectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.objectSelector"></a>

```typescript
public readonly objectSelector: MutatingWebhookConfigurationWebhookObjectSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a>

object_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#object_selector MutatingWebhookConfiguration#object_selector}

---

##### `reinvocationPolicy`<sup>Optional</sup> <a name="reinvocationPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.reinvocationPolicy"></a>

```typescript
public readonly reinvocationPolicy: string;
```

- *Type:* string

reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation.

Allowed values are "Never" and "IfNeeded".

Never: the webhook will not be called more than once in a single admission evaluation.

IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.

Defaults to "Never".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#reinvocation_policy MutatingWebhookConfiguration#reinvocation_policy}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.rule"></a>

```typescript
public readonly rule: IResolvable | MutatingWebhookConfigurationWebhookRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#rule MutatingWebhookConfiguration#rule}

---

##### `sideEffects`<sup>Optional</sup> <a name="sideEffects" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.sideEffects"></a>

```typescript
public readonly sideEffects: string;
```

- *Type:* string

SideEffects states whether this webhook has side effects.

Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#side_effects MutatingWebhookConfiguration#side_effects}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

TimeoutSeconds specifies the timeout for this webhook.

After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#timeout_seconds MutatingWebhookConfiguration#timeout_seconds}

---

### MutatingWebhookConfigurationWebhookClientConfig <a name="MutatingWebhookConfigurationWebhookClientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationWebhookClientConfig: mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.caBundle">caBundle</a></code> | <code>string</code> | `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a></code> | service block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.url">url</a></code> | <code>string</code> | `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). |

---

##### `caBundle`<sup>Optional</sup> <a name="caBundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.caBundle"></a>

```typescript
public readonly caBundle: string;
```

- *Type:* string

`caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate.

If unspecified, system trust roots on the apiserver are used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#ca_bundle MutatingWebhookConfiguration#ca_bundle}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.service"></a>

```typescript
public readonly service: MutatingWebhookConfigurationWebhookClientConfigService;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a>

service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#service MutatingWebhookConfiguration#service}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig.property.url"></a>

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#url MutatingWebhookConfiguration#url}

---

### MutatingWebhookConfigurationWebhookClientConfigService <a name="MutatingWebhookConfigurationWebhookClientConfigService" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationWebhookClientConfigService: mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.name">name</a></code> | <code>string</code> | `name` is the name of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.namespace">namespace</a></code> | <code>string</code> | `namespace` is the namespace of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.path">path</a></code> | <code>string</code> | `path` is an optional URL path which will be sent in any request to this service. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.port">port</a></code> | <code>number</code> | If specified, the port on the service that hosting webhook. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

`name` is the name of the service. Required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#name MutatingWebhookConfiguration#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

`namespace` is the namespace of the service. Required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#namespace MutatingWebhookConfiguration#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

`path` is an optional URL path which will be sent in any request to this service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#path MutatingWebhookConfiguration#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

If specified, the port on the service that hosting webhook.

Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#port MutatingWebhookConfiguration#port}

---

### MutatingWebhookConfigurationWebhookNamespaceSelector <a name="MutatingWebhookConfigurationWebhookNamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationWebhookNamespaceSelector: mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#match_expressions MutatingWebhookConfiguration#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#match_labels MutatingWebhookConfiguration#match_labels}

---

### MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions <a name="MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions: mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#key MutatingWebhookConfiguration#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#operator MutatingWebhookConfiguration#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#values MutatingWebhookConfiguration#values}

---

### MutatingWebhookConfigurationWebhookObjectSelector <a name="MutatingWebhookConfigurationWebhookObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationWebhookObjectSelector: mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#match_expressions MutatingWebhookConfiguration#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#match_labels MutatingWebhookConfiguration#match_labels}

---

### MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions <a name="MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions: mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#key MutatingWebhookConfiguration#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#operator MutatingWebhookConfiguration#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#values MutatingWebhookConfiguration#values}

---

### MutatingWebhookConfigurationWebhookRule <a name="MutatingWebhookConfigurationWebhookRule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

const mutatingWebhookConfigurationWebhookRule: mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.apiGroups">apiGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#api_groups MutatingWebhookConfiguration#api_groups}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.apiVersions">apiVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#api_versions MutatingWebhookConfiguration#api_versions}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.operations">operations</a></code> | <code>string[]</code> | Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#resources MutatingWebhookConfiguration#resources}. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#scope MutatingWebhookConfiguration#scope}. |

---

##### `apiGroups`<sup>Required</sup> <a name="apiGroups" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.apiGroups"></a>

```typescript
public readonly apiGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#api_groups MutatingWebhookConfiguration#api_groups}.

---

##### `apiVersions`<sup>Required</sup> <a name="apiVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.apiVersions"></a>

```typescript
public readonly apiVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#api_versions MutatingWebhookConfiguration#api_versions}.

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.operations"></a>

```typescript
public readonly operations: string[];
```

- *Type:* string[]

Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added.

If '*' is present, the length of the slice must be one. Required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#operations MutatingWebhookConfiguration#operations}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#resources MutatingWebhookConfiguration#resources}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration#scope MutatingWebhookConfiguration#scope}.

---

## Classes <a name="Classes" id="Classes"></a>

### MutatingWebhookConfigurationMetadataOutputReference <a name="MutatingWebhookConfigurationMetadataOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationMetadata">MutatingWebhookConfigurationMetadata</a>

---


### MutatingWebhookConfigurationWebhookClientConfigOutputReference <a name="MutatingWebhookConfigurationWebhookClientConfigOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.putService">putService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetCaBundle">resetCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putService` <a name="putService" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.putService"></a>

```typescript
public putService(value: MutatingWebhookConfigurationWebhookClientConfigService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.putService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a>

---

##### `resetCaBundle` <a name="resetCaBundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetCaBundle"></a>

```typescript
public resetCaBundle(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.service">service</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference">MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundleInput">caBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundle">caBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.service"></a>

```typescript
public readonly service: MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference">MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference</a>

---

##### `caBundleInput`<sup>Optional</sup> <a name="caBundleInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundleInput"></a>

```typescript
public readonly caBundleInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: MutatingWebhookConfigurationWebhookClientConfigService;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `caBundle`<sup>Required</sup> <a name="caBundle" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundle"></a>

```typescript
public readonly caBundle: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationWebhookClientConfig;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a>

---


### MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference <a name="MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationWebhookClientConfigService;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigService">MutatingWebhookConfigurationWebhookClientConfigService</a>

---


### MutatingWebhookConfigurationWebhookList <a name="MutatingWebhookConfigurationWebhookList" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.get"></a>

```typescript
public get(index: number): MutatingWebhookConfigurationWebhookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MutatingWebhookConfigurationWebhook[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a>[]

---


### MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList <a name="MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>[]

---


### MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference <a name="MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a> | cdktf.IResolvable

---


### MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference <a name="MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions">MutatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationWebhookNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a>

---


### MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList <a name="MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>[]

---


### MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference <a name="MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a> | cdktf.IResolvable

---


### MutatingWebhookConfigurationWebhookObjectSelectorOutputReference <a name="MutatingWebhookConfigurationWebhookObjectSelectorOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions">MutatingWebhookConfigurationWebhookObjectSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationWebhookObjectSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a>

---


### MutatingWebhookConfigurationWebhookOutputReference <a name="MutatingWebhookConfigurationWebhookOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putClientConfig">putClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector">putNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putObjectSelector">putObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetAdmissionReviewVersions">resetAdmissionReviewVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetFailurePolicy">resetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetMatchPolicy">resetMatchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetNamespaceSelector">resetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetObjectSelector">resetObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetReinvocationPolicy">resetReinvocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetSideEffects">resetSideEffects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientConfig` <a name="putClientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putClientConfig"></a>

```typescript
public putClientConfig(value: MutatingWebhookConfigurationWebhookClientConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putClientConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a>

---

##### `putNamespaceSelector` <a name="putNamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector"></a>

```typescript
public putNamespaceSelector(value: MutatingWebhookConfigurationWebhookNamespaceSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a>

---

##### `putObjectSelector` <a name="putObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putObjectSelector"></a>

```typescript
public putObjectSelector(value: MutatingWebhookConfigurationWebhookObjectSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putObjectSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | MutatingWebhookConfigurationWebhookRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>[]

---

##### `resetAdmissionReviewVersions` <a name="resetAdmissionReviewVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetAdmissionReviewVersions"></a>

```typescript
public resetAdmissionReviewVersions(): void
```

##### `resetFailurePolicy` <a name="resetFailurePolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetFailurePolicy"></a>

```typescript
public resetFailurePolicy(): void
```

##### `resetMatchPolicy` <a name="resetMatchPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetMatchPolicy"></a>

```typescript
public resetMatchPolicy(): void
```

##### `resetNamespaceSelector` <a name="resetNamespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetNamespaceSelector"></a>

```typescript
public resetNamespaceSelector(): void
```

##### `resetObjectSelector` <a name="resetObjectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetObjectSelector"></a>

```typescript
public resetObjectSelector(): void
```

##### `resetReinvocationPolicy` <a name="resetReinvocationPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetReinvocationPolicy"></a>

```typescript
public resetReinvocationPolicy(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetRule"></a>

```typescript
public resetRule(): void
```

##### `resetSideEffects` <a name="resetSideEffects" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetSideEffects"></a>

```typescript
public resetSideEffects(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.clientConfig">clientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference">MutatingWebhookConfigurationWebhookClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference">MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.objectSelector">objectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference">MutatingWebhookConfigurationWebhookObjectSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList">MutatingWebhookConfigurationWebhookRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersionsInput">admissionReviewVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.clientConfigInput">clientConfigInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.failurePolicyInput">failurePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.matchPolicyInput">matchPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.namespaceSelectorInput">namespaceSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.objectSelectorInput">objectSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.reinvocationPolicyInput">reinvocationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.sideEffectsInput">sideEffectsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersions">admissionReviewVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.failurePolicy">failurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.matchPolicy">matchPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.reinvocationPolicy">reinvocationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.sideEffects">sideEffects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientConfig`<sup>Required</sup> <a name="clientConfig" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.clientConfig"></a>

```typescript
public readonly clientConfig: MutatingWebhookConfigurationWebhookClientConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfigOutputReference">MutatingWebhookConfigurationWebhookClientConfigOutputReference</a>

---

##### `namespaceSelector`<sup>Required</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.namespaceSelector"></a>

```typescript
public readonly namespaceSelector: MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference">MutatingWebhookConfigurationWebhookNamespaceSelectorOutputReference</a>

---

##### `objectSelector`<sup>Required</sup> <a name="objectSelector" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.objectSelector"></a>

```typescript
public readonly objectSelector: MutatingWebhookConfigurationWebhookObjectSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelectorOutputReference">MutatingWebhookConfigurationWebhookObjectSelectorOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.rule"></a>

```typescript
public readonly rule: MutatingWebhookConfigurationWebhookRuleList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList">MutatingWebhookConfigurationWebhookRuleList</a>

---

##### `admissionReviewVersionsInput`<sup>Optional</sup> <a name="admissionReviewVersionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersionsInput"></a>

```typescript
public readonly admissionReviewVersionsInput: string[];
```

- *Type:* string[]

---

##### `clientConfigInput`<sup>Optional</sup> <a name="clientConfigInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.clientConfigInput"></a>

```typescript
public readonly clientConfigInput: MutatingWebhookConfigurationWebhookClientConfig;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookClientConfig">MutatingWebhookConfigurationWebhookClientConfig</a>

---

##### `failurePolicyInput`<sup>Optional</sup> <a name="failurePolicyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.failurePolicyInput"></a>

```typescript
public readonly failurePolicyInput: string;
```

- *Type:* string

---

##### `matchPolicyInput`<sup>Optional</sup> <a name="matchPolicyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.matchPolicyInput"></a>

```typescript
public readonly matchPolicyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceSelectorInput`<sup>Optional</sup> <a name="namespaceSelectorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.namespaceSelectorInput"></a>

```typescript
public readonly namespaceSelectorInput: MutatingWebhookConfigurationWebhookNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookNamespaceSelector">MutatingWebhookConfigurationWebhookNamespaceSelector</a>

---

##### `objectSelectorInput`<sup>Optional</sup> <a name="objectSelectorInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.objectSelectorInput"></a>

```typescript
public readonly objectSelectorInput: MutatingWebhookConfigurationWebhookObjectSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookObjectSelector">MutatingWebhookConfigurationWebhookObjectSelector</a>

---

##### `reinvocationPolicyInput`<sup>Optional</sup> <a name="reinvocationPolicyInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.reinvocationPolicyInput"></a>

```typescript
public readonly reinvocationPolicyInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | MutatingWebhookConfigurationWebhookRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>[]

---

##### `sideEffectsInput`<sup>Optional</sup> <a name="sideEffectsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.sideEffectsInput"></a>

```typescript
public readonly sideEffectsInput: string;
```

- *Type:* string

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `admissionReviewVersions`<sup>Required</sup> <a name="admissionReviewVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersions"></a>

```typescript
public readonly admissionReviewVersions: string[];
```

- *Type:* string[]

---

##### `failurePolicy`<sup>Required</sup> <a name="failurePolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.failurePolicy"></a>

```typescript
public readonly failurePolicy: string;
```

- *Type:* string

---

##### `matchPolicy`<sup>Required</sup> <a name="matchPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.matchPolicy"></a>

```typescript
public readonly matchPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reinvocationPolicy`<sup>Required</sup> <a name="reinvocationPolicy" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.reinvocationPolicy"></a>

```typescript
public readonly reinvocationPolicy: string;
```

- *Type:* string

---

##### `sideEffects`<sup>Required</sup> <a name="sideEffects" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.sideEffects"></a>

```typescript
public readonly sideEffects: string;
```

- *Type:* string

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationWebhook | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhook">MutatingWebhookConfigurationWebhook</a> | cdktf.IResolvable

---


### MutatingWebhookConfigurationWebhookRuleList <a name="MutatingWebhookConfigurationWebhookRuleList" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.get"></a>

```typescript
public get(index: number): MutatingWebhookConfigurationWebhookRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MutatingWebhookConfigurationWebhookRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a>[]

---


### MutatingWebhookConfigurationWebhookRuleOutputReference <a name="MutatingWebhookConfigurationWebhookRuleOutputReference" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer"></a>

```typescript
import { mutatingWebhookConfiguration } from '@cdktf/provider-kubernetes'

new mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroupsInput">apiGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersionsInput">apiVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.operationsInput">operationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroups">apiGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersions">apiVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.operations">operations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiGroupsInput`<sup>Optional</sup> <a name="apiGroupsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroupsInput"></a>

```typescript
public readonly apiGroupsInput: string[];
```

- *Type:* string[]

---

##### `apiVersionsInput`<sup>Optional</sup> <a name="apiVersionsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersionsInput"></a>

```typescript
public readonly apiVersionsInput: string[];
```

- *Type:* string[]

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.operationsInput"></a>

```typescript
public readonly operationsInput: string[];
```

- *Type:* string[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `apiGroups`<sup>Required</sup> <a name="apiGroups" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroups"></a>

```typescript
public readonly apiGroups: string[];
```

- *Type:* string[]

---

##### `apiVersions`<sup>Required</sup> <a name="apiVersions" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersions"></a>

```typescript
public readonly apiVersions: string[];
```

- *Type:* string[]

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.operations"></a>

```typescript
public readonly operations: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MutatingWebhookConfigurationWebhookRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.mutatingWebhookConfiguration.MutatingWebhookConfigurationWebhookRule">MutatingWebhookConfigurationWebhookRule</a> | cdktf.IResolvable

---



