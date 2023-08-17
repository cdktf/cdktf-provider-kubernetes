# `kubernetes_env`

Refer to the Terraform Registory for docs: [`kubernetes_env`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env).

# `env` Submodule <a name="`env` Submodule" id="@cdktf/provider-kubernetes.env"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Env <a name="Env" id="@cdktf/provider-kubernetes.env.Env"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env kubernetes_env}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.Env.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

new env.Env(scope: Construct, id: string, config: EnvConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig">EnvConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.env.Env.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvConfig">EnvConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetFieldManager">resetFieldManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.resetInitContainer">resetInitContainer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.env.Env.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.env.Env.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.env.Env.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.env.Env.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.env.Env.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.env.Env.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.env.Env.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.env.Env.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.env.Env.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.env.Env.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.env.Env.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.Env.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.env.Env.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.env.Env.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.env.Env.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.env.Env.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.env.Env.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.env.Env.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.Env.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.env.Env.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.Env.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEnv` <a name="putEnv" id="@cdktf/provider-kubernetes.env.Env.putEnv"></a>

```typescript
public putEnv(value: IResolvable | EnvEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.env.Env.putEnv.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>[]

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.env.Env.putMetadata"></a>

```typescript
public putMetadata(value: EnvMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.env.Env.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a>

---

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-kubernetes.env.Env.resetContainer"></a>

```typescript
public resetContainer(): void
```

##### `resetFieldManager` <a name="resetFieldManager" id="@cdktf/provider-kubernetes.env.Env.resetFieldManager"></a>

```typescript
public resetFieldManager(): void
```

##### `resetForce` <a name="resetForce" id="@cdktf/provider-kubernetes.env.Env.resetForce"></a>

```typescript
public resetForce(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.env.Env.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitContainer` <a name="resetInitContainer" id="@cdktf/provider-kubernetes.env.Env.resetInitContainer"></a>

```typescript
public resetInitContainer(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.env.Env.isConstruct"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

env.Env.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.env.Env.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.env.Env.isTerraformElement"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

env.Env.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.env.Env.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.env.Env.isTerraformResource"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

env.Env.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.env.Env.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.env">env</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList">EnvEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference">EnvMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.apiVersionInput">apiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.envInput">envInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.fieldManagerInput">fieldManagerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.forceInput">forceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.initContainerInput">initContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.fieldManager">fieldManager</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.force">force</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.initContainer">initContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.kind">kind</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.env.Env.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.env.Env.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.Env.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.env.Env.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.env.Env.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.env.Env.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.env.Env.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.env.Env.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.env.Env.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.env.Env.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.env.Env.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.env.Env.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.env.Env.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.env.Env.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-kubernetes.env.Env.property.env"></a>

```typescript
public readonly env: EnvEnvList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvList">EnvEnvList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.env.Env.property.metadata"></a>

```typescript
public readonly metadata: EnvMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference">EnvMetadataOutputReference</a>

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-kubernetes.env.Env.property.apiVersionInput"></a>

```typescript
public readonly apiVersionInput: string;
```

- *Type:* string

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-kubernetes.env.Env.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-kubernetes.env.Env.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | EnvEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>[]

---

##### `fieldManagerInput`<sup>Optional</sup> <a name="fieldManagerInput" id="@cdktf/provider-kubernetes.env.Env.property.fieldManagerInput"></a>

```typescript
public readonly fieldManagerInput: string;
```

- *Type:* string

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktf/provider-kubernetes.env.Env.property.forceInput"></a>

```typescript
public readonly forceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.env.Env.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initContainerInput`<sup>Optional</sup> <a name="initContainerInput" id="@cdktf/provider-kubernetes.env.Env.property.initContainerInput"></a>

```typescript
public readonly initContainerInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.env.Env.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.env.Env.property.metadataInput"></a>

```typescript
public readonly metadataInput: EnvMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a>

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.env.Env.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-kubernetes.env.Env.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `fieldManager`<sup>Required</sup> <a name="fieldManager" id="@cdktf/provider-kubernetes.env.Env.property.fieldManager"></a>

```typescript
public readonly fieldManager: string;
```

- *Type:* string

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-kubernetes.env.Env.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.env.Env.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initContainer`<sup>Required</sup> <a name="initContainer" id="@cdktf/provider-kubernetes.env.Env.property.initContainer"></a>

```typescript
public readonly initContainer: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.env.Env.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.Env.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.env.Env.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnvConfig <a name="EnvConfig" id="@cdktf/provider-kubernetes.env.EnvConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvConfig.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

const envConfig: env.EnvConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.apiVersion">apiVersion</a></code> | <code>string</code> | Resource API version. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.env">env</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>[]</code> | env block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.kind">kind</a></code> | <code>string</code> | Resource Kind. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.container">container</a></code> | <code>string</code> | Name of the container for which we are updating the environment variables. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.fieldManager">fieldManager</a></code> | <code>string</code> | Set the name of the field manager for the specified environment variables. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.force">force</a></code> | <code>boolean \| cdktf.IResolvable</code> | Force overwriting environments that were created or edited outside of Terraform. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#id Env#id}. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvConfig.property.initContainer">initContainer</a></code> | <code>string</code> | Name of the initContainer for which we are updating the environment variables. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.env.EnvConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.env.EnvConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.env.EnvConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.env.EnvConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.env.EnvConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.env.EnvConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.env.EnvConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.env.EnvConfig.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

Resource API version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#api_version Env#api_version}

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-kubernetes.env.EnvConfig.property.env"></a>

```typescript
public readonly env: IResolvable | EnvEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#env Env#env}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.env.EnvConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Resource Kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#kind Env#kind}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.env.EnvConfig.property.metadata"></a>

```typescript
public readonly metadata: EnvMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#metadata Env#metadata}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-kubernetes.env.EnvConfig.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

Name of the container for which we are updating the environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#container Env#container}

---

##### `fieldManager`<sup>Optional</sup> <a name="fieldManager" id="@cdktf/provider-kubernetes.env.EnvConfig.property.fieldManager"></a>

```typescript
public readonly fieldManager: string;
```

- *Type:* string

Set the name of the field manager for the specified environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#field_manager Env#field_manager}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-kubernetes.env.EnvConfig.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Force overwriting environments that were created or edited outside of Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#force Env#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.env.EnvConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#id Env#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initContainer`<sup>Optional</sup> <a name="initContainer" id="@cdktf/provider-kubernetes.env.EnvConfig.property.initContainer"></a>

```typescript
public readonly initContainer: string;
```

- *Type:* string

Name of the initContainer for which we are updating the environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#init_container Env#init_container}

---

### EnvEnv <a name="EnvEnv" id="@cdktf/provider-kubernetes.env.EnvEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnv.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

const envEnv: env.EnvEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnv.property.name">name</a></code> | <code>string</code> | Name of the environment variable. Must be a C_IDENTIFIER. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnv.property.value">value</a></code> | <code>string</code> | Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnv.property.valueFrom">valueFrom</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a></code> | value_from block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the environment variable. Must be a C_IDENTIFIER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#name Env#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-kubernetes.env.EnvEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#value Env#value}

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="@cdktf/provider-kubernetes.env.EnvEnv.property.valueFrom"></a>

```typescript
public readonly valueFrom: EnvEnvValueFrom;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a>

value_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#value_from Env#value_from}

---

### EnvEnvValueFrom <a name="EnvEnvValueFrom" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

const envEnvValueFrom: env.EnvEnvValueFrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.configMapKeyRef">configMapKeyRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a></code> | config_map_key_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.fieldRef">fieldRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a></code> | field_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.resourceFieldRef">resourceFieldRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a></code> | resource_field_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `configMapKeyRef`<sup>Optional</sup> <a name="configMapKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.configMapKeyRef"></a>

```typescript
public readonly configMapKeyRef: EnvEnvValueFromConfigMapKeyRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a>

config_map_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#config_map_key_ref Env#config_map_key_ref}

---

##### `fieldRef`<sup>Optional</sup> <a name="fieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.fieldRef"></a>

```typescript
public readonly fieldRef: EnvEnvValueFromFieldRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a>

field_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#field_ref Env#field_ref}

---

##### `resourceFieldRef`<sup>Optional</sup> <a name="resourceFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.resourceFieldRef"></a>

```typescript
public readonly resourceFieldRef: EnvEnvValueFromResourceFieldRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a>

resource_field_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#resource_field_ref Env#resource_field_ref}

---

##### `secretKeyRef`<sup>Optional</sup> <a name="secretKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFrom.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: EnvEnvValueFromSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#secret_key_ref Env#secret_key_ref}

---

### EnvEnvValueFromConfigMapKeyRef <a name="EnvEnvValueFromConfigMapKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

const envEnvValueFromConfigMapKeyRef: env.EnvEnvValueFromConfigMapKeyRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.key">key</a></code> | <code>string</code> | The key to select. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.optional">optional</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether the ConfigMap or its key must be defined. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#key Env#key}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#name Env#name}

---

##### `optional`<sup>Optional</sup> <a name="optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef.property.optional"></a>

```typescript
public readonly optional: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether the ConfigMap or its key must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#optional Env#optional}

---

### EnvEnvValueFromFieldRef <a name="EnvEnvValueFromFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

const envEnvValueFromFieldRef: env.EnvEnvValueFromFieldRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.property.apiVersion">apiVersion</a></code> | <code>string</code> | Version of the schema the FieldPath is written in terms of, defaults to "v1". |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.property.fieldPath">fieldPath</a></code> | <code>string</code> | Path of the field to select in the specified API version. |

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

Version of the schema the FieldPath is written in terms of, defaults to "v1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#api_version Env#api_version}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

Path of the field to select in the specified API version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#field_path Env#field_path}

---

### EnvEnvValueFromResourceFieldRef <a name="EnvEnvValueFromResourceFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

const envEnvValueFromResourceFieldRef: env.EnvEnvValueFromResourceFieldRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.resource">resource</a></code> | <code>string</code> | Resource to select. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#container_name Env#container_name}. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.divisor">divisor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#divisor Env#divisor}. |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Resource to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#resource Env#resource}

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#container_name Env#container_name}.

---

##### `divisor`<sup>Optional</sup> <a name="divisor" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef.property.divisor"></a>

```typescript
public readonly divisor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#divisor Env#divisor}.

---

### EnvEnvValueFromSecretKeyRef <a name="EnvEnvValueFromSecretKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

const envEnvValueFromSecretKeyRef: env.EnvEnvValueFromSecretKeyRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.key">key</a></code> | <code>string</code> | The key of the secret to select from. Must be a valid secret key. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.optional">optional</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether the Secret or its key must be defined. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the secret to select from. Must be a valid secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#key Env#key}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#name Env#name}

---

##### `optional`<sup>Optional</sup> <a name="optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef.property.optional"></a>

```typescript
public readonly optional: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether the Secret or its key must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#optional Env#optional}

---

### EnvMetadata <a name="EnvMetadata" id="@cdktf/provider-kubernetes.env.EnvMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.env.EnvMetadata.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

const envMetadata: env.EnvMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata.property.name">name</a></code> | <code>string</code> | The name of the resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata.property.namespace">namespace</a></code> | <code>string</code> | The namespace of the resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#name Env#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.env.EnvMetadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/env#namespace Env#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### EnvEnvList <a name="EnvEnvList" id="@cdktf/provider-kubernetes.env.EnvEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvList.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

new env.EnvEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.env.EnvEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.env.EnvEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.env.EnvEnvList.get"></a>

```typescript
public get(index: number): EnvEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.env.EnvEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.env.EnvEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.env.EnvEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EnvEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>[]

---


### EnvEnvOutputReference <a name="EnvEnvOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

new env.EnvEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.putValueFrom">putValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resetValueFrom">resetValueFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueFrom` <a name="putValueFrom" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.putValueFrom"></a>

```typescript
public putValueFrom(value: EnvEnvValueFrom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.putValueFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueFrom` <a name="resetValueFrom" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.resetValueFrom"></a>

```typescript
public resetValueFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueFrom">valueFrom</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference">EnvEnvValueFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueFromInput">valueFromInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: EnvEnvValueFromOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference">EnvEnvValueFromOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueFromInput"></a>

```typescript
public readonly valueFromInput: EnvEnvValueFrom;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.env.EnvEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EnvEnv;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.env.EnvEnv">EnvEnv</a>

---


### EnvEnvValueFromConfigMapKeyRefOutputReference <a name="EnvEnvValueFromConfigMapKeyRefOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

new env.EnvEnvValueFromConfigMapKeyRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetOptional">resetOptional</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOptional` <a name="resetOptional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.resetOptional"></a>

```typescript
public resetOptional(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.optionalInput">optionalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.optional">optional</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionalInput`<sup>Optional</sup> <a name="optionalInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.optionalInput"></a>

```typescript
public readonly optionalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.optional"></a>

```typescript
public readonly optional: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EnvEnvValueFromConfigMapKeyRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a>

---


### EnvEnvValueFromFieldRefOutputReference <a name="EnvEnvValueFromFieldRefOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

new env.EnvEnvValueFromFieldRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resetApiVersion">resetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiVersion` <a name="resetApiVersion" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resetApiVersion"></a>

```typescript
public resetApiVersion(): void
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.resetFieldPath"></a>

```typescript
public resetFieldPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.apiVersionInput">apiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.apiVersionInput"></a>

```typescript
public readonly apiVersionInput: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EnvEnvValueFromFieldRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a>

---


### EnvEnvValueFromOutputReference <a name="EnvEnvValueFromOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

new env.EnvEnvValueFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putConfigMapKeyRef">putConfigMapKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putFieldRef">putFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putResourceFieldRef">putResourceFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putSecretKeyRef">putSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetConfigMapKeyRef">resetConfigMapKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetFieldRef">resetFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetResourceFieldRef">resetResourceFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetSecretKeyRef">resetSecretKeyRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigMapKeyRef` <a name="putConfigMapKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putConfigMapKeyRef"></a>

```typescript
public putConfigMapKeyRef(value: EnvEnvValueFromConfigMapKeyRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putConfigMapKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a>

---

##### `putFieldRef` <a name="putFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putFieldRef"></a>

```typescript
public putFieldRef(value: EnvEnvValueFromFieldRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putFieldRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a>

---

##### `putResourceFieldRef` <a name="putResourceFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putResourceFieldRef"></a>

```typescript
public putResourceFieldRef(value: EnvEnvValueFromResourceFieldRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putResourceFieldRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a>

---

##### `putSecretKeyRef` <a name="putSecretKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putSecretKeyRef"></a>

```typescript
public putSecretKeyRef(value: EnvEnvValueFromSecretKeyRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a>

---

##### `resetConfigMapKeyRef` <a name="resetConfigMapKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetConfigMapKeyRef"></a>

```typescript
public resetConfigMapKeyRef(): void
```

##### `resetFieldRef` <a name="resetFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetFieldRef"></a>

```typescript
public resetFieldRef(): void
```

##### `resetResourceFieldRef` <a name="resetResourceFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetResourceFieldRef"></a>

```typescript
public resetResourceFieldRef(): void
```

##### `resetSecretKeyRef` <a name="resetSecretKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.resetSecretKeyRef"></a>

```typescript
public resetSecretKeyRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.configMapKeyRef">configMapKeyRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference">EnvEnvValueFromConfigMapKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fieldRef">fieldRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference">EnvEnvValueFromFieldRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.resourceFieldRef">resourceFieldRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference">EnvEnvValueFromResourceFieldRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference">EnvEnvValueFromSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.configMapKeyRefInput">configMapKeyRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fieldRefInput">fieldRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.resourceFieldRefInput">resourceFieldRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.secretKeyRefInput">secretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configMapKeyRef`<sup>Required</sup> <a name="configMapKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.configMapKeyRef"></a>

```typescript
public readonly configMapKeyRef: EnvEnvValueFromConfigMapKeyRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRefOutputReference">EnvEnvValueFromConfigMapKeyRefOutputReference</a>

---

##### `fieldRef`<sup>Required</sup> <a name="fieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fieldRef"></a>

```typescript
public readonly fieldRef: EnvEnvValueFromFieldRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRefOutputReference">EnvEnvValueFromFieldRefOutputReference</a>

---

##### `resourceFieldRef`<sup>Required</sup> <a name="resourceFieldRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.resourceFieldRef"></a>

```typescript
public readonly resourceFieldRef: EnvEnvValueFromResourceFieldRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference">EnvEnvValueFromResourceFieldRefOutputReference</a>

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: EnvEnvValueFromSecretKeyRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference">EnvEnvValueFromSecretKeyRefOutputReference</a>

---

##### `configMapKeyRefInput`<sup>Optional</sup> <a name="configMapKeyRefInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.configMapKeyRefInput"></a>

```typescript
public readonly configMapKeyRefInput: EnvEnvValueFromConfigMapKeyRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromConfigMapKeyRef">EnvEnvValueFromConfigMapKeyRef</a>

---

##### `fieldRefInput`<sup>Optional</sup> <a name="fieldRefInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.fieldRefInput"></a>

```typescript
public readonly fieldRefInput: EnvEnvValueFromFieldRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromFieldRef">EnvEnvValueFromFieldRef</a>

---

##### `resourceFieldRefInput`<sup>Optional</sup> <a name="resourceFieldRefInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.resourceFieldRefInput"></a>

```typescript
public readonly resourceFieldRefInput: EnvEnvValueFromResourceFieldRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a>

---

##### `secretKeyRefInput`<sup>Optional</sup> <a name="secretKeyRefInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.secretKeyRefInput"></a>

```typescript
public readonly secretKeyRefInput: EnvEnvValueFromSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EnvEnvValueFrom;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFrom">EnvEnvValueFrom</a>

---


### EnvEnvValueFromResourceFieldRefOutputReference <a name="EnvEnvValueFromResourceFieldRefOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

new env.EnvEnvValueFromResourceFieldRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resetDivisor">resetDivisor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerName` <a name="resetContainerName" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resetContainerName"></a>

```typescript
public resetContainerName(): void
```

##### `resetDivisor` <a name="resetDivisor" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.resetDivisor"></a>

```typescript
public resetDivisor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.divisorInput">divisorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.divisor">divisor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `divisorInput`<sup>Optional</sup> <a name="divisorInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.divisorInput"></a>

```typescript
public readonly divisorInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `divisor`<sup>Required</sup> <a name="divisor" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.divisor"></a>

```typescript
public readonly divisor: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EnvEnvValueFromResourceFieldRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromResourceFieldRef">EnvEnvValueFromResourceFieldRef</a>

---


### EnvEnvValueFromSecretKeyRefOutputReference <a name="EnvEnvValueFromSecretKeyRefOutputReference" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

new env.EnvEnvValueFromSecretKeyRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetOptional">resetOptional</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOptional` <a name="resetOptional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.resetOptional"></a>

```typescript
public resetOptional(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.optionalInput">optionalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.optional">optional</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionalInput`<sup>Optional</sup> <a name="optionalInput" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.optionalInput"></a>

```typescript
public readonly optionalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.optional"></a>

```typescript
public readonly optional: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EnvEnvValueFromSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvEnvValueFromSecretKeyRef">EnvEnvValueFromSecretKeyRef</a>

---


### EnvMetadataOutputReference <a name="EnvMetadataOutputReference" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer"></a>

```typescript
import { env } from '@cdktf/provider-kubernetes'

new env.EnvMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.env.EnvMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EnvMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.env.EnvMetadata">EnvMetadata</a>

---



